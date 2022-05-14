<template>
  <div class="section footer">
    <div class="container-3 w-container ">
      <div class=" flex text-white font-sharp ">



        <div v-for="column of footerConfig.columns" :key="column.title" class="column-5 w-col w-col-4 w-col-small-4">
          <h3 class="heading-3 footer">{{column.title}}</h3>

          <a v-for="row of column.rows" :key="row.title" :href="row.url" target="_blank" class="footer-link hover:text-white" > 
            {{row.title}} 
            
            </a>

        </div> 

    
        



      </div>
    </div>
  </div>
</template>


<script>



import Config from '../config/Footer.js'

export default {
  name: 'Footer',
  props: [],
  data() {
    return {
      footerConfig: null
    }
  },
  created(){
    this.footerConfig = Config;
  },
  methods: {

  }
}
</script>
