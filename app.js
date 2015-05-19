/**
 Included by window.html
**/

(function () {
	'use strict';

	var openfinPort;  // port used by OpenFin Runtime

	document.getElementById('notificationButton').addEventListener('click', createNotification);
	var idSeq = 1;
	/**
	   Create Notification with Chrome API
	**/
	function createNotification() {
		var nid = 'notification-' + idSeq;
		idSeq += 1;
		chrome.notifications.create(nid, {
	        type: 'basic',
	        iconUrl: 'openfin.ico',
	        title: 'Chrome Notification',
	        message: 'Notification ' + nid
	     }, function(notificationId) {
	     	console.log("Chrome notification created", notificationId);
	     });
	}

	var windowIdSeq = 1;  // used to create unique name for windows
	document.getElementById('newWindowButton').addEventListener('click', createChromeWindow);
	/**
		Create window with Chrome API
	**/
	function createChromeWindow() {
		var windowId = 'Chrome App Window' + windowIdSeq;  // uuid and name of new window
		windowIdSeq += 1;

		// request/register an auth token from OpenFin Runtime for the new window
		fin.desktop.System.registerExternalConnection({id: windowId}, function(evt) {
			// token returned as evt.token.  Pass the token and port number to the new window as query parameters
			chrome.app.window.create('window2.html?openfintoken='+evt.token+'&openfinport='+openfinPort, {
				'id': windowId,
				'bounds': {
				  'width': 400,
				  'height': 200
				}
			});		
		});
	}

	/**
		Initialize adapter to OpebnFin Runtime
	**/
	fin.desktop.main(function() {
		console.log("Connected to OpenFin Runtime");
		document.getElementById('notificationOFButton').addEventListener('click', createOFNotification);

		chrome.desktop.getDetails(function(details) { 
			openfinPort = details.port; 
			} 
		);

	});

	/**
		Create Notification with OpenFin API
	**/
	function createOFNotification() {
        var notification = new fin.desktop.Notification({
            url: 'http://demoappdirectory.openf.in/desktop/config/apps/OpenFin/HelloOpenFin/views/notification.html',
            message: 'Notification from chrome app'
        });		
	}

}) ();