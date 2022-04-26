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

export class Risk {
    'type'?: string;
    'description'?: string;
    'risk50Rating'?: number;
    'frequency'?: number;
    'nonburn'?: string;
    'pastFires'?: number;
    'severity'?: number;
    'continuity'?: string;
    'adjustment'?: string;
    'aspect'?: string;
    'crownFire'?: string;
    'vegetation'?: string;
    'foehn'?: string;
    'golfCourse'?: string;
    'roadDist'?: string;
    'slope'?: string;
    'waterDist'?: string;
    'tier'?: string;
    'tierDescription'?: string;
    'distanceToFireStation'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "risk50Rating",
            "baseName": "risk50Rating",
            "type": "number"
        },
        {
            "name": "frequency",
            "baseName": "frequency",
            "type": "number"
        },
        {
            "name": "nonburn",
            "baseName": "nonburn",
            "type": "string"
        },
        {
            "name": "pastFires",
            "baseName": "pastFires",
            "type": "number"
        },
        {
            "name": "severity",
            "baseName": "severity",
            "type": "number"
        },
        {
            "name": "continuity",
            "baseName": "continuity",
            "type": "string"
        },
        {
            "name": "adjustment",
            "baseName": "adjustment",
            "type": "string"
        },
        {
            "name": "aspect",
            "baseName": "aspect",
            "type": "string"
        },
        {
            "name": "crownFire",
            "baseName": "crownFire",
            "type": "string"
        },
        {
            "name": "vegetation",
            "baseName": "vegetation",
            "type": "string"
        },
        {
            "name": "foehn",
            "baseName": "foehn",
            "type": "string"
        },
        {
            "name": "golfCourse",
            "baseName": "golfCourse",
            "type": "string"
        },
        {
            "name": "roadDist",
            "baseName": "roadDist",
            "type": "string"
        },
        {
            "name": "slope",
            "baseName": "slope",
            "type": "string"
        },
        {
            "name": "waterDist",
            "baseName": "waterDist",
            "type": "string"
        },
        {
            "name": "tier",
            "baseName": "tier",
            "type": "string"
        },
        {
            "name": "tierDescription",
            "baseName": "tierDescription",
            "type": "string"
        },
        {
            "name": "distanceToFireStation",
            "baseName": "distanceToFireStation",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Risk.attributeTypeMap;
    }
}
