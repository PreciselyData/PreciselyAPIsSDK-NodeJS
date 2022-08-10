/**
 * Precisely APIs
 * Enhance & enrich your data, applications, business processes, and workflows with rich location, information, and identify APIs.
 *
 * The version of the OpenAPI document: 12.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { GeoLocationAccessPoint } from '../model/geoLocationAccessPoint';
import { GeoLocationIpAddr } from '../model/geoLocationIpAddr';

import { ObjectSerializer, Authentication, Interceptor } from '../model/models';
import { OAuth,oAuthCredInfo } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.precisely.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum GeolocationServiceApiApiKeys {
}

export class GeolocationServiceApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;
	protected authentications : OAuth;
    protected  oAuthCred : oAuthCredInfo;

	protected interceptors: Interceptor[] = [];
    constructor(oAuthObj: oAuthCredInfo);
    constructor(oAuthObj: oAuthCredInfo,basePath?: string)
    {
    if(oAuthObj)
    {
    this.oAuthCred=oAuthObj;
    }
    if (basePath) {
    this._basePath = basePath;
    }
    }
    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: GeolocationServiceApiApiKeys, value: string) {
        this.authentications[GeolocationServiceApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.objOAuthCredInfo.access_token = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * This service accepts an IP address and returns the location coordinates corresponding to that IP address.
     * @summary Location By IP Address.
     * @param ipAddress This is the ip address of network connected device. It must be a standard IPv4 octet and a valid external address.
     */
    public async getLocationByIPAddress (ipAddress: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GeoLocationIpAddr;  }> {
        const localVarPath = this._basePath + '/geolocation/v1/location/byipaddress';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/xml', 'application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'ipAddress' is not null or undefined
        if (ipAddress === null || ipAddress === undefined) {
            throw new Error('Required parameter ipAddress was null or undefined when calling getLocationByIPAddress.');
        }

        if (ipAddress !== undefined) {
            localVarQueryParameters['ipAddress'] = ObjectSerializer.serialize(ipAddress, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        

   //return this.authentications.oAuth2Password.applyToRequest()
    //.then((data)=>{

       // this.authentications.default.applyToRequest(localVarRequestOptions);
        localVarRequestOptions.headers = {"authorization":"Bearer " + this.oAuthCred.access_token};
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        return new Promise<{ response: http.IncomingMessage; body: GeoLocationIpAddr;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject(response);
                    }
                }
            });
        });


   /* })
    .catch((error) =>{
    return Promise.reject(error);
    });*/
    }
    /**
     * This service accepts a WiFi access point MAC address and returns the location coordinates corresponding to that access point. Only mac or accessPoint are mandatory parameters (one of them has to be provided), rest are optional.
     * @summary Location by WiFi Access Point.
     * @param mac This should be the 48 bit mac address (or BSSID) of wireless access point. Accepted format is Six groups of two hexadecimal digits, separated by hyphens (-) or colons.
     * @param ssid The service set identifier for wi-fi access point. It should be alphanumeric with maximum 32 characters.
     * @param rsid This is the received signal strength indicator from particular wi-fi access point. It should be a number from -113 to 0 and the unit of this strength is dBm.
     * @param speed This is the connection speed for wi-fi. It should be a number from 0 to 6930 and the unit should be Mbps.
     * @param accessPoint This is the JSON based list of wifi access points in the vicinity of device to be located. This parameter is helpful in case, multiple wifi points are visible and we want to make sure that the location of device is best calculated considering all the access points location.
     */
    public async getLocationByWiFiAccessPoint (mac?: string, ssid?: string, rsid?: string, speed?: string, accessPoint?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GeoLocationAccessPoint;  }> {
        const localVarPath = this._basePath + '/geolocation/v1/location/byaccesspoint';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/xml', 'application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (mac !== undefined) {
            localVarQueryParameters['mac'] = ObjectSerializer.serialize(mac, "string");
        }

        if (ssid !== undefined) {
            localVarQueryParameters['ssid'] = ObjectSerializer.serialize(ssid, "string");
        }

        if (rsid !== undefined) {
            localVarQueryParameters['rsid'] = ObjectSerializer.serialize(rsid, "string");
        }

        if (speed !== undefined) {
            localVarQueryParameters['speed'] = ObjectSerializer.serialize(speed, "string");
        }

        if (accessPoint !== undefined) {
            localVarQueryParameters['accessPoint'] = ObjectSerializer.serialize(accessPoint, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        

   //return this.authentications.oAuth2Password.applyToRequest()
    //.then((data)=>{

       // this.authentications.default.applyToRequest(localVarRequestOptions);
        localVarRequestOptions.headers = {"authorization":"Bearer " + this.oAuthCred.access_token};
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        return new Promise<{ response: http.IncomingMessage; body: GeoLocationAccessPoint;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject(response);
                    }
                }
            });
        });


   /* })
    .catch((error) =>{
    return Promise.reject(error);
    });*/
    }
}
