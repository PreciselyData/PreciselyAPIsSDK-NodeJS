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
import { FireShed } from './fireShed';
import { RiskAddress } from './riskAddress';
import { State } from './state';

export class FireRiskResponse {
    'objectId'?: string;
    'state'?: State;
    'fireShed'?: FireShed;
    'matchedAddress'?: RiskAddress;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objectId",
            "baseName": "objectId",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "State"
        },
        {
            "name": "fireShed",
            "baseName": "fireShed",
            "type": "FireShed"
        },
        {
            "name": "matchedAddress",
            "baseName": "matchedAddress",
            "type": "RiskAddress"
        }    ];

    static getAttributeTypeMap() {
        return FireRiskResponse.attributeTypeMap;
    }
}

