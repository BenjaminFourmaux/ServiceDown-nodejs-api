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
const configFile = require('./config');

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
		this.config = configFile.config;
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
	*	@Param string serviceCN : Service Canonic Name (like amazon, facebook, primevideo ...)
	*	@Return Object A JSON Object contaign service status
	**/
	async getServiceStatus(serviceCN, country = "DEFAULT"){
		var serviceInfo = this.getServiceInfoByCN(serviceCN);
		
		if (serviceInfo != null){
			if (serviceInfo.country.includes(country.toUpperCase()) || (country == "DEFAULT" && serviceInfo.country.includes("US") )){
			
				// Send request to get the service status
				try {
					const response = await axios.get(this.getUrl(country)+serviceInfo.slug);
					
					// Fetch response (with cheerio) to get informations
					const html = response.data;
					const $ = cheerio.load(html, null, false);
					
					var statusCause = this.getStatusCause($(".service-status-alert-box .status-summary").text());
					
					
					if ($(".service-status-alert-box").hasClass('service-status-alert-normal')) { // is Good
						
						// Create return response object
						var obj = {
							"service_name" : serviceInfo.name,
							"service_status" : ServiceStatut.OK,
							"status_cause" : statusCause,
							"country" : country,
							"src" : response.config.url,
							"datetime" : new Date()
						}
						
					} else if ($(".service-status-alert-box").hasClass('service-status-alert-some')) { // is Warning
					
						// Create return response object
						var obj = {
							"service_name" : serviceInfo.name,
							"service_status" : ServiceStatut.WARNING,
							"status_cause" : statusCause,
							"country" : country,
							"src" : response.config.url,
							"datetime" : new Date()
						}
						
					} else if ($(".service-status-alert-box").hasClass('service-status-alert-major')) { // is Error
					
						// Create return response object
						var obj = {
							"service_name" : serviceInfo.name,
							"service_status" : ServiceStatut.ERROR,
							"status_cause" : statusCause,
							"country" : country,
							"src" : response.config.url,
							"datetime" : new Date()
						}
						
					} else { // is None
						
						// Create return response object
						var obj = {
							"service_name" : serviceInfo.name,
							"service_status" : ServiceStatut.NONE,
							"status_cause" : statusCause,
							"country" : country,
							"src" : response.config.url,
							"datetime" : new Date()
						}
					}
					
					
					return obj;
					
				} catch (error) {
					console.error(error);
				}
			} else {
				return {
					"error" : "This sevice is not available on this country"
				};
			}
			
		} else {
			return {
				"error" : "This service doesn't exist"
			};
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
	getUrl(country){
		return this.config.api.protocol + this.config.api.domain + this.getDomainExtension(country);
	}
	
	/**
	*	Function to get the list of all services available
	*	
	*/
	getServiceList(){
		return configFile.servicesList;
	}
	
	
	/**
	*	Function to get the service real name by name
	*	@Param string ServiceName : Service Name
	*	@Return string : Service real name
	**/
	getServiceInfoByCN(serviceCN) {
		let info = null;
		serviceCN = serviceCN.toUpperCase();
		
		// Browse object keys
		Object.values(configFile.servicesList).forEach((value) => {
			if (value.canonicName == serviceCN){
				info = value.serviceInfo;
			}
		});
		
		return info;
	}
	
	getDomainExtension(country){
		for(var i = 0; i < this.config.country.length; i++){
			if(country.toUpperCase() == this.config.country[i][0]) {
				return this.config.country[i][1];
			}
		}
		return ".com";
	}
	
	getStatusCause(summary){
		let cause = summary.split(':');
		
		if (cause[1] != null){ // Warning & Error
			return cause[1].slice(1,-1);
		} else { // All good
			return "Everything is ok";
		}
	}
	
}