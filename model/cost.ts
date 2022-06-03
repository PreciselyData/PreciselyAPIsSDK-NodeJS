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
import { DirectionGeometry } from './directionGeometry';

export class Cost {
    'cost'?: number;
    'costUnit'?: string;
    'geometry'?: DirectionGeometry;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cost",
            "baseName": "cost",
            "type": "number"
        },
        {
            "name": "costUnit",
            "baseName": "costUnit",
            "type": "string"
        },
        {
            "name": "geometry",
            "baseName": "geometry",
            "type": "DirectionGeometry"
        }    ];

    static getAttributeTypeMap() {
        return Cost.attributeTypeMap;
    }
}

