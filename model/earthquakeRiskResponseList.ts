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
import { EarthquakeRiskResponse } from './earthquakeRiskResponse';

export class EarthquakeRiskResponseList {
    'earthquakeRisk'?: Array<EarthquakeRiskResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "earthquakeRisk",
            "baseName": "earthquakeRisk",
            "type": "Array<EarthquakeRiskResponse>"
        }    ];

    static getAttributeTypeMap() {
        return EarthquakeRiskResponseList.attributeTypeMap;
    }
}

