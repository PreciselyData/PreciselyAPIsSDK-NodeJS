export * from './addressVerificationServiceApi';
import { AddressVerificationServiceApi } from './addressVerificationServiceApi';
export * from './addressesServiceApi';
import { AddressesServiceApi } from './addressesServiceApi';
export * from './demographicsServiceApi';
import { DemographicsServiceApi } from './demographicsServiceApi';
export * from './emailVerificationServiceApi';
import { EmailVerificationServiceApi } from './emailVerificationServiceApi';
export * from './geocodeServiceApi';
import { GeocodeServiceApi } from './geocodeServiceApi';
export * from './geolocationServiceApi';
import { GeolocationServiceApi } from './geolocationServiceApi';
export * from './localTaxServiceApi';
import { LocalTaxServiceApi } from './localTaxServiceApi';
export * from './neighborhoodsServiceApi';
import { NeighborhoodsServiceApi } from './neighborhoodsServiceApi';
export * from './pSAP911ServiceApi';
import { PSAP911ServiceApi } from './pSAP911ServiceApi';
export * from './phoneVerificationServiceApi';
import { PhoneVerificationServiceApi } from './phoneVerificationServiceApi';
export * from './placesServiceApi';
import { PlacesServiceApi } from './placesServiceApi';
export * from './propertyInformationServiceApi';
import { PropertyInformationServiceApi } from './propertyInformationServiceApi';
export * from './risksServiceApi';
import { RisksServiceApi } from './risksServiceApi';
export * from './routingServiceApi';
import { RoutingServiceApi } from './routingServiceApi';
export * from './schoolsServiceApi';
import { SchoolsServiceApi } from './schoolsServiceApi';
export * from './streetsServiceApi';
import { StreetsServiceApi } from './streetsServiceApi';
export * from './telecommInfoServiceApi';
import { TelecommInfoServiceApi } from './telecommInfoServiceApi';
export * from './timeZoneServiceApi';
import { TimeZoneServiceApi } from './timeZoneServiceApi';
export * from './typeaheadServiceApi';
import { TypeaheadServiceApi } from './typeaheadServiceApi';
export * from './zonesServiceApi';
import { ZonesServiceApi } from './zonesServiceApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AddressVerificationServiceApi, AddressesServiceApi, DemographicsServiceApi, EmailVerificationServiceApi, GeocodeServiceApi, GeolocationServiceApi, LocalTaxServiceApi, NeighborhoodsServiceApi, PSAP911ServiceApi, PhoneVerificationServiceApi, PlacesServiceApi, PropertyInformationServiceApi, RisksServiceApi, RoutingServiceApi, SchoolsServiceApi, StreetsServiceApi, TelecommInfoServiceApi, TimeZoneServiceApi, TypeaheadServiceApi, ZonesServiceApi];
