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
import { DeviceStatusNetwork } from './deviceStatusNetwork';

export class PhoneVerification {
    'phoneNumber'?: string;
    'locatable'?: string;
    'network'?: DeviceStatusNetwork;
    'privacyConsentRequired'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "locatable",
            "baseName": "locatable",
            "type": "string"
        },
        {
            "name": "network",
            "baseName": "network",
            "type": "DeviceStatusNetwork"
        },
        {
            "name": "privacyConsentRequired",
            "baseName": "privacyConsentRequired",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PhoneVerification.attributeTypeMap;
    }
}

