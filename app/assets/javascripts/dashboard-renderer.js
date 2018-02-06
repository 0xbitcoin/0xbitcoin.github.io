
const $ = require('jquery');
import Vue from 'vue'

var app;

export default class DashboardRenderer {

    init(renderData)
    {

      console.log('rd1',renderData)

        app = new Vue({
        el: '#dashboard',
        data: renderData
      });

      this.show();

    }

     update(renderData)
    {
      console.log('rd2',renderData)

        app.data =  renderData;

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
