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

export class Proxy {
    'anonymizerStatus'?: string;
    'level'?: string;
    'lastDetected'?: string;
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "anonymizerStatus",
            "baseName": "anonymizerStatus",
            "type": "string"
        },
        {
            "name": "level",
            "baseName": "level",
            "type": "string"
        },
        {
            "name": "lastDetected",
            "baseName": "lastDetected",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Proxy.attributeTypeMap;
    }
}

