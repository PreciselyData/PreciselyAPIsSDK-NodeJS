/**
 * Precisely APIs
 * Enhance & enrich your data, applications, business processes, and workflows with rich location, information, and identify APIs.
 *
 * The version of the OpenAPI document: 11.9.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { RiskAddress } from './riskAddress';

export class FireStationContactDetails {
    'address'?: RiskAddress;
    'phone'?: string;
    'fax'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "RiskAddress"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "fax",
            "baseName": "fax",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FireStationContactDetails.attributeTypeMap;
    }
}

