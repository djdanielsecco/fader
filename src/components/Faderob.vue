<template>
   <div  class="faders container">
                  <h6> fader{{this.selected}} </h6>
    <input  type="range"   min="0" max="127" step="1"  v-model="selected" v-on:input="sendopa" class="faders1"  > 
              
            
              </div>
    
              
</template>

<script>
 


	
    export default {
        name: 'faders',
       
        data() {
            
            return {
                selected: parseInt(fefe, 10)
                   }
        },
methods: {
    
    sendopa: function(event){
		
		var  hgf = document.getElementsByClassName("xyzw").length;
        xuxu = hgf-1;
        console.log(this.selected + '<>' + hgf + '<>' );
		return xuxu;
    }
}}
	




</script>

<style scoped>
  
input[type=range] {
    display: inline-block;
    -webkit-appearance: none;


    width: 195px;
    height: 20px;
    position: relative;
    top: 103px;
    right: 49.6px;
    transform: rotate(-90deg);

}
    div.faders{
        width: 6em;
        height: 16em;
        position: relative;
        border: 2px solid #fff;
       margin: 2px;
    padding: 0px;
    }
input[type=range]:focus {
    outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
    width: 60%;
    height: 17.2px;
    cursor: pointer;
    box-shadow: 2.7px 2.7px 2.8px #000000, 0px 0px 2.7px #0d0d0d;
    background: #313131;
    border-radius: 6.2px;
    border: 1.3px solid #ffffff;
}

input[type=range]::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #050000, 0px 0px 1px #1f0000;
    border: 2.2px solid #000000;
    height: 39px;
    width: 19px;
    border-radius: 2px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -12.2px;
}

input[type=range]:focus::-webkit-slider-runnable-track {
    background: #505050;
}
</style>