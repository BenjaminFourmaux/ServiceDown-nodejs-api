# Changelog
[![](https://badgen.net/github/tag/BenjaminFourmaux/ServiceDown_api?cache=600)]() [![](https://badgen.net/github/release/BenjaminFourmaux/ServiceDown_api?cache=600)]() [![](https://badgen.net/github/branches/BenjaminFourmaux/ServiceDown_api)]() [![](https://badgen.net/github/releases/BenjaminFourmaux/ServiceDown_api)]() [![](https://badgen.net/github/tags/BenjaminFourmaux/ServiceDown_api)]()

## v1.6.0
### Adding
 - Add new function ``getLatestReportsCities()`` to get latest reports of cities.
 - Add new property in the Reponse ``latest_reports_citie`` to get latest reports of cities. It's an array of object : ``{ city: string, country: string, reason_tag: string, last_time: date }`` 

### Modified
 - Code refactor

## v1.5.0
### Adding
 - Add new property in the Response: ``status_report_stats`` for get some metrics about the service
 - Add "FR" servicesList
 - Add new function ``getDoughtnutList()`` to find in DOM element doughtnutlist and get the new metrics data (most repporting)
 - Add new function ``getDomainExtension()`` to get domaine extension by the canonic name from config
 - Add function ``getServiceInfoByCN()`` to get service by his canonic name

### Modified 
 - Structure of JSON Config file (add api domaine, protocol, name... and add franch services in list)
 - Modified : ``getServiceStatus()``, ``getServiceList()``,  ``getUrl()`` to corresponding with the new config file
 - Code refactor

### Deleting
 - Remove functions: ``getServiceCN()``, ``getServiceName()`` and ``getServicePath()`` => useless

## V1.2.0
### Adding
 - Add new function ``getStatusCause()`` to get the cause of the status

### Changing
 - Get status-summary from DOM element
 - API response frame (in order : service_name, service_status, status_cause, country, src, datetime)

### Changing
nothing has been change

## V1.1.0
### Adding
 - Add new property "service_name" in the response to get the service real name (like "Disney +")
 - Add new fonction ``getServiceName()`` to get the real name of a service with his canonic name 

### Changing
 - Ue the serviceCN (service canonic name : cn = DISNEYPLUS ; realName = "Disney +") to call a service
 - API response frame (in order : service_name, service_status, country, src, datetime)
 - Change list of service on ``services_list.js`` format : CN : \[realName, path]

### Deleting
nothing has been deleted

## :one: V1.0.0
### Adding
 - Create the class ``ServiceDown_api``
 - Create the function ``getServiceStatus()`` to get the status of a service
 - Fill the available services list
 - Addition of several functions to make it work

### Changing
nothing has been change

### Deleting
nothing has been deleted
