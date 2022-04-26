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

import { RequestFile } from './models';
import { AddressType } from './addressType';
import { Geometry } from './geometry';

export class AddressesDTO {
    'pbKey'?: string;
    'addressNumber'?: string;
    'streetName'?: string;
    'unitType'?: string;
    'unitValue'?: string;
    'type'?: AddressType;
    'areaName1'?: string;
    'areaName2'?: string;
    'areaName3'?: string;
    'areaName4'?: string;
    'postCode'?: string;
    'postCodeExt'?: string;
    'country'?: string;
    'geometry'?: Geometry;
    'propertyType'?: string;
    'propertyTypeDescription'?: string;
    'parentPbKey'?: string;
    'geoId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pbKey",
            "baseName": "pbKey",
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
            "name": "type",
            "baseName": "type",
            "type": "AddressType"
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
            "name": "geometry",
            "baseName": "geometry",
            "type": "Geometry"
        },
        {
            "name": "propertyType",
            "baseName": "propertyType",
            "type": "string"
        },
        {
            "name": "propertyTypeDescription",
            "baseName": "propertyTypeDescription",
            "type": "string"
        },
        {
            "name": "parentPbKey",
            "baseName": "parentPbKey",
            "type": "string"
        },
        {
            "name": "geoId",
            "baseName": "geoId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AddressesDTO.attributeTypeMap;
    }
}
