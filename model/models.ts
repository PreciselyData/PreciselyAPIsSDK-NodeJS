import localVarRequest from 'request';
import http from 'http';
import moment from 'moment';
import Promise from 'bluebird';

export * from './aHJ';
export * from './aHJList';
export * from './aHJPlusPSAPResponse';
export * from './aHJmailingAddress';
export * from './absenteeOwner';
export * from './accuracy';
export * from './address';
export * from './addressTime';
export * from './addressType';
export * from './addressesByBoundaryRequest';
export * from './addressesCount';
export * from './addressesDTO';
export * from './addressesPreferences';
export * from './addressesResponse';
export * from './area';
export * from './areaCodeInfo';
export * from './assetsAndWealthTheme';
export * from './baseFloodElevation';
export * from './basementType';
export * from './basicBoundary';
export * from './boundaries';
export * from './boundary';
export * from './boundaryBuffer';
export * from './boundaryPoint';
export * from './bufferRelation';
export * from './buildgCondition';
export * from './buildgFeaturesSqft';
export * from './buildgStyle';
export * from './buildgType';
export * from './buildingSqftSource';
export * from './businessId';
export * from './caExemptions';
export * from './candidate';
export * from './candidateRange';
export * from './candidateRangeUnit';
export * from './carrier';
export * from './category';
export * from './categoryMetadata';
export * from './cbsa';
export * from './census';
export * from './center';
export * from './city';
export * from './commonGeometry';
export * from './community';
export * from './consistencyCode';
export * from './construction';
export * from './contactDetails';
export * from './contactPerson';
export * from './coolingType';
export * from './cost';
export * from './county';
export * from './coverage';
export * from './crimeBoundary';
export * from './crimeIndexTheme';
export * from './crimeRiskByAddressBatchRequest';
export * from './crimeRiskByLocationBatchRequest';
export * from './crimeRiskPreferences';
export * from './crimeRiskResponse';
export * from './crimeRiskResponseList';
export * from './crs';
export * from './demographics';
export * from './demographicsAdvancedPreferences';
export * from './demographicsAdvancedRequest';
export * from './demographicsGeometry';
export * from './demographicsGeometryCRC';
export * from './demographicsThemesV2';
export * from './depth';
export * from './deviceStatusNetwork';
export * from './directionGeometry';
export * from './distance';
export * from './distanceToBorder';
export * from './distanceToFloodHazardAddressRequest';
export * from './distanceToFloodHazardLocationRequest';
export * from './distanceToFloodHazardResponse';
export * from './districtType';
export * from './domesticUltimateBusiness';
export * from './earthquakeDateTime';
export * from './earthquakeEvent';
export * from './earthquakeEventsResponse';
export * from './earthquakeHistory';
export * from './earthquakeLocation';
export * from './earthquakeRiskByAddressRequest';
export * from './earthquakeRiskByLocationRequest';
export * from './earthquakeRiskResponse';
export * from './earthquakeRiskResponseList';
export * from './educationTheme';
export * from './employeeCount';
export * from './employmentTheme';
export * from './errorCode';
export * from './errorInfo';
export * from './eventsCount';
export * from './expenditureTheme';
export * from './exteriorWalls';
export * from './field';
export * from './fieldsMatching';
export * from './fireDepartment';
export * from './fireEvent';
export * from './fireEventsResponse';
export * from './fireHistory';
export * from './fireRiskByAddressRequest';
export * from './fireRiskByLocationRequest';
export * from './fireRiskResponse';
export * from './fireRiskResponseList';
export * from './fireShed';
export * from './fireStation';
export * from './fireStationContactDetails';
export * from './fireStations';
export * from './floodHazardPreferences';
export * from './floodRiskByAddressRequest';
export * from './floodRiskByLocationRequest';
export * from './floodRiskPreferences';
export * from './floodRiskResponse';
export * from './floodRiskResponseList';
export * from './floodZone';
export * from './foundation';
export * from './freeOrReducedPriceLunches';
export * from './garageType';
export * from './geoLocationAccessPoint';
export * from './geoLocationCountry';
export * from './geoLocationFixedLineCountry';
export * from './geoLocationIpAddr';
export * from './geoLocationPlace';
export * from './geoLocationState';
export * from './geoPos';
export * from './geocodeAddress';
export * from './geocodePreferences';
export * from './geocodeRequest';
export * from './geocodeServiceResponse';
export * from './geocodeServiceResponseList';
export * from './geolocationGeometry';
export * from './geometry';
export * from './geometryCRC';
export * from './geometryProperties';
export * from './getCityStateProvinceAPIInput';
export * from './getCityStateProvinceAPIInputRow';
export * from './getCityStateProvinceAPIOptions';
export * from './getCityStateProvinceAPIOutput';
export * from './getCityStateProvinceAPIRequest';
export * from './getCityStateProvinceAPIResponse';
export * from './getPostalCodesAPIInput';
export * from './getPostalCodesAPIInputRow';
export * from './getPostalCodesAPIOptions';
export * from './getPostalCodesAPIOutput';
export * from './getPostalCodesAPIOutputUserFields';
export * from './getPostalCodesAPIRequest';
export * from './getPostalCodesAPIResponse';
export * from './globalUltimateBusiness';
export * from './gradeLevelsTaught';
export * from './greatschools';
export * from './grid';
export * from './healthTheme';
export * from './heatingType';
export * from './householdsTheme';
export * from './housingTheme';
export * from './iPDTaxByAddressBatchRequest';
export * from './iPDTaxJurisdiction';
export * from './incomeTheme';
export * from './indexVariable';
export * from './individualValueVariable';
export * from './intermediatePoints';
export * from './intersection';
export * from './intersectionResponse';
export * from './ipInfo';
export * from './ipd';
export * from './keyLookupRequest';
export * from './keys';
export * from './landUse';
export * from './latLongFields';
export * from './lifeStyleTheme';
export * from './localTaxGeometry';
export * from './localTaxPreferences';
export * from './location';
export * from './locationTime';
export * from './magnitude';
export * from './match';
export * from './matchedAddress';
export * from './matrix';
export * from './mcd';
export * from './metadataResponse';
export * from './name';
export * from './neighborhoodsResponse';
export * from './network';
export * from './organizationType';
export * from './owners';
export * from './pBKeyAddressRequest';
export * from './pBKeyResponse';
export * from './pBKeyResponseList';
export * from './pOIBoundaryAddressRequest';
export * from './pOIBoundaryLocationRequest';
export * from './pOIBoundaryLocations';
export * from './pOIBoundaryPreferences';
export * from './pOIBoundaryResponse';
export * from './pOIByGeometryRequest';
export * from './pSAPResponse';
export * from './parentBusiness';
export * from './pbkey';
export * from './phoneVerification';
export * from './place';
export * from './placesResponse';
export * from './poi';
export * from './poiBoundary';
export * from './poiClassification';
export * from './poiCount';
export * from './poiCountRequest';
export * from './points';
export * from './populationTheme';
export * from './preferencTimeZone';
export * from './primaryZone';
export * from './properties';
export * from './propertyAttributes';
export * from './propertyGeometry';
export * from './propertyInfoAddressRequest';
export * from './propertyInfoPreferences';
export * from './propertyInfoResponse';
export * from './propertyInfoResponses';
export * from './proxy';
export * from './raceAndEthnicityTheme';
export * from './rangeVariable';
export * from './rate';
export * from './rateCenterResponse';
export * from './returnFieldsDescriptor';
export * from './reverseGeocodeRequest';
export * from './risk';
export * from './riskAddress';
export * from './riskGeometry';
export * from './riskLocations';
export * from './riskPreferences';
export * from './risksBoundaries';
export * from './risksCrimeTheme';
export * from './risksGeometryCRC';
export * from './road';
export * from './roofCoverType';
export * from './roofFrameType';
export * from './roofShapeType';
export * from './routeDirection';
export * from './routeGeometry';
export * from './routeResponse';
export * from './salesTax';
export * from './salesVolume';
export * from './school';
export * from './schoolDistrict';
export * from './schoolProfile';
export * from './schoolRanking';
export * from './schoolsNearByResponse';
export * from './segmentation';
export * from './segmentationThemes';
export * from './shoreLineDistance';
export * from './sic';
export * from './sicMetadata';
export * from './siteDetails';
export * from './specialPurposeDistrict';
export * from './specialPurposeDistrictTax';
export * from './speedLimit';
export * from './startEndPoint';
export * from './state';
export * from './status';
export * from './stories';
export * from './studentEthnicity';
export * from './supplyAndDemandTheme';
export * from './taxAddress';
export * from './taxAddressRequest';
export * from './taxCounty';
export * from './taxDistrictResponse';
export * from './taxDistrictResponseList';
export * from './taxExemption';
export * from './taxGeometry';
export * from './taxJurisdiction';
export * from './taxLocationRequest';
export * from './taxLocations';
export * from './taxPlace';
export * from './taxRateAddress';
export * from './taxRateAddressRequest';
export * from './taxRateLocationRequest';
export * from './taxRateMatchedAddress';
export * from './taxRateResponse';
export * from './taxResponses';
export * from './taxState';
export * from './time';
export * from './timezoneAddressRequest';
export * from './timezoneGeometry';
export * from './timezoneLocationRequest';
export * from './timezoneResponse';
export * from './timezoneResponseList';
export * from './travelBoundaries';
export * from './travelBoundary';
export * from './travelCostMatrixResponse';
export * from './type';
export * from './typeaheadLocation';
export * from './typeaheadLocations';
export * from './typeaheadRange';
export * from './typeaheadUnit';
export * from './unit';
export * from './useTax';
export * from './vacancy';
export * from './validateEmailAddressAPIRequest';
export * from './validateEmailAddressAPIResponse';
export * from './validateEmailAddressInput';
export * from './validateEmailAddressInputRow';
export * from './validateEmailAddressOutput';
export * from './validateMailingAddressInput';
export * from './validateMailingAddressInputRow';
export * from './validateMailingAddressOptions';
export * from './validateMailingAddressOutput';
export * from './validateMailingAddressPremiumInput';
export * from './validateMailingAddressPremiumInputRow';
export * from './validateMailingAddressPremiumOptions';
export * from './validateMailingAddressPremiumOutput';
export * from './validateMailingAddressPremiumRequest';
export * from './validateMailingAddressPremiumResponse';
export * from './validateMailingAddressProInput';
export * from './validateMailingAddressProInputRow';
export * from './validateMailingAddressProOptions';
export * from './validateMailingAddressProOutput';
export * from './validateMailingAddressProRequest';
export * from './validateMailingAddressProResponse';
export * from './validateMailingAddressRequest';
export * from './validateMailingAddressResponse';
export * from './validateMailingAddressUSCANAPIInput';
export * from './validateMailingAddressUSCANAPIInputRow';
export * from './validateMailingAddressUSCANAPIOptions';
export * from './validateMailingAddressUSCANAPIOutput';
export * from './validateMailingAddressUSCANAPIRequest';
export * from './validateMailingAddressUSCANAPIResponse';
export * from './waterBody';
export * from './waterBodyResponse';
export * from './zonesAddress';
export * from './zonesBoundaryGeometry';
export * from './zonesContactDetails';
export * from './zonesGeometry';
export * from './zonesParentBusiness';
export * from './zonesPoi';
export * from './zonesPoiClassification';
export * from './zonesPoiGeometry';
export * from './zonesSic';

import * as fs from 'fs';

export class oAuthCredInfo {
"access_token": string;
"tokenType": string;
"issuedAt": number;
"expiresIn": number;
"clientID": string;
"org": string;
}


export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AHJ } from './aHJ';
import { AHJList } from './aHJList';
import { AHJPlusPSAPResponse } from './aHJPlusPSAPResponse';
import { AHJmailingAddress } from './aHJmailingAddress';
import { AbsenteeOwner } from './absenteeOwner';
import { Accuracy } from './accuracy';
import { Address } from './address';
import { AddressTime } from './addressTime';
import { AddressType } from './addressType';
import { AddressesByBoundaryRequest } from './addressesByBoundaryRequest';
import { AddressesCount } from './addressesCount';
import { AddressesDTO } from './addressesDTO';
import { AddressesPreferences } from './addressesPreferences';
import { AddressesResponse } from './addressesResponse';
import { Area } from './area';
import { AreaCodeInfo } from './areaCodeInfo';
import { AssetsAndWealthTheme } from './assetsAndWealthTheme';
import { BaseFloodElevation } from './baseFloodElevation';
import { BasementType } from './basementType';
import { BasicBoundary } from './basicBoundary';
import { Boundaries } from './boundaries';
import { Boundary } from './boundary';
import { BoundaryBuffer } from './boundaryBuffer';
import { BoundaryPoint } from './boundaryPoint';
import { BufferRelation } from './bufferRelation';
import { BuildgCondition } from './buildgCondition';
import { BuildgFeaturesSqft } from './buildgFeaturesSqft';
import { BuildgStyle } from './buildgStyle';
import { BuildgType } from './buildgType';
import { BuildingSqftSource } from './buildingSqftSource';
import { BusinessId } from './businessId';
import { CaExemptions } from './caExemptions';
import { Candidate } from './candidate';
import { CandidateRange } from './candidateRange';
import { CandidateRangeUnit } from './candidateRangeUnit';
import { Carrier } from './carrier';
import { Category } from './category';
import { CategoryMetadata } from './categoryMetadata';
import { Cbsa } from './cbsa';
import { Census } from './census';
import { Center } from './center';
import { City } from './city';
import { CommonGeometry } from './commonGeometry';
import { Community } from './community';
import { ConsistencyCode } from './consistencyCode';
import { Construction } from './construction';
import { ContactDetails } from './contactDetails';
import { ContactPerson } from './contactPerson';
import { CoolingType } from './coolingType';
import { Cost } from './cost';
import { County } from './county';
import { Coverage } from './coverage';
import { CrimeBoundary } from './crimeBoundary';
import { CrimeIndexTheme } from './crimeIndexTheme';
import { CrimeRiskByAddressBatchRequest } from './crimeRiskByAddressBatchRequest';
import { CrimeRiskByLocationBatchRequest } from './crimeRiskByLocationBatchRequest';
import { CrimeRiskPreferences } from './crimeRiskPreferences';
import { CrimeRiskResponse } from './crimeRiskResponse';
import { CrimeRiskResponseList } from './crimeRiskResponseList';
import { Crs } from './crs';
import { Demographics } from './demographics';
import { DemographicsAdvancedPreferences } from './demographicsAdvancedPreferences';
import { DemographicsAdvancedRequest } from './demographicsAdvancedRequest';
import { DemographicsGeometry } from './demographicsGeometry';
import { DemographicsGeometryCRC } from './demographicsGeometryCRC';
import { DemographicsThemesV2 } from './demographicsThemesV2';
import { Depth } from './depth';
import { DeviceStatusNetwork } from './deviceStatusNetwork';
import { DirectionGeometry } from './directionGeometry';
import { Distance } from './distance';
import { DistanceToBorder } from './distanceToBorder';
import { DistanceToFloodHazardAddressRequest } from './distanceToFloodHazardAddressRequest';
import { DistanceToFloodHazardLocationRequest } from './distanceToFloodHazardLocationRequest';
import { DistanceToFloodHazardResponse } from './distanceToFloodHazardResponse';
import { DistrictType } from './districtType';
import { DomesticUltimateBusiness } from './domesticUltimateBusiness';
import { EarthquakeDateTime } from './earthquakeDateTime';
import { EarthquakeEvent } from './earthquakeEvent';
import { EarthquakeEventsResponse } from './earthquakeEventsResponse';
import { EarthquakeHistory } from './earthquakeHistory';
import { EarthquakeLocation } from './earthquakeLocation';
import { EarthquakeRiskByAddressRequest } from './earthquakeRiskByAddressRequest';
import { EarthquakeRiskByLocationRequest } from './earthquakeRiskByLocationRequest';
import { EarthquakeRiskResponse } from './earthquakeRiskResponse';
import { EarthquakeRiskResponseList } from './earthquakeRiskResponseList';
import { EducationTheme } from './educationTheme';
import { EmployeeCount } from './employeeCount';
import { EmploymentTheme } from './employmentTheme';
import { ErrorCode } from './errorCode';
import { ErrorInfo } from './errorInfo';
import { EventsCount } from './eventsCount';
import { ExpenditureTheme } from './expenditureTheme';
import { ExteriorWalls } from './exteriorWalls';
import { Field } from './field';
import { FieldsMatching } from './fieldsMatching';
import { FireDepartment } from './fireDepartment';
import { FireEvent } from './fireEvent';
import { FireEventsResponse } from './fireEventsResponse';
import { FireHistory } from './fireHistory';
import { FireRiskByAddressRequest } from './fireRiskByAddressRequest';
import { FireRiskByLocationRequest } from './fireRiskByLocationRequest';
import { FireRiskResponse } from './fireRiskResponse';
import { FireRiskResponseList } from './fireRiskResponseList';
import { FireShed } from './fireShed';
import { FireStation } from './fireStation';
import { FireStationContactDetails } from './fireStationContactDetails';
import { FireStations } from './fireStations';
import { FloodHazardPreferences } from './floodHazardPreferences';
import { FloodRiskByAddressRequest } from './floodRiskByAddressRequest';
import { FloodRiskByLocationRequest } from './floodRiskByLocationRequest';
import { FloodRiskPreferences } from './floodRiskPreferences';
import { FloodRiskResponse } from './floodRiskResponse';
import { FloodRiskResponseList } from './floodRiskResponseList';
import { FloodZone } from './floodZone';
import { Foundation } from './foundation';
import { FreeOrReducedPriceLunches } from './freeOrReducedPriceLunches';
import { GarageType } from './garageType';
import { GeoLocationAccessPoint } from './geoLocationAccessPoint';
import { GeoLocationCountry } from './geoLocationCountry';
import { GeoLocationFixedLineCountry } from './geoLocationFixedLineCountry';
import { GeoLocationIpAddr } from './geoLocationIpAddr';
import { GeoLocationPlace } from './geoLocationPlace';
import { GeoLocationState } from './geoLocationState';
import { GeoPos } from './geoPos';
import { GeocodeAddress } from './geocodeAddress';
import { GeocodePreferences } from './geocodePreferences';
import { GeocodeRequest } from './geocodeRequest';
import { GeocodeServiceResponse } from './geocodeServiceResponse';
import { GeocodeServiceResponseList } from './geocodeServiceResponseList';
import { GeolocationGeometry } from './geolocationGeometry';
import { Geometry } from './geometry';
import { GeometryCRC } from './geometryCRC';
import { GeometryProperties } from './geometryProperties';
import { GetCityStateProvinceAPIInput } from './getCityStateProvinceAPIInput';
import { GetCityStateProvinceAPIInputRow } from './getCityStateProvinceAPIInputRow';
import { GetCityStateProvinceAPIOptions } from './getCityStateProvinceAPIOptions';
import { GetCityStateProvinceAPIOutput } from './getCityStateProvinceAPIOutput';
import { GetCityStateProvinceAPIRequest } from './getCityStateProvinceAPIRequest';
import { GetCityStateProvinceAPIResponse } from './getCityStateProvinceAPIResponse';
import { GetPostalCodesAPIInput } from './getPostalCodesAPIInput';
import { GetPostalCodesAPIInputRow } from './getPostalCodesAPIInputRow';
import { GetPostalCodesAPIOptions } from './getPostalCodesAPIOptions';
import { GetPostalCodesAPIOutput } from './getPostalCodesAPIOutput';
import { GetPostalCodesAPIOutputUserFields } from './getPostalCodesAPIOutputUserFields';
import { GetPostalCodesAPIRequest } from './getPostalCodesAPIRequest';
import { GetPostalCodesAPIResponse } from './getPostalCodesAPIResponse';
import { GlobalUltimateBusiness } from './globalUltimateBusiness';
import { GradeLevelsTaught } from './gradeLevelsTaught';
import { Greatschools } from './greatschools';
import { Grid } from './grid';
import { HealthTheme } from './healthTheme';
import { HeatingType } from './heatingType';
import { HouseholdsTheme } from './householdsTheme';
import { HousingTheme } from './housingTheme';
import { IPDTaxByAddressBatchRequest } from './iPDTaxByAddressBatchRequest';
import { IPDTaxJurisdiction } from './iPDTaxJurisdiction';
import { IncomeTheme } from './incomeTheme';
import { IndexVariable } from './indexVariable';
import { IndividualValueVariable } from './individualValueVariable';
import { IntermediatePoints } from './intermediatePoints';
import { Intersection } from './intersection';
import { IntersectionResponse } from './intersectionResponse';
import { IpInfo } from './ipInfo';
import { Ipd } from './ipd';
import { KeyLookupRequest } from './keyLookupRequest';
import { Keys } from './keys';
import { LandUse } from './landUse';
import { LatLongFields } from './latLongFields';
import { LifeStyleTheme } from './lifeStyleTheme';
import { LocalTaxGeometry } from './localTaxGeometry';
import { LocalTaxPreferences } from './localTaxPreferences';
import { Location } from './location';
import { LocationTime } from './locationTime';
import { Magnitude } from './magnitude';
import { Match } from './match';
import { MatchedAddress } from './matchedAddress';
import { Matrix } from './matrix';
import { Mcd } from './mcd';
import { MetadataResponse } from './metadataResponse';
import { Name } from './name';
import { NeighborhoodsResponse } from './neighborhoodsResponse';
import { Network } from './network';
import { OrganizationType } from './organizationType';
import { Owners } from './owners';
import { PBKeyAddressRequest } from './pBKeyAddressRequest';
import { PBKeyResponse } from './pBKeyResponse';
import { PBKeyResponseList } from './pBKeyResponseList';
import { POIBoundaryAddressRequest } from './pOIBoundaryAddressRequest';
import { POIBoundaryLocationRequest } from './pOIBoundaryLocationRequest';
import { POIBoundaryLocations } from './pOIBoundaryLocations';
import { POIBoundaryPreferences } from './pOIBoundaryPreferences';
import { POIBoundaryResponse } from './pOIBoundaryResponse';
import { POIByGeometryRequest } from './pOIByGeometryRequest';
import { PSAPResponse } from './pSAPResponse';
import { ParentBusiness } from './parentBusiness';
import { Pbkey } from './pbkey';
import { PhoneVerification } from './phoneVerification';
import { Place } from './place';
import { PlacesResponse } from './placesResponse';
import { Poi } from './poi';
import { PoiBoundary } from './poiBoundary';
import { PoiClassification } from './poiClassification';
import { PoiCount } from './poiCount';
import { PoiCountRequest } from './poiCountRequest';
import { Points } from './points';
import { PopulationTheme } from './populationTheme';
import { PreferencTimeZone } from './preferencTimeZone';
import { PrimaryZone } from './primaryZone';
import { Properties } from './properties';
import { PropertyAttributes } from './propertyAttributes';
import { PropertyGeometry } from './propertyGeometry';
import { PropertyInfoAddressRequest } from './propertyInfoAddressRequest';
import { PropertyInfoPreferences } from './propertyInfoPreferences';
import { PropertyInfoResponse } from './propertyInfoResponse';
import { PropertyInfoResponses } from './propertyInfoResponses';
import { Proxy } from './proxy';
import { RaceAndEthnicityTheme } from './raceAndEthnicityTheme';
import { RangeVariable } from './rangeVariable';
import { Rate } from './rate';
import { RateCenterResponse } from './rateCenterResponse';
import { ReturnFieldsDescriptor } from './returnFieldsDescriptor';
import { ReverseGeocodeRequest } from './reverseGeocodeRequest';
import { Risk } from './risk';
import { RiskAddress } from './riskAddress';
import { RiskGeometry } from './riskGeometry';
import { RiskLocations } from './riskLocations';
import { RiskPreferences } from './riskPreferences';
import { RisksBoundaries } from './risksBoundaries';
import { RisksCrimeTheme } from './risksCrimeTheme';
import { RisksGeometryCRC } from './risksGeometryCRC';
import { Road } from './road';
import { RoofCoverType } from './roofCoverType';
import { RoofFrameType } from './roofFrameType';
import { RoofShapeType } from './roofShapeType';
import { RouteDirection } from './routeDirection';
import { RouteGeometry } from './routeGeometry';
import { RouteResponse } from './routeResponse';
import { SalesTax } from './salesTax';
import { SalesVolume } from './salesVolume';
import { School } from './school';
import { SchoolDistrict } from './schoolDistrict';
import { SchoolProfile } from './schoolProfile';
import { SchoolRanking } from './schoolRanking';
import { SchoolsNearByResponse } from './schoolsNearByResponse';
import { Segmentation } from './segmentation';
import { SegmentationThemes } from './segmentationThemes';
import { ShoreLineDistance } from './shoreLineDistance';
import { Sic } from './sic';
import { SicMetadata } from './sicMetadata';
import { SiteDetails } from './siteDetails';
import { SpecialPurposeDistrict } from './specialPurposeDistrict';
import { SpecialPurposeDistrictTax } from './specialPurposeDistrictTax';
import { SpeedLimit } from './speedLimit';
import { StartEndPoint } from './startEndPoint';
import { State } from './state';
import { Status } from './status';
import { Stories } from './stories';
import { StudentEthnicity } from './studentEthnicity';
import { SupplyAndDemandTheme } from './supplyAndDemandTheme';
import { TaxAddress } from './taxAddress';
import { TaxAddressRequest } from './taxAddressRequest';
import { TaxCounty } from './taxCounty';
import { TaxDistrictResponse } from './taxDistrictResponse';
import { TaxDistrictResponseList } from './taxDistrictResponseList';
import { TaxExemption } from './taxExemption';
import { TaxGeometry } from './taxGeometry';
import { TaxJurisdiction } from './taxJurisdiction';
import { TaxLocationRequest } from './taxLocationRequest';
import { TaxLocations } from './taxLocations';
import { TaxPlace } from './taxPlace';
import { TaxRateAddress } from './taxRateAddress';
import { TaxRateAddressRequest } from './taxRateAddressRequest';
import { TaxRateLocationRequest } from './taxRateLocationRequest';
import { TaxRateMatchedAddress } from './taxRateMatchedAddress';
import { TaxRateResponse } from './taxRateResponse';
import { TaxResponses } from './taxResponses';
import { TaxState } from './taxState';
import { Time } from './time';
import { TimezoneAddressRequest } from './timezoneAddressRequest';
import { TimezoneGeometry } from './timezoneGeometry';
import { TimezoneLocationRequest } from './timezoneLocationRequest';
import { TimezoneResponse } from './timezoneResponse';
import { TimezoneResponseList } from './timezoneResponseList';
import { TravelBoundaries } from './travelBoundaries';
import { TravelBoundary } from './travelBoundary';
import { TravelCostMatrixResponse } from './travelCostMatrixResponse';
import { Type } from './type';
import { TypeaheadLocation } from './typeaheadLocation';
import { TypeaheadLocations } from './typeaheadLocations';
import { TypeaheadRange } from './typeaheadRange';
import { TypeaheadUnit } from './typeaheadUnit';
import { Unit } from './unit';
import { UseTax } from './useTax';
import { Vacancy } from './vacancy';
import { ValidateEmailAddressAPIRequest } from './validateEmailAddressAPIRequest';
import { ValidateEmailAddressAPIResponse } from './validateEmailAddressAPIResponse';
import { ValidateEmailAddressInput } from './validateEmailAddressInput';
import { ValidateEmailAddressInputRow } from './validateEmailAddressInputRow';
import { ValidateEmailAddressOutput } from './validateEmailAddressOutput';
import { ValidateMailingAddressInput } from './validateMailingAddressInput';
import { ValidateMailingAddressInputRow } from './validateMailingAddressInputRow';
import { ValidateMailingAddressOptions } from './validateMailingAddressOptions';
import { ValidateMailingAddressOutput } from './validateMailingAddressOutput';
import { ValidateMailingAddressPremiumInput } from './validateMailingAddressPremiumInput';
import { ValidateMailingAddressPremiumInputRow } from './validateMailingAddressPremiumInputRow';
import { ValidateMailingAddressPremiumOptions } from './validateMailingAddressPremiumOptions';
import { ValidateMailingAddressPremiumOutput } from './validateMailingAddressPremiumOutput';
import { ValidateMailingAddressPremiumRequest } from './validateMailingAddressPremiumRequest';
import { ValidateMailingAddressPremiumResponse } from './validateMailingAddressPremiumResponse';
import { ValidateMailingAddressProInput } from './validateMailingAddressProInput';
import { ValidateMailingAddressProInputRow } from './validateMailingAddressProInputRow';
import { ValidateMailingAddressProOptions } from './validateMailingAddressProOptions';
import { ValidateMailingAddressProOutput } from './validateMailingAddressProOutput';
import { ValidateMailingAddressProRequest } from './validateMailingAddressProRequest';
import { ValidateMailingAddressProResponse } from './validateMailingAddressProResponse';
import { ValidateMailingAddressRequest } from './validateMailingAddressRequest';
import { ValidateMailingAddressResponse } from './validateMailingAddressResponse';
import { ValidateMailingAddressUSCANAPIInput } from './validateMailingAddressUSCANAPIInput';
import { ValidateMailingAddressUSCANAPIInputRow } from './validateMailingAddressUSCANAPIInputRow';
import { ValidateMailingAddressUSCANAPIOptions } from './validateMailingAddressUSCANAPIOptions';
import { ValidateMailingAddressUSCANAPIOutput } from './validateMailingAddressUSCANAPIOutput';
import { ValidateMailingAddressUSCANAPIRequest } from './validateMailingAddressUSCANAPIRequest';
import { ValidateMailingAddressUSCANAPIResponse } from './validateMailingAddressUSCANAPIResponse';
import { WaterBody } from './waterBody';
import { WaterBodyResponse } from './waterBodyResponse';
import { ZonesAddress } from './zonesAddress';
import { ZonesBoundaryGeometry } from './zonesBoundaryGeometry';
import { ZonesContactDetails } from './zonesContactDetails';
import { ZonesGeometry } from './zonesGeometry';
import { ZonesParentBusiness } from './zonesParentBusiness';
import { ZonesPoi } from './zonesPoi';
import { ZonesPoiClassification } from './zonesPoiClassification';
import { ZonesPoiGeometry } from './zonesPoiGeometry';
import { ZonesSic } from './zonesSic';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "CandidateRange.SideEnum": CandidateRange.SideEnum,
        "CandidateRange.OddEvenIndicatorEnum": CandidateRange.OddEvenIndicatorEnum,
}

let typeMap: {[index: string]: any} = {
    "AHJ": AHJ,
    "AHJList": AHJList,
    "AHJPlusPSAPResponse": AHJPlusPSAPResponse,
    "AHJmailingAddress": AHJmailingAddress,
    "AbsenteeOwner": AbsenteeOwner,
    "Accuracy": Accuracy,
    "Address": Address,
    "AddressTime": AddressTime,
    "AddressType": AddressType,
    "AddressesByBoundaryRequest": AddressesByBoundaryRequest,
    "AddressesCount": AddressesCount,
    "AddressesDTO": AddressesDTO,
    "AddressesPreferences": AddressesPreferences,
    "AddressesResponse": AddressesResponse,
    "Area": Area,
    "AreaCodeInfo": AreaCodeInfo,
    "AssetsAndWealthTheme": AssetsAndWealthTheme,
    "BaseFloodElevation": BaseFloodElevation,
    "BasementType": BasementType,
    "BasicBoundary": BasicBoundary,
    "Boundaries": Boundaries,
    "Boundary": Boundary,
    "BoundaryBuffer": BoundaryBuffer,
    "BoundaryPoint": BoundaryPoint,
    "BufferRelation": BufferRelation,
    "BuildgCondition": BuildgCondition,
    "BuildgFeaturesSqft": BuildgFeaturesSqft,
    "BuildgStyle": BuildgStyle,
    "BuildgType": BuildgType,
    "BuildingSqftSource": BuildingSqftSource,
    "BusinessId": BusinessId,
    "CaExemptions": CaExemptions,
    "Candidate": Candidate,
    "CandidateRange": CandidateRange,
    "CandidateRangeUnit": CandidateRangeUnit,
    "Carrier": Carrier,
    "Category": Category,
    "CategoryMetadata": CategoryMetadata,
    "Cbsa": Cbsa,
    "Census": Census,
    "Center": Center,
    "City": City,
    "CommonGeometry": CommonGeometry,
    "Community": Community,
    "ConsistencyCode": ConsistencyCode,
    "Construction": Construction,
    "ContactDetails": ContactDetails,
    "ContactPerson": ContactPerson,
    "CoolingType": CoolingType,
    "Cost": Cost,
    "County": County,
    "Coverage": Coverage,
    "CrimeBoundary": CrimeBoundary,
    "CrimeIndexTheme": CrimeIndexTheme,
    "CrimeRiskByAddressBatchRequest": CrimeRiskByAddressBatchRequest,
    "CrimeRiskByLocationBatchRequest": CrimeRiskByLocationBatchRequest,
    "CrimeRiskPreferences": CrimeRiskPreferences,
    "CrimeRiskResponse": CrimeRiskResponse,
    "CrimeRiskResponseList": CrimeRiskResponseList,
    "Crs": Crs,
    "Demographics": Demographics,
    "DemographicsAdvancedPreferences": DemographicsAdvancedPreferences,
    "DemographicsAdvancedRequest": DemographicsAdvancedRequest,
    "DemographicsGeometry": DemographicsGeometry,
    "DemographicsGeometryCRC": DemographicsGeometryCRC,
    "DemographicsThemesV2": DemographicsThemesV2,
    "Depth": Depth,
    "DeviceStatusNetwork": DeviceStatusNetwork,
    "DirectionGeometry": DirectionGeometry,
    "Distance": Distance,
    "DistanceToBorder": DistanceToBorder,
    "DistanceToFloodHazardAddressRequest": DistanceToFloodHazardAddressRequest,
    "DistanceToFloodHazardLocationRequest": DistanceToFloodHazardLocationRequest,
    "DistanceToFloodHazardResponse": DistanceToFloodHazardResponse,
    "DistrictType": DistrictType,
    "DomesticUltimateBusiness": DomesticUltimateBusiness,
    "EarthquakeDateTime": EarthquakeDateTime,
    "EarthquakeEvent": EarthquakeEvent,
    "EarthquakeEventsResponse": EarthquakeEventsResponse,
    "EarthquakeHistory": EarthquakeHistory,
    "EarthquakeLocation": EarthquakeLocation,
    "EarthquakeRiskByAddressRequest": EarthquakeRiskByAddressRequest,
    "EarthquakeRiskByLocationRequest": EarthquakeRiskByLocationRequest,
    "EarthquakeRiskResponse": EarthquakeRiskResponse,
    "EarthquakeRiskResponseList": EarthquakeRiskResponseList,
    "EducationTheme": EducationTheme,
    "EmployeeCount": EmployeeCount,
    "EmploymentTheme": EmploymentTheme,
    "ErrorCode": ErrorCode,
    "ErrorInfo": ErrorInfo,
    "EventsCount": EventsCount,
    "ExpenditureTheme": ExpenditureTheme,
    "ExteriorWalls": ExteriorWalls,
    "Field": Field,
    "FieldsMatching": FieldsMatching,
    "FireDepartment": FireDepartment,
    "FireEvent": FireEvent,
    "FireEventsResponse": FireEventsResponse,
    "FireHistory": FireHistory,
    "FireRiskByAddressRequest": FireRiskByAddressRequest,
    "FireRiskByLocationRequest": FireRiskByLocationRequest,
    "FireRiskResponse": FireRiskResponse,
    "FireRiskResponseList": FireRiskResponseList,
    "FireShed": FireShed,
    "FireStation": FireStation,
    "FireStationContactDetails": FireStationContactDetails,
    "FireStations": FireStations,
    "FloodHazardPreferences": FloodHazardPreferences,
    "FloodRiskByAddressRequest": FloodRiskByAddressRequest,
    "FloodRiskByLocationRequest": FloodRiskByLocationRequest,
    "FloodRiskPreferences": FloodRiskPreferences,
    "FloodRiskResponse": FloodRiskResponse,
    "FloodRiskResponseList": FloodRiskResponseList,
    "FloodZone": FloodZone,
    "Foundation": Foundation,
    "FreeOrReducedPriceLunches": FreeOrReducedPriceLunches,
    "GarageType": GarageType,
    "GeoLocationAccessPoint": GeoLocationAccessPoint,
    "GeoLocationCountry": GeoLocationCountry,
    "GeoLocationFixedLineCountry": GeoLocationFixedLineCountry,
    "GeoLocationIpAddr": GeoLocationIpAddr,
    "GeoLocationPlace": GeoLocationPlace,
    "GeoLocationState": GeoLocationState,
    "GeoPos": GeoPos,
    "GeocodeAddress": GeocodeAddress,
    "GeocodePreferences": GeocodePreferences,
    "GeocodeRequest": GeocodeRequest,
    "GeocodeServiceResponse": GeocodeServiceResponse,
    "GeocodeServiceResponseList": GeocodeServiceResponseList,
    "GeolocationGeometry": GeolocationGeometry,
    "Geometry": Geometry,
    "GeometryCRC": GeometryCRC,
    "GeometryProperties": GeometryProperties,
    "GetCityStateProvinceAPIInput": GetCityStateProvinceAPIInput,
    "GetCityStateProvinceAPIInputRow": GetCityStateProvinceAPIInputRow,
    "GetCityStateProvinceAPIOptions": GetCityStateProvinceAPIOptions,
    "GetCityStateProvinceAPIOutput": GetCityStateProvinceAPIOutput,
    "GetCityStateProvinceAPIRequest": GetCityStateProvinceAPIRequest,
    "GetCityStateProvinceAPIResponse": GetCityStateProvinceAPIResponse,
    "GetPostalCodesAPIInput": GetPostalCodesAPIInput,
    "GetPostalCodesAPIInputRow": GetPostalCodesAPIInputRow,
    "GetPostalCodesAPIOptions": GetPostalCodesAPIOptions,
    "GetPostalCodesAPIOutput": GetPostalCodesAPIOutput,
    "GetPostalCodesAPIOutputUserFields": GetPostalCodesAPIOutputUserFields,
    "GetPostalCodesAPIRequest": GetPostalCodesAPIRequest,
    "GetPostalCodesAPIResponse": GetPostalCodesAPIResponse,
    "GlobalUltimateBusiness": GlobalUltimateBusiness,
    "GradeLevelsTaught": GradeLevelsTaught,
    "Greatschools": Greatschools,
    "Grid": Grid,
    "HealthTheme": HealthTheme,
    "HeatingType": HeatingType,
    "HouseholdsTheme": HouseholdsTheme,
    "HousingTheme": HousingTheme,
    "IPDTaxByAddressBatchRequest": IPDTaxByAddressBatchRequest,
    "IPDTaxJurisdiction": IPDTaxJurisdiction,
    "IncomeTheme": IncomeTheme,
    "IndexVariable": IndexVariable,
    "IndividualValueVariable": IndividualValueVariable,
    "IntermediatePoints": IntermediatePoints,
    "Intersection": Intersection,
    "IntersectionResponse": IntersectionResponse,
    "IpInfo": IpInfo,
    "Ipd": Ipd,
    "KeyLookupRequest": KeyLookupRequest,
    "Keys": Keys,
    "LandUse": LandUse,
    "LatLongFields": LatLongFields,
    "LifeStyleTheme": LifeStyleTheme,
    "LocalTaxGeometry": LocalTaxGeometry,
    "LocalTaxPreferences": LocalTaxPreferences,
    "Location": Location,
    "LocationTime": LocationTime,
    "Magnitude": Magnitude,
    "Match": Match,
    "MatchedAddress": MatchedAddress,
    "Matrix": Matrix,
    "Mcd": Mcd,
    "MetadataResponse": MetadataResponse,
    "Name": Name,
    "NeighborhoodsResponse": NeighborhoodsResponse,
    "Network": Network,
    "OrganizationType": OrganizationType,
    "Owners": Owners,
    "PBKeyAddressRequest": PBKeyAddressRequest,
    "PBKeyResponse": PBKeyResponse,
    "PBKeyResponseList": PBKeyResponseList,
    "POIBoundaryAddressRequest": POIBoundaryAddressRequest,
    "POIBoundaryLocationRequest": POIBoundaryLocationRequest,
    "POIBoundaryLocations": POIBoundaryLocations,
    "POIBoundaryPreferences": POIBoundaryPreferences,
    "POIBoundaryResponse": POIBoundaryResponse,
    "POIByGeometryRequest": POIByGeometryRequest,
    "PSAPResponse": PSAPResponse,
    "ParentBusiness": ParentBusiness,
    "Pbkey": Pbkey,
    "PhoneVerification": PhoneVerification,
    "Place": Place,
    "PlacesResponse": PlacesResponse,
    "Poi": Poi,
    "PoiBoundary": PoiBoundary,
    "PoiClassification": PoiClassification,
    "PoiCount": PoiCount,
    "PoiCountRequest": PoiCountRequest,
    "Points": Points,
    "PopulationTheme": PopulationTheme,
    "PreferencTimeZone": PreferencTimeZone,
    "PrimaryZone": PrimaryZone,
    "Properties": Properties,
    "PropertyAttributes": PropertyAttributes,
    "PropertyGeometry": PropertyGeometry,
    "PropertyInfoAddressRequest": PropertyInfoAddressRequest,
    "PropertyInfoPreferences": PropertyInfoPreferences,
    "PropertyInfoResponse": PropertyInfoResponse,
    "PropertyInfoResponses": PropertyInfoResponses,
    "Proxy": Proxy,
    "RaceAndEthnicityTheme": RaceAndEthnicityTheme,
    "RangeVariable": RangeVariable,
    "Rate": Rate,
    "RateCenterResponse": RateCenterResponse,
    "ReturnFieldsDescriptor": ReturnFieldsDescriptor,
    "ReverseGeocodeRequest": ReverseGeocodeRequest,
    "Risk": Risk,
    "RiskAddress": RiskAddress,
    "RiskGeometry": RiskGeometry,
    "RiskLocations": RiskLocations,
    "RiskPreferences": RiskPreferences,
    "RisksBoundaries": RisksBoundaries,
    "RisksCrimeTheme": RisksCrimeTheme,
    "RisksGeometryCRC": RisksGeometryCRC,
    "Road": Road,
    "RoofCoverType": RoofCoverType,
    "RoofFrameType": RoofFrameType,
    "RoofShapeType": RoofShapeType,
    "RouteDirection": RouteDirection,
    "RouteGeometry": RouteGeometry,
    "RouteResponse": RouteResponse,
    "SalesTax": SalesTax,
    "SalesVolume": SalesVolume,
    "School": School,
    "SchoolDistrict": SchoolDistrict,
    "SchoolProfile": SchoolProfile,
    "SchoolRanking": SchoolRanking,
    "SchoolsNearByResponse": SchoolsNearByResponse,
    "Segmentation": Segmentation,
    "SegmentationThemes": SegmentationThemes,
    "ShoreLineDistance": ShoreLineDistance,
    "Sic": Sic,
    "SicMetadata": SicMetadata,
    "SiteDetails": SiteDetails,
    "SpecialPurposeDistrict": SpecialPurposeDistrict,
    "SpecialPurposeDistrictTax": SpecialPurposeDistrictTax,
    "SpeedLimit": SpeedLimit,
    "StartEndPoint": StartEndPoint,
    "State": State,
    "Status": Status,
    "Stories": Stories,
    "StudentEthnicity": StudentEthnicity,
    "SupplyAndDemandTheme": SupplyAndDemandTheme,
    "TaxAddress": TaxAddress,
    "TaxAddressRequest": TaxAddressRequest,
    "TaxCounty": TaxCounty,
    "TaxDistrictResponse": TaxDistrictResponse,
    "TaxDistrictResponseList": TaxDistrictResponseList,
    "TaxExemption": TaxExemption,
    "TaxGeometry": TaxGeometry,
    "TaxJurisdiction": TaxJurisdiction,
    "TaxLocationRequest": TaxLocationRequest,
    "TaxLocations": TaxLocations,
    "TaxPlace": TaxPlace,
    "TaxRateAddress": TaxRateAddress,
    "TaxRateAddressRequest": TaxRateAddressRequest,
    "TaxRateLocationRequest": TaxRateLocationRequest,
    "TaxRateMatchedAddress": TaxRateMatchedAddress,
    "TaxRateResponse": TaxRateResponse,
    "TaxResponses": TaxResponses,
    "TaxState": TaxState,
    "Time": Time,
    "TimezoneAddressRequest": TimezoneAddressRequest,
    "TimezoneGeometry": TimezoneGeometry,
    "TimezoneLocationRequest": TimezoneLocationRequest,
    "TimezoneResponse": TimezoneResponse,
    "TimezoneResponseList": TimezoneResponseList,
    "TravelBoundaries": TravelBoundaries,
    "TravelBoundary": TravelBoundary,
    "TravelCostMatrixResponse": TravelCostMatrixResponse,
    "Type": Type,
    "TypeaheadLocation": TypeaheadLocation,
    "TypeaheadLocations": TypeaheadLocations,
    "TypeaheadRange": TypeaheadRange,
    "TypeaheadUnit": TypeaheadUnit,
    "Unit": Unit,
    "UseTax": UseTax,
    "Vacancy": Vacancy,
    "ValidateEmailAddressAPIRequest": ValidateEmailAddressAPIRequest,
    "ValidateEmailAddressAPIResponse": ValidateEmailAddressAPIResponse,
    "ValidateEmailAddressInput": ValidateEmailAddressInput,
    "ValidateEmailAddressInputRow": ValidateEmailAddressInputRow,
    "ValidateEmailAddressOutput": ValidateEmailAddressOutput,
    "ValidateMailingAddressInput": ValidateMailingAddressInput,
    "ValidateMailingAddressInputRow": ValidateMailingAddressInputRow,
    "ValidateMailingAddressOptions": ValidateMailingAddressOptions,
    "ValidateMailingAddressOutput": ValidateMailingAddressOutput,
    "ValidateMailingAddressPremiumInput": ValidateMailingAddressPremiumInput,
    "ValidateMailingAddressPremiumInputRow": ValidateMailingAddressPremiumInputRow,
    "ValidateMailingAddressPremiumOptions": ValidateMailingAddressPremiumOptions,
    "ValidateMailingAddressPremiumOutput": ValidateMailingAddressPremiumOutput,
    "ValidateMailingAddressPremiumRequest": ValidateMailingAddressPremiumRequest,
    "ValidateMailingAddressPremiumResponse": ValidateMailingAddressPremiumResponse,
    "ValidateMailingAddressProInput": ValidateMailingAddressProInput,
    "ValidateMailingAddressProInputRow": ValidateMailingAddressProInputRow,
    "ValidateMailingAddressProOptions": ValidateMailingAddressProOptions,
    "ValidateMailingAddressProOutput": ValidateMailingAddressProOutput,
    "ValidateMailingAddressProRequest": ValidateMailingAddressProRequest,
    "ValidateMailingAddressProResponse": ValidateMailingAddressProResponse,
    "ValidateMailingAddressRequest": ValidateMailingAddressRequest,
    "ValidateMailingAddressResponse": ValidateMailingAddressResponse,
    "ValidateMailingAddressUSCANAPIInput": ValidateMailingAddressUSCANAPIInput,
    "ValidateMailingAddressUSCANAPIInputRow": ValidateMailingAddressUSCANAPIInputRow,
    "ValidateMailingAddressUSCANAPIOptions": ValidateMailingAddressUSCANAPIOptions,
    "ValidateMailingAddressUSCANAPIOutput": ValidateMailingAddressUSCANAPIOutput,
    "ValidateMailingAddressUSCANAPIRequest": ValidateMailingAddressUSCANAPIRequest,
    "ValidateMailingAddressUSCANAPIResponse": ValidateMailingAddressUSCANAPIResponse,
    "WaterBody": WaterBody,
    "WaterBodyResponse": WaterBodyResponse,
    "ZonesAddress": ZonesAddress,
    "ZonesBoundaryGeometry": ZonesBoundaryGeometry,
    "ZonesContactDetails": ZonesContactDetails,
    "ZonesGeometry": ZonesGeometry,
    "ZonesParentBusiness": ZonesParentBusiness,
    "ZonesPoi": ZonesPoi,
    "ZonesPoiClassification": ZonesPoiClassification,
    "ZonesPoiGeometry": ZonesPoiGeometry,
    "ZonesSic": ZonesSic,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
     getOAuthCredentials(requestOptions: localVarRequest.Options): Promise<{body: oAuthCredInfo;  }>;
}

/*export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}*/
/*export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}*/

/*export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}*/

   export class OAuth implements Authentication {
     public objOAuthCredInfo: oAuthCredInfo;

    public oAuthApiKey : string;
    public oAuthSecret : string;
    public oAuthUrl :string;
    public oAuthToken :string;

    constructor()
    constructor(oAuthApiKey?: string, oAuthSecret?: string) {
    this.oAuthApiKey=oAuthApiKey;
    this.oAuthSecret=oAuthSecret;
    }


    public getOAuthCredentials(): Promise<{ response: http.IncomingMessage; body: oAuthCredInfo; }> {

    if (this.oAuthApiKey === undefined || this.oAuthSecret === undefined ) {
    Promise.reject({response: "Validation Error", body: "oAuthApiKey or oAuthSecret missing"})
    }

    if ((this.objOAuthCredInfo === null || this.objOAuthCredInfo === undefined)) {

    return this.refreshToken();

    }
    else {

    if((Number(this.objOAuthCredInfo.issuedAt) + Number(this.objOAuthCredInfo.expiresIn)) < (moment().valueOf()+ 10000))
    {
    return this.refreshToken();
    }
    return Promise.resolve({response: null, body: this.objOAuthCredInfo})
    }

    }

    private refreshToken():Promise<{ response: http.IncomingMessage; body: oAuthCredInfo; }>{
    this.oAuthToken = "Basic " + new Buffer(this.oAuthApiKey + ":" + this.oAuthSecret).toString('base64')
    //.toString('base64');
    if (this.oAuthUrl === undefined || this.oAuthUrl === null) {
    this.oAuthUrl = "https://api.precisely.com/oauth/token";
    }

    let requestOptions: localVarRequest.Options = {
    method: 'POST',
    url: this.oAuthUrl,
    headers:
    {
    'cache-control': 'no-cache',
    authorization: this.oAuthToken
    },
    body: 'grant_type=client_credentials'
    };

    return new Promise<{ response: http.IncomingMessage; body: oAuthCredInfo; }>((resolve, reject) => {
    localVarRequest(requestOptions, (error, response, body) => {
    if (error) {
    reject({response: response, body: JSON.parse(error)});
    } else {
    if (response.statusCode >= 200 && response.statusCode <= 299) {
    this.objOAuthCredInfo = JSON.parse(body);
    resolve({response: response, body: JSON.parse(body)});
    } else {
    reject({response: response, body: JSON.parse(body)});
    }
    }
    });
    });
    }
    }

/*export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}*/

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
