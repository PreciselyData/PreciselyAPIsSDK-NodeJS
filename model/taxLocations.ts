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
import { TaxGeometry } from './taxGeometry';

export class TaxLocations {
    'geometry': TaxGeometry;
    'purchaseAmount'?: string;
    'objectId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "geometry",
            "baseName": "geometry",
            "type": "TaxGeometry"
        },
        {
            "name": "purchaseAmount",
            "baseName": "purchaseAmount",
            "type": "string"
        },
        {
            "name": "objectId",
            "baseName": "objectId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TaxLocations.attributeTypeMap;
    }
}

