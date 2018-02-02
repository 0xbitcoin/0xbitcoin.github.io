
const $ = require('jquery');
import Vue from 'vue'

export default class DashboardRenderer {



     renderContractData(data)
    {
      var app = new Vue({
        el: '#dashboard',
        data: {
          difficulty: data.difficulty
        }
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
