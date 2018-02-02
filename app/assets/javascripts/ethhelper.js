export default class EthHelper {


    init(alertRenderer){
        this.alertRenderer = alertRenderer;
        this.connectWeb3();
    }

    connectWeb3(){
      if (typeof web3 !== 'undefined') {

            window.web3 = new Web3(web3.currentProvider);

            return web3;

      } else {

            this.alertRenderer.renderError('No web3? You should consider trying MetaMask!')
            return {}
          // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
          //window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

      }
    }


}
