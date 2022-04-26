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
import { Census } from './census';
import { LatLongFields } from './latLongFields';
import { SalesTax } from './salesTax';
import { TaxJurisdiction } from './taxJurisdiction';
import { TaxRateMatchedAddress } from './taxRateMatchedAddress';
import { UseTax } from './useTax';

export class TaxRateResponse {
    'objectId'?: string;
    'vendorName'?: string;
    'gnisCode'?: string;
    'confidence'?: number;
    'jurisdiction'?: TaxJurisdiction;
    'matchedAddress'?: TaxRateMatchedAddress;
    'salesTax'?: SalesTax;
    'useTax'?: UseTax;
    'census'?: Census;
    'latLongFields'?: LatLongFields;
    'address'?: TaxRateMatchedAddress;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objectId",
            "baseName": "objectId",
            "type": "string"
        },
        {
            "name": "vendorName",
            "baseName": "vendorName",
            "type": "string"
        },
        {
            "name": "gnisCode",
            "baseName": "gnisCode",
            "type": "string"
        },
        {
            "name": "confidence",
            "baseName": "confidence",
            "type": "number"
        },
        {
            "name": "jurisdiction",
            "baseName": "jurisdiction",
            "type": "TaxJurisdiction"
        },
        {
            "name": "matchedAddress",
            "baseName": "matchedAddress",
            "type": "TaxRateMatchedAddress"
        },
        {
            "name": "salesTax",
            "baseName": "salesTax",
            "type": "SalesTax"
        },
        {
            "name": "useTax",
            "baseName": "useTax",
            "type": "UseTax"
        },
        {
            "name": "census",
            "baseName": "census",
            "type": "Census"
        },
        {
            "name": "latLongFields",
            "baseName": "latLongFields",
            "type": "LatLongFields"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "TaxRateMatchedAddress"
        }    ];

    static getAttributeTypeMap() {
        return TaxRateResponse.attributeTypeMap;
    }
}
