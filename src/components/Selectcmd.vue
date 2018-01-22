<template>
   <div  class="cmdsel">
                  <h6> Command {{this.selected}} </h6>
    <select  v-model="selected" v-on:change="sendop" class="form-control-sm tasd"  > 
              <option v-for="item  in VA" :value="item.val" class="list" >{{item.ms}}</option> 
                <option v-for="(chn, i) in chn" v-bind:value="i" class="list" > command: {{i}} </option>
               </select>
              </div>
    
              
</template>

<script>
  


    export default {
        name: 'cmdsel',
       
        data() {
            
            return {
                chn: 128,
               
                valna: "Command:",
                selected: '',
                 VA: [{"ms":"OFF:Select something...",
                         "val":"off"}],
                   }
        },
methods: {
    
    sendop: function(event){

         xixi = this.selected;
        console.log(this.selected);
    return xixi;
    
    }
}

    };


</script>

<style scoped>
  select.form-control-sm {
    font-family: "OpenSans";
    font-size: 1em !important;
    color: whitesmoke;
    background-color: rgb(49, 49, 49);
  
    width: 6em;
    height:2em;
    margin: 2px;
    padding: 0px;
}
    
 
</style>