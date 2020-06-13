
$( document ).ready(function() {
    function tick(t) {
        $("<div />").html(t % 2 === 1 ? "Tick" : "Tock").addClass("statusline").appendTo(".status");
        $("#count").html(t);    
    }

    function done() {
        $("<div />").html("Skrrt!").addClass("statusline").css("background-color", "#FFFF99").appendTo(".status");
        $("#startstop").html("start");
    }

    var paper = Raphael("metronome_container", 78, 80);
        //var paper = Raphael("metronome_container", 100, 50);

    var m = metronome({
        len: 75,
        angle: 20,
        tick: tick,
        complete: done,
        paper: paper,
        audio: "sounds/skrrt.ogg"
    });
    console.log("about to make some calls!");
    m.make_input("#inputs");

    m.shapes().outline.attr("fill", "#0962ba");
    m.shapes().arm.attr("stroke", "#EEE");

    $('#startstop').click(function() {
    // start animation
    if ($(this).html() === "start") {
        $(this).html("stop");            
        
        //get values for tempo and ticks and restrict
        var tempo = parseInt($('#tempo').val(), 10);
        if (!tempo) { tempo = 60; }
        else if (tempo > 200) { tempo = 200; }
        else if (tempo < 30) { tempo = 30; }
        $("#tempo").val(tempo);
        
        var ticks = parseInt($('#ticks').val(), 10);
        if (!ticks) { ticks = 20; }
        else if (ticks > 60) { ticks = 60; }
        else if (ticks < 8) { ticks = 8; }
        $("#ticks").val(ticks); 
        
        m.start(tempo, ticks);
    } else {
        $(this).html("start");
        m.stop();
    }
	});

});