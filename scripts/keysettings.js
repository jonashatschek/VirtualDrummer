var keysettings = {
		setNewDrumKey(drumObject, newKey){
		drumObject.key = newKey;
		drumObject.keyCode = drumObject.key.charCodeAt(0).toString();
		drumObject.legend.empty().append(drumObject.key.toString() + " - " + drumObject.name.toString());
	},
		resetAllKeys(){
		keysettings.setNewDrumKey(conga, 'S');
		keysettings.setNewDrumKey(cymbal, 'A');
		keysettings.setNewDrumKey(bass, 'F');
		keysettings.setNewDrumKey(bigtom, 'D');
		keysettings.setNewDrumKey(smalltom, 'J');
		keysettings.setNewDrumKey(hihat, 'L');
		keysettings.setNewDrumKey(snare, 'K');
	}
};