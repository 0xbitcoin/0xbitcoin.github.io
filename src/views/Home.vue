<template>

<div>
    <div class="lightbox-bg">
     <div class="w-clearfix"><img src="@/assets/images/close.svg" width="30" alt="" class="x-close" data-ix="hide-lightbox"></div>
     <div class="video-container">

     </div>
   </div>

   <div class="section bg-world px-0 lg:px-1">
     <div data-collapse="small" data-animation="default" data-duration="400" class="navbar w-nav">
       <div class="bg-gray-900 lg:bg-transparent">
       <div class="container w-container">
         <div class="w-full w-clearfix">
           <a href="/" class="brand w-nav-brand w--current">
             <img src="@/assets/images/logo.png" height="35"  alt="" class="w-6 m-2">
             <div class=" text-block-10">0xBitcoin</div>
          </a>

          <div class="hidden lg:inline-block  ">
            <UpperNav />
          </div>


          <div class="inline-block lg:hidden float-right p-4">

            <button @click="showResponsiveMenu=!showResponsiveMenu" class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
             <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
           </button>

           <div v-if="showResponsiveMenu" class="w-full absolute left-0 block flex-grow lg:flex lg:items-center lg:w-auto bg-gray-800">
             <div class="text-sm lg:flex-grow">
                <AccordionNav />
             </div>

           </div>

          </div>

         </div>

       </div>
       </div>
     </div>
     <div class="w-container">
       <div class="hero-text w-row">
         <div class="w-col w-col-6">
           <h1 class="heading hidden lg:block">0xBitcoin</h1>
           <div class="text-block-11 mt-20 lg:mt-0">PoW Mined ERC20 Currency</div>
         </div>
         <div class="w-col w-col-6">
         </div>
       </div>
       <div class="div-block">
         <a href="https://www.youtube.com/embed/lWMyal5r7bY" target="_blank" class="button1-base w-inline-block">
           <div class="text-block-12">Community Video </div>
         </a>
         <a href="https://etherscan.io/address/0xb6ed7644c69416d67b522e20bc294a9a9b405b31#code" target="_blank" class="button1-base w-inline-block">
           <div>Etherscan Contract Code</div>
         </a>
         <a href="https://github.com/EthereumCommonwealth/Auditing/issues/102" target="_blank" class="button1-base w-inline-block">
           <div>Smart Contract Audit</div>
         </a>
         <a href="https://0xbtc.info/" target="_blank" class="button1-base w-inline-block">
           <div>0xBTC Block Explorer</div>
         </a>
       </div>
     </div>
   </div>

   <div class="section autospacing">
     <div class="w-container">
       <div class="w-row">
         <div class="w-col w-col-6 mt-4">
           <div class="intro-list">
             <div class="list-item">▸ Launched Feb 2018</div>
             <div class="list-item">▸ No Premine</div>
             <div class="list-item">▸ No ICO</div>
             <div class="list-item">▸ Tokens are created in exchange for SHA3 Proof-of-Work submitted to the contract</div>
             <div class="list-item">▸ The contract auto-adjusts difficuly with no oracles or human control.</div>
             <div class="list-item">▸ Immune from 51% attacks</div>
             <div class="list-item">▸ Trustless with Zero Human Authority</div>
           </div>
         </div>
         <div class="w-col w-col-6">
           <p class="paragraph-2">The Ethereum community's faithful implementation of 'Bitcoin' in a trustless, immutable Ethereum smart contract.  </p>
           <img src="@/assets/images/mine.gif"></img>
         </div>
       </div>
     </div>
   </div>
   <div class="section">
     <div data-delay="5000" data-animation="slide" data-autoplay="1" data-duration="500" data-infinite="1" class="slider w-slider">
       <div class="mask maskedit w-slider-mask">
         <div class="slide w-slide">
           <div class="container-2 w-container">
             <div class="div-block-10"><img src="images/venn-diagram.svg" width="300" alt="" class="venn-diagram-image">
               <p class="paragraph-3"><strong class="bold-text-9">0xBTC was the first token created to fill the need for an everyday cryptocurrency that is integratable, fast, and made to last.</strong></p>
             </div>
           </div>
         </div>
         <div class="slide-2 w-slide">
           <div class="w-container">
             <h2 class="slider-statement">0xBitcoin stands on the shoulders of giants, and tries to reach further</h2>
             <div>
               <div class="w-row">
                 <div class="w-col w-col-4 w-col-small-4">
                   <div class="text-block-6">Ether</div>
                   <div class="pro-con-group w-clearfix"><img src="images/plus-green.svg" height="20" alt="" class="pro-con-icon">
                     <p class="paragraph-5"><strong class="pro-con-text">Ideal for its original intended purpose: running gas (miner fees) for smart contracts on the Ethereum network</strong></p>
                   </div>
                   <div class="pro-con-group w-clearfix"><img src="images/plus-green.svg" height="20" alt="" class="pro-con-icon">
                     <p><strong class="pro-con-text">Like Bitcoin, has attained worldwide adoption and paved the way for widespread use of digital currency</strong></p>
                   </div>
                   <div class="pro-con-group w-clearfix"><img src="images/minus-red.svg" height="20" width="20" alt="" class="pro-con-icon">
                     <p class="pro-con-text">No POW or coin cap means no inbuilt inflation protection. The money supply is vulnerable to tampering, undermining long-term trust in the system</p>
                   </div>
                 </div>
                 <div class="column-8 w-col w-col-4 w-col-small-4"><img src="images/giants3.svg" height="250" alt="" class="image-8"></div>
                 <div class="w-col w-col-4 w-col-small-4">
                   <div class="text-block-6">Bitcoin</div>
                   <div class="pro-con-group w-clearfix"><img src="images/plus-green.svg" height="20" alt="" class="pro-con-icon">
                     <p><strong class="pro-con-text">The original, revolutionary and respected block chain technology, and the guiding light for the 0xBTC project&#x27;s ethos</strong></p>
                   </div>
                   <div class="pro-con-group w-clearfix"><img src="images/plus-green.svg" height="20" alt="" class="pro-con-icon">
                     <p><strong class="pro-con-text">Ideal as ‘digital gold’</strong></p>
                   </div>
                   <div class="pro-con-group w-clearfix"><img src="images/minus-red.svg" width="20" height="20" alt="" class="pro-con-icon">
                     <p class="pro-con-text">Suffers from slow transaction times that can make it difficult to use for services that require speed</p>
                   </div>
                   <div class="pro-con-group w-clearfix"><img src="images/minus-red.svg" width="20" height="20" alt="" class="pro-con-icon">
                     <p><strong class="pro-con-text">No inbuilt ability to interact with smart contracts limits potential as distributed apps become more common</strong></p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div class="slide-3 w-slide">
           <div class="w-container">
             <h1 class="slider-statement">0xBitcoin&#x27;s principles matter in today&#x27;s world</h1>
             <div class="w-row">
               <div class="column-9 w-col w-col-4 w-col-small-small-stack"><img src="@/assets/images/decentralized.svg" height="70" alt="decentralized by Javad from the Noun Project" class="principle-icon">
                 <h2 class="carousel values">Decentralized</h2>
                 <p class="slider-paragraph">Decentralization aligns network participants together toward a common goal. It encourages a robust infrastructure and resists censorship.</p>
               </div>
               <div class="column-10 w-col w-col-4 w-col-small-small-stack"><img src="@/assets/images/smart-contract.svg" height="70" alt="smart contract by James Fok from the Noun Project" class="principle-icon">
                 <h2 class="carousel values">Contract Compatible</h2>
                 <p class="slider-paragraph">DApps are here, and they will only become more prominent. Smart Contract compatibility means that 0xBTC can be used quickly and easily around the world.</p>
               </div>
               <div class="column-11 w-col w-col-4 w-col-small-small-stack"><img src="@/assets/images/coins.svg" height="70" alt="Coins by Viktor Fedyuk (Tim P) from the Noun Project" class="principle-icon">
                 <h2 class="carousel values">Finite Coin Cap</h2>
                 <p class="slider-paragraph">When governments, groups and companies can create currency on a whim, they whittle away the value of your money and leave you poorer for it. A coin cap is fundamentally a statement of respect for you, the money holder. Only the market will ever determine what your coin is worth.  </p>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div class="left-arrow w-slider-arrow-left">
         <div class="icon-2 w-icon-slider-left"></div>
       </div>
       <div class="right-arrow w-slider-arrow-right">
         <div class="icon w-icon-slider-right"></div>
       </div>
       <div class="slide-nav w-slider-nav w-slider-nav-invert"></div>
     </div>
   </div>
   <div class="section ctas">
     <div class="autospacing w-container">
       <div class="w-row">
         <div class="column-4 w-col w-col-6"><img src="@/assets/images/join3.svg" width="125" height="125" alt="">
           <h2 class="cta heading">Join the Community</h2>
           <div class="div-block-3"><a href="https://www.reddit.com/r/0xbitcoin/" target="_blank" class="button2-base w-inline-block"><img src="images/reddit-icon.svg" height="20" alt="" class="button2image"><div class="text-block-7">Reddit</div></a><a href="https://discordapp.com/invite/JGEqqmS" target="_blank" class="button2-base w-inline-block"><img src="images/discord-icon.svg" height="20" alt="" class="button2image"><div class="text-block-8">Discord</div></a><a href="https://github.com/0xbitcoin" target="_blank" class="button2-base w-inline-block"><img src="images/github-icon.svg" height="20" alt="" class="button2image"><div class="text-block-9">Github</div></a></div>
         </div>
         <div class="column-3 w-col w-col-6"><img src="@/assets/images/mining-iso2.svg" width="170" height="170" alt="">
           <h2 class="cta heading">Mine 0xBTC</h2>
           <div class="div-block-4">
             <a href="https://www.youtube.com/watch?v=_uEczwlFBbE" target="_blank" class="button2-base w-inline-block">
               <div>Watch the Tutorial</div>
             </a>
             <a href="https://0x1d00ffff.github.io/0xBTC-Stats/?page=stats" target="_blank" class="button2-base w-inline-block">
               <div>View Mining Stats</div>
             </a>
           </div>
         </div>
       </div>
       <div class="w-row">
         <div class="column w-col w-col-6"><img src="@/assets/images/market.svg" width="125" height="125" alt="">
           <h2 class="cta heading">Buy &amp; Sell 0xBTC</h2>



            <div class="div-block-5"><a href="https://mercatox.com/exchange/0xBTC/ETH" target="_blank" class="cta-image-link w-inline-block">
              <img src="@/assets/images/Mercatox.svg" width="40" height="40" alt="mercatox logo" class="cta-image"><div class="cta-link">Mercatox</div></a>
              <a href="https://dex.0xchange.org/#/erc20" target="_blank" class="cta-image-link w-inline-block">
                <img src="@/assets/images/0xchange.svg" width="40" height="40" alt="0xchange logo" class="cta-image"><div class="cta-link">0xchange</div></a>
                <a href="https://merklex.io/" target="_blank" class="cta-image-link w-inline-block">
                  <img src="@/assets/images/merklex.svg" width="40" height="40" alt="0xchange logo" class="cta-image"><div class="cta-link">Merklex</div></a>
                  <a href="https://www.bitcratic.com/#!/trade/0xBTC-ETH" target="_blank" class="cta-image-link w-inline-block">
                    <img src="@/assets/images/bitcratic.png" width="40" height="40" alt="bitcratic logo" class="cta-image"><div class="cta-link">Bitcratic</div></a>
                    <a href="https://forkdelta.app/#!/trade/0xBTC-ETH" target="_blank" class="cta-image-link w-inline-block">
                      <img src="@/assets/images/forkdelta-1.svg" width="40" height="40" alt="Forkdelta logo" class="cta-image"><div class="cta-link">Forkdelta</div></a>
                    </div>


         </div>
         <div class="column-2 w-col w-col-6"><img src="@/assets/images/wallet4.svg" width="125" height="125" alt="">
           <h2 class="cta heading">Compatible Wallets</h2>
           <div class="div-block-6">
             <a href="https://metamask.io/" target="_blank" class="cta-image-link w-inline-block">
             <img src="@/assets/images/metamask.svg" width="40" height="40" alt="Metamask" class="cta-image">
             <div class="cta-link">Metamask</div></a>
             <a href="https://trustwallet.com/" target="_blank" class="cta-image-link w-inline-block">
               <img src="@/assets/images/trust-white-logo.svg" width="40" height="40" alt="Trust Wallet" class="cta-image">
               <div class="cta-link">Trust</div></a>
               <a href="https://wallet.coinbase.com/" target="_blank" class="cta-image-link w-inline-block">
                 <img src="@/assets/images/coinbase-wallet.svg" width="40" height="40" alt="" class="cta-image">
                 <div class="cta-link">Coinbase Wallet</div></a>
                 <a href="https://www.ledger.com/" target="_blank" class="cta-image-link w-inline-block">
                   <img src="@/assets/images/ledgerwhite.svg" width="40" height="40" alt="" class="cta-image">
                   <div class="cta-link">Ledger</div></a></div>
         </div>
       </div>
     </div>
   </div>
   <div class="section autospacing corkboard">
     <div class="w-container">
       <div class="w-row">
         <div class="column-12 w-col w-col-6">
           <div class="div-block-7">
             <h2 class="heading-2">Community Corkboard</h2>
             <div class="text-block-2">See projects, tips and tools built by 0xBTC open-source developers</div>
             <a href="https://github.com/0xBrian/awesome-0xbitcoin" target="_blank" class="button1-base community w-inline-block">
               <div class="text-block-3">Awesome-0xBTC Repo ▷</div>
             </a>
           </div>
         </div>
         <div class="column-13 w-col w-col-6"><img src="@/assets/images/noticeboard-2.svg" width="200" height="200" alt="" class="notice-board-image"></div>
       </div>
     </div>
   </div>
   <div class="section autospacing testimonial">
     <div class="w-container">
       <div class="quote">
         <p class="paragraph-4">&quot;... I was pleased to find that this ... was one of the most interesting and unique small projects I&#x27;ve had the pleasure to research ...&quot;</p>
         <div class="text-block-4">- Nik Patel, Altcoin Trader&#x27;s Handbook - <a href="https://www.altcointradershandbook.com/coin-report-0xbitcoin/" target="_blank" class="text-link">Read his full report</a></div>
       </div>
     </div>
   </div>
   <div class="section footer">
     <div class="container-3 w-container">
       <div class="w-row">
         <div class="column-5 w-col w-col-4 w-col-small-4">
           <h3 class="heading-3 footer">Documentation</h3><a href="https://github.com/0xbitcoin/white-paper" target="_blank" class="footer-link">White Paper</a><a href="https://etherscan.io/address/0xb6ed7644c69416d67b522e20bc294a9a9b405b31#code" target="_blank" class="footer-link">Contract Code</a><a href="https://github.com/EthereumCommonwealth/Auditing/issues/102" target="_blank" class="footer-link">Smart Contract Audit</a><a href="https://0xbtc.info/" target="_blank" class="footer-link">0xBTC Block Explorer</a></div>
         <div class="column-6 w-col w-col-4 w-col-small-4">
           <h3 class="heading-3 footer">Community &amp; Social</h3><a href="https://github.com/0xbitcoin" target="_blank" class="footer-link">0xBTC Github</a><a href="https://lavatoken.com/" target="_blank" class="footer-link">Lava Token</a><a href="https://discordapp.com/invite/JGEqqmS" target="_blank" class="footer-link">Discord</a><a href="https://twitter.com/0xbitcoin_erc20" target="_blank" class="footer-link">Twitter</a><a href="https://www.reddit.com/r/0xbitcoin/" target="_blank" class="footer-link">Reddit</a></div>
         <div class="column-7 w-col w-col-4 w-col-small-4">
           <h3 class="heading-3 footer">Fun &amp; Learning</h3><a href="https://meoau.itch.io/zero-chan-learns-crypto" target="_blank" class="footer-link">Play Trav&#x27;s 0xBTC Game</a></div>
       </div>
     </div>
   </div>
</div>
</template>


<script>
import UpperNav from './components/UpperNav.vue';
import AccordionNav from './components/AccordionNav.vue';

export default {
  name: 'Home',
  props: [],
  components: {UpperNav,AccordionNav},
  data() {
    return {
      showResponsiveMenu: false
    }
  },
  methods: {

    setContent (contentName) {

    }
  }
}
</script>
