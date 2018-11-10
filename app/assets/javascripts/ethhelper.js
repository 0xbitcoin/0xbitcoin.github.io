var INFURA_ROPSTEN_URL = 'https://ropsten.infura.io/gmXEVo5luMPUGPqg6mhy';
var INFURA_MAINNET_URL = 'https://mainnet.infura.io/gmXEVo5luMPUGPqg6mhy';

var deployedContractInfo = require('../contracts/DeployedContractInfo.json');
var _0xBitcoinContract = require('../contracts/_0xBitcoinToken.json');

var embeddedWeb3 = require('web3')

var web3utils = require('web3-utils')

const _IDEAL_BLOCK_TIME_SECONDS = 900;
const _BLOCKS_PER_READJUSTMENT = 1024;

export default class EthHelper {


    async init( alertRenderer ){
        this.alertRenderer = alertRenderer;

          console.log('connect web3 ')

       var web3 = this.connectWeb3(new embeddedWeb3())


         return web3;
    }

    connectWeb3(web3){
      if (typeof web3 !== 'undefined') {

            window.web3 = new Web3(new Web3.providers.HttpProvider(INFURA_MAINNET_URL));
            console.log('connected to web3!')
            return window.web3;

      } else {

            this.alertRenderer.renderError('No web3? You should consider trying MetaMask!')
            return {}
          // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
          //window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

      }
    }


    static async  detectInjectedWeb3( alertRenderer )
    {


    //  await new Promise(resolve => async function() {
        return new Promise(async function(resolve, reject) {


          //  window.addEventListener('load', async () => {
                  // Modern dapp browsers...
                  if (window.ethereum) {

                      window.web3 = new Web3(ethereum);
                      try {
                          // Request account access if needed
                          await  ethereum.enable();
                          resolve( window.web3 );
                          // Acccounts now exposed
                      //    web3.eth.sendTransaction({/* ... */});
                      } catch (error) {
                          // User denied account access...
                      }
                  }
                  // Legacy dapp browsers...
                  else if (window.web3) {

                      window.web3 = new Web3(web3.currentProvider);
                        resolve( window.web3 );
                      // Acccounts always exposed
                    //  web3.eth.sendTransaction({/* ... */});
                  }
                  // Non-dapp browsers...
                  else {
                    if(alertRenderer)
                    {
                      alertRenderer.renderError('No web3? You should consider using MetaMask!')
                    }

                      console.log('Non-Ethereum browser detected. You should consider using MetaMask!');
                        resolve();
                  }
            //  });

        });


    }



    async connectToContract(web3, dashboardRenderer, callback)
    {
      var tokenContract = this.getWeb3ContractInstance(
        web3,
        this.getContractAddress(),
        this.getContractABI()
      )

       console.log(tokenContract)



       var contractAddress = this.getContractAddress() ;

       var difficulty = await tokenContract.getMiningDifficulty().toNumber() ;

       var challenge_number = await tokenContract.getChallengeNumber()  ;

       var amountMined = await tokenContract.tokensMinted()

       var totalSupply = await tokenContract._totalSupply()


       var lastRewardAmount = await tokenContract.lastRewardAmount()


        var lastRewardTo = await tokenContract.lastRewardTo()

       var lastRewardEthBlockNumber = await tokenContract.lastRewardEthBlockNumber()
       var latestDifficultyPeriodStarted = await tokenContract.latestDifficultyPeriodStarted()
       //0x1d00ffff code

        var epoch_count = await tokenContract.epochCount()

       var rewards_since_readjustment = epoch_count % _BLOCKS_PER_READJUSTMENT ;


       var current_eth_block = web3.eth.blockNumber;

       var eth_blocks_since_last_difficulty_period = current_eth_block - latestDifficultyPeriodStarted;
       var seconds_since_readjustment = eth_blocks_since_last_difficulty_period * 15;


       var seconds_per_reward = seconds_since_readjustment / rewards_since_readjustment;


       var hashrateEstimate = this.estimateHashrateFromDifficulty(  difficulty, seconds_per_reward  )


      var decimals = Math.pow(10,8);
       var renderData = {
         contractUrl: 'https://etherscan.io/address/'+contractAddress,
         contractAddress : contractAddress,
         difficulty: difficulty,
         challenge_number: challenge_number,
         amountMined: (parseInt(amountMined) / decimals),
         totalSupply: (parseInt(totalSupply) / decimals),
         hashrateEstimate: hashrateEstimate,
         lastRewardTo: lastRewardTo,
         lastRewardAmount: (parseInt(lastRewardAmount) / decimals),
         lastRewardEthBlockNumber: lastRewardEthBlockNumber


       }

       //dashboardRenderer.renderContractData(renderData);


       callback(renderData);

    }

    estimateHashrateFromDifficulty(difficulty, seconds_per_reward){

      //hashrate *= (_IDEAL_BLOCK_TIME_SECONDS / seconds_per_reward)


        var hashrate = web3utils.toBN(difficulty)
              .mul( web3utils.toBN(2)
              .pow(  web3utils.toBN(22) ))
              .div( web3utils.toBN(_IDEAL_BLOCK_TIME_SECONDS ))

              //???
     hashrate *= (_IDEAL_BLOCK_TIME_SECONDS / seconds_per_reward)

      var gigHashes = hashrate / ( parseFloat( web3utils.toBN(10).pow( web3utils.toBN(9) )) )

       console.log('hashrate is ',hashrate )
     return gigHashes.toFixed(2).toString() + " GH/s"

    }

    getWeb3ContractInstance(web3, contract_address, contract_abi )
    {
      if(contract_address == null)
      {
        contract_address = this.getContractAddress();
      }

      if(contract_abi == null)
      {
        contract_abi = this.getContractABI();
      }

        return web3.eth.contract(contract_abi).at(contract_address)


    }


    getContractAddress()
    {
       return deployedContractInfo.contracts._0xbitcointoken.blockchain_address;
    }

    getContractABI()
    {
       return _0xBitcoinContract.abi;
    }


}
