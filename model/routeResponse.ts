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
import { IntermediatePoints } from './intermediatePoints';
import { RouteDirection } from './routeDirection';
import { RouteGeometry } from './routeGeometry';

export class RouteResponse {
    'directionsStyle'?: string;
    'distance'?: number;
    'distanceUnit'?: string;
    'language'?: string;
    'timeUnit'?: string;
    'time'?: number;
    'geometry'?: RouteGeometry;
    'routeDirections'?: Array<RouteDirection>;
    'intermediatePoints'?: IntermediatePoints;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "directionsStyle",
            "baseName": "directionsStyle",
            "type": "string"
        },
        {
            "name": "distance",
            "baseName": "distance",
            "type": "number"
        },
        {
            "name": "distanceUnit",
            "baseName": "distanceUnit",
            "type": "string"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "timeUnit",
            "baseName": "timeUnit",
            "type": "string"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "number"
        },
        {
            "name": "geometry",
            "baseName": "geometry",
            "type": "RouteGeometry"
        },
        {
            "name": "routeDirections",
            "baseName": "routeDirections",
            "type": "Array<RouteDirection>"
        },
        {
            "name": "intermediatePoints",
            "baseName": "intermediatePoints",
            "type": "IntermediatePoints"
        }    ];

    static getAttributeTypeMap() {
        return RouteResponse.attributeTypeMap;
    }
}
