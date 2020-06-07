var cookies = {
	setCookie(conga, cymbal, bass, bigtom, smalltom, hihat, snare, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = "drumkeysettings=" + ":conga=" + conga + ":bass=" + bass + ":cymbal=" + cymbal + ":big tom=" + bigtom + ":small tom=" + smalltom + ":hihat=" + hihat + ":snare=" + snare + ";" + expires + ";path=/";
	},
	getCookie(cname, drumName) {
		var name = cname + "=";
		var ca = decodeURIComponent(document.cookie).split(':');
		//var ca = decodedCookie.split(':');
		
		for(var i = 0; i < ca.length; i++) {
	    	var c = ca[i];
	    
		    while (c.charAt(0) == ' ') {
		      c = c.substring(1);
		    }
		    
		    if (c.indexOf(drumName) != -1) {
		    	return c.substring(drumName.length+1, drumName.length+2);
		    }

		}

		return "";
	}
};
