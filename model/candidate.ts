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
import { CandidateRange } from './candidateRange';
import { FieldsMatching } from './fieldsMatching';
import { GeoPos } from './geoPos';
import { GeocodeAddress } from './geocodeAddress';

export class Candidate {
    'precisionLevel'?: number;
    'formattedStreetAddress'?: string;
    'formattedLocationAddress'?: string;
    'identifier'?: string;
    'precisionCode'?: string;
    'sourceDictionary'?: string;
    'matching'?: FieldsMatching;
    'geometry'?: GeoPos;
    'address'?: GeocodeAddress;
    'ranges'?: Array<CandidateRange>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "precisionLevel",
            "baseName": "precisionLevel",
            "type": "number"
        },
        {
            "name": "formattedStreetAddress",
            "baseName": "formattedStreetAddress",
            "type": "string"
        },
        {
            "name": "formattedLocationAddress",
            "baseName": "formattedLocationAddress",
            "type": "string"
        },
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string"
        },
        {
            "name": "precisionCode",
            "baseName": "precisionCode",
            "type": "string"
        },
        {
            "name": "sourceDictionary",
            "baseName": "sourceDictionary",
            "type": "string"
        },
        {
            "name": "matching",
            "baseName": "matching",
            "type": "FieldsMatching"
        },
        {
            "name": "geometry",
            "baseName": "geometry",
            "type": "GeoPos"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "GeocodeAddress"
        },
        {
            "name": "ranges",
            "baseName": "ranges",
            "type": "Array<CandidateRange>"
        }    ];

    static getAttributeTypeMap() {
        return Candidate.attributeTypeMap;
    }
}

