/**
 * Precisely APIs
 * Enhance & enrich your data, applications, business processes, and workflows with rich location, information, and identify APIs.
 *
 * The version of the OpenAPI document: 11.9.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Boundaries } from './boundaries';
import { SegmentationThemes } from './segmentationThemes';

export class Segmentation {
    'boundaries': Boundaries;
    'themes': SegmentationThemes;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "boundaries",
            "baseName": "boundaries",
            "type": "Boundaries"
        },
        {
            "name": "themes",
            "baseName": "themes",
            "type": "SegmentationThemes"
        }    ];

    static getAttributeTypeMap() {
        return Segmentation.attributeTypeMap;
    }
}

