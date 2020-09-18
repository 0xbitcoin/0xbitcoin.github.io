<template>


  <div class="m-6 p-4 bg-gray-800">

    <ul>
      <div v-for="section in navConfig.sections">
        <li class="text-lg text-orange-600"> Getting Started </li>
        <li v-for="row in section.rows">
          <a href="#" @click="setContent(row.id)" class="text-orange-200">
            {{row.title}}
          </a>
        </li>

      </div>
   </ul>




  </div>


</template>


<script>

import Config from '../../../public/documents/config/DocumentationNav.js'

export default {
  name: 'DocumentationNav',
  props: {
    setContentCallback: { type: Function },
  },
  data() {
    return {
      navConfig: null
    }
  },
  created(){
    console.log(Config)
    this.navConfig = Config;
  },
  methods: {
    setContent(contentType)
    {
      console.log('setting content to ', contentType)
      this.setContentCallback(contentType)
    }
  }
}
</script>
