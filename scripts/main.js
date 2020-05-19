$(document).ready(function(){

	conga = new Drum("83", $('#conga'), $('ul li:nth-child(2)'), "sounds/conga.ogg", 'Conga');
	bass = new Drum("70", $('#bass'), $('ul li:nth-child(4)'), "sounds/bass.ogg", 'Bass');
	hihat = new Drum("76", $('#hihat'), $('ul li:nth-child(7)'), "sounds/hihat.ogg", 'Hihat');
	cymbal = new Drum("65", $('#cymbal'), $('ul li:nth-child(1)'), "sounds/cymbal.ogg", 'Cymbal');
	smalltom = new Drum("74", $('#smalltom'), $('ul li:nth-child(5)'), "sounds/tom1.ogg", 'Small tom');
	bigtom = new Drum("68", $('#bigtom'), $('ul li:nth-child(3)'), "sounds/tom2.ogg", 'Big tom');
	snare = new Drum("75", $('#snare'), $('ul li:nth-child(6)'), "sounds/snare.ogg", 'Snare');


    $('#drumdemo').click(function () {

        var keysArray = [70, 76, 75, 76, 70, 76, 75, 76, 70, 76, 75, 76, 70, 76, 75, 76, 65];

    	for (var i = 0; i < 17; i++){
    		var speed = 500 * i;
    		timeNextKey(keysArray[i], speed);
    	}

    });

	$('body').keydown(function(e){

		play(e.keyCode);

	});
})

function play(keyCode){

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

class Drum {
  constructor(keyCode, drumId, legend, path, name) {
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


