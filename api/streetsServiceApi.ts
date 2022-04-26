/**
 * Precisely APIs
 * Enhance & enrich your data, applications, business processes, and workflows with rich location, information, and identify APIs.
 *
 * The version of the OpenAPI document: 11.9.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { ErrorInfo } from '../model/errorInfo';
import { IntersectionResponse } from '../model/intersectionResponse';
import { SpeedLimit } from '../model/speedLimit';

import { ObjectSerializer, Authentication, Interceptor } from '../model/models';
import { OAuth,oAuthCredInfo } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.precisely.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum StreetsServiceApiApiKeys {
}

export class StreetsServiceApi {
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

    public setApiKey(key: StreetsServiceApiApiKeys, value: string) {
        this.authentications[StreetsServiceApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.objOAuthCredInfo.access_token = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * This service accepts an address as input and returns the Nearest Intersection.
     * @summary Nearest Intesection By Address.
     * @param address Address
     * @param roadClass Filters roads with specified class, allowed values are (Major, Secondary, Other and All), default is All
     * @param driveTime Returns Intersection in specified drive time
     * @param driveTimeUnit Drive time unit, allowed values are (hours, minutes, seconds and milliseconds), default is minutes
     * @param searchRadius Search radius within which user wants to search, default is 50 miles
     * @param searchRadiusUnit Search radius unit, allowed values are (feet, meter, kilometers and miles)
     * @param historicSpeed Traffic flow in peak time, allowed values are (AMPEAK,PMPEAK,OFFPEAK,NIGHT)
     * @param maxCandidates max candidates to be returned default is 1
     */
    public async getIntersectionByAddress (address?: string, roadClass?: string, driveTime?: string, driveTimeUnit?: string, searchRadius?: string, searchRadiusUnit?: string, historicSpeed?: string, maxCandidates?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: IntersectionResponse;  }> {
        const localVarPath = this._basePath + '/streets/v1/intersection/byaddress';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'application/xml'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (address !== undefined) {
            localVarQueryParameters['address'] = ObjectSerializer.serialize(address, "string");
        }

        if (roadClass !== undefined) {
            localVarQueryParameters['roadClass'] = ObjectSerializer.serialize(roadClass, "string");
        }

        if (driveTime !== undefined) {
            localVarQueryParameters['driveTime'] = ObjectSerializer.serialize(driveTime, "string");
        }

        if (driveTimeUnit !== undefined) {
            localVarQueryParameters['driveTimeUnit'] = ObjectSerializer.serialize(driveTimeUnit, "string");
        }

        if (searchRadius !== undefined) {
            localVarQueryParameters['searchRadius'] = ObjectSerializer.serialize(searchRadius, "string");
        }

        if (searchRadiusUnit !== undefined) {
            localVarQueryParameters['searchRadiusUnit'] = ObjectSerializer.serialize(searchRadiusUnit, "string");
        }

        if (historicSpeed !== undefined) {
            localVarQueryParameters['historicSpeed'] = ObjectSerializer.serialize(historicSpeed, "string");
        }

        if (maxCandidates !== undefined) {
            localVarQueryParameters['maxCandidates'] = ObjectSerializer.serialize(maxCandidates, "string");
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

        return new Promise<{ response: http.IncomingMessage; body: IntersectionResponse;  }>((resolve, reject) => {
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
     * This service accepts latitude/longitude as input and returns the Nearest Intersection.
     * @summary Nearest Intesection By Location.
     * @param longitude Longitude of the location.
     * @param latitude Latitude of the location.
     * @param roadClass Filters roads with specified class, allowed values are (Major, Secondary, Other and All), default is All
     * @param driveTime Returns Intersection in specified drive time
     * @param driveTimeUnit Drive time unit, allowed values are (hours, minutes, seconds and milliseconds), default is minutes
     * @param searchRadius Search radius within which user wants to search, default is 50 miles
     * @param searchRadiusUnit Search radius unit, allowed values are (feet, meter, kilometers and miles)
     * @param historicSpeed Traffic flow in peak time, allowed values are (AMPEAK,PMPEAK,OFFPEAK,NIGHT)
     * @param maxCandidates max candidates to be returned default is 1
     */
    public async getIntersectionByLocation (longitude?: string, latitude?: string, roadClass?: string, driveTime?: string, driveTimeUnit?: string, searchRadius?: string, searchRadiusUnit?: string, historicSpeed?: string, maxCandidates?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: IntersectionResponse;  }> {
        const localVarPath = this._basePath + '/streets/v1/intersection/bylocation';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'application/xml'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (longitude !== undefined) {
            localVarQueryParameters['longitude'] = ObjectSerializer.serialize(longitude, "string");
        }

        if (latitude !== undefined) {
            localVarQueryParameters['latitude'] = ObjectSerializer.serialize(latitude, "string");
        }

        if (roadClass !== undefined) {
            localVarQueryParameters['roadClass'] = ObjectSerializer.serialize(roadClass, "string");
        }

        if (driveTime !== undefined) {
            localVarQueryParameters['driveTime'] = ObjectSerializer.serialize(driveTime, "string");
        }

        if (driveTimeUnit !== undefined) {
            localVarQueryParameters['driveTimeUnit'] = ObjectSerializer.serialize(driveTimeUnit, "string");
        }

        if (searchRadius !== undefined) {
            localVarQueryParameters['searchRadius'] = ObjectSerializer.serialize(searchRadius, "string");
        }

        if (searchRadiusUnit !== undefined) {
            localVarQueryParameters['searchRadiusUnit'] = ObjectSerializer.serialize(searchRadiusUnit, "string");
        }

        if (historicSpeed !== undefined) {
            localVarQueryParameters['historicSpeed'] = ObjectSerializer.serialize(historicSpeed, "string");
        }

        if (maxCandidates !== undefined) {
            localVarQueryParameters['maxCandidates'] = ObjectSerializer.serialize(maxCandidates, "string");
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

        return new Promise<{ response: http.IncomingMessage; body: IntersectionResponse;  }>((resolve, reject) => {
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
     * This service accepts point coordinates of a path as input and returns the posted speed limit of the road segment on which this path will snap.
     * @summary Nearest Speedlimit.
     * @param path Accepts multiple points which will be snapped to the nearest road segment. Longitude and Latitude will be comma separated (longitude,latitude) and Point Coordinates will be separated by semi-colon(;)
     */
    public async getNearestSpeedLimit (path?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: SpeedLimit;  }> {
        const localVarPath = this._basePath + '/streets/v1/speedlimit';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'application/xml'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (path !== undefined) {
            localVarQueryParameters['path'] = ObjectSerializer.serialize(path, "string");
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

        return new Promise<{ response: http.IncomingMessage; body: SpeedLimit;  }>((resolve, reject) => {
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