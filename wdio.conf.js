exports.config = {
path: "/wd/hub",
 
capabilities: [{
    
    
	"browserName": "Chrome",
	"browserVersion": "117.0",
	"LT:Options": {
        "build":"webdriverio",
		"username": "<your lambdatest username>",
		"accessKey": "<your lambdatest accesskey>",
		"platformName": "Windows 10",
		"project": "Untitled",
		"w3c": true,
		"plugin": "node_js-webdriverio"
	}
},
{
	"browserName": "Firefox",
	"browserVersion": "116.0",
	"LT:Options": {
		"username": "<your lambdatest username>",
		"accessKey": "<your lambdatest accesskey>",
		"platformName": "Windows 10",
		"project": "Untitled",
		"w3c": true,
		"plugin": "node_js-webdriverio"
	}
},
{
	"browserName": "Firefox",
	"browserVersion": "114.0",
	"LT:Options": {
		"username": "<your lambdatest username>",
		"accessKey": "<your lambdatest accesskey>",
		"platformName": "macOS Ventura",
		"project": "Untitled",
		"w3c": true,
		"plugin": "node_js-webdriverio"
	}
},
{
	"browserName": "Internet Explorer",
	"browserVersion": "11.0",
	"LT:Options": {
		"username": "<your lambdatest username>",
		"accessKey": "<your lambdatest accesskey>",
		"platformName": "Windows 11",
		"project": "Untitled",
		"w3c": true,
		"plugin": "node_js-webdriverio"
	}
}],
    specs: [
        './test/specs/**/*.js'
    ],
    coloredLogs: true,
    hostname: "hub.lambdatest.com",
    port: 80,
    baseUrl: "",
    service: "selenium-standalone"
}
