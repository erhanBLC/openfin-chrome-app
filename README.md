# openfin-chrome-app
Example of Chrome app in OpenFin Runtime

This is an example of integration between Chrome app and OpenFin Runtime.


## Run the example

1. Install Hello OpenFin app from http://www.openfin.co/app-gallery.html

2. Clone this project

3. Edit app.json and change "path" under "extensions" to the current directory

4. Edit run.bat and change path of app.json to the current directory 

5. Run run.bat to start Hello OpenFin app and the example Chrome app.


## Source

background.js: backgroupd script for the Chrome app
manifest.json: mannifest for the Chrome app
window.html: main window of the Chrome app. Opened by background.js
app.js: included by window.html
window2.html: additional windows opened by window.html
app2.js: included by window2.html
app.json:  OpenFin application configuration file used by OpenFinRVM
OpenFinRVM.exe: OpenFin RVM
run.bat: script to run this example.


## Guidelines

1. To be loaded in OpenFin Runtime, a Chrome app needs to be defined in extensions section of app config json file.  The section defines an array of name and path pair of multiple extensions.  Please see app.json in this project as an example

2. If a Chrome app needs to connect to OpenFin Runtime with OpenFin Javascript adapter, it need create the first window with id matching the name defined in manifest.json.  If any additional window need to connect to OpenFin Runtime, it needs to be craeted by the first window by requesting an authorization token first.  Please see app.js in this project for example code.

3. All window APIs in fin.desktop.Window in OpenFin Javascript adapter do NOT work for Chrome windows created with chrome.app.window.create.


## Getting help

Please contact support@openfin.co.
