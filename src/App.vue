<template>
 <div id="app" style="width: 100%;">
    <!--<pre>{{ $data | json }}</pre>-->
    <div>
      
     
        <div class="layoutJSON">
            Displayed as <code>[x, y, w, h]</code>:
            <div class="columns">
                <div class="layoutItem" v-for="item in layout">
                    <b>{{item.i}}</b>: [{{item.x}}, {{item.y}}, {{item.w}}, {{item.h}}]
                </div>
            </div>
        </div>
    </div>
    <div id="content">
        <button @click="decreaseWidth" class="opa" >Decrease Width</button>
            <button @click="increaseWidth" class="opa" >Increase Width</button>
            <button @click="addItem" class="opa" >Add an item</button>
            <button @click="removeItem"class="opa" >remove</button>
            <input type="checkbox" v-model="draggable"/> Draggable
            <input type="checkbox" v-model="resizable"/> Resizable
            <br/>
        <grid-layout :layout="layout"
                     :col-num="12" 
                     :row-height="50"
                     :is-draggable="draggable"
                     :is-resizable="resizable"
                     :vertical-compact="false"
                     :use-css-transforms="false"
        >
            <grid-item v-for="item in layout"
                       :x="item.x"
                       :y="item.y"
                       :w="item.w"
                       :h="item.h"
                       :i="item.i"
                       :id=" iders + item.i "
                       drag-allow-from=".vue-draggable-handle"
                       drag-ignore-from=".no-drag"
                                         
            >
                <div class="xxx">
                    <div class="vue-draggable-handle"></div>
                    <div class="no-drag">
                       <Fadercomp :id="item.id" :data-ig="item.i" ></Fadercomp>
                        
                        <br/>
                       
                    </div>
                </div>
            </grid-item>
        </grid-layout>
    </div>

</div>
</template>

<script>
	var firebase = require('firebase');
	import Fadercomp from './components/Fadercomp.vue'
	var VueGridLayout = require('vue-grid-layout');
	var GridLayout = VueGridLayout.GridLayout;
	var GridItem = VueGridLayout.GridItem;
	var testLayout = [{
			"x": 0,
			"y": 0,
			"w": 1,
			"h": 9,
			"i": "0",
			id: "geral0"
		},



	];



	export default {
		name: 'app',
		components: {

			GridLayout,
			GridItem,
			Fadercomp,

		},
		data() {
			return {
				layout: testLayout,
				draggable: true,
				resizable: false,
				index: 0,
				iders: "noi",
			}
		},
		mounted: function() {
			this.index = this.layout.length;
			this.$el.querySelectorAll('#content').forEach((fadsM) => {
				fadsM.addEventListener('click', (e) => {

					console.log("Listinf " + e.target.tabIndex + '<>' + e.target.className + '<>' + e.target.id + '<>' + e.target.tagName);

				})
			});
		},
		methods: {
			increaseWidth: function(item) {
				var width = document.getElementById("content").offsetWidth;
				width += 20;
				document.getElementById("content").style.width = width + "px";
			},
			decreaseWidth: function(item) {

				var width = document.getElementById("content").offsetWidth;
				width -= 20;
				document.getElementById("content").style.width = width + "px";
			},
			removeItem: function(item) {
				//console.log("### REMOVE " + item.i);
				this.layout.splice(this.layout.indexOf(item), 1);
			},
			addItem: function() {
				var self = this;
				//console.log("### LENGTH: " + this.layout.length);
				var item = {
					"x": this.index,
					"y": 0,
					"w": 1,
					"h": 9,
					"i": this.index + "",
					id: "geral" + this.index,
					whatever: "bbb"
				};
				this.index++;
				this.layout.push(item);

				firebase.database().ref('/fader/' + item.id).set({
					cc: xixi,
					channel: xexe,
					device: xaxa,
					value: fefe
				});


			},
			sendop: function(item) {

				console.log(this.item);

			}
		}



	};







	function generateLayout() {
		return _.map(_.range(0, 25), function(item, i) {
			var y = Math.ceil(Math.random() * 4) + 1;
			return {
				x: _.random(0, 5) * 2 % 12,
				y: Math.floor(i / 6) * y,
				w: 2,
				h: y,
				i: i.toString(),
				static: Math.random() < 0.05
			};
		});
	}

</script>
<style>
	@import url("./app.css");
	html,
	body {

		margin: 0;
		padding: 0;
		background-color: rgb(49, 49, 49);

	}

	h6 {

		font-family: "OpenSans";
		font-size: 1em !important;
		color: whitesmoke;
		margin: 0px;
		padding: 0px;
		text-align: center;
	}

	button.opa {
		font-family: "OpenSans";
		font-size: 1em !important;
		color: whitesmoke;
		background-color: rgb(49, 49, 49);

		width: 6em;
		height: 2em;
		margin: 2px;
		padding: 0px
	}

</style>
