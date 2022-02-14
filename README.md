# ServiceDown-nodejs-api
[![](https://badgen.net/badge/Node.JS/%3E%3D%2010.16.0/green)]()
[![](https://badgen.net/badge/Down/detector/red)]()

Another one JS lib, to know if a service is down.
I want to make services status information **open data**.
With a whole bunch of metrics like the number of reports, average report, in which region ...

### Disclaimer
This api is based on the website [Is The Service Down ?](https://istheservicedown.com/), is a bug reporting website, considered the data unreliable at 100%
And please not abused to spam ping request the website.

## Get stated :rocket:
### installation
Before lanching, you need to install some package :
```
npm install axios
npm install cheerio
```
Place the unzipped folder "ServiceDown-js-apî" at your project root
Call this lib in your js file like that :
```
const ServiceDown_api = require('./ServiceDown-js-api/lib/ServiceDown_api.js');
const API = new ServiceDown_api();
```
and enjoy !

### Use
Use the function ``getServiceStatus()`` in a asynchronous callback, with the service name to get the service status and the country (by default is .com pinged). 
```
(async () => {
  serviceStatus = await API.getServiceStatus("facebook", "fr");
}) ()
```
You received a JSON responce :
```
{
  service_name : "Facebook",
  service_status : "warning",
  status_cause : "login and website",
  status_report_stats: {
    0 : { name : "Internet", purcent : "30" },
    1 : { name : "Wi-Fi", purcent : "25" },
    ...
  },
  country : "fr",
  src : "https://istheservicedown.fr/statut/facebook",
  datetime : 2022-01-03T10H00:00.000Z
}
```

## Roadmap
- [x] Send a request to get a service statut
- [x] Define status (Down, Ok, Warning, None)
- [x] Response return the service name that we have just ask
- [x] Response return the cause of the status of the service we have just ask 
- [x] Metrics: report stats info
- [ ] Get report numbers (max, min, average, now)
- [ ] Get down area (city and number of report)
- [x] Add multi-country service down ?
- [ ] Sort services by category (stream, bank, hoster...)

## Version
[![](https://badgen.net/github/tag/BenjaminFourmaux/ServiceDown-js-api?cache=600)](https://github.com/BenjaminFourmaux/ServiceDown-js-api/tags) [![](https://badgen.net/github/release/BenjaminFourmaux/ServiceDown-js-api?cache=600)](https://github.com/BenjaminFourmaux/ServiceDown-js-api/releases)

- **v1.5.0** : "i18n" Change config file and add report stats info in the response [more information](CHANGELOG.md#one-v150)
- **v1.2.0** : Add statut cause to the responde object [more imformation](CHANGELOG.md#one-v120)
- **v1.1.0** : Add service name to the response object and get the statut of a service by his canonic name [more imformation](CHANGELOG.md#one-v110)
- **v1.0.0** : First one release ! You can now get the status of an service [more imformation](CHANGELOG.md#one-v100)

## Contributor
[![](https://badgen.net/github/contributors/BenjaminFourmaux/ServiceDown-js-api)](https://github.com/BenjaminFourmaux/ServiceDown-js-api/graphs/contributors)
- :crown: [Benjamin Fourmaux](https://github.com/BenjaminFourmaux)

## Supporting
If you like this project and if you want, make a donnation

[![](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://streamlabs.com/techben-googlefanfr)




[![](http://ForTheBadge.com/images/badges/built-with-love.svg)]()
