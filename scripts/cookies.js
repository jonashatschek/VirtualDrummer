var cookies = {
	checkCookie(drumArray, drumEnum){
		if(cookies.getCookie("conga") == ""){
			cookies.setCookie(conga.key, cymbal.key, bass.key, bigtom.key, smalltom.key, hihat.key, snare.key, 365);
		}
		else{
			var i = 1;
			for(const prop in drumEnum){
				if(prop != "properties"){
					var drumName = drumEnum.properties[i].name;
					var cookie = cookies.getCookie(drumName);
					var drum = drumArray.find(element => element.name.toUpperCase() == drumName.toUpperCase());
					setNewDrumKey(drum, cookie);
					i++;
				}
			}
		}
	},
	setCookie(conga, cymbal, bass, bigtom, smalltom, hihat, snare, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = "drumkeysettings=" + ":conga=" + conga + ":bass=" + bass + ":cymbal=" + cymbal + ":big tom=" + bigtom + ":small tom=" + smalltom + ":hihat=" + hihat + ":snare=" + snare + ";" + expires + ";path=/";
	},
	getCookie(drumName) {
		var ca = decodeURIComponent(document.cookie).split(':');
		
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
