function launch() {

	/*
		Create first window with Chrome API.
		ID of this window neecs to match name in manifest.json so it can connect to 
		OpenFin Runtime properly.
	*/
	chrome.app.window.create('window.html', {
		'id': 'OpenFin Chrome App',  // match name field in manifest.json
		'bounds': {
		  'width': 400,
		  'height': 200
		}
	});

}

chrome.app.runtime.onLaunched.addListener(launch);

console.log("OpenFin Chrome App started");
