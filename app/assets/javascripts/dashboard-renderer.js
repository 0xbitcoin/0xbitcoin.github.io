
const $ = require('jquery');
import Vue from 'vue';

var app;
var dashboardData;

export default class DashboardRenderer {

    init(renderData)
    {

      dashboardData = renderData;

         app = new Vue({
        el: '#dashboard',
        data: dashboardData
      });

      this.show();

    }

     update(renderData)
    {
     

      dashboardData.contractAddress = renderData.contractAddress;
      dashboardData.totalSupply = renderData.totalSupply;
      dashboardData.amountMined = renderData.amountMined;
      dashboardData.difficulty = renderData.difficulty;
      dashboardData.challenge_number = renderData.challenge_number;
      dashboardData.lastRewardTo = renderData.lastRewardTo;
      dashboardData.lastRewardAmount = renderData.lastRewardAmount;
      dashboardData.lastRewardEthBlockNumber = renderData.lastRewardEthBlockNumber;

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
