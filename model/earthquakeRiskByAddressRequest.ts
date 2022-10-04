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
import { RiskAddress } from './riskAddress';
import { RiskPreferences } from './riskPreferences';

export class EarthquakeRiskByAddressRequest {
    'addresses': Array<RiskAddress>;
    'preferences'?: RiskPreferences;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<RiskAddress>"
        },
        {
            "name": "preferences",
            "baseName": "preferences",
            "type": "RiskPreferences"
        }    ];

    static getAttributeTypeMap() {
        return EarthquakeRiskByAddressRequest.attributeTypeMap;
    }
}

