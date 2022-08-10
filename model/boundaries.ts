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
import { Boundary } from './boundary';

export class Boundaries {
    'boundaryType'?: string;
    'boundaryRef'?: string;
    'boundary': Array<Boundary>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "boundaryType",
            "baseName": "boundaryType",
            "type": "string"
        },
        {
            "name": "boundaryRef",
            "baseName": "boundaryRef",
            "type": "string"
        },
        {
            "name": "boundary",
            "baseName": "boundary",
            "type": "Array<Boundary>"
        }    ];

    static getAttributeTypeMap() {
        return Boundaries.attributeTypeMap;
    }
}

