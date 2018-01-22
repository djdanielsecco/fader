// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
require('../static/script/fire.js');


Vue.config.productionTip = false
 var testLayout = [
    {"x":0,"y":0,"w":1,"h":9,"i":"0",id:"geral0"},
    {"x":1,"y":0,"w":1,"h":9,"i":"1",id:"geral1"},
    {"x":2,"y":0,"w":1,"h":9,"i":"2",id:"geral2"},
    {"x":3,"y":0,"w":1,"h":9,"i":"3",id:"geral3"},
  
   
];




/* eslint-disable no-new */
new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App)
})

