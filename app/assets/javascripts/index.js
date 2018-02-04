
const $ = require('jquery');

import logo from '../images/0xbitcoin.png'

import Vue from 'vue'

import AlertRenderer from './alert-renderer'
import DashboardRenderer from './dashboard-renderer'

import EthHelper from './ethhelper'
//var web3 = this.connectWeb3();

var dashboardRenderer = new DashboardRenderer();
var alertRenderer = new AlertRenderer();
var ethHelper = new EthHelper();



var navbar = new Vue({
  el: '#navbar',
  data: {
    brandImageUrl: logo
  }
})


$(document).ready(function(){

    var web3 = ethHelper.init( alertRenderer);

    dashboardRenderer.hide();

    var app = new Vue({
      el: '#app',
      data: {
       
      }
    })

    var contractData = ethHelper.connectToContract( web3 , dashboardRenderer );

});
