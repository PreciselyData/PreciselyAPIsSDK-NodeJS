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
import { GetPostalCodesAPIOutputUserFields } from './getPostalCodesAPIOutputUserFields';

export class ValidateMailingAddressInputRow {
    /**
    * These fields are returned, unmodified, in the user_fields section of the response.
    */
    'userFields'?: Array<GetPostalCodesAPIOutputUserFields>;
    /**
    * The first address line.
    */
    'addressLine1'?: string;
    /**
    * The second address line.
    */
    'addressLine2'?: string;
    /**
    * The company or firm name.
    */
    'firmName'?: string;
    /**
    * The city name.
    */
    'city'?: string;
    /**
    * The state or province.
    */
    'stateProvince'?: string;
    /**
    * The country code or name.
    */
    'country'?: string;
    /**
    * The postal code for the address.
    */
    'postalCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userFields",
            "baseName": "user_fields",
            "type": "Array<GetPostalCodesAPIOutputUserFields>"
        },
        {
            "name": "addressLine1",
            "baseName": "AddressLine1",
            "type": "string"
        },
        {
            "name": "addressLine2",
            "baseName": "AddressLine2",
            "type": "string"
        },
        {
            "name": "firmName",
            "baseName": "FirmName",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "City",
            "type": "string"
        },
        {
            "name": "stateProvince",
            "baseName": "StateProvince",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "Country",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "PostalCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ValidateMailingAddressInputRow.attributeTypeMap;
    }
}

