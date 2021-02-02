<template>
  <div class="section footer">
    <div class="container-3 w-container">
      <div class="w-row">
        <div class="column-5 w-col w-col-4 w-col-small-4">
          <h3 class="heading-3 footer">Documentation</h3>

          <router-link :to="{name: 'docs'}" class="footer-link">0xBitcoin API Wiki</router-link>
          <a href="https://github.com/0xbitcoin/white-paper" target="_blank" class="footer-link">White Paper</a>
          <a href="https://etherscan.io/address/0xb6ed7644c69416d67b522e20bc294a9a9b405b31#code" target="_blank" class="footer-link">Contract Code</a>
          <a href="https://github.com/EthereumCommonwealth/Auditing/issues/102" target="_blank" class="footer-link">Smart Contract Audit</a>
          <a href="https://0xbtc.info/" target="_blank" class="footer-link">0xBTC Block Explorer</a></div>
        <div class="column-6 w-col w-col-4 w-col-small-4">
          <h3 class="heading-3 footer">Community &amp; Social</h3>
          <a href="https://github.com/0xbitcoin" target="_blank" class="footer-link">0xBTC Github</a>
          <a href="https://discordapp.com/invite/JGEqqmS" target="_blank" class="footer-link">Discord</a>
          <a href="https://twitter.com/0xbitcoin_erc20" target="_blank" class="footer-link">Twitter</a>
          <a href="https://www.reddit.com/r/0xbitcoin/" target="_blank" class="footer-link">Reddit</a></div>
        <div class="column-7 w-col w-col-4 w-col-small-4">
          <h3 class="heading-3 footer">Fun &amp; Learning</h3>
          <a href="https://meoau.itch.io/zero-chan-learns-crypto" target="_blank" class="footer-link">Play Trav&#x27;s 0xBTC Game</a>
            <a href="/#/docs" target="_blank" class="footer-link">0xBTC Wiki</a> 

        </div>

      </div>
    </div>
  </div>
</template>


<script>


export default {
  name: 'Footer',
  props: [],
  data() {
    return {

    }
  },
  created(){

  },
  methods: {

  }
}
</script>
