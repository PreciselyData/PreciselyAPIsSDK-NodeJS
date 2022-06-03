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
import { ValidateEmailAddressOutput } from './validateEmailAddressOutput';

export class ValidateEmailAddressAPIResponse {
    'output'?: Array<ValidateEmailAddressOutput>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "output",
            "baseName": "Output",
            "type": "Array<ValidateEmailAddressOutput>"
        }    ];

    static getAttributeTypeMap() {
        return ValidateEmailAddressAPIResponse.attributeTypeMap;
    }
}

