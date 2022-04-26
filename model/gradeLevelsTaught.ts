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

export class GradeLevelsTaught {
    'pk'?: string;
    'kg'?: string;
    'first'?: string;
    'second'?: string;
    'third'?: string;
    'fourth'?: string;
    'fifth'?: string;
    'sixth'?: string;
    'seventh'?: string;
    'eighth'?: string;
    'ninth'?: string;
    'tenth'?: string;
    'eleventh'?: string;
    'twelfth'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pk",
            "baseName": "pk",
            "type": "string"
        },
        {
            "name": "kg",
            "baseName": "kg",
            "type": "string"
        },
        {
            "name": "first",
            "baseName": "first",
            "type": "string"
        },
        {
            "name": "second",
            "baseName": "second",
            "type": "string"
        },
        {
            "name": "third",
            "baseName": "third",
            "type": "string"
        },
        {
            "name": "fourth",
            "baseName": "fourth",
            "type": "string"
        },
        {
            "name": "fifth",
            "baseName": "fifth",
            "type": "string"
        },
        {
            "name": "sixth",
            "baseName": "sixth",
            "type": "string"
        },
        {
            "name": "seventh",
            "baseName": "seventh",
            "type": "string"
        },
        {
            "name": "eighth",
            "baseName": "eighth",
            "type": "string"
        },
        {
            "name": "ninth",
            "baseName": "ninth",
            "type": "string"
        },
        {
            "name": "tenth",
            "baseName": "tenth",
            "type": "string"
        },
        {
            "name": "eleventh",
            "baseName": "eleventh",
            "type": "string"
        },
        {
            "name": "twelfth",
            "baseName": "twelfth",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GradeLevelsTaught.attributeTypeMap;
    }
}
