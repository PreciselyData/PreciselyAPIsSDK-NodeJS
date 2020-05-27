![Precisely](/precisely-logo-purple.jpg)

# Precisely APIs

### Description
[Precisely APIs ](https://ppd.developer.precisely.com/) Enrich your data, and enhance your applications, business processes and workflows with dozens of powerful location & identity APIs.

### Precisely APIs:

* [GeoCode](https://locate.pitneybowes.com/geocode): Converts addresses to location coordinates and vice versa. The GeoCode API returns latitude & longitude coordinates with the input of an address and vice versa. Useful for enhancing & enriching your customer addresses.

* [GeoSearch](https://locate.pitneybowes.com/geosearch): Returns an autocompleted list of addresses and places based on the input of a partial address. Useful for commercial developers and content providers, or anyone wanting to offer their own search.

* [GeoMap](https://locate.pitneybowes.com/geomap): Adds data and more atop Maps. Choose from three map styles - Iron, Bronze, and Steel.

* [GeoZone](https://locate.pitneybowes.com/geozone): Returns drive Distance and Drive Time Zones with the input of Location Coordinates or Addresses. Useful for anyone wanting to create smarter geofence zones for Local Engagement and Analysis.

* [GeoRoute](https://locate.pitneybowes.com/georoute): Returns Point-to-Point and Multi-Point Travel Directions by Various Travel Modes. Critical for any Simple or Complex Routing Requirement.

* [GeoEnrich](https://locate.pitneybowes.com/geoenrich ) : Returns addresses, place names, points-of-interest and timezones with the input of a location coordinate. Useful for enhancing & enriching your geo-tagged data.

* [GeoRisk](https://locate.pitneybowes.com/georisk): Returns critical risk intelligence with the input of Location Coordinates or Addresses. Critical for any Risk Mitigation Analyses involving threats to lives or property.

* [Geo911](https://locate.pitneybowes.com/geo911): Integrates Public Safety Answering Point (PSAP) administrative call routing information plus Authority Having Jurisdiction (AHJ) phone numbers into your 911 products and services. The Geo911 API retrieves 10-digit phone numbers and local contact info with the input of a location coordinate. Useful for emergency services administrators, call handlers, and dispatchers.

* [GeoLife](https://locate.pitneybowes.com/geolife) : Returns household demographics and lifestyle characteristics with the input of an address or location coordinate. Useful for data analysts and commercial and corporate developers building mobile apps and services.

* [GeoProperty](https://locate.pitneybowes.com/geoproperty)::  Property Details. Capture property details for analysis and planning. The GeoProperty API returns extensive property attributes with the input of address. Critical for any property investment, insurance or risk analysis and mitigation.

* [GeoTax](https://locate.pitneybowes.com/geotax): Returns local tax rates with the input of a location coordinate or an address. Critical for any billing, commerce, payment, or payroll application or service.

* [GeoComm](https://locate.pitneybowes.com/geocomm): Identifies Local Exchange Carrier presence with a Rate Center area. The GeoComm API retrieves Incumbent Local Exchange Carrier (ILEC) doing-business-as names with the input of an address. Useful for local telecommunications competitive intelligence, partnerships, and provisioning subscribers.

* [GeoTime](https://locate.pitneybowes.com/geotime): Local time. The GeoTime API returns timezones and UTC offsets with the input of a location coordinate or address. Useful for do-not-call, logistics, and customer engagement applications, business processes and workflows.

* [GeoLocation](http://locate.pitneybowes.com/geolocation): Device Location. The GeoLocation API returns location coordinates based on the input of an IP Address, WiFi Access point MAC address, Fixed line phone number and/or Wireless phone number. Useful for a variety of applications, business processes and workflows in eCommerce, Fraud Detection, Physical-Digital interactions, Field Service and more.

* [GeoPost](http://locate.pitneybowes.com/geopost): Accurate Postal Routing. The GeoPost API accepts an address or multiple addresses as inputs and returns US postal routing information including residential, commercial or PO Box delivery destinations. Critical for any direct mail marketing campaign.

* [GeoIdentity](http://locate.pitneybowes.com/geoidentity): Powerful, local socio-economic & affinity insights about your customer. Enrich shipping addresses with rich, localized Identity profiles, demographics, lifestyle segmentations, neighborhood names, property ownership & values, and social affinity insights. The GeoIdentity API returns all these data with the input of a Physical Address, Email Address, or Twitter handle. Useful for enhancing & enriching a wide variety of applications, business processes, or workflows.

* [GeoStreets](https://locate.pitneybowes.com/geostreets): Enrich your applications, business processes, and workflows with global street information including nearest intersections and more. GeoStreets accepts an address or location and returns nearest intersection information. Useful for enriching your data and/or analytics processes with footfall potential.


The following platforms are supported by Location Intelligence SDKs:
*	[Android](https://locate.pitneybowes.com/docs/location-intelligence/v1/en/index.html#Android%20SDK/android_intro.html)
*	[NodeJS]() 
*	[iOS](https://locate.pitneybowes.com/docs/location-intelligence/v1/en/index.html#iOS%20SDK/ios_intro.html)
*	[Java](https://locate.pitneybowes.com/docs/location-intelligence/v1/en/index.html#Java%20SDK/java_intro.html)
*	[C#](https://locate.pitneybowes.com/docs/location-intelligence/v1/en/index.html#C_sdk/java_intro.html)  

[Click here](https://locate.pitneybowes.com/docs/location-intelligence/v1/en/index.html) for detailed Documentation on Location Intelligence APIs 


# PreciselyAPIs NodeJS SDK
### Description
PreciselyAPIs NodeJS SDK facilitates you to build NodeJS applications using Precisely APIs.
### Getting Started
To get started with NodeJS SDK, you must first register at [Precisely APIs Home Page](https://developer.precisely.com/) and obtain your API Key and Secret to get started with the NodeJS SDK and call Precisely APIs.
For more information refer to [‘Getting Started with NodeJS SDK’](https://locate.pitneybowes.com/docs/location-intelligence/v1/en/index.html#NodeJS/node.js_sdk.html) section in documentation.


# PreciselyAPIsSDK-NodeJS

## Building Project

To build the project locally by downloading from GitHub

``` shell

npm install

npm run build

```
## Requirements

Building the API client library requires latest [NodeJS](https://nodejs.org/en/) to be installed.

## Installation

To install the API client library to your local project, simply execute:

```shell
npm install preciselyapis-client
```

To deploy it globally, simply execute:

```shell
npm install -g preciselyapis-client 
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following NodeJS code:

```js
//We are getting refrence to the installed preciselyapis-client package
const PreciselyAPINodeJS = require('preciselyapis-client');

try     {
    // Configure OAuth2 API_KEY and SECRET for authorization
    const oAuth = new PreciselyAPINodeJS.OAuth();
    oAuth.oAuthApiKey="API_KEY";
    oAuth.oAuthSecret="SECRET";


    oAuth.getOAuthCredentials().then((data) => {


        var _911PSAPServiceApi = new PreciselyAPINodeJS._911PSAPServiceApi(data.body);
		
        _911PSAPServiceApi.getAHJPlusPSAPByAddress("950 Josephine Street Denver CO 80204").then((response) => {
            console.log("Result " + JSON.stringify(response.body));
        }).catch((response) => {
            console.log("Error " + JSON.stringify(response.body));
        });
 }).catch((error) => {
        console.log("Error" + JSON.stringify(error))
    });
}
catch (error1) {
    console.log("Exception raised"+ error1);
}
```










