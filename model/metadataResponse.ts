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
import { CategoryMetadata } from './categoryMetadata';
import { SicMetadata } from './sicMetadata';

export class MetadataResponse {
    'sic'?: Array<SicMetadata>;
    'category'?: Array<CategoryMetadata>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sic",
            "baseName": "sic",
            "type": "Array<SicMetadata>"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "Array<CategoryMetadata>"
        }    ];

    static getAttributeTypeMap() {
        return MetadataResponse.attributeTypeMap;
    }
}

