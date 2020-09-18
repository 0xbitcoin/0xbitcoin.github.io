
<template>
    <div class="">
      <h3 class="text-lg font-bold">Wallet Balance</h3>

      <div class="p-12 text-xl w-full text-center">
        {{currentBalance}} {{assetName}}
      </div>

      <div>

        <div class="p-6 bg-gray-500 w-full text-sm">


          <input v-if="formMode=='none'||formMode=='approve'||formMode=='swapin'" v-on:keyup="updateFormMode" type="text" v-model="swapAmount" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline inline-block mr-4" size="8"/>


          <button v-if="formMode=='none'"  class="bg-white text-sm text-gray-200 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full mt-2">

            Swap To {{otherNetworkName()}}
          </button>


            <button v-if="formMode=='approve'" @click="approve" class="bg-white text-sm hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full mt-2 ">
              Approve
            </button>

            <button v-if="formMode=='swapin'" @click="swapin" class="bg-white  text-sm hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full mt-2">
              Swap To {{otherNetworkName()}}
            </button>




          <div v-if="formMode=='swapout'">
            <input v-on:keyup="updateFormMode" type="text" v-model="swapOutAmount" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline inline-block mr-4" size="8"/>

            <button @click="startexit" class="bg-white text-sm hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-block ">
              Start Exit
            </button>
          </div>

          <br>

          <div v-if="formMode=='swapout'">

            <p>  Startexit TX Hash  </p>
            <input v-on:keyup="updateFormMode" type="text" placeholder="0x2134..." v-model="burnTXHash" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline inline-block mr-4" size="8"/>

            <button v-if="!loading" @click="swapout" class="bg-white  text-sm hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-block">
              Swap To {{otherNetworkName()}}
            </button>

            <div class="inline-block">
              <div v-if="loading" class="loader "></div>
            </div>
          </div>


          <div class="m-4">
            <div v-if="txError">{{txError}}</div>

          </div>

        </div>

        <div v-if="networkProviderIdError" class="p-8 bg-red-200">
          {{networkProviderIdError}}
        </div>





      </div>
    </div>
</template>

<script>
import Web3Helper from '../js/web3-helper.js'
import MaticHelper from '../js/matic-helper.js'
import CryptoAssets from '../js/cryptoassets.js'

export default {
  name: 'TransactionForm',
  props: ['activeNetwork','acctAddress','assetName','providerNetworkID'],
  data() {
    return {
      swapAmount: 0,
      swapOutAmount: 0,
      formMode: "none",
      currentBalance: '0.0',
      burnTXHash: null,
      txError: null,
      loading: false,
      networkProviderIdError: null
    }
  },
  mounted()
  {

    this.updateAll();
    setTimeout(this.updateFormMode, 2000);
    setTimeout(this.updateBalance, 2000);
  },
  updated()
  {

    this.updateAll();
  },
  methods: {
    updateAll()
    {
        console.log('form updated')
      this.updateFormMode();
      this.updateBalance();
    },
    otherNetworkName(){
      if(this.activeNetwork == "matic"){ return "Ethereum" }else{ return "Matic" }
    },
    checkNetworkProviderIdValid(){

      if(this.activeNetwork == "ethereum")
      {
        if(this.providerNetworkID != Web3Helper.ethereumChainID())
        {
          this.networkProviderIdError = "Please switch your Web3 Provider to Ethereum Mainnet to call these methods."
          return false
        }
      }

      //this.networkProviderIdError = null;
      return true;
    },
    async updateBalance()
    {
      if(this.activeNetwork == "ethereum"){
        var balanceRaw = await Web3Helper.getTokensBalance(
          CryptoAssets.assets[this.assetName]['EthereumContract'],
           this.acctAddress
         )
        this.currentBalance =  Web3Helper.rawAmountToFormatted(balanceRaw, CryptoAssets.assets[this.assetName]['Decimals']);

        this.burnTXHash = null;
      }
      if(this.activeNetwork == "matic"){
        var web3provider = new Web3(Web3.givenProvider || 'ws://localhost:8546');
        var userAddress = this.acctAddress;

        var maticClient = MaticHelper.getMaticPOSClient(web3provider,userAddress);
        var balanceRaw = await maticClient.balanceOfERC20(
          userAddress,
          CryptoAssets.assets[this.assetName]['MaticContract'],
          {}

        )
        this.currentBalance =  Web3Helper.rawAmountToFormatted(balanceRaw, CryptoAssets.assets[this.assetName]['Decimals']);

      }

    },
    async updateFormMode()
    {
      console.log('updateFormMode');



      if(this.activeNetwork == "ethereum"){


        if(this.swapAmount <= 0 )
        {
            this.formMode= "none"
            return;
        }


        var hasAllowance = await Web3Helper.hasEnoughAllowance(this.acctAddress,this.assetName,this.swapAmount);

          if(hasAllowance)
          {
            this.formMode= "swapin"
          }else{
            this.formMode= "approve"
          }
        }

        if(this.activeNetwork == "matic"){


            this.formMode= "swapout"


        }

        this.checkNetworkProviderIdValid()

        //this.networkProviderIdError = null;


    },
    async getAmountApproved()
    {

    },
    async approve()
    {

      this.networkProviderIdError=null;

      if(this.providerNetworkID == 0x1){

        var Web3 = require('web3');
        var web3provider = new Web3(Web3.givenProvider || 'ws://localhost:8546');
        var userAddress = this.acctAddress;

        var maticClient = MaticHelper.getMaticPOSClient(web3provider,userAddress);

        var result = await maticClient.approveERC20ForDeposit(
          CryptoAssets.assets[this.assetName]['EthereumContract'],
          Web3Helper.formattedAmountToRaw(this.swapAmount, CryptoAssets.assets[this.assetName]['Decimals']),
          {from: userAddress}
        )
      }else{
        this.networkProviderIdError = "Please switch your Web3 Provider to Ethereum Mainnet to call this method."

      }





    },
    async startexit()
    {

          this.networkProviderIdError=null;

        if(this.providerNetworkID == 0x89){

        var Web3 = require('web3');
        var web3provider = new Web3(Web3.givenProvider || 'ws://localhost:8546');
        var userAddress = this.acctAddress;

        var maticClient = MaticHelper.getMaticPOSConnection(web3provider,userAddress);

        var result = await maticClient.burnERC20(
          CryptoAssets.assets[this.assetName]['MaticContract'],
            Web3Helper.formattedAmountToRaw(this.swapOutAmount, CryptoAssets.assets[this.assetName]['Decimals']),
          {from: userAddress}
        )
        console.log(result)

        var txHash = result.transactionHash;

        this.burnTXHash = txhash;

      }else{
        this.networkProviderIdError = "Please switch your Web3 Provider to Matic Mainnet (chain id 137) to call this method."

      }

    },
    async swapin()
    {

        this.networkProviderIdError=null;

      if(this.providerNetworkID == 0x1){


          var Web3 = require('web3');
          var web3provider = new Web3(Web3.givenProvider || 'ws://localhost:8546');
          var userAddress = this.acctAddress;

          var maticClient = MaticHelper.getMaticPOSClient(web3provider,userAddress);



          //console.log('meep',Web3Helper.formattedAmountToRaw(this.swapAmount, CryptoAssets.assets[this.assetName]['Decimals']))

          var rawAmount = Web3Helper.formattedAmountToRaw(this.swapAmount, CryptoAssets.assets[this.assetName]['Decimals']);

            console.log('swapin', userAddress, rawAmount ,  CryptoAssets.assets[this.assetName]['EthereumContract'])

          var result = await maticClient.depositERC20ForUser(
            CryptoAssets.assets[this.assetName]['EthereumContract'],
            userAddress,
            rawAmount,
           {from: userAddress}
          )

          // get burn tx hash
        }else{
          this.networkProviderIdError = "Please switch your Web3 Provider to Ethereum Mainnet to call this method."

        }





    },
    async swapout()   //this is not working ?
    {



      this.networkProviderIdError=null;

      if(this.providerNetworkID == 0x1){

          this.loading = true;

        var Web3 = require('web3');
        var web3provider = new Web3(Web3.givenProvider || 'ws://localhost:8546');
        var userAddress = this.acctAddress;

        var maticClient = MaticHelper.getMaticPOSClient(web3provider,userAddress);

        var result = await maticClient.exitERC20(this.burnTXHash,{
            fastProof: true,
            from: userAddress,
            gasPrice: 500000000000
          })

        this.loading=false;
        console.log(result.transactionHash)


        this.burnTXHash = null;



      }else{
        this.networkProviderIdError = "Please switch your Web3 Provider to Ethereum Mainnet to call this method."

      }
    }

  }
}
</script>
