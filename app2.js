/**
 Included by window2.html
**/


(function () {
	'use strict';
 	var openfinToken, openfinPort;  // passed in as query parameters by app.js

 	/**
 		Parse openfinToken and openfinPort from query parameters
 	**/
 	function getConfig() {
	 	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i+=1) {
	  		var hash = hashes[i].split('=');
	  		if (hash[0] === "openfintoken") {
	  			openfinToken = hash[1];
	  			console.log("got token", openfinToken);
	  		}
	  		else if (hash[0] === "openfinport") {
	  			openfinPort = hash[1];
	  			console.log("got port", openfinPort);
	  		}
		}     	
	}

	/**
		Initialize connection to OpebnFin Runtime		
	**/
    function initOpenFin() {
     	getConfig();
  		if (openfinPort && openfinPort) {
			// Initialize connection with OpenFin Runtime
			console.log("Connecting to OpenFin with token", openfinToken, "port", openfinPort);

			// connect to OpenFin Runtime with the token and port passed in by app.js
	        var config = {
	            token: openfinToken,
	            app_uuid: chrome.app.window.current().id,
	            name: chrome.app.window.current().id,
	            port: openfinPort
	        };
	        fin.desktop.connect(config);

			// Initialize adapter to OpebnFin Runtime
			fin.desktop.main(function() {
				console.log("Connected to OpenFin Runtime");
				// Create a notification with OpenFin API when connected to OpenFin Runtime
				createOFNotification();
			});
		} else {
			console.error("openfinPort and openfinPort not defined")
		}
	}

	// Create Notification with OpenFin API
	function createOFNotification() {

		var id = chrome.app.window.current()
	        var notification = new fin.desktop.Notification({
	            url: 'http://demoappdirectory.openf.in/desktop/config/apps/OpenFin/HelloOpenFin/views/notification.html',
	            message: 'From ' + chrome.app.window.current().id
	        });		
	}

	document.addEventListener('DOMContentLoaded', function() {
		initOpenFin();
	});

}) ();