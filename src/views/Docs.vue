<template>
  <div class="about">

    <nav id="header" class="w-full z-10 pin-t">

    	<div id="progress" class="h-1 z-20 pin-t" style="background:linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0);"></div>

    		<div class="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-3 bg-white px-4">

    			<div class="pl-4">
    				<a class="text-black text-base no-underline hover:no-underline font-extrabold text-xl"  href="#">
    					0xBitcoin Documentation
    				</a>
          </div>



    		</div>
    	</nav>




      <div class="lg:flex mb-4">
        <div class="w-full lg:w-1/3 bg-gray-300 overflow-y-scroll ">
          <div class="m-6 p-4 bg-gray-100">

            <ul>
              <li class="text-lg text-gray-500"> Getting Started </li>
              <li> <a href="#" @click="setContent('purpose')"> Purpose Statement </a> </li>
              <li> <a href="#" @click="setContent('connecting')"> Connecting with Metamask </a> </li>
           </ul>

          </div>
        </div>
        <div class="w-full lg:w-2/3 bg-gray-300  ">
          <div class="m-6 p-4 bg-gray-100">


            <div v-if="activeContent == 'purpose'">
              <h3 class="text-lg"> 0xBTC Matic Wallet </h3>
              <br>

              <p> The purpose of this application ('The Dapp') is to provide a simple front-end user experience that allows users to transfer ERC20 tokens from the Ethereum Mainnet blockchain to the Matic blockchain, a 'Layer 2' network with lower transacting fees and higher bandwidth.  These tokens can also be moved back from the Matic chain back to Ethereum. </p>

            </div>

            <div v-if="activeContent == 'connecting'">
              <h3 class="text-lg"> Getting Connected </h3>
              <br>

              <p> To connect to this Dapp, you will need a Web3 compatible browser or extension such as Metamask. (<a href="https://metamask.io" target="_blank" >https://metamask.io</a>)    </p>
              <br>
              <p> Once you have installed Metamask, you will need to add a Custom RPC for the Matic Network so that you will be able to digitally sign transactions for the Matic Network.   To do this, click on the 'Networks' dropdown at the very top of Metamask and change it from 'Main Ethereum Network' to 'Custom RPC' and use the following information: </p>
                <br>
                <ul>
                  <li> Network Name: "Matic Network"</li>
                  <li> New RPC URL: "https://rpc-mainnet.matic.network"</li>
                  <li> Chain ID: "137" </li>
                  <li> Symbol: "M" </li>
                  <li> Block Explorer URL: "https://explorer.matic.network" </li>
                </ul>
                <br>
                <p> Once you have added the Matic Network information to Metamask, switch Metamask back to 'Ethereum Mainnet Network'.  During the use of the Dapp, you may be asked to switch over to the 'Matic Mainnet Network' when you intend to digitally sign transactions for the Matic Network and now you are prepared to do so.  </p>
            </div>



          </div>
        </div>
      </div>



  </div>
</template>


<script>

export default {
  name: 'Docs',
  props: [],
  data() {
    return {
      activeContent: 'purpose'
    }
  },
  methods: {

    setContent (contentName) {
      console.log('set content', contentName)
      this.activeContent = contentName;
    }
  }
}
</script>
