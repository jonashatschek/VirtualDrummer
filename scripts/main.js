$(document).ready(function(){

	cymbal = new Drum("A", "65", $('#cymbal'), $('ul li:nth-child(1)'), "sounds/cymbal.ogg", 'Cymbal');
	conga = new Drum("S", "83", $('#conga'), $('ul li:nth-child(2)'), "sounds/conga.ogg", 'Conga');
	bigtom = new Drum("D", "68", $('#bigtom'), $('ul li:nth-child(3)'), "sounds/tom2.ogg", 'Big tom');
	bass = new Drum("F", "70", $('#bass'), $('ul li:nth-child(4)'), "sounds/bass.ogg", 'Bass');
	smalltom = new Drum("J", "74", $('#smalltom'), $('ul li:nth-child(5)'), "sounds/tom1.ogg", 'Small tom');
	snare = new Drum("K", "75", $('#snare'), $('ul li:nth-child(6)'), "sounds/snare.ogg", 'Snare');
	hihat = new Drum("L", "76", $('#hihat'), $('ul li:nth-child(7)'), "sounds/hihat.ogg", 'Hihat');

	var drumArray = [conga, bass, hihat, cymbal, smalltom, bigtom, snare];

	cookies.checkCookie(drumArray, drumEnum);

	$('#drumdemo').click(function () {

	    var keysArray = [bass.keyCode, hihat.keyCode, snare.keyCode, hihat.keyCode, bass.keyCode, hihat.keyCode, snare.keyCode, hihat.keyCode, bass.keyCode, hihat.keyCode, snare.keyCode, hihat.keyCode, bass.keyCode, hihat.keyCode, snare.keyCode, hihat.keyCode, cymbal.keyCode];

		for (var i = 0; i < 17; i++){
			var speed = 500 * i;
			player.timeNextKey(keysArray[i], speed);
		}

	});

	$('body').keydown(function(e){

		if($("#popup").hasClass("hidden")){
			player.playKey(e.keyCode, drumArray);
		}
		else{
			if(!$("#selectNewKey").hasClass("hidden")){
				$("#bigLetterInPopup").html(e.key);
			}
		}
	});

	$('.drumlist').children().click(function() {
		var drum = drumArray.find(element => element.name == getDrumName($(this).index()));
		$("#currentKey").empty().append("Current key for " + drum.name + " is " + drum.key + ".");
		document.getElementById("popup").setAttribute("drumkey", drum.key);
		$("#popup").removeClass("hidden");

	});

	$('#changeKey').click(function(){
		reloadPopup();
	});

	$('.cancelBtn').click(function(){
		hidePopup(); 
	});

	$('#OkBtn').click(function(){
		var drumObject = drumArray.find(element => element.key == $("#popup").attr("drumkey"));
		keysettings.setNewDrumKey(drumObject, $("#bigLetterInPopup").html().toUpperCase());
		player.playAudio("sounds/Explosion.wav");
		hidePopup();
		cookies.setCookie(conga.key, cymbal.key, bass.key, bigtom.key, smalltom.key, hihat.key, snare.key, 365);
	});

	$('#resetKeysBtn').click(function(){
		keysettings.resetAllKeys();
		cookies.setCookie('S', 'A', 'F', 'D', 'J', 'L', 'K', 365);
	});

});

/*function resetAllKeys(){
	setNewDrumKey(conga, 'S');
	setNewDrumKey(cymbal, 'A');
	setNewDrumKey(bass, 'F');
	setNewDrumKey(bigtom, 'D');
	setNewDrumKey(smalltom, 'J');
	setNewDrumKey(hihat, 'L');
	setNewDrumKey(snare, 'K');
}*/

function reloadPopup(){
	$("#OkBtn").removeClass("hidden");
	$("#changeKey").addClass("hidden");
	$("#selectNewKey").removeClass("hidden");
	$("#bigLetterInPopup").html($("#popup").attr("drumkey"));
}

/*function setNewDrumKey(drumObject, newKey){
	drumObject.key = newKey;
	drumObject.keyCode = drumObject.key.charCodeAt(0).toString();
	drumObject.legend.empty().append(drumObject.key.toString() + " - " + drumObject.name.toString());
}*/

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
}
