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
import { County } from './county';
import { Coverage } from './coverage';
import { SiteDetails } from './siteDetails';

export class PSAPResponse {
    'psapId'?: string;
    'fccId'?: string;
    'type'?: string;
    'count'?: number;
    'agency'?: string;
    'phone'?: string;
    'county'?: County;
    'coverage'?: Coverage;
    'contactPerson'?: ContactPerson;
    'siteDetails'?: SiteDetails;
    'mailingAddress'?: AHJmailingAddress;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "psapId",
            "baseName": "psapId",
            "type": "string"
        },
        {
            "name": "fccId",
            "baseName": "fccId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
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
            "name": "county",
            "baseName": "county",
            "type": "County"
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
            "name": "siteDetails",
            "baseName": "siteDetails",
            "type": "SiteDetails"
        },
        {
            "name": "mailingAddress",
            "baseName": "mailingAddress",
            "type": "AHJmailingAddress"
        }    ];

    static getAttributeTypeMap() {
        return PSAPResponse.attributeTypeMap;
    }
}
