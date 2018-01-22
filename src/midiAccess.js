'use strict'

var midi = null;
var inputsM = [];
var outputsM = [];
/*var midioutport = document.getElementById('bt1');*/
navigator.requestMIDIAccess({sysex: true}).then(onMIDISuccess, onMIDIFailure);

function onMIDISuccess (midiAccess) {
 
  midi = midiAccess;  // store in the global (in real usage, would probably keep in an object instance)
    ShowOutPortlistA();
   
     console.log("MIDI ready!");
}

function onMIDIFailure (msg) {
  console.log("Failed to get MIDI access - " + msg);
}


function ShowOutPortlistA() {
	midi.outputs.forEach(function (port, i) {
outputsM.push(port.name);
		/*midioutport.innerHTML = outputsM + '<br>' */
	});
    midi.inputs.forEach(function (port, i) {
inputsM.push(port.name);
		
	});
    
	console.log(outputsM +' <> ' + inputsM);
	return outputsM, inputsM;
}

