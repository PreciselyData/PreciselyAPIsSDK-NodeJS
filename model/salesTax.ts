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
import { SpecialPurposeDistrictTax } from './specialPurposeDistrictTax';

export class SalesTax {
    'specialTaxRulesApplied'?: boolean;
    'specialTaxRulesDescriptor'?: string;
    'totalTaxRate'?: number;
    'totalTaxAmount'?: number;
    'stateTaxRate'?: number;
    'stateTaxAmount'?: number;
    'countyTaxRate'?: number;
    'countyTaxAmount'?: number;
    'municipalTaxRate'?: number;
    'municipalTaxAmount'?: number;
    'spdsTax'?: Array<SpecialPurposeDistrictTax>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "specialTaxRulesApplied",
            "baseName": "specialTaxRulesApplied",
            "type": "boolean"
        },
        {
            "name": "specialTaxRulesDescriptor",
            "baseName": "specialTaxRulesDescriptor",
            "type": "string"
        },
        {
            "name": "totalTaxRate",
            "baseName": "totalTaxRate",
            "type": "number"
        },
        {
            "name": "totalTaxAmount",
            "baseName": "totalTaxAmount",
            "type": "number"
        },
        {
            "name": "stateTaxRate",
            "baseName": "stateTaxRate",
            "type": "number"
        },
        {
            "name": "stateTaxAmount",
            "baseName": "stateTaxAmount",
            "type": "number"
        },
        {
            "name": "countyTaxRate",
            "baseName": "countyTaxRate",
            "type": "number"
        },
        {
            "name": "countyTaxAmount",
            "baseName": "countyTaxAmount",
            "type": "number"
        },
        {
            "name": "municipalTaxRate",
            "baseName": "municipalTaxRate",
            "type": "number"
        },
        {
            "name": "municipalTaxAmount",
            "baseName": "municipalTaxAmount",
            "type": "number"
        },
        {
            "name": "spdsTax",
            "baseName": "spdsTax",
            "type": "Array<SpecialPurposeDistrictTax>"
        }    ];

    static getAttributeTypeMap() {
        return SalesTax.attributeTypeMap;
    }
}

