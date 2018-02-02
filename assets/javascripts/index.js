
import logo from '../images/0xbitcoin.png'

import Vue from 'vue'



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
