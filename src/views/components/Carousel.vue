<template>
  <div   class="slider w-slider">
    <div class="mask maskedit w-slider-mask  " >

      <div class="  w-slide" v-if="slideIndex==0">
        <div class="container-2 w-container">
          <div class="div-block-10"><img src="@/assets/images/venn-diagram.svg" width="300" alt="" class="venn-diagram-image">
            <p class="paragraph-3"><strong class="bold-text-9">0xBTC was the first token created to fill the need for an everyday cryptocurrency that is integratable, fast, and made to last.</strong></p>
          </div>
        </div>
      </div>

      <div class="  w-slide" v-if="slideIndex==1">
        <div class="w-container">
          <h2 class="slider-statement">0xBitcoin stands on the shoulders of giants, and tries to reach further</h2>
          <div>
            <div class="w-row">
              <div class="w-col w-col-4 w-col-small-4">
                <div class="text-block-6">Ether</div>
                <div class="pro-con-group w-clearfix"><img src="@/assets/images/plus-green.svg" width="20" height="20" alt="" class="pro-con-icon">
                  <p class="paragraph-5"><strong class="pro-con-text">Ideal for its original intended purpose: running gas (miner fees) for smart contracts on the Ethereum network</strong></p>
                </div>
                <div class="pro-con-group w-clearfix"><img src="@/assets/images/plus-green.svg" width="20" height="20" alt="" class="pro-con-icon">
                  <p><strong class="pro-con-text">Like Bitcoin, has attained worldwide adoption and paved the way for widespread use of digital currency</strong></p>
                </div>
                <div class="pro-con-group w-clearfix"><img src="@/assets/images/minus-red.svg" width="20" height="20"   alt="" class="pro-con-icon">
                  <p class="pro-con-text">No POW or coin cap means no inbuilt inflation protection. The money supply is vulnerable to tampering, undermining long-term trust in the system</p>
                </div>
              </div>
              <div class="column-8 w-col w-col-4 w-col-small-4"><img src="@/assets/images/giants3.svg" width="250" height="250" alt="" class="image-8"></div>
              <div class="w-col w-col-4 w-col-small-4">
                <div class="text-block-6">Bitcoin</div>
                <div class="pro-con-group w-clearfix"><img src="@/assets/images/plus-green.svg" width="20" height="20" alt="" class="pro-con-icon">
                  <p><strong class="pro-con-text">The original, revolutionary and respected block chain technology, and the guiding light for the 0xBTC project&#x27;s ethos</strong></p>
                </div>
                <div class="pro-con-group w-clearfix"><img src="@/assets/images/plus-green.svg" width="20" height="20" alt="" class="pro-con-icon">
                  <p><strong class="pro-con-text">Ideal as ‘digital gold’</strong></p>
                </div>
                <div class="pro-con-group w-clearfix"><img src="@/assets/images/minus-red.svg" width="20" height="20" alt="" class="pro-con-icon">
                  <p class="pro-con-text">Suffers from slow transaction times that can make it difficult to use for services that require speed</p>
                </div>
                <div class="pro-con-group w-clearfix"><img src="@/assets/images/minus-red.svg" width="20" height="20" alt="" class="pro-con-icon">
                  <p><strong class="pro-con-text">No inbuilt ability to interact with smart contracts limits potential as distributed apps become more common</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="  w-slide" v-if="slideIndex==2">
        <div class="w-container">
          <h1 class="slider-statement">0xBitcoin&#x27;s principles matter in today&#x27;s world</h1>
          <div class="w-row">
            <div class="column-9 w-col w-col-4 w-col-small-small-stack"><img src="@/assets/images/decentralized.svg" width="70" height="70" alt="decentralized by Javad from the Noun Project" class="principle-icon">
              <h2 class="carousel values">Decentralized</h2>
              <p class="slider-paragraph">Decentralization aligns network participants together toward a common goal. It encourages a robust infrastructure and resists censorship.</p>
            </div>
            <div class="column-10 w-col w-col-4 w-col-small-small-stack"><img src="@/assets/images/smart-contract.svg" width="70" height="70" alt="smart contract by James Fok from the Noun Project" class="principle-icon">
              <h2 class="carousel values">Contract Compatible</h2>
              <p class="slider-paragraph">DApps are here, and they will only become more prominent. Smart Contract compatibility means that 0xBTC can be used quickly and easily around the world.</p>
            </div>
            <div class="column-11 w-col w-col-4 w-col-small-small-stack"><img src="@/assets/images/coins.svg" width="70" height="70" alt="Coins by Viktor Fedyuk (Tim P) from the Noun Project" class="principle-icon">
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
</template>


<script>


export default {
  name: 'Carousel',
  props: [],
  data() {
    return {
      slideIndex:0
    }
  },
  created(){
    setInterval(this.incrementSlideIndex,8000);
  },
  methods: {
    incrementSlideIndex()
    {
      this.slideIndex++;
      if(this.slideIndex>2) this.slideIndex=0;
    }
  }
}
</script>
