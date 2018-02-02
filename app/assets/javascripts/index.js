
import logo from '../images/0xbitcoin.png'

import Vue from 'vue'


//var web3 = this.connectWeb3();


var navbar = new Vue({
  el: '#navbar',
  data: {
    brandImageUrl: logo
  }
})


var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

/*
connectWeb3(){
  if (typeof web3 !== 'undefined') {

        window.web3 = new Web3(web3.currentProvider);

        return web3;

  } else {


      alertRenderer.renderError('No web3? You should consider trying MetaMask!')
        return {}
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      //window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

  }
}
*/
