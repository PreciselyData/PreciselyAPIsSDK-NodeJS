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
import { Address } from './address';
import { Distance } from './distance';
import { Geometry } from './geometry';
import { Match } from './match';
import { Place } from './place';
import { Poi } from './poi';
import { TypeaheadRange } from './typeaheadRange';

export class TypeaheadLocation {
    'dataset'?: string;
    'match'?: Match;
    'address'?: Address;
    'poi'?: Poi;
    'distance'?: Distance;
    'unitTemp'?: string;
    'valueTemp'?: string;
    'geometry'?: Geometry;
    'totalUnitCount'?: number;
    'ranges'?: Array<TypeaheadRange>;
    'place'?: Place;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dataset",
            "baseName": "dataset",
            "type": "string"
        },
        {
            "name": "match",
            "baseName": "match",
            "type": "Match"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "Address"
        },
        {
            "name": "poi",
            "baseName": "poi",
            "type": "Poi"
        },
        {
            "name": "distance",
            "baseName": "distance",
            "type": "Distance"
        },
        {
            "name": "unitTemp",
            "baseName": "unitTemp",
            "type": "string"
        },
        {
            "name": "valueTemp",
            "baseName": "valueTemp",
            "type": "string"
        },
        {
            "name": "geometry",
            "baseName": "geometry",
            "type": "Geometry"
        },
        {
            "name": "totalUnitCount",
            "baseName": "totalUnitCount",
            "type": "number"
        },
        {
            "name": "ranges",
            "baseName": "ranges",
            "type": "Array<TypeaheadRange>"
        },
        {
            "name": "place",
            "baseName": "place",
            "type": "Place"
        }    ];

    static getAttributeTypeMap() {
        return TypeaheadLocation.attributeTypeMap;
    }
}
