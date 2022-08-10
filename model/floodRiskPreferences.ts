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

export class FloodRiskPreferences {
    'includeGeometry'?: string;
    'includeZoneDesc'?: string;
    'richterValue'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "includeGeometry",
            "baseName": "includeGeometry",
            "type": "string"
        },
        {
            "name": "includeZoneDesc",
            "baseName": "includeZoneDesc",
            "type": "string"
        },
        {
            "name": "richterValue",
            "baseName": "richterValue",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FloodRiskPreferences.attributeTypeMap;
    }
}

