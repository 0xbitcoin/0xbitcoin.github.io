<template>
  <div data-collapse="small" data-animation="default" data-duration="400" class="navbar w-nav">
    <div class="bg-gray-900 lg:bg-transparent">
    <div class="  ">
      <div class="w-full flex">



        <a href="/" class="brand w-nav-brand w--current">
          <img src="@/assets/images/logo.png" height="35"  alt="" class="w-6 m-2">
          <div class=" text-block-10"> </div>
       </a>

       <div class="hidden lg:block flex-grow text-right ">
         <UpperNav />
       </div>


       <div class="inline-block lg:hidden flex-grow text-right  p-4">

         <button @click="showResponsiveMenu=!showResponsiveMenu" class="  items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
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
</template>


<script>
import UpperNav from './UpperNav.vue';
import AccordionNav from './AccordionNav.vue';

export default {
  name: 'Navbar',
  props: [],
  components: {UpperNav,AccordionNav},
  data() {
    return {
      showResponsiveMenu: false
    }
  },
  methods: {

  }
}
</script>
