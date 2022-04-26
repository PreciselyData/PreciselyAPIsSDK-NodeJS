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
import { FireStationContactDetails } from './fireStationContactDetails';

export class FireDepartment {
    'name'?: string;
    'type'?: string;
    'numberOfStations'?: number;
    'administrativeOfficeOnly'?: boolean;
    'contactDetails'?: FireStationContactDetails;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "numberOfStations",
            "baseName": "numberOfStations",
            "type": "number"
        },
        {
            "name": "administrativeOfficeOnly",
            "baseName": "administrativeOfficeOnly",
            "type": "boolean"
        },
        {
            "name": "contactDetails",
            "baseName": "contactDetails",
            "type": "FireStationContactDetails"
        }    ];

    static getAttributeTypeMap() {
        return FireDepartment.attributeTypeMap;
    }
}
