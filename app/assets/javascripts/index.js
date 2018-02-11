
const $ = require('jquery');

import logo from '../images/0xbitcoin.png'
import githubLogo from '../images/GitHub-Mark-64px.png'

import Vue from 'vue'

import AlertRenderer from './alert-renderer'
import DashboardRenderer from './dashboard-renderer'

import EthHelper from './ethhelper'

import HomeDashboard from './home-dashboard'
import WalletDashboard from './wallet-dashboard'
//var web3 = this.connectWeb3();

var dashboardRenderer = new DashboardRenderer();
var alertRenderer = new AlertRenderer();
var ethHelper = new EthHelper();
var home = new HomeDashboard();
var wallet = new WalletDashboard();

var navbar = new Vue({
  el: '#navbar',
  data: {
    brandImageUrl: logo,
    githubLogo: githubLogo
  }
})


$(document).ready(function(){




    if($("#home").length > 0){
      var web3 = ethHelper.init( alertRenderer);

      home.init(ethHelper,web3,dashboardRenderer);
    }


    if($("#wallet").length > 0){

      wallet.init(alertRenderer,ethHelper);
    }




});


//dashboardRenderer.hide();
