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

export class IndexVariable {
    'name'?: string;
    'score'?: string;
    'category'?: string;
    'percentile'?: string;
    'stateScore'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "score",
            "baseName": "score",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "string"
        },
        {
            "name": "percentile",
            "baseName": "percentile",
            "type": "string"
        },
        {
            "name": "stateScore",
            "baseName": "stateScore",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IndexVariable.attributeTypeMap;
    }
}

