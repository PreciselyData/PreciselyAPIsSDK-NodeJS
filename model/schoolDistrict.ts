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

export class SchoolDistrict {
    'ncesDistrictId'?: string;
    'name'?: string;
    'totalSchools'?: string;
    'districtType'?: string;
    'metro'?: string;
    'areaInSqM'?: string;
    'supervisoryUnionId'?: string;
    'districtEnrollment'?: string;
    'districtUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ncesDistrictId",
            "baseName": "ncesDistrictId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "totalSchools",
            "baseName": "totalSchools",
            "type": "string"
        },
        {
            "name": "districtType",
            "baseName": "districtType",
            "type": "string"
        },
        {
            "name": "metro",
            "baseName": "metro",
            "type": "string"
        },
        {
            "name": "areaInSqM",
            "baseName": "areaInSqM",
            "type": "string"
        },
        {
            "name": "supervisoryUnionId",
            "baseName": "supervisoryUnionId",
            "type": "string"
        },
        {
            "name": "districtEnrollment",
            "baseName": "districtEnrollment",
            "type": "string"
        },
        {
            "name": "districtUrl",
            "baseName": "districtUrl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SchoolDistrict.attributeTypeMap;
    }
}
