import cursor from '../images/cucumbercurve.png'
import logo from '../images/dtlogo.png'

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
