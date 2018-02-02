
const $ = require('jquery');
import Vue from 'vue'

export default class DashboardRenderer {



     renderContractData(renderData)
    {


         

      var app = new Vue({
        el: '#dashboard',
        data: renderData
      });

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
