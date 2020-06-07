var keysettings = {
		setNewDrumKey(drumObject, newKey){
		drumObject.key = newKey;
		drumObject.keyCode = drumObject.key.charCodeAt(0).toString();
		drumObject.legend.empty().append(drumObject.key.toString() + " - " + drumObject.name.toString());
	},
		resetAllKeys(){
		setNewDrumKey(conga, 'S');
		setNewDrumKey(cymbal, 'A');
		setNewDrumKey(bass, 'F');
		setNewDrumKey(bigtom, 'D');
		setNewDrumKey(smalltom, 'J');
		setNewDrumKey(hihat, 'L');
		setNewDrumKey(snare, 'K');
	}
};