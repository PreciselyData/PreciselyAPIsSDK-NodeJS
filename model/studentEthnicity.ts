/**
 * Precisely APIs
 * Enhance & enrich your data, applications, business processes, and workflows with rich location, information, and identify APIs.
 *
 * The version of the OpenAPI document: 12.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class StudentEthnicity {
    'indianAlaskaNative'?: string;
    'asian'?: string;
    'hispanic'?: string;
    'black'?: string;
    'white'?: string;
    'hawaiianPacificlslander'?: string;
    'twoOrMoreRaces'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "indianAlaskaNative",
            "baseName": "indianAlaskaNative",
            "type": "string"
        },
        {
            "name": "asian",
            "baseName": "asian",
            "type": "string"
        },
        {
            "name": "hispanic",
            "baseName": "hispanic",
            "type": "string"
        },
        {
            "name": "black",
            "baseName": "black",
            "type": "string"
        },
        {
            "name": "white",
            "baseName": "white",
            "type": "string"
        },
        {
            "name": "hawaiianPacificlslander",
            "baseName": "hawaiianPacificlslander",
            "type": "string"
        },
        {
            "name": "twoOrMoreRaces",
            "baseName": "twoOrMoreRaces",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StudentEthnicity.attributeTypeMap;
    }
}

