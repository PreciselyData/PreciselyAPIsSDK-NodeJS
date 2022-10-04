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
import { PoiBoundary } from './poiBoundary';

export class POIBoundaryResponse {
    'poiBoundary'?: Array<PoiBoundary>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "poiBoundary",
            "baseName": "poiBoundary",
            "type": "Array<PoiBoundary>"
        }    ];

    static getAttributeTypeMap() {
        return POIBoundaryResponse.attributeTypeMap;
    }
}

