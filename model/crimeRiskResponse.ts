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
import { RiskAddress } from './riskAddress';
import { RisksBoundaries } from './risksBoundaries';
import { RisksCrimeTheme } from './risksCrimeTheme';

export class CrimeRiskResponse {
    'objectId'?: string;
    'themes'?: Array<RisksCrimeTheme>;
    'boundaries'?: RisksBoundaries;
    'matchedAddress'?: RiskAddress;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objectId",
            "baseName": "objectId",
            "type": "string"
        },
        {
            "name": "themes",
            "baseName": "themes",
            "type": "Array<RisksCrimeTheme>"
        },
        {
            "name": "boundaries",
            "baseName": "boundaries",
            "type": "RisksBoundaries"
        },
        {
            "name": "matchedAddress",
            "baseName": "matchedAddress",
            "type": "RiskAddress"
        }    ];

    static getAttributeTypeMap() {
        return CrimeRiskResponse.attributeTypeMap;
    }
}

