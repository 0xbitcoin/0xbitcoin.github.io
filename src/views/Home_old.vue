<template>
<div>

<nav id="header" class="w-full z-10 pin-t">

	<div id="progress" class="h-1 z-20 pin-t" style="background:linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0);"></div>

		<div class="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-3 bg-white px-4">

			<div class="pl-4">
				<a class="text-black text-base no-underline hover:no-underline font-extrabold text-xl"  href="#">
					0xBTC Matic Wallet
				</a>
      </div>


			<div class="  flex items-center w-auto mt-2 lg:mt-0 bg-grey-lightest md:bg-transparent z-20" id="nav-content">
				<div class="  lg:flex justify-end flex-1 items-center">
					<MetamaskDropdown
            :acctAddress= "activeAccountAddress"
						:providerNetworkID= "providerNetworkID"
          />
				</div>
			</div>
		</div>
	</nav>



  <div class="lg:flex mb-4">
    <div class="w-full lg:w-1/3 bg-gray-300 overflow-y-scroll block ">
      <div class="m-6 p-4 bg-gray-100">

				<TransactionForm
				ref="txform"
				:acctAddress= "activeAccountAddress"
				:activeNetwork= "network"
				:providerNetworkID= "providerNetworkID"
				:assetName= "assetName"
				/>


      </div>
    </div>
    <div class="w-full lg:w-2/3 bg-gray-300 block ">
      <div class="m-6 p-4 bg-gray-100">

				<ul class="flex m-6">
				  <li class="flex-1 mr-2">
				    <a @click="setNetwork('ethereum')" :class="network=='ethereum' ? 'bg-blue-500  text-white' : 'bg-transparent hover:border-gray-200 hover:bg-gray-200 text-gray-500'" class="text-center block border border-blue-500 rounded py-2 px-4 " href="#">Ethereum Network</a>
				  </li>
				  <li class="flex-1 mr-2">
				    <a @click="setNetwork('matic')" :class="network=='matic' ? 'bg-blue-500  text-white' : 'bg-transparent hover:border-gray-200 hover:bg-gray-200 text-gray-500'" class="text-center block border border-blue-500 rounded py-2 px-4 " href="#">Matic Network</a>
				  </li>
				</ul>

				<h3 class="text-lg font-bold">Your Assets</h3>


				<div class="container mt-8">

					<a href="#" @click="selectAsset('0xBTC')" :class="assetName=='0xBTC' ? 'bg-blue-400 text-white' : 'bg-transparent text-blue-700'" class="flex width-full  hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">
						<div class="text-md w-1/2"> 0xBTC </div>
						<div class="text-md w-1/2 text-right">   </div>

					</a>

					<a href="#" @click="selectAsset('Dai')" :class="assetName=='Dai' ? 'bg-blue-400 text-white' : 'bg-transparent text-blue-700'" class="flex width-full  hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">
						<div class="text-md w-1/2"> Dai </div>
						<div class="text-md w-1/2 text-right">   </div>

					</a>
					<a href="#" @click="selectAsset('Matic')" :class="assetName=='Matic' ? 'bg-blue-400 text-white' : 'bg-transparent text-blue-700'" class="flex width-full  hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">
						<div class="text-md w-1/2"> Matic </div>
						<div class="text-md w-1/2 text-right">   </div>

					</a>

				</div>

	  </div>
    </div>
  </div>




</div>
</template>


<script>
import MetamaskDropdown from './MetamaskDropdown.vue'
import TransactionForm from './TransactionForm.vue'
import Web3Helper from '../js/web3-helper.js'
import CryptoAssets from '../js/cryptoassets.js'
import MaticHelper from '../js/matic-helper.js'

const Web3 = require('web3');



export default {
  name: 'Home',
  components: {
     MetamaskDropdown,TransactionForm
  },
  data () {
    return {
      activeAccountAddress: null,
			network: 'ethereum',
			providerNetworkID: null,
			assetName: '0xBTC'
    }
  },
  created () {


     this.checkSignedIn()



			if ( window.ethereum.selectedAddress) {
				 Web3Helper.init();
	      	this.readWeb3Data();  //opens the window
		 }


  },
  methods: {
   async checkSignedIn () {



		await window.ethereum

		console.log(window.ethereum)

		 if (!window.ethereum.selectedAddress) {
			 this.$router.replace('/login');
			 return;
		}



    },
   async readWeb3Data () {
     var accounts = await Web3Helper.getConnectedAccounts();

		 this.providerNetworkID = await Web3Helper.getProviderNetworkID();

     this.activeAccountAddress = accounts[0]

		 //this.updateBalances()
   },
	 async setNetwork(networkName)
	 {
		 this.network = networkName;

		 // await this.updateBalances()

		 this.$refs.txform.updateAll()
	 },
	 async selectAsset(assetName)
	 {
		 this.assetName = assetName;


 		this.$refs.txform.updateAll()

		 // await this.updateBalances()
	 },




  }

}
</script>
