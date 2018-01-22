<template>
  <div id="comfader" class="container xyzw">
<div class="container fadsM">
  <Selectout></Selectout> 
  <Selectcmd></Selectcmd>
  <Selectchn></Selectchn>
  <Faderob></Faderob>
  <Selectimp></Selectimp> 
  </div>
  </div>
</template>

<script>

import Selectimp from './Selectimp.vue'
    import Selectout from './Selectout.vue'
    import Selectcmd from './Selectcmd.vue'
    import Selectchn from './Selectchn.vue'
    import Faderob from './Faderob.vue'
    
export default {
  name: 'comfader',
  components: {
   
      Selectimp,
      Selectout,
      Selectcmd,
      Selectchn,
      Faderob, 
  },

	}

</script>
<style scoped>
    .fadsM{
        z-index: 10 !important;
       position: relative; 
        display: inline-block;
        border: 2px solid #fff;
         padding: 5px;
        top:1em;
        margin: 0px;
    }
  

</style>