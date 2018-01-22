<template>
   <div  class="impssel">
                  <h6> Input {{ this.selected}}</h6>
    <select  v-model="selected" v-on:change="sendop" class="form-control-sm tasd"  > 
              <option v-for="item  in VA" :value="item.val" class="list" >{{item.ms}}</option> 
                <option v-for="(items, i) in itensB" v-bind:value="i" class="list" >{{items}} </option>
               </select>
              </div>
    
              
</template>

<script>
  


    export default {
        name: 'impssel',
       
        data() {
            
            return {items: inputsM,
                    itensB: inputsM,
                    selected: '',
                   
                    VA: [{"ms":"OFF:Select something...",
                         "val":"off"}],
                   }
        },
methods: {
    
    sendop: function(event){

       
        console.log(this.selected);
 
    
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