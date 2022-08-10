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

export class FormattedTaxAddress {
    'mainAddressLine'?: string;
    'addressNumber'?: string;
    'streetPreDirection'?: string;
    'streetName'?: string;
    'streetType'?: string;
    'streetPostDirection'?: string;
    'unitType'?: string;
    'unitValue'?: string;
    'city'?: string;
    'state'?: string;
    'postCode1'?: string;
    'postCode2'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mainAddressLine",
            "baseName": "mainAddressLine",
            "type": "string"
        },
        {
            "name": "addressNumber",
            "baseName": "addressNumber",
            "type": "string"
        },
        {
            "name": "streetPreDirection",
            "baseName": "streetPreDirection",
            "type": "string"
        },
        {
            "name": "streetName",
            "baseName": "streetName",
            "type": "string"
        },
        {
            "name": "streetType",
            "baseName": "streetType",
            "type": "string"
        },
        {
            "name": "streetPostDirection",
            "baseName": "streetPostDirection",
            "type": "string"
        },
        {
            "name": "unitType",
            "baseName": "unitType",
            "type": "string"
        },
        {
            "name": "unitValue",
            "baseName": "unitValue",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "postCode1",
            "baseName": "postCode1",
            "type": "string"
        },
        {
            "name": "postCode2",
            "baseName": "postCode2",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FormattedTaxAddress.attributeTypeMap;
    }
}

