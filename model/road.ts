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

export class Road {
    'id'?: string;
    'name'?: string;
    'altName'?: string;
    'roadClass'?: string;
    'type'?: string;
    'lengthInMeters'?: string;
    'routeNumber'?: string;
    'surfaceType'?: string;
    'trafficFlow'?: string;
    'isToll'?: string;
    'beginningLevel'?: string;
    'endingLevel'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "altName",
            "baseName": "altName",
            "type": "string"
        },
        {
            "name": "roadClass",
            "baseName": "roadClass",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "lengthInMeters",
            "baseName": "lengthInMeters",
            "type": "string"
        },
        {
            "name": "routeNumber",
            "baseName": "routeNumber",
            "type": "string"
        },
        {
            "name": "surfaceType",
            "baseName": "surfaceType",
            "type": "string"
        },
        {
            "name": "trafficFlow",
            "baseName": "trafficFlow",
            "type": "string"
        },
        {
            "name": "isToll",
            "baseName": "isToll",
            "type": "string"
        },
        {
            "name": "beginningLevel",
            "baseName": "beginningLevel",
            "type": "string"
        },
        {
            "name": "endingLevel",
            "baseName": "endingLevel",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Road.attributeTypeMap;
    }
}

