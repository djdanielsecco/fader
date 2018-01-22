    	'use strict'
var firebase = require('firebase');

	var config = {
    apiKey: "AIzaSyAtWnieqvHkBnuT-n2Lq3l9Ris03ohl6X4",
    authDomain: "fader-9f061.firebaseapp.com",
    databaseURL: "https://fader-9f061.firebaseio.com",
    projectId: "fader-9f061",
    storageBucket: "fader-9f061.appspot.com",
    messagingSenderId: "497411915287"
  };

	
	var uio = [];
	var defaultApp = firebase.initializeApp(config);
 var database = firebase.database();
	
console.log(defaultApp.name);  // "[DEFAULT]"
function createCard(data) {
	window.uio += data;
	
	console.log(data + '  <  >');

	
}

     function updateUI(data) {
  
  for (var i = 0; i < data.length; i++) {
    createCard(data[i]);
  }
}

var url = 'https://fader-9f061.firebaseio.com/fader.json';
var networkDataReceived = false;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    networkDataReceived = true;
	window.fefe = data.geral0.value;
	window.xaxa = data.geral0.device;
	window.xexe = data.geral0.channel;
	window.xixi = data.geral0.cc;
	firebase.database().ref('/fader/geral0').set({
  cc:xixi, channel:xexe, device:xaxa, value:fefe
  });
    console.log('From web', data);
    var dataArray = [];
    for (var key in data) {
     dataArray.push(data[key]);
    }
    updateUI(dataArray);
	return xaxa, xexe, xixi, fefe;
  });

document.addEventListener('input', function () {
var koko;
	var xcx={};
	var xuxu1= [];
	window.koko = document.getElementsByTagName("INPUT");
	xcx = document.getElementsByClassName('xyzw');
	
    var ggy = this.getElementsByClassName('faders1')[xuxu].value;
	console.log(ggy + ' id ' + xcx[xuxu].dataset.ig + '<>' + xuxu);
	var jajax = ["/fader/geral" + xuxu +"/"];
	
	firebase.database().ref('/fader/geral'+(xuxu)).set({
  cc:xixi, channel:xexe, device:xaxa, value:ggy
  });
    
}, false);
function writeUserData(fader, cc, channel, device, value) {
  firebase.database().ref('fader/' +  fader ).set({
  cc:15, channel:10, device:3, value:123
  });
}
 