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
import { Geometry } from './geometry';
import { Road } from './road';
import { Unit } from './unit';

export class Intersection {
    'distance'?: Unit;
    'driveTime'?: Unit;
    'driveDistance'?: Unit;
    'geometry'?: Geometry;
    'roads'?: Set<Road>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "distance",
            "baseName": "distance",
            "type": "Unit"
        },
        {
            "name": "driveTime",
            "baseName": "driveTime",
            "type": "Unit"
        },
        {
            "name": "driveDistance",
            "baseName": "driveDistance",
            "type": "Unit"
        },
        {
            "name": "geometry",
            "baseName": "geometry",
            "type": "Geometry"
        },
        {
            "name": "roads",
            "baseName": "roads",
            "type": "Set<Road>"
        }    ];

    static getAttributeTypeMap() {
        return Intersection.attributeTypeMap;
    }
}
