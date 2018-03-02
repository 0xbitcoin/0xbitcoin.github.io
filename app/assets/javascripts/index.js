
const $ = require('jquery');

import logo from '../img/0xbitcoin.png'
import githubLogo from '../img/GitHub-Mark-64px.png'
import redditLogo from '../img/reddit-mark-64px.png'

import Vue from 'vue'

import AlertRenderer from './alert-renderer'
import DashboardRenderer from './dashboard-renderer'
import HomeRenderer from './home-renderer'

import EthHelper from './ethhelper'
//var web3 = this.connectWeb3();

var homeRenderer= new HomeRenderer()
var dashboardRenderer = new DashboardRenderer();
var alertRenderer = new AlertRenderer();
var ethHelper = new EthHelper();



var navbar = new Vue({
  el: '#navbar',
  data: {
    brandImageUrl: logo,
    githubLogo: githubLogo,
    redditLogo: redditLogo
  }
})


$(document).ready(function(){

    var web3 = ethHelper.init( alertRenderer);



    setInterval( function(){
      console.log("updating contract data")

       ethHelper.connectToContract( web3 , dashboardRenderer, function(contractData){

         dashboardRenderer.update(contractData);

       } );



    },3000);

      ethHelper.connectToContract( web3 , dashboardRenderer, function(contractData){

        dashboardRenderer.init(contractData);

      } );


      homeRenderer.init();

});


//dashboardRenderer.hide();
