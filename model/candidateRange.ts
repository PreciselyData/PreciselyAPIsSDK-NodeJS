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
import { CandidateRangeUnit } from './candidateRangeUnit';

export class CandidateRange {
    'placeName'?: string;
    'lowHouse'?: string;
    'highHouse'?: string;
    'side'?: CandidateRange.SideEnum;
    'oddEvenIndicator'?: CandidateRange.OddEvenIndicatorEnum;
    'units'?: Array<CandidateRangeUnit>;
    'customValues'?: { [key: string]: object; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "placeName",
            "baseName": "placeName",
            "type": "string"
        },
        {
            "name": "lowHouse",
            "baseName": "lowHouse",
            "type": "string"
        },
        {
            "name": "highHouse",
            "baseName": "highHouse",
            "type": "string"
        },
        {
            "name": "side",
            "baseName": "side",
            "type": "CandidateRange.SideEnum"
        },
        {
            "name": "oddEvenIndicator",
            "baseName": "oddEvenIndicator",
            "type": "CandidateRange.OddEvenIndicatorEnum"
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "Array<CandidateRangeUnit>"
        },
        {
            "name": "customValues",
            "baseName": "customValues",
            "type": "{ [key: string]: object; }"
        }    ];

    static getAttributeTypeMap() {
        return CandidateRange.attributeTypeMap;
    }
}

export namespace CandidateRange {
    export enum SideEnum {
        Unknown = <any> 'UNKNOWN',
        Left = <any> 'LEFT',
        Right = <any> 'RIGHT',
        Both = <any> 'BOTH'
    }
    export enum OddEvenIndicatorEnum {
        Unknown = <any> 'UNKNOWN',
        Both = <any> 'BOTH',
        Odd = <any> 'ODD',
        Even = <any> 'EVEN',
        Irregular = <any> 'IRREGULAR'
    }
}