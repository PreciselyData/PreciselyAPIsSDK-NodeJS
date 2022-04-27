/**
 * Precisely APIs
 * Enhance & enrich your data, applications, business processes, and workflows with rich location, information, and identify APIs.
 *
 * The version of the OpenAPI document: 11.9.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class FieldsMatching {
    'matchOnAddressNumber'?: boolean;
    'matchOnPostCode1'?: boolean;
    'matchOnPostCode2'?: boolean;
    'matchOnAreaName1'?: boolean;
    'matchOnAreaName2'?: boolean;
    'matchOnAreaName3'?: boolean;
    'matchOnAreaName4'?: boolean;
    'matchOnAllStreetFields'?: boolean;
    'matchOnStreetName'?: boolean;
    'matchOnStreetType'?: boolean;
    'matchOnStreetDirectional'?: boolean;
    'matchOnPlaceName'?: boolean;
    'matchOnInputFields'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "matchOnAddressNumber",
            "baseName": "matchOnAddressNumber",
            "type": "boolean"
        },
        {
            "name": "matchOnPostCode1",
            "baseName": "matchOnPostCode1",
            "type": "boolean"
        },
        {
            "name": "matchOnPostCode2",
            "baseName": "matchOnPostCode2",
            "type": "boolean"
        },
        {
            "name": "matchOnAreaName1",
            "baseName": "matchOnAreaName1",
            "type": "boolean"
        },
        {
            "name": "matchOnAreaName2",
            "baseName": "matchOnAreaName2",
            "type": "boolean"
        },
        {
            "name": "matchOnAreaName3",
            "baseName": "matchOnAreaName3",
            "type": "boolean"
        },
        {
            "name": "matchOnAreaName4",
            "baseName": "matchOnAreaName4",
            "type": "boolean"
        },
        {
            "name": "matchOnAllStreetFields",
            "baseName": "matchOnAllStreetFields",
            "type": "boolean"
        },
        {
            "name": "matchOnStreetName",
            "baseName": "matchOnStreetName",
            "type": "boolean"
        },
        {
            "name": "matchOnStreetType",
            "baseName": "matchOnStreetType",
            "type": "boolean"
        },
        {
            "name": "matchOnStreetDirectional",
            "baseName": "matchOnStreetDirectional",
            "type": "boolean"
        },
        {
            "name": "matchOnPlaceName",
            "baseName": "matchOnPlaceName",
            "type": "boolean"
        },
        {
            "name": "matchOnInputFields",
            "baseName": "matchOnInputFields",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return FieldsMatching.attributeTypeMap;
    }
}

