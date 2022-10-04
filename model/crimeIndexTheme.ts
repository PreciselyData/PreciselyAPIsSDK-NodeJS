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
import { IndexVariable } from './indexVariable';

export class CrimeIndexTheme {
    'source'?: string;
    'boundaryRef'?: string;
    'indexVariable'?: Array<IndexVariable>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "boundaryRef",
            "baseName": "boundaryRef",
            "type": "string"
        },
        {
            "name": "indexVariable",
            "baseName": "indexVariable",
            "type": "Array<IndexVariable>"
        }    ];

    static getAttributeTypeMap() {
        return CrimeIndexTheme.attributeTypeMap;
    }
}

