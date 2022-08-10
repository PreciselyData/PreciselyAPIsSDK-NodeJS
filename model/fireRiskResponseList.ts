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
import { FireRiskResponse } from './fireRiskResponse';

export class FireRiskResponseList {
    'fireRisk'?: Array<FireRiskResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fireRisk",
            "baseName": "fireRisk",
            "type": "Array<FireRiskResponse>"
        }    ];

    static getAttributeTypeMap() {
        return FireRiskResponseList.attributeTypeMap;
    }
}

