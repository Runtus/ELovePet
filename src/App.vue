<template>
  <div id="app">
    <navbox></navbox>
    <router-view/>
  </div>
</template>

<script>
  import navbox from './components/navbox'
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    components:{
      navbox
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style>
 #app{
   width: 100%;
   margin: 0;
   padding: 0;
 }
  *{
    margin: 0;
    padding: 0;
  }
</style>
