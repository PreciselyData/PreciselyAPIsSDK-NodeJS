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
import { EarthquakeEvent } from './earthquakeEvent';

export class EarthquakeEventsResponse {
    'earthuakeEvents'?: Array<EarthquakeEvent>;
    'event'?: Array<EarthquakeEvent>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "earthuakeEvents",
            "baseName": "earthuakeEvents",
            "type": "Array<EarthquakeEvent>"
        },
        {
            "name": "event",
            "baseName": "event",
            "type": "Array<EarthquakeEvent>"
        }    ];

    static getAttributeTypeMap() {
        return EarthquakeEventsResponse.attributeTypeMap;
    }
}
