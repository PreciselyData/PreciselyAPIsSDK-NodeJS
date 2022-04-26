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

export class POIBoundaryPreferences {
    'categoryCode'?: string;
    'sicCode'?: string;
    'naicsCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "categoryCode",
            "baseName": "categoryCode",
            "type": "string"
        },
        {
            "name": "sicCode",
            "baseName": "sicCode",
            "type": "string"
        },
        {
            "name": "naicsCode",
            "baseName": "naicsCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return POIBoundaryPreferences.attributeTypeMap;
    }
}
