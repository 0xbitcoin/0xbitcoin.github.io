<template>
  <div class="bg-gray-800" >

      <Navbar />


    <nav id="header" class="w-full z-10 pin-t">


    		<div class="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-3 bg-white px-4">

    			<div class="pl-4">
    				<a class="text-black text-base no-underline hover:no-underline font-extrabold text-xl"  href="#">
    					0xBitcoin API Documentation
    				</a>
          </div>

          <a @click="docNavOpen=!docNavOpen" href="#">
            <svg

              class="h-6 w-6 block lg:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>


    		</div>

        <div class="w-full" v-if="docNavOpen">

          <DocumentationNav

          :setContentCallback="setContent"

          />

        </div>
    	</nav>




      <div class="lg:flex mb-4">
        <div class="w-full lg:w-1/3 bg-gray-300   hidden lg:block ">

          <DocumentationNav

          :setContentCallback="setContent"

          />


        </div>
        <div class="w-full lg:w-2/3 bg-gray-300  ">
          <div class="m-6 p-4 bg-gray-100">

            <div v-html="rawContent">
                aaa
            </div>

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
 import  MarkdownIt  from 'markdown-it';
import * as http from 'http';

import Navbar from './components/Navbar.vue';
import DocumentationNav from './components/DocumentationNav.vue';

export default {
  name: 'Docs',
  props: [],
  components: {Navbar,DocumentationNav},
  data() {
    return {
      docNavOpen: false,
      activeContent: '',
      rawContent: ''
    }
  },
  methods: {

    setContent (contentName) {
      console.log('set content', contentName)
      //this.activeContent = contentName;


      var self = this;

      var options = {
        path: '/documents/'+contentName+'.md'
      };

      var md = new MarkdownIt();

      http.get(options, function(res) {

        let data = '';

        // A chunk of data has been recieved.
        res.on('data', (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        res.on('end', () => {
             

               var result = md.render(data);
               console.log( result )

               self.rawContent = result;


        });



      }).on('error', function(e) {
        console.log("Got error: " + e.message);
      });

    }
  }
}
</script>
