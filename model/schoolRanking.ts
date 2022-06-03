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

export class SchoolRanking {
    'current'?: string;
    'rankYear'?: string;
    'stateRank'?: string;
    'numberOfSchools'?: string;
    'avgMathScore'?: string;
    'avgReadingScore'?: string;
    'statePercentileScore'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "current",
            "baseName": "current",
            "type": "string"
        },
        {
            "name": "rankYear",
            "baseName": "rankYear",
            "type": "string"
        },
        {
            "name": "stateRank",
            "baseName": "stateRank",
            "type": "string"
        },
        {
            "name": "numberOfSchools",
            "baseName": "numberOfSchools",
            "type": "string"
        },
        {
            "name": "avgMathScore",
            "baseName": "avgMathScore",
            "type": "string"
        },
        {
            "name": "avgReadingScore",
            "baseName": "avgReadingScore",
            "type": "string"
        },
        {
            "name": "statePercentileScore",
            "baseName": "statePercentileScore",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SchoolRanking.attributeTypeMap;
    }
}

