/* test api*/

// import
const ServiceDown_api = require('../lib/ServiceDown_api.js');
const Api = new ServiceDown_api();
const jsonFile = require('./test.json');
const configFile = require('../lib/config.json');

(async () => {
	/** Ping **/
	//result = await Api.ping();
	//console.log(result);
	
	/** Multinational update **/
	//Api.country = "com";
	//console.log(Api.getUrl());
	// Api.country = "fr";
	
	/** getServiceStatus **/
	result = await Api.getServiceStatus("free", "fr");
	console.log(result);
	
	/** test json file **/
	//console.log(jsonFile.country);
	
	/** refont config file **/
	// result = await Api.getServiceStatus("google", "fr");
	// console.log(result);
	//console.log(configFile.config.country.length);
	
	/** Get servicesList length **/
	// console.log('Number of services available:',configFile.servicesList.length);
	// console.log('In ' + (configFile.config.country.length -1) + ' countries');
	
})()
