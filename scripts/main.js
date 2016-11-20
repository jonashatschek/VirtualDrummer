$(document).ready(function(){

    $('#button1').click(function () {

        var keysArray = [70, 76, 75, 76, 70, 76, 75, 76, 70, 76, 75, 76, 70, 76, 75, 76, 65];

    	for (var i = 0; i < 17; i++){
    		var speed = 500 * i;
    		timenextKey(keysArray[i], speed);
    	}

    });

	$('body').keydown(function(e){
		var drumId;
		var legend;
		var demo = new Audio();

		switch(e.keyCode){
			case 83:
				drumId = $('#conga');
				legend = $('ul li:nth-child(2)');
				highlightLegend(legend);
				playAnimation(drumId);
				demo.src="sounds/conga.ogg";
				demo.play();
				updateHistory('Conga');
				highlightLegend(legend);
				break;
			case 70:
				drumId = $('#bass');
				legend = $('ul li:nth-child(4)');
				highlightLegend(legend);
				playAnimation(drumId);
				demo.src="sounds/bass.ogg";
				demo.play();
				updateHistory('Bass drum');
				break;
			case 76:
				drumId = $('#hihat');
				legend = $('ul li:nth-child(7)');
				highlightLegend(legend);
				playAnimation(drumId);
				demo.src="sounds/hihat.ogg";
				demo.play();
				updateHistory('Hihat');
				break;
			case 65:
				drumId = $('#cymbal');
				legend = $('ul li:nth-child(1)');
				highlightLegend(legend);
				playAnimation(drumId);
				demo.src="sounds/cymbal.ogg";
				demo.play();
				updateHistory('Cymbal');
				break;
			case 74:
				drumId = $('#smalltom');
				legend = $('ul li:nth-child(5)');
				highlightLegend(legend);
				playAnimation(drumId);
				demo.src="sounds/tom1.ogg";
				demo.play();
				updateHistory('Small tom');
				break;
			case 68:
				drumId = $('#bigtom');
				legend = $('ul li:nth-child(3)');
				highlightLegend(legend);
				playAnimation(drumId);
				demo.src="sounds/tom2.ogg";
				demo.play();
				updateHistory('Big tom');
				break;
			case 75:
				drumId = $('#snare');
				legend = $('ul li:nth-child(6)');
				highlightLegend(legend);
				playAnimation(drumId);
				demo.src="sounds/snare.ogg";
				updateHistory('Snare');
				demo.play();
				break;
	}

	})
})

function playAnimation(element) {
	element.addClass('playing').delay(250).queue(function(){
			element.removeClass('playing');
			element.dequeue();
	})
}

function updateHistory(drum) {
	$("#historycontent").prepend("<p>" +drum + "</p>");
}

function playdemoKey(key) {
	var play = $.Event("keydown", { keyCode: key});
	$("body").trigger(play);
}

function timenextKey(key, time) {
	setTimeout(function(){
    	playdemoKey(key);
    }, time);
}

function highlightLegend(element) {
	element.addClass('active').delay(150).queue(function(){
			element.removeClass('active');
			element.dequeue();
	})
}
