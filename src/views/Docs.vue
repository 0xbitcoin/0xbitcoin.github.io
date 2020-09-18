<template>
  <div class="bg-gray-800" >

      <Navbar />


    <nav id="header" class="w-full z-10 pin-t">


    		<div class="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-3 bg-white px-4">

    			<div class="pl-4">
    				<a class="text-black text-base no-underline hover:no-underline font-extrabold text-xl"  href="#">
    					0xBitcoin API Documentation
    				</a>
          </div>

          <a @click="docNavOpen=!docNavOpen" href="#">
            <svg

              class="h-6 w-6 block lg:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>


    		</div>

        <div class="w-full " v-if="docNavOpen">

          <DocumentationNav

          :setContentCallback="setContent"

          />

        </div>
    	</nav>




      <div class="lg:flex mb-4">
        <div class="w-full lg:w-1/3 bg-gray-300   hidden lg:block ">

          <DocumentationNav

          :setContentCallback="setContent"

          />


        </div>
        <div class="w-full lg:w-2/3 bg-gray-300  ">
          <div class="m-6 p-4 bg-gray-100">

            <div class="markdown markdown-body" v-html="rawContent">
                ---
            </div>






          </div>
        </div>
      </div>

  <Footer/>

  </div>
</template>


<script>
 import  MarkdownIt  from 'markdown-it';
import * as http from 'http';
import hljs from 'highlight.js'

import Navbar from './components/Navbar.vue';
import DocumentationNav from './components/DocumentationNav.vue';
import Footer from './components/Footer.vue'

export default {
  name: 'Docs',
  props: [],
  components: {Navbar,DocumentationNav,Footer},
  data() {
    return {
      docNavOpen: false,
      activeContent: '',
      rawContent: ''
    }
  },
  methods: {

    setContent (contentName) {
      console.log('set content', contentName)
      //this.activeContent = contentName;


      var self = this;

      var options = {
        path: '/documents/'+contentName+'.md'
      };

      var md = new MarkdownIt({
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value;
            } catch (__) {}
          }

          return ''; // use external default escaping
        }
      });

      http.get(options, function(res) {

        let data = '';

        // A chunk of data has been recieved.
        res.on('data', (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        res.on('end', () => {


               var result = md.render(data);
               console.log( result )

               self.rawContent = result;


        });



      }).on('error', function(e) {
        console.log("Got error: " + e.message);
      });

    }
  }
}
</script>
