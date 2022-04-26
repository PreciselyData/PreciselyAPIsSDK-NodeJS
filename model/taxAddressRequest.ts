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
import { LocalTaxPreferences } from './localTaxPreferences';
import { TaxAddress } from './taxAddress';

export class TaxAddressRequest {
    'preferences'?: LocalTaxPreferences;
    'taxAddresses': Array<TaxAddress>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "preferences",
            "baseName": "preferences",
            "type": "LocalTaxPreferences"
        },
        {
            "name": "taxAddresses",
            "baseName": "taxAddresses",
            "type": "Array<TaxAddress>"
        }    ];

    static getAttributeTypeMap() {
        return TaxAddressRequest.attributeTypeMap;
    }
}
