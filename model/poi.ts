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
import { BusinessId } from './businessId';
import { ContactDetails } from './contactDetails';
import { Distance } from './distance';
import { DomesticUltimateBusiness } from './domesticUltimateBusiness';
import { EmployeeCount } from './employeeCount';
import { Geometry } from './geometry';
import { GlobalUltimateBusiness } from './globalUltimateBusiness';
import { ParentBusiness } from './parentBusiness';
import { PoiClassification } from './poiClassification';
import { SalesVolume } from './salesVolume';

export class Poi {
    'id'?: string;
    'poiId'?: string;
    'name'?: string;
    'pbkey'?: string;
    'parentPbkey'?: string;
    'geocodeConfidence'?: string;
    'brandName'?: string;
    'tradeName'?: string;
    'franchiseName'?: string;
    'open24Hours'?: string;
    'distance'?: Distance;
    'businessId'?: BusinessId;
    'relevanceScore'?: string;
    'contactDetails'?: ContactDetails;
    'poiClassification'?: PoiClassification;
    'salesVolume'?: Array<SalesVolume>;
    'employeeCount'?: EmployeeCount;
    'yearStart'?: string;
    'goodsAgentCode'?: string;
    'goodsAgentCodeDescription'?: string;
    'legalStatusCode'?: string;
    'organizationStatusCode'?: string;
    'organizationStatusCodeDescription'?: string;
    'subsidaryIndicator'?: string;
    'subsidaryIndicatorDescription'?: string;
    'parentBusiness'?: ParentBusiness;
    'domesticUltimateBusiness'?: DomesticUltimateBusiness;
    'globalUltimateIndicator'?: string;
    'globalUltimateBusiness'?: GlobalUltimateBusiness;
    'familyMembers'?: string;
    'hierarchyCode'?: string;
    'tickerSymbol'?: string;
    'exchangeName'?: string;
    'ceoName'?: string;
    'ceoTitle'?: string;
    'geometry'?: Geometry;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "poiId",
            "baseName": "poiId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "pbkey",
            "baseName": "pbkey",
            "type": "string"
        },
        {
            "name": "parentPbkey",
            "baseName": "parentPbkey",
            "type": "string"
        },
        {
            "name": "geocodeConfidence",
            "baseName": "geocodeConfidence",
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
            "name": "distance",
            "baseName": "distance",
            "type": "Distance"
        },
        {
            "name": "businessId",
            "baseName": "businessId",
            "type": "BusinessId"
        },
        {
            "name": "relevanceScore",
            "baseName": "relevanceScore",
            "type": "string"
        },
        {
            "name": "contactDetails",
            "baseName": "contactDetails",
            "type": "ContactDetails"
        },
        {
            "name": "poiClassification",
            "baseName": "poiClassification",
            "type": "PoiClassification"
        },
        {
            "name": "salesVolume",
            "baseName": "salesVolume",
            "type": "Array<SalesVolume>"
        },
        {
            "name": "employeeCount",
            "baseName": "employeeCount",
            "type": "EmployeeCount"
        },
        {
            "name": "yearStart",
            "baseName": "yearStart",
            "type": "string"
        },
        {
            "name": "goodsAgentCode",
            "baseName": "goodsAgentCode",
            "type": "string"
        },
        {
            "name": "goodsAgentCodeDescription",
            "baseName": "goodsAgentCodeDescription",
            "type": "string"
        },
        {
            "name": "legalStatusCode",
            "baseName": "legalStatusCode",
            "type": "string"
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
            "name": "subsidaryIndicator",
            "baseName": "subsidaryIndicator",
            "type": "string"
        },
        {
            "name": "subsidaryIndicatorDescription",
            "baseName": "subsidaryIndicatorDescription",
            "type": "string"
        },
        {
            "name": "parentBusiness",
            "baseName": "parentBusiness",
            "type": "ParentBusiness"
        },
        {
            "name": "domesticUltimateBusiness",
            "baseName": "domesticUltimateBusiness",
            "type": "DomesticUltimateBusiness"
        },
        {
            "name": "globalUltimateIndicator",
            "baseName": "globalUltimateIndicator",
            "type": "string"
        },
        {
            "name": "globalUltimateBusiness",
            "baseName": "globalUltimateBusiness",
            "type": "GlobalUltimateBusiness"
        },
        {
            "name": "familyMembers",
            "baseName": "familyMembers",
            "type": "string"
        },
        {
            "name": "hierarchyCode",
            "baseName": "hierarchyCode",
            "type": "string"
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
        },
        {
            "name": "ceoName",
            "baseName": "ceoName",
            "type": "string"
        },
        {
            "name": "ceoTitle",
            "baseName": "ceoTitle",
            "type": "string"
        },
        {
            "name": "geometry",
            "baseName": "geometry",
            "type": "Geometry"
        }    ];

    static getAttributeTypeMap() {
        return Poi.attributeTypeMap;
    }
}

