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

export class TaxRateAddress {
    'objectId'?: string;
    'displayName'?: string;
    'streetSide'?: string;
    'businessName'?: string;
    'addressLine1'?: string;
    'addressLine2'?: string;
    'addressLine3'?: string;
    'city'?: string;
    'stateProvince'?: string;
    'county'?: string;
    'postalCode'?: string;
    'latitude'?: string;
    'longitude'?: string;
    'status'?: string;
    'urbanizationName'?: string;
    'formattedAddress'?: string;
    'mainAddressLine'?: string;
    'addressLastLine'?: string;
    'placeName'?: string;
    'areaName1'?: string;
    'areaName2'?: string;
    'areaName3'?: string;
    'areaName4'?: string;
    'postCode'?: string;
    'postCode1'?: string;
    'postCodeExt'?: string;
    'country'?: string;
    'addressNumber'?: string;
    'streetName'?: string;
    'unitType'?: string;
    'unitValue'?: string;
    'distanceUnits'?: string;
    'bufferWidth'?: string;
    'userBufferWidth'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objectId",
            "baseName": "objectId",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "streetSide",
            "baseName": "streetSide",
            "type": "string"
        },
        {
            "name": "businessName",
            "baseName": "businessName",
            "type": "string"
        },
        {
            "name": "addressLine1",
            "baseName": "addressLine1",
            "type": "string"
        },
        {
            "name": "addressLine2",
            "baseName": "addressLine2",
            "type": "string"
        },
        {
            "name": "addressLine3",
            "baseName": "addressLine3",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "stateProvince",
            "baseName": "stateProvince",
            "type": "string"
        },
        {
            "name": "county",
            "baseName": "county",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string"
        },
        {
            "name": "latitude",
            "baseName": "latitude",
            "type": "string"
        },
        {
            "name": "longitude",
            "baseName": "longitude",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "urbanizationName",
            "baseName": "urbanizationName",
            "type": "string"
        },
        {
            "name": "formattedAddress",
            "baseName": "formattedAddress",
            "type": "string"
        },
        {
            "name": "mainAddressLine",
            "baseName": "mainAddressLine",
            "type": "string"
        },
        {
            "name": "addressLastLine",
            "baseName": "addressLastLine",
            "type": "string"
        },
        {
            "name": "placeName",
            "baseName": "placeName",
            "type": "string"
        },
        {
            "name": "areaName1",
            "baseName": "areaName1",
            "type": "string"
        },
        {
            "name": "areaName2",
            "baseName": "areaName2",
            "type": "string"
        },
        {
            "name": "areaName3",
            "baseName": "areaName3",
            "type": "string"
        },
        {
            "name": "areaName4",
            "baseName": "areaName4",
            "type": "string"
        },
        {
            "name": "postCode",
            "baseName": "postCode",
            "type": "string"
        },
        {
            "name": "postCode1",
            "baseName": "postCode1",
            "type": "string"
        },
        {
            "name": "postCodeExt",
            "baseName": "postCodeExt",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "addressNumber",
            "baseName": "addressNumber",
            "type": "string"
        },
        {
            "name": "streetName",
            "baseName": "streetName",
            "type": "string"
        },
        {
            "name": "unitType",
            "baseName": "unitType",
            "type": "string"
        },
        {
            "name": "unitValue",
            "baseName": "unitValue",
            "type": "string"
        },
        {
            "name": "distanceUnits",
            "baseName": "distanceUnits",
            "type": "string"
        },
        {
            "name": "bufferWidth",
            "baseName": "bufferWidth",
            "type": "string"
        },
        {
            "name": "userBufferWidth",
            "baseName": "userBufferWidth",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TaxRateAddress.attributeTypeMap;
    }
}

