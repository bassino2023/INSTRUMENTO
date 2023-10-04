

const synth = new Tone.Synth() .toDestination();

function triangle (){
var autoPanner = new Tone.AutoPanner().toMaster().start();
var osc = new Tone.Oscillator(document.myform.notelist.value,
  "triangle").connect(autoPanner).start();
  osc.volume.value = document.myform.volume.value;
}




function square(){var autoPanner = new Tone.AutoPanner().toMaster().start();
var osc = new Tone.Oscillator(document.myform.notelist.value,
  "square").connect(autoPanner).start();
  osc.volume.value = document.myform.volume.value;
  }

function sine() {
  synth.triggerAttackRelease(document.myform.notelist.value, "1n");
  synth.volume.value = document.myform.volume.value;
  }
function sawtooth (){var autoPanner = new Tone.AutoPanner().toMaster().start();
var osc = new Tone.Oscillator(document.myform.notelist.value,
  "sawtooth").connect(autoPanner).start();
  osc.volume.value = document.myform.volume.value;
  }
  