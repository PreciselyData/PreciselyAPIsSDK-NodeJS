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
import { Candidate } from './candidate';

export class GeocodeServiceResponse {
    'objectId'?: string;
    'totalPossibleCandidates'?: number;
    'totalMatches'?: number;
    'candidates'?: Array<Candidate>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objectId",
            "baseName": "objectId",
            "type": "string"
        },
        {
            "name": "totalPossibleCandidates",
            "baseName": "totalPossibleCandidates",
            "type": "number"
        },
        {
            "name": "totalMatches",
            "baseName": "totalMatches",
            "type": "number"
        },
        {
            "name": "candidates",
            "baseName": "candidates",
            "type": "Array<Candidate>"
        }    ];

    static getAttributeTypeMap() {
        return GeocodeServiceResponse.attributeTypeMap;
    }
}

