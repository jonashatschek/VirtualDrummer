$(document).ready(function(){

	cymbal = new Drum("A", "65", $('#cymbal'), $('ul li:nth-child(1)'), "sounds/cymbal.ogg", 'Cymbal');
	conga = new Drum("S", "83", $('#conga'), $('ul li:nth-child(2)'), "sounds/conga.ogg", 'Conga');
	bigtom = new Drum("D", "68", $('#bigtom'), $('ul li:nth-child(3)'), "sounds/tom2.ogg", 'Big tom');
	bass = new Drum("F", "70", $('#bass'), $('ul li:nth-child(4)'), "sounds/bass.ogg", 'Bass');
	smalltom = new Drum("J", "74", $('#smalltom'), $('ul li:nth-child(5)'), "sounds/tom1.ogg", 'Small tom');
	snare = new Drum("K", "75", $('#snare'), $('ul li:nth-child(6)'), "sounds/snare.ogg", 'Snare');
	hihat = new Drum("L", "76", $('#hihat'), $('ul li:nth-child(7)'), "sounds/hihat.ogg", 'Hihat');

	var drumArray = [conga, bass, hihat, cymbal, smalltom, bigtom, snare];

	$('#drumdemo').click(function () {

	    var keysArray = [bass.keyCode, hihat.keyCode, snare.keyCode, hihat.keyCode, bass.keyCode, hihat.keyCode, snare.keyCode, hihat.keyCode, bass.keyCode, hihat.keyCode, snare.keyCode, hihat.keyCode, bass.keyCode, hihat.keyCode, snare.keyCode, hihat.keyCode, cymbal.keyCode];

		for (var i = 0; i < 17; i++){
			var speed = 500 * i;
			timeNextKey(keysArray[i], speed);
		}

	});

	$('body').keydown(function(e){

		if($("#popup").hasClass("hidden")){
			playKey(e.keyCode);
		}
		else{
			if(!$("#selectNewKey").hasClass("hidden")){
				$("#bigLetterInPopup").html(e.key);
			}
		}
	});

	$('.drumlist').children().click(function() {
	
	var drum = drumArray.find(element => element.name == getDrumName($(this).index()));

	$("#popup").append("Current key for " + drum.name + " is " + drum.key + ".");
	document.getElementById("popup").setAttribute("drumkey", drum.key);
	$("#popup").removeClass("hidden");

	});

	$('#changeKey').click(function(){
		$("#changeKey").addClass("hidden");
		$("#selectNewKey").removeClass("hidden");
		$("#bigLetterInPopup").html($("#popup").attr("drumkey"));
	});

	$('#CancelBtn').click(function(){
		hidePopup(); 
	});
	$('#OkBtn').click(function(){
		setNewDrumKey(drumArray.find(element => element.key == $("#popup").attr("drumkey")));
		hidePopup();
	});
});

function playKey(keyCode){

	var demo = new Audio();

	switch(keyCode.toString()){
		case conga.keyCode:
			highlightLegend(conga.legend);
			playAnimation(conga.drumId);
			demo.src=conga.soundFilePath;
			demo.play();
			updateHistory(conga.name);
			break;
		case bass.keyCode:
			highlightLegend(bass.legend);
			playAnimation(bass.drumId);
			demo.src=bass.soundFilePath;
			demo.play();
			updateHistory(bass.name);
			break;
		case hihat.keyCode:
			highlightLegend(hihat.legend);
			playAnimation(hihat.drumId);
			demo.src=hihat.soundFilePath;
			demo.play();
			updateHistory(hihat.name);
			break;
		case cymbal.keyCode:
			highlightLegend(cymbal.legend);
			playAnimation(cymbal.drumId);
			demo.src=cymbal.soundFilePath;
			demo.play();
			updateHistory(cymbal.name);
			break;
		case smalltom.keyCode:
			highlightLegend(smalltom.legend);
			playAnimation(smalltom.drumId);
			demo.src=smalltom.soundFilePath;
			demo.play();
			updateHistory(smalltom.name);
			break;
		case bigtom.keyCode:
			highlightLegend(bigtom.legend);
			playAnimation(bigtom.drumId);
			demo.src=bigtom.soundFilePath;
			demo.play();
			updateHistory(bigtom.name);
			break;
		case snare.keyCode:
			highlightLegend(snare.legend);
			playAnimation(snare.drumId);
			demo.src=snare.soundFilePath;
			demo.play();
			updateHistory(snare.name);
			break;
		}
}

function setNewDrumKey(drumObject){
	drumObject.key = $("#bigLetterInPopup").html().toUpperCase();
	drumObject.keyCode = drumObject.key.charCodeAt(0).toString();
	drumObject.legend.empty();
	drumObject.legend.append(drumObject.key.toString() + " - " + drumObject.name.toString());
}

function playAnimation(element) {
	element.addClass('playing').delay(250).queue(function(){
			element.removeClass('playing');
			element.dequeue();
	})
}

function updateHistory(drum) {
	$("#historycontent").prepend("<p>" +drum + "</p>");
}

function playDemoKey(key) {
	var play = $.Event("keydown", { keyCode: key});
	$("body").trigger(play);
}

function timeNextKey(key, time) {
	setTimeout(function(){
    	playDemoKey(key);
    }, time);
}

function highlightLegend(element) {
	element.addClass('active').delay(150).queue(function(){
			element.removeClass('active');
			element.dequeue();
	})
}

function hidePopup(){
	$("#popup").addClass("hidden");
	$("#selectNewKey").addClass("hidden");
	$("#changeKey").removeClass("hidden");
}

function getDrumName(number){

	switch(number){
		case drumEnum.CYMBAL:
			return "Cymbal";
		case drumEnum.CONGA:
			return "Conga";
		case drumEnum.BIGTOM:
			return "Big tom";
		case drumEnum.BASS:
			return "Bass";
		case drumEnum.HIHAT:
			return "Hihat";
		case drumEnum.SMALLTOM:
			return "Small tom";
		case drumEnum.SNARE:
			return "Snare";

	}
}

class Drum {
  constructor(key, keyCode, drumId, legend, path, name) {
  	this.key = key;
    this.keyCode = keyCode;
    this.drumId = drumId;
    this.legend = legend;
    this.soundFilePath = path;
    this.name = name;
  }
  setKey(key) {
    this.keyCode = key;
  }
}

var drumEnum = {
CYMBAL: 0,
CONGA: 1,
BIGTOM: 2,
BASS: 3,
SMALLTOM: 4,
SNARE: 5,
HIHAT: 6
  
};
