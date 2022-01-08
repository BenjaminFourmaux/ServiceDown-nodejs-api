# ServiceDown_api
[![](https://badgen.net/badge/Node.JS/%3E%3D%2010.16.0/green)]()

Another one JS lib, to know if a service is down

## Get stated :rocket:
### installation
Before lanching, you need to install some package :
```
npm install axios
npm install cheerio
```

### Use
Use the function ``getServiceStatus()`` with the service name to get the service status. You received a JSON responce :
```
{
  service_name : "Facebook",
  service_status : "warning",
  status_cause : "login and website",
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
- [ ] Get report numbers (max, min, average, now)
- [ ] Add multi-country service down ?

## Version
[![](https://badgen.net/github/tag/BenjaminFourmaux/ServiceDown_api?cache=600)](https://github.com/BenjaminFourmaux/ServiceDown_api/tags) [![](https://badgen.net/github/release/BenjaminFourmaux/ServiceDown_api?cache=600)](https://github.com/BenjaminFourmaux/ServiceDown_api/releases)

- **v1.2.0** : Add statut cause to the responde object [more imformation](CHANGELOG.md#one-v120)
- **v1.1.0** : Add service name to the response object and get the statut of a service by his canonic name [more imformation](CHANGELOG.md#one-v110)
- **v1.0.0** : First one release ! You can now get the status of an service [more imformation](CHANGELOG.md#one-v100)

## Contributor
[![](https://badgen.net/github/contributors/BenjaminFourmaux/ServiceDown_api)](https://github.com/BenjaminFourmaux/ServiceDown_api/graphs/contributors)
- :crown: [Benjamin Fourmaux](https://github.com/BenjaminFourmaux)

## Supporting
If you like this project and if you want, make a donnation

[![](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)]()




[![](http://ForTheBadge.com/images/badges/built-with-love.svg)]()
