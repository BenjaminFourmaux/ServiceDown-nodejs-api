/*********************
	ServiceDown API
	@Description : JavaScript API, use istheservicedown.fr to get the status of services
	@Author : Benjamin Fourmaux -- Beruet
	@Version : 1.0
	@Date: 03/01/2022
**********************/

// import
const cheerio = require("cheerio");
const axios = require('axios');
const url = require('url');
const servicesList = require('./services_list');

const ServiceStatut = {
	OK : "ok",
	WARNING : "warning",
	ERROR : "error",
	NONE : "none",
}

/* Class */
module.exports = class ServiceDown_api {
	
	/**
	*	Response patern :
	*	{
	*		"service_status" : 	 ServiceStatut object
	*		"src" : "https://isservicedown.fr/status/{serviceName}"
	*		"datetime" : date // the datetime of the request
	*		'country" : "fr" | "com" | "co.uk" ....
	*	}
	**/
	
	constructor(){
		// All properties
		this.protocol = "https://";
		this.domainName = "istheservicedown";
		this.domain = ".fr";
		this._country = "fr";
		this.timeout = 10000; // request send every 10 secondes
		this.packageVersion = 1.0;
	}
	
	/** ---------- Getteur & Setteur ---------- **/
	// Comming soon for the multinational update :) 
	// set country(val) {
		// this._country = val;
	// }
	get country(){
		return this._country;
	}
	/** --------------------------------------- **/
	
	/**
	*	Function to get the status of a service
	*	@Param string serviceName : Service name (like amazon, facebook ...)
	*	@Return Object A JSON Object containg service status
	**/
	async getServiceStatus(serviceName){
		// Get the URL path of the service status
		var statusPath = this.getServicePath(serviceName);
		if (statusPath != "not available"){
			
			// Send request to get the service status
			try {
				const response = await axios.get(this.getUrl()+statusPath);
				
				// Fetch response (with cheerio) to get informations
				const html = response.data;
				const $ = cheerio.load(html, null, false);
				
				if ($(".service-status-alert-box").hasClass('service-status-alert-normal')) { // is Good
					
					// Create return response object
					var obj = {
						"service_status" : ServiceStatut.OK,
						"src" : response.config.url,
						"datetime" : new Date(),
						"country" : this._country
					}
					
				} else if ($(".service-status-alert-box").hasClass('service-status-alert-some')) { // is Warning
				
					// Create return response object
					var obj = {
						"service_status" : ServiceStatut.WARNING,
						"src" : response.config.url,
						"datetime" : new Date(),
						"country" : this._country
					}
					
				} else if ($(".service-status-alert-box").hasClass('service-status-alert-major')) { // is Error
				
					// Create return response object
					var obj = {
						"service_status" : ServiceStatut.ERROR,
						"src" : response.config.url,
						"datetime" : new Date(),
						"country" : this._country
					}
					
				} else { // is None
					
					// Create return response object
					var obj = {
						"service_status" : ServiceStatut.NONE,
						"src" : response.config.url,
						"datetime" : new Date(),
						"country" : this._country
					}
				}
				
				
				return obj;
				
			} catch (error) {
				console.error(error);
			}
			
		} else {
			return statusPath
		}
	}
	
	
	
	/**
	*	Function Ping for send a ping request to the services Status API
	**/
	async ping() {
		try {
			const response = await axios.get(this.getUrl()+"/status/facebook");
			
			if (response.status === 200){
				var obj = {
					"http_code" : response.status,
					"message" : "pong"
				}
			} else {
				var obj = {
					"http_code" : response.status,
					"message" : "..."
				}
			}
			
			return obj;
			
		} catch (error) {
			console.error(error);
		}
	}

	/**
	*	Get the url of the services status API
	**/
	getUrl(){
		return this.protocol + this.domainName + this.domain;
	}
	
	/**
	*	Function to get the list of all services available
	*	
	*/
	getServiceList(){
		return servicesList;
	}
	
	/**
	*	Function to get the service url path by name
	*	@Param string ServiceName : Service Name
	*	@Return string : Service url path
	**/
	getServicePath(serviceName) {
		let urlPath = "not available";
		// Browse object keys
		Object.keys(servicesList).forEach((key) => {
			if (key == serviceName.toUpperCase()){
				urlPath = servicesList[key];
			}
		});
		
		return urlPath;
	}
	
	/**
	*	Function to get the name of the service by the url path
	*	@Param string servicePath : Service path
	*	@Return string : Service name
	**/
	getServiceName(servicePath){
		return Object.keys(servicesList).find(key => servicesList[key] === servicePath);
	}
	
}