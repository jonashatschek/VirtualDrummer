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
					keysettings.setNewDrumKey(drum, cookie);
					i++;
				}
			}
		}
	},
	setCookie(conga, cymbal, bass, bigtom, smalltom, hihat, snare, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires="+d.toUTCString();
		if(cookies.getCookie("conga") != ""){
			cookies.deleteAllCookies();
		}
		document.cookie = ":conga=" + conga + ":bass=" + bass + ":cymbal=" + cymbal + ":big tom=" + bigtom + ":small tom=" + smalltom + ":hihat=" + hihat + ":snare=" + snare + ";" + expires + ";path=/";
	},
	getCookie(drumName) {
		var ca = decodeURIComponent(document.cookie).split(':');
		
		for(var i = 0; i < ca.length; i++) {
	    	var c = ca[i];
		    
		    if (c.indexOf(drumName) != -1) {
		    	return c.substring(drumName.length+1, drumName.length+2);
		    }
		}

		return "";
	},

	deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
};
