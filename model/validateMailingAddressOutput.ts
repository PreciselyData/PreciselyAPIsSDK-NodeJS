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
import { GetPostalCodesAPIOutputUserFields } from './getPostalCodesAPIOutputUserFields';

export class ValidateMailingAddressOutput {
    /**
    * These fields are returned, unmodified, in the user_fields section of the response.
    */
    'userFields'?: Array<GetPostalCodesAPIOutputUserFields>;
    /**
    * The first line of the validated address.
    */
    'addressLine1'?: string;
    /**
    * The second line of the validated address.
    */
    'addressLine2'?: string;
    /**
    * The validated firm or company name.
    */
    'firmName'?: string;
    /**
    * The validated city name.
    */
    'city'?: string;
    /**
    * The validated ZIP Code or postal code.
    */
    'postalCode'?: string;
    /**
    * The country name in English.
    */
    'country'?: string;
    /**
    * The validated state or province abbreviation.
    */
    'stateProvince'?: string;
    /**
    * The formatted address, as it would appear on a physical mail piece.
    */
    'blockAddress'?: string;
    /**
    * Input data not used by the address validation process.
    */
    'additionalInputData'?: string;
    /**
    * The 5-digit ZIP Code.
    */
    'postalCodeBase'?: string;
    /**
    * The 4-digit add-on part of the ZIP Code.
    */
    'postalCodeAddOn'?: string;
    /**
    * Reports the success or failure of the match attempt.
    */
    'status'?: string;
    /**
    * Reason for failure, if there is one.
    */
    'statusCode'?: string;
    /**
    * Description of the problem, if there is one.
    */
    'statusDescription'?: string;

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
            "name": "postalCode",
            "baseName": "PostalCode",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "Country",
            "type": "string"
        },
        {
            "name": "stateProvince",
            "baseName": "StateProvince",
            "type": "string"
        },
        {
            "name": "blockAddress",
            "baseName": "BlockAddress",
            "type": "string"
        },
        {
            "name": "additionalInputData",
            "baseName": "AdditionalInputData",
            "type": "string"
        },
        {
            "name": "postalCodeBase",
            "baseName": "PostalCode.Base",
            "type": "string"
        },
        {
            "name": "postalCodeAddOn",
            "baseName": "PostalCode.AddOn",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "string"
        },
        {
            "name": "statusCode",
            "baseName": "Status.Code",
            "type": "string"
        },
        {
            "name": "statusDescription",
            "baseName": "Status.Description",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ValidateMailingAddressOutput.attributeTypeMap;
    }
}

