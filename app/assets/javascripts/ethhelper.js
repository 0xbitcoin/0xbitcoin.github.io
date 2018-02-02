var INFURA_ROPSTEN_URL = 'https://ropsten.infura.io/gmXEVo5luMPUGPqg6mhy';

var deployedContractInfo = require('../contracts/DeployedContractInfo.json');
var _0xBitcoinContract = require('../contracts/_0xBitcoinToken.json');

var embeddedWeb3 = require('web3')

export default class EthHelper {


    init( alertRenderer ){
        this.alertRenderer = alertRenderer;


        return this.connectWeb3(new embeddedWeb3());
    }

    connectWeb3(web3){
      if (typeof web3 !== 'undefined') {

            window.web3 = new Web3(new Web3.providers.HttpProvider(INFURA_ROPSTEN_URL));
            console.log('connected to web3!')
            return window.web3;

      } else {

            this.alertRenderer.renderError('No web3? You should consider trying MetaMask!')
            return {}
          // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
          //window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

      }
    }



    async connectToContract(web3, dashboardRenderer)
    {
      var tokenContract = this.getWeb3ContractInstance(
        web3,
        this.getContractAddress(),
        this.getContractABI()
      )

       console.log(tokenContract)

       var difficulty = await tokenContract.getMiningDifficulty().toNumber() ;

       var challenge_number = await tokenContract.getChallengeNumber()  ;

       var amountMined = await tokenContract.tokensMinted()

       var totalSupply = await tokenContract._totalSupply()

      // var lastRewardTo = await tokenContract.lastRewardTo()

       //var lastRewardAmount = await tokenContract.lastRewardAmount()

      // var lastRewardEthBlockNumber = await tokenContract.lastRewardEthBlockNumber()

      var lastRewardTo = 0;
      var lastRewardAmount = 0;
      var lastRewardEthBlockNumber = 0;

       var renderData = {
         difficulty: difficulty,
         challenge_number: challenge_number,
         amountMined: (parseInt(amountMined) / 8),
         totalSupply: (parseInt(totalSupply) / 8),
         lastRewardTo: lastRewardTo,
         lastRewardAmount: (parseInt(lastRewardAmount) / 8),
         lastRewardEthBlockNumber: lastRewardEthBlockNumber


       }

       dashboardRenderer.renderContractData(renderData);


       return renderData;

    }

    getWeb3ContractInstance(web3, contract_address, contract_abi )
    {

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
