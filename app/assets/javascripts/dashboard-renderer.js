
const $ = require('jquery');
import Vue from 'vue';

var app;
var dashboardData;


var poolList = require("../pools/pool.list.js").list

var poolTiles;

export default class DashboardRenderer {

    init(renderData)
    {


      dashboardData = renderData;

         app = new Vue({
        el: '#dashboard',
        data: dashboardData
      });


      poolTiles  = new Vue({
       el: '#pooltiles',
         data: {pools:{ poolList:poolList } }
     });


     $('.pools-feature').slick({
         dots: true,
         arrows:false,
         infinite: true,
         speed: 300,
         slidesToShow: 1,
         slidesToScroll: 1,
         responsive: [
           {
             breakpoint: 1024,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true
             }
           }

           // You can unslick at a given breakpoint now by adding:
           // settings: "unslick"
           // instead of a settings object
         ]
       });


      this.show();

    }

     update(renderData)
    {

      dashboardData = renderData;

      //  app.data =   renderData;

        //vm.$forceUpdate();

        this.show();
    }

    hide()
    {
      $('#dashboard').hide();
    }

    show()
    {
      $('#dashboard').show();
    }

}
