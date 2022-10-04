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
import { EmployeeCount } from './employeeCount';
import { ZonesContactDetails } from './zonesContactDetails';
import { ZonesParentBusiness } from './zonesParentBusiness';
import { ZonesPoiClassification } from './zonesPoiClassification';

export class ZonesPoi {
    'id'?: string;
    'name'?: string;
    'brandName'?: string;
    'tradeName'?: string;
    'franchiseName'?: string;
    'open24Hours'?: string;
    'contactDetails'?: ZonesContactDetails;
    'poiClassification'?: ZonesPoiClassification;
    'employeeCount'?: EmployeeCount;
    'organizationStatusCode'?: string;
    'organizationStatusCodeDescription'?: string;
    'parentBusiness'?: ZonesParentBusiness;
    'tickerSymbol'?: string;
    'exchangeName'?: string;

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
            "name": "brandName",
            "baseName": "brandName",
            "type": "string"
        },
        {
            "name": "tradeName",
            "baseName": "tradeName",
            "type": "string"
        },
        {
            "name": "franchiseName",
            "baseName": "franchiseName",
            "type": "string"
        },
        {
            "name": "open24Hours",
            "baseName": "open24Hours",
            "type": "string"
        },
        {
            "name": "contactDetails",
            "baseName": "contactDetails",
            "type": "ZonesContactDetails"
        },
        {
            "name": "poiClassification",
            "baseName": "poiClassification",
            "type": "ZonesPoiClassification"
        },
        {
            "name": "employeeCount",
            "baseName": "employeeCount",
            "type": "EmployeeCount"
        },
        {
            "name": "organizationStatusCode",
            "baseName": "organizationStatusCode",
            "type": "string"
        },
        {
            "name": "organizationStatusCodeDescription",
            "baseName": "organizationStatusCodeDescription",
            "type": "string"
        },
        {
            "name": "parentBusiness",
            "baseName": "parentBusiness",
            "type": "ZonesParentBusiness"
        },
        {
            "name": "tickerSymbol",
            "baseName": "tickerSymbol",
            "type": "string"
        },
        {
            "name": "exchangeName",
            "baseName": "exchangeName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ZonesPoi.attributeTypeMap;
    }
}

