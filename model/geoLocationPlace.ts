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

import { RequestFile } from './models';
import { City } from './city';
import { ConsistencyCode } from './consistencyCode';
import { GeoLocationCountry } from './geoLocationCountry';
import { GeoLocationState } from './geoLocationState';

export class GeoLocationPlace {
    'continent'?: string;
    'country'?: GeoLocationCountry;
    'consistencyCode'?: ConsistencyCode;
    'region'?: string;
    'state'?: GeoLocationState;
    'city'?: City;
    'postCode'?: string;
    'postCodeConfidence'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "continent",
            "baseName": "continent",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "GeoLocationCountry"
        },
        {
            "name": "consistencyCode",
            "baseName": "consistencyCode",
            "type": "ConsistencyCode"
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "GeoLocationState"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "City"
        },
        {
            "name": "postCode",
            "baseName": "postCode",
            "type": "string"
        },
        {
            "name": "postCodeConfidence",
            "baseName": "postCodeConfidence",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GeoLocationPlace.attributeTypeMap;
    }
}

