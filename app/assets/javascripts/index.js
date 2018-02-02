
import logo from '../images/0xbitcoin.png'

import Vue from 'vue'

import AlertRenderer from './alert-renderer'

import EthHelper from './ethhelper'
//var web3 = this.connectWeb3();

var alertRenderer = new AlertRenderer();
var ethHelper = new EthHelper();

ethHelper.init(alertRenderer);

var navbar = new Vue({
  el: '#navbar',
  data: {
    brandImageUrl: logo
  }
})


var app = new Vue({
  el: '#app',
  data: {
    message: alertRenderer.getAlertMessage()
  }
})
