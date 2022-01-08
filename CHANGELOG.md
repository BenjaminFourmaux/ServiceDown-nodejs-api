# Changelog
[![](https://badgen.net/github/release/BenjaminFourmaux/ServiceDown_api?cache=600)]() [![](https://badgen.net/github/branches/BenjaminFourmaux/ServiceDown_api)]() [![](https://badgen.net/github/releases/BenjaminFourmaux/ServiceDown_api)]() [![](https://badgen.net/github/tags/BenjaminFourmaux/ServiceDown_api)]()

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
