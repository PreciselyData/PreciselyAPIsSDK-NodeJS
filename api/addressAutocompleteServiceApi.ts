/**
 * Precisely APIs
 * Enhance & enrich your data, applications, business processes, and workflows with rich location, information, and identify APIs.
 *
 * The version of the OpenAPI document: 12.0.1
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
import { TypeaheadLocations } from '../model/typeaheadLocations';

import { ObjectSerializer, Authentication, Interceptor } from '../model/models';
import { OAuth,oAuthCredInfo } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.precisely.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AddressAutocompleteServiceApiApiKeys {
}

export class AddressAutocompleteServiceApi {
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

    public setApiKey(key: AddressAutocompleteServiceApiApiKeys, value: string) {
        this.authentications[AddressAutocompleteServiceApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.objOAuthCredInfo.access_token = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Performs search to retrieve list of places by input text and location vicinity.
     * @summary Address Autocomplete Search
     * @param searchText The input to be searched.
     * @param latitude Latitude of the location. We need to make sure that either Lat/Lng or Country is provided to API
     * @param longitude Longitude of the location. We need to make sure that either Lat/Lng or Country is provided to API
     * @param searchRadius Radius range within which search is performed.
     * @param searchRadiusUnit Radius unit such as Feet, Kilometers, Miles or Meters.
     * @param maxCandidates Maximum number of POIs that can be retrieved.
     * @param country Country ISO code. We need to make sure that either Lat/Lng or Country is provided to API
     * @param matchOnAddressNumber Option so that we force api to match on address number
     * @param autoDetectLocation Option to allow API to detect origin of API request automatically
     * @param ipAddress 
     * @param areaName1 State province of the input to be searched
     * @param areaName3 City of the input to be searched
     * @param postCode Postal Code of the input to be searched
     * @param returnAdminAreasOnly if value set \&#39;Y\&#39; then it will only do a matching on postcode or areaName1, areaName2, areaName3 and areaName4 fields in the data
     * @param includeRangesDetails if value set \&#39;Y\&#39; then display all unit info of ranges, if value set \&#39;N\&#39; then don\&#39;t show ranges
     * @param searchType Preference to control search type of interactive requests.
     * @param searchOnAddressNumber Preference to search on address number.
     */
    public async searchV2 (searchText: string, latitude?: string, longitude?: string, searchRadius?: string, searchRadiusUnit?: string, maxCandidates?: string, country?: string, matchOnAddressNumber?: string, autoDetectLocation?: string, ipAddress?: string, areaName1?: string, areaName3?: string, postCode?: string, returnAdminAreasOnly?: string, includeRangesDetails?: string, searchType?: string, searchOnAddressNumber?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TypeaheadLocations;  }> {
        const localVarPath = this._basePath + '/typeahead/v1/locations';
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

        // verify required parameter 'searchText' is not null or undefined
        if (searchText === null || searchText === undefined) {
            throw new Error('Required parameter searchText was null or undefined when calling searchV2.');
        }

        if (searchText !== undefined) {
            localVarQueryParameters['searchText'] = ObjectSerializer.serialize(searchText, "string");
        }

        if (latitude !== undefined) {
            localVarQueryParameters['latitude'] = ObjectSerializer.serialize(latitude, "string");
        }

        if (longitude !== undefined) {
            localVarQueryParameters['longitude'] = ObjectSerializer.serialize(longitude, "string");
        }

        if (searchRadius !== undefined) {
            localVarQueryParameters['searchRadius'] = ObjectSerializer.serialize(searchRadius, "string");
        }

        if (searchRadiusUnit !== undefined) {
            localVarQueryParameters['searchRadiusUnit'] = ObjectSerializer.serialize(searchRadiusUnit, "string");
        }

        if (maxCandidates !== undefined) {
            localVarQueryParameters['maxCandidates'] = ObjectSerializer.serialize(maxCandidates, "string");
        }

        if (country !== undefined) {
            localVarQueryParameters['country'] = ObjectSerializer.serialize(country, "string");
        }

        if (matchOnAddressNumber !== undefined) {
            localVarQueryParameters['matchOnAddressNumber'] = ObjectSerializer.serialize(matchOnAddressNumber, "string");
        }

        if (autoDetectLocation !== undefined) {
            localVarQueryParameters['autoDetectLocation'] = ObjectSerializer.serialize(autoDetectLocation, "string");
        }

        if (ipAddress !== undefined) {
            localVarQueryParameters['ipAddress'] = ObjectSerializer.serialize(ipAddress, "string");
        }

        if (areaName1 !== undefined) {
            localVarQueryParameters['areaName1'] = ObjectSerializer.serialize(areaName1, "string");
        }

        if (areaName3 !== undefined) {
            localVarQueryParameters['areaName3'] = ObjectSerializer.serialize(areaName3, "string");
        }

        if (postCode !== undefined) {
            localVarQueryParameters['postCode'] = ObjectSerializer.serialize(postCode, "string");
        }

        if (returnAdminAreasOnly !== undefined) {
            localVarQueryParameters['returnAdminAreasOnly'] = ObjectSerializer.serialize(returnAdminAreasOnly, "string");
        }

        if (includeRangesDetails !== undefined) {
            localVarQueryParameters['includeRangesDetails'] = ObjectSerializer.serialize(includeRangesDetails, "string");
        }

        if (searchType !== undefined) {
            localVarQueryParameters['searchType'] = ObjectSerializer.serialize(searchType, "string");
        }

        if (searchOnAddressNumber !== undefined) {
            localVarQueryParameters['searchOnAddressNumber'] = ObjectSerializer.serialize(searchOnAddressNumber, "string");
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

        return new Promise<{ response: http.IncomingMessage; body: TypeaheadLocations;  }>((resolve, reject) => {
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
