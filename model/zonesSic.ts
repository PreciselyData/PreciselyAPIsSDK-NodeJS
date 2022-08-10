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

export class ZonesSic {
    'businessLine'?: string;
    'sicCode'?: string;
    'sicCodeDescription'?: string;
    'primarySicCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "businessLine",
            "baseName": "businessLine",
            "type": "string"
        },
        {
            "name": "sicCode",
            "baseName": "sicCode",
            "type": "string"
        },
        {
            "name": "sicCodeDescription",
            "baseName": "sicCodeDescription",
            "type": "string"
        },
        {
            "name": "primarySicCode",
            "baseName": "primarySicCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ZonesSic.attributeTypeMap;
    }
}

