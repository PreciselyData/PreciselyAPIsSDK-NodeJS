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

export class CandidateRangeUnit {
    'placeName'?: string;
    'unitType'?: string;
    'highUnitValue'?: string;
    'lowUnitValue'?: string;
    'customValues'?: { [key: string]: object; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "placeName",
            "baseName": "placeName",
            "type": "string"
        },
        {
            "name": "unitType",
            "baseName": "unitType",
            "type": "string"
        },
        {
            "name": "highUnitValue",
            "baseName": "highUnitValue",
            "type": "string"
        },
        {
            "name": "lowUnitValue",
            "baseName": "lowUnitValue",
            "type": "string"
        },
        {
            "name": "customValues",
            "baseName": "customValues",
            "type": "{ [key: string]: object; }"
        }    ];

    static getAttributeTypeMap() {
        return CandidateRangeUnit.attributeTypeMap;
    }
}

