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
import { AHJmailingAddress } from './aHJmailingAddress';
import { ContactPerson } from './contactPerson';
import { Coverage } from './coverage';

export class AHJ {
    'ahjType'?: string;
    'ahjId'?: string;
    'type'?: string;
    'fccId'?: string;
    'agency'?: string;
    'phone'?: string;
    'comments'?: string;
    'coverage'?: Coverage;
    'contactPerson'?: ContactPerson;
    'mailingAddress'?: AHJmailingAddress;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ahjType",
            "baseName": "ahjType",
            "type": "string"
        },
        {
            "name": "ahjId",
            "baseName": "ahjId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "fccId",
            "baseName": "fccId",
            "type": "string"
        },
        {
            "name": "agency",
            "baseName": "agency",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "comments",
            "baseName": "comments",
            "type": "string"
        },
        {
            "name": "coverage",
            "baseName": "coverage",
            "type": "Coverage"
        },
        {
            "name": "contactPerson",
            "baseName": "contactPerson",
            "type": "ContactPerson"
        },
        {
            "name": "mailingAddress",
            "baseName": "mailingAddress",
            "type": "AHJmailingAddress"
        }    ];

    static getAttributeTypeMap() {
        return AHJ.attributeTypeMap;
    }
}
