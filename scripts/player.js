var player = {

	playKey(keyCode, drumArray){

	switch(keyCode.toString()){
		case conga.keyCode:
			player.highlightLegend(conga.legend);
			player.playAnimation(conga.drumId);
			player.playAudio(conga.soundFilePath);
			player.updateHistory(conga.name);
			break;
		case bass.keyCode:
			player.highlightLegend(bass.legend);
			player.playAnimation(bass.drumId);
			player.playAudio(bass.soundFilePath);
			player.updateHistory(bass.name);
			break;
		case hihat.keyCode:
			player.highlightLegend(hihat.legend);
			player.playAnimation(hihat.drumId);
			player.playAudio(hihat.soundFilePath);
			player.updateHistory(hihat.name);
			break;
		case cymbal.keyCode:
			player.highlightLegend(cymbal.legend);
			player.playAnimation(cymbal.drumId);
			player.playAudio(cymbal.soundFilePath);
			player.updateHistory(cymbal.name);
			break;
		case smalltom.keyCode:
			player.highlightLegend(smalltom.legend);
			player.playAnimation(smalltom.drumId);
			player.playAudio(smalltom.soundFilePath);
			player.updateHistory(smalltom.name);
			break;
		case bigtom.keyCode:
			player.highlightLegend(bigtom.legend);
			player.playAnimation(bigtom.drumId);
			player.playAudio(bigtom.soundFilePath);
			player.updateHistory(bigtom.name);
			break;
		case snare.keyCode:
			player.highlightLegend(snare.legend);
			player.playAnimation(snare.drumId);
			player.playAudio(snare.soundFilePath);
			player.updateHistory(snare.name);
			break;
		}
	},

	playAudio(src){
	var audio = new Audio();
	audio.src = src;
	audio.play();
	},

	playAnimation(element) {
		element.addClass('playing').delay(250).queue(function(){
		element.removeClass('playing');
		element.dequeue();
		})
	},

	updateHistory(drum) {
	$("#historycontent").prepend("<p>" + drum + "</p>");
	},

	highlightLegend(element) {
	element.addClass('active').delay(150).queue(function(){
		element.removeClass('active');
		element.dequeue();
	})
	}

};