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
import { Category } from './category';
import { ZonesSic } from './zonesSic';

export class ZonesPoiClassification {
    'sic'?: ZonesSic;
    'category'?: Category;
    'alternateIndustryCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sic",
            "baseName": "sic",
            "type": "ZonesSic"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "Category"
        },
        {
            "name": "alternateIndustryCode",
            "baseName": "alternateIndustryCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ZonesPoiClassification.attributeTypeMap;
    }
}

