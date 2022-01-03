/* test api*/

// import
const ServiceDown_api = require('../lib/ServiceDown_api.js');
const Api = new ServiceDown_api();


(async () => {
	/** Ping **/
	//result = await Api.ping();
	//console.log(result);
	
	/** Multinational update **/
	//Api.country = "com";
	//console.log(Api.getUrl());
	// Api.country = "fr";
	
	/** getServiceStatus **/
	result = await Api.getServiceStatus("tiktok");
	console.log(result);
	
	
	
	
})()
