
const $ = require('jquery');

import logo from '../img/0xbitcoin.png'
import githubLogo from '../img/GitHub-Mark-64px.png'
import redditLogo from '../img/reddit-mark-64px.png'

import brutePool from '../img/0xbrute.png'
import TokenMiningPool from '../img/tokenminingpool.png'
import _0xPool from '../img/0xpool.png'
 


import Vue from 'vue'

import AlertRenderer from './alert-renderer'
import HomeRenderer from './home-renderer'

import EthHelper from './ethhelper'

import HomeDashboard from './home-dashboard'
import WalletDashboard from './wallet-dashboard'


var homeRenderer= new HomeRenderer()

var alertRenderer = new AlertRenderer();
var ethHelper = new EthHelper();

var wallet = new WalletDashboard();

var navbar = new Vue({
  el: '#navbar',
  data: {
    brandImageUrl: logo,
    githubLogo: githubLogo,
    redditLogo: redditLogo
  }
})


$(document).ready(function(){



    if($("#home").length > 0){
      var web3 = ethHelper.init( alertRenderer);

      homeRenderer.init(ethHelper);
    }


    if($("#wallet").length > 0){
      // var web3 = ethHelper.init( alertRenderer);

      wallet.init(alertRenderer,ethHelper);
    }




});


//dashboardRenderer.hide();
