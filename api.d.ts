/// <reference types="node" />
import request = require('request');
import http = require('http');
import Promise = require('bluebird');
export declare class oAuthCredInfo {
    "access_token": string;
    "tokenType": string;
    "issuedAt": number;
    "expiresIn": number;
    "clientID": string;
    "org": string;
}
export declare class AHJ {
    'ahjType': string;
    'ahjId': string;
    'type': string;
    'fccId': string;
    'agency': string;
    'phone': string;
    'comments': string;
    'coverage': Coverage;
    'contactPerson': ContactPerson;
    'mailingAddress': AHJmailingAddress;
}
export declare class AHJList {
    'ahjs': Array<AHJ>;
}
export declare class AHJPlusPSAPResponse {
    'ahjs': AHJList;
    'psap': PSAPResponse;
    'count': number;
}
export declare class AHJmailingAddress {
    'formattedAddress': string;
    'mainAddressLine': string;
    'addressLastLine': string;
    'placeName': string;
    'areaName1': string;
    'areaName2': string;
    'areaName3': string;
    'areaName4': string;
    'postCode': string;
    'postCodeExt': string;
    'country': string;
    'addressNumber': string;
    'streetName': string;
    'unitType': string;
    'unitValue': string;
}
export declare class Accuracy {
    'unit': string;
    'value': string;
}
export declare class Address {
    'objectId': string;
    'displayName': string;
    'streetSide': string;
    'businessName': string;
    'addressLine1': string;
    'addressLine2': string;
    'addressLine3': string;
    'city': string;
    'stateProvince': string;
    'county': string;
    'postalCode': string;
    'latitude': string;
    'longitude': string;
    'status': string;
    'urbanizationName': string;
    'formattedAddress': string;
    'mainAddressLine': string;
    'addressLastLine': string;
    'placeName': string;
    'areaName1': string;
    'areaName2': string;
    'areaName3': string;
    'areaName4': string;
    'postCode': string;
    'postCodeExt': string;
    'country': string;
    'addressNumber': string;
    'streetName': string;
    'unitType': string;
    'unitValue': string;
}
export declare class AddressTime {
    'timestamp': string;
    'address': CommonAddress;
}
export declare class AddressType {
    'value': string;
    'description': string;
}
export declare class AddressesByBoundaryRequest {
    'preferences': AddressesPreferences;
    'geometry': CommonGeometry;
    'geometryAsText': string;
    'latitude': number;
    'longitude': number;
    'travelTime': string;
    'travelTimeUnit': string;
    'travelDistance': string;
    'travelDistanceUnit': string;
    'travelMode': string;
}
export declare class AddressesCount {
    'totalAddressesFound': number;
}
export declare class AddressesDTO {
    'pbKey': string;
    'addressNumber': string;
    'streetName': string;
    'unitType': string;
    'unitValue': string;
    'type': AddressType;
    'areaName1': string;
    'areaName2': string;
    'areaName3': string;
    'areaName4': string;
    'postCode': string;
    'postCodeExt': string;
    'country': string;
    'geometry': CommonGeometry;
    'propertyType': string;
    'propertyTypeDescription': string;
    'parentPbKey': string;
    'geoId': string;
}
export declare class AddressesPreferences {
    'maxCandidates': string;
    'page': string;
}
export declare class AddressesResponse {
    'page': string;
    'candidates': string;
    'addressList': Array<AddressesDTO>;
}
export declare class Age {
    'range': string;
    'value': number;
}
export declare class AgeTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariable>;
    'rangeVariable': Array<RangeVariable>;
}
export declare class Area {
    'unit': string;
    'value': string;
}
export declare class AreaCodeInfo {
    'companyName': string;
    'ocn': string;
    'ocnCategory': string;
    'npa': string;
    'nxx': string;
    'startRange': string;
    'endRange': string;
    'lata': string;
    'areaName4': string;
}
export declare class AssetsAndWealthTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariableV2>;
    'rangeVariable': Array<RangeVariableV2>;
}
export declare class AttitudesAndMotivationTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariable>;
    'rangeVariable': Array<RangeVariable>;
}
export declare class AutomobileTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariable>;
    'rangeVariable': Array<RangeVariable>;
}
export declare class BaseFloodElevation {
    'unit': string;
    'value': string;
}
export declare class BasicBoundary {
    'center': BoundaryPoint;
    'geometry': PolygonGeometry;
    'distance': Distance;
}
export declare class BasicBoundaryAddress {
    'center': BoundaryPoint;
    'geometry': PolygonGeometry;
    'matchedAddress': MatchedAddress;
    'distance': Distance;
}
export declare class Boundaries {
    'boundary': Array<Boundary>;
}
export declare class Boundary {
    'boundaryId': string;
    'boundaryType': string;
    'boundaryRef': string;
}
export declare class BoundaryBuffer {
    'bufferRelation': BufferRelation;
    'distanceToBorder': DistanceToBorder;
}
export declare class BoundaryPoint {
    'type': string;
    'coordinates': Array<number>;
}
export declare class BufferRelation {
    'description': string;
    'value': string;
}
export declare class BuildingSqftSource {
    'code': string;
    'value': string;
}
export declare class BusinessId {
    'type': string;
    'value': string;
}
export declare class CaExemptions {
    'code': string;
    'value': string;
}
export declare class Candidate {
    'precisionLevel': number;
    'formattedStreetAddress': string;
    'formattedLocationAddress': string;
    'identifier': string;
    'precisionCode': string;
    'sourceDictionary': string;
    'matching': FieldsMatching;
    'geometry': GeoPos;
    'address': GeocodeAddress;
    'ranges': Array<CandidateRange>;
}
export declare class CandidateRange {
    'placeName': string;
    'lowHouse': string;
    'highHouse': string;
    'side': CandidateRange.SideEnum;
    'oddEvenIndicator': CandidateRange.OddEvenIndicatorEnum;
    'units': Array<CandidateRangeUnit>;
    'customValues': {
        [key: string]: any;
    };
}
export declare namespace CandidateRange {
    enum SideEnum {
        UNKNOWN,
        LEFT,
        RIGHT,
        BOTH
    }
    enum OddEvenIndicatorEnum {
        UNKNOWN,
        BOTH,
        ODD,
        EVEN,
        IRREGULAR
    }
}
export declare class CandidateRangeUnit {
    'placeName': string;
    'unitType': string;
    'highUnitValue': string;
    'lowUnitValue': string;
    'customValues': {
        [key: string]: any;
    };
}
export declare class Carrier {
    'asn': string;
    'value': string;
}
export declare class CarrierRouteAddressRequest {
    'addresses': Array<CommonAddress>;
    'preferences': CarrierRoutePreference;
}
export declare class CarrierRouteBoundaries {
    'boundary': Array<RouteBoundary>;
}
export declare class CarrierRoutePreference {
    'includeGeometry': string;
    'postCode': string;
}
export declare class CarrierRouteResponse {
    'objectId': string;
    'matchedAddress': MatchedAddress;
    'code': string;
    'state': CommonState;
    'countyFips': string;
    'postalTown': string;
    'postCode': string;
    'routeDelivery': RouteDelivery;
    'boundary': RouteBoundary;
    'boundaryRef': string;
}
export declare class CarrierRouteResponseList {
    'boundaries': CarrierRouteBoundaries;
    'carrierRoute': Array<CarrierRouteResponse>;
}
export declare class Category {
    'categoryCode': string;
    'tradeDivision': string;
    'tradeGroup': string;
    'subClass': string;
    'class': string;
}
export declare class CategoryMetadata {
    'code': string;
    'sic': string;
    'tradeDivision': string;
    'tradeGroup': string;
    'class': string;
    'subClass': string;
    'description': string;
}
export declare class Cbsa {
    'name': string;
    'code': string;
}
export declare class Census {
    'cbsa': Cbsa;
    'matchLevel': string;
    'matchCode': string;
    'tract': string;
    'mcd': Mcd;
}
export declare class Center {
    'type': string;
    'coordinates': Array<number>;
}
export declare class ChannelPreferencesTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariable>;
    'rangeVariable': Array<RangeVariable>;
}
export declare class City {
    'confidence': string;
    'value': string;
}
export declare class CommonAddress {
    'objectId': string;
    'mainAddressLine': string;
    'addressLastLine': string;
    'placeName': string;
    'areaName1': string;
    'areaName2': string;
    'areaName3': string;
    'areaName4': string;
    'postCode': string;
    'postCodeExt': string;
    'country': string;
    'addressNumber': string;
    'streetName': string;
    'unitType': string;
    'unitValue': string;
}
export declare class CommonGeometry {
    'type': string;
    'coordinates': any;
}
export declare class CommonState {
    'fips': string;
    'code': string;
}
export declare class Community {
    'number': string;
    'status': Status;
}
export declare class CommuterPatternsTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariable>;
    'rangeVariable': Array<RangeVariable>;
}
export declare class ConfiguredDictionaryResponse {
    'dictionaries': Array<Dictionary>;
}
export declare class ConsistencyCode {
    'description': string;
    'value': string;
}
export declare class Construction {
    'code': string;
    'value': string;
}
export declare class ContactDetails {
    'address': MatchedAddress;
    'propertyAddress': MatchedAddress;
}
export declare class ContactPerson {
    'title': string;
    'fullName': string;
    'prefix': string;
    'firstName': string;
    'lastName': string;
    'phone': string;
    'fax': string;
    'email': string;
    'comments': string;
    'additionalDetails': string;
}
export declare class CoolingType {
    'code': string;
    'value': string;
}
export declare class Cost {
    'cost': number;
    'costUnit': string;
    'geometry': DirectionGeometry;
}
export declare class Costs extends Array<Cost> {
}
export declare class CountrySupport {
    'supportedCountries': Array<string>;
    'supportedDataTypes': Array<string>;
}
export declare class County {
    'name': string;
    'fips': string;
}
export declare class Coverage {
    'area': string;
    'comments': string;
    'exceptions': string;
}
export declare class CrimeBoundary {
    'id': string;
    'type': string;
    'ref': string;
    'geometry': GeoRiskGeometry;
}
export declare class CrimeIndexTheme {
    'source': string;
    'boundaryRef': string;
    'indexVariable': Array<IndexVariable>;
}
export declare class CrimeRiskByAddressRequest {
    'addresses': Array<RiskAddress>;
    'preferences': CrimeRiskPreferences;
}
export declare class CrimeRiskByLocationRequest {
    'locations': Array<GeoRiskLocations>;
    'preferences': CrimeRiskPreferences;
}
export declare class CrimeRiskLocationResponse {
    'themes': Array<GeoRiskCrimeTheme>;
    'boundaries': GeoRiskBoundaries;
}
export declare class CrimeRiskLocationResponseList {
    'crimeRisk': Array<CrimeRiskLocationResponse>;
}
export declare class CrimeRiskPreferences {
    'includeGeometry': string;
    'type': string;
}
export declare class CrimeRiskResponse {
    'themes': Array<GeoRiskCrimeTheme>;
    'boundaries': GeoRiskBoundaries;
    'matchedAddress': MatchedAddress;
}
export declare class CrimeRiskResponseList {
    'crimeRisk': Array<CrimeRiskResponse>;
}
export declare class Crs {
    'type': string;
    'properties': Properties;
}
export declare class CustomObject {
    'name': string;
    'description': string;
    'properties': Array<CustomObjectMember>;
}
export declare class CustomObjectMember {
    'name': string;
    'input': InputParameter;
    'output': OutputParameter;
}
export declare class CustomPreferences {
    'fINDADDRPOINTINTERP': boolean;
    'fINDSEARCHAREA': string;
    'fINDADDRESSRANGE': boolean;
    'fINDEXPANDEDSEARCHRADIUS': string;
    'fINDALTERNATELOOKUP': string;
    'fINDSTREETCENTROID': boolean;
    'fINDFIRSTLETTEREXPANDED': boolean;
}
export declare class DateTimeEarthQuake {
    'date': string;
    'time': string;
}
export declare class Demographics {
    'boundaries': Boundaries;
    'themes': DemographicsThemesV2;
    'boundaryThemes': Array<DemographicsThemesV2>;
}
export declare class DemographicsAdvancedPreferences {
    'profile': string;
    'filter': string;
    'includeGeometry': string;
}
export declare class DemographicsAdvancedRequest {
    'preferences': DemographicsAdvancedPreferences;
    'geometry': CommonGeometry;
    'geometryAsText': string;
}
export declare class DemographicsThemes {
    'ageTheme': AgeTheme;
    'genderTheme': GenderTheme;
    'incomeTheme': IncomeTheme;
    'raceTheme': RaceTheme;
    'ethnicityTheme': EthnicityTheme;
    'maritalStatusTheme': MaritalStatusTheme;
    'automobileTheme': AutomobileTheme;
    'purchasingBehaviorTheme': PurchasingBehaviorTheme;
    'educationalAttainmentTheme': EducationalAttainmentTheme;
    'financialProductsTheme': FinancialProductsTheme;
    'commuterPatternsTheme': CommuterPatternsTheme;
    'attitudesAndMotivationTheme': AttitudesAndMotivationTheme;
    'channelPreferencesTheme': ChannelPreferencesTheme;
    'householdSizeTheme': HouseholdSizeTheme;
}
export declare class DemographicsThemesV2 {
    'boundaryId': string;
    'populationTheme': PopulationTheme;
    'raceAndEthnicityTheme': RaceAndEthnicityTheme;
    'healthTheme': HealthTheme;
    'educationTheme': EducationTheme;
    'incomeTheme': IncomeThemeV2;
    'assetsAndWealthTheme': AssetsAndWealthTheme;
    'householdsTheme': HouseholdsTheme;
    'housingTheme': HousingTheme;
    'employmentTheme': EmploymentTheme;
    'expenditureTheme': ExpenditureTheme;
    'supplyAndDemandTheme': SupplyAndDemandTheme;
}
export declare class Depth {
    'unit': string;
    'value': number;
}
export declare class DeviceStatusNetwork {
    'carrier': string;
    'callType': string;
    'locAccuracySupport': string;
    'nationalNumber': string;
    'country': GeoLocationFixedLineCountry;
}
export declare class Dictionary {
    'vintage': string;
    'source': string;
    'description': string;
    'countrySupportInfos': Array<CountrySupport>;
}
export declare class DirectionGeometry {
    'type': string;
    'coordinates': Array<Array<Array<Array<number>>>>;
}
export declare class Distance {
    'unit': string;
    'value': string;
}
export declare class DistanceToBorder {
    'unit': string;
    'value': string;
}
export declare class DistanceToFloodHazardAddressRequest {
    'addresses': Array<RiskAddress>;
    'preferences': FloodHazardPreferences;
}
export declare class DistanceToFloodHazardLocationRequest {
    'locations': Array<GeoRiskLocations>;
    'preferences': FloodHazardPreferences;
}
export declare class DistanceToFloodHazardLocationResponse {
    'waterBodies': Array<WaterBodyLocationResponse>;
}
export declare class DistanceToFloodHazardResponse {
    'waterBodies': Array<WaterBodyResponse>;
}
export declare class DistrictType {
    'description': string;
    'value': string;
}
export declare class DomesticUltimateBusiness {
    'name': string;
    'address': Address;
}
export declare class EarthquakeEvent {
    'dateTime': DateTimeEarthQuake;
    'seismicRegionNumber': number;
    'depth': Depth;
    'magnitude': Magnitude;
    'cause': string;
    'culturalEffect': string;
    'intensity': number;
    'diastrophism': string;
    'miscPhenomena': string;
    'location': EarthquakeLocation;
}
export declare class EarthquakeEventsResponse {
    'event': Array<EarthquakeEvent>;
}
export declare class EarthquakeHistory {
    'stateCode': string;
    'county': string;
    'postCode': string;
    'events': EarthquakeEventsResponse;
}
export declare class EarthquakeLocation {
    'type': string;
    'coordinates': Array<number>;
}
export declare class EarthquakeRiskByAddressRequest {
    'addresses': Array<RiskAddress>;
    'preferences': EarthquakeRiskPreferences;
}
export declare class EarthquakeRiskByLocationRequest {
    'locations': Array<GeoRiskLocations>;
    'preferences': EarthquakeRiskPreferences;
}
export declare class EarthquakeRiskLocationResponse {
    'riskLevel': string;
    'eventsCount': EventsCount;
    'grid': Grid;
}
export declare class EarthquakeRiskLocationResponseList {
    'earthquakeRisk': Array<EarthquakeRiskLocationResponse>;
}
export declare class EarthquakeRiskPreferences {
    'includeGeometry': string;
    'richterValue': string;
}
export declare class EarthquakeRiskResponse {
    'riskLevel': string;
    'eventsCount': EventsCount;
    'grid': Grid;
    'matchedAddress': MatchedAddress;
}
export declare class EarthquakeRiskResponseList {
    'earthquakeRisk': Array<EarthquakeRiskResponse>;
}
export declare class Education {
    'name': string;
    'degree': string;
    'end': End;
}
export declare class EducationTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariableV2>;
    'rangeVariable': Array<RangeVariableV2>;
}
export declare class EducationalAttainmentTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariable>;
    'rangeVariable': Array<RangeVariable>;
}
export declare class Email {
    'label': string;
    'value': string;
    'md5': string;
    'sha256': string;
}
export declare class EmployeeCount {
    'inLocalBranch': string;
    'inOrganization': string;
}
export declare class Employment {
    'name': string;
    'current': boolean;
    'title': string;
    'start': Start;
    'end': End;
}
export declare class EmploymentTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariableV2>;
    'rangeVariable': Array<RangeVariableV2>;
}
export declare class End {
    'year': number;
    'month': number;
    'day': number;
}
export declare class ErrorCode {
    'errorCode': string;
    'errorDescription': string;
}
export declare class ErrorInfo {
    'errors': Array<ErrorCode>;
}
export declare class EthnicityTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariable>;
    'rangeVariable': Array<RangeVariable>;
}
export declare class EventsCount {
    'total': string;
    'r0': string;
    'r1': string;
    'r2': string;
    'r3': string;
    'r4': string;
    'r5': string;
    'r6': string;
    'r7': string;
    'r0Ge': string;
    'r1Ge': string;
    'r2Ge': string;
    'r3Ge': string;
    'r4Ge': string;
    'r5Ge': string;
    'r6Ge': string;
    'r7Ge': string;
}
export declare class ExpenditureTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariableV2>;
    'rangeVariable': Array<RangeVariableV2>;
}
export declare class Field {
    'value': string;
    'description': string;
}
export declare class FieldV2 {
    'value': string;
    'name': string;
    'description': string;
}
export declare class FieldsMatching {
    'matchOnAddressNumber': boolean;
    'matchOnPostCode1': boolean;
    'matchOnPostCode2': boolean;
    'matchOnAreaName1': boolean;
    'matchOnAreaName2': boolean;
    'matchOnAreaName3': boolean;
    'matchOnAreaName4': boolean;
    'matchOnAllStreetFields': boolean;
    'matchOnStreetName': boolean;
    'matchOnStreetType': boolean;
    'matchOnStreetDirectional': boolean;
    'matchOnPlaceName': boolean;
    'matchOnInputFields': boolean;
}
export declare class FinancialProductsTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariable>;
    'rangeVariable': Array<RangeVariable>;
}
export declare class FireDepartment {
    'name': string;
    'type': string;
    'numberOfStations': number;
    'administrativeOfficeOnly': boolean;
    'contactDetails': FireDepartmentContactDetails;
}
export declare class FireDepartmentContactDetails {
    'address': MatchedAddress;
    'phone': string;
    'fax': string;
}
export declare class FireEvent {
    'fireStartDate': string;
    'fireEndDate': string;
    'fireName': string;
    'area': Area;
    'agency': string;
}
export declare class FireEventsResponse {
    'event': Array<FireEvent>;
}
export declare class FireHistory {
    'stateCode': string;
    'postCode': string;
    'events': FireEventsResponse;
}
export declare class FireRiskByAddressRequest {
    'addresses': Array<RiskAddress>;
}
export declare class FireRiskByLocationRequest {
    'locations': Array<GeoRiskLocations>;
}
export declare class FireRiskLocationResponse {
    'objectId': string;
    'state': CommonState;
    'fireShed': FireShed;
}
export declare class FireRiskLocationResponseList {
    'fireRisk': Array<FireRiskLocationResponse>;
}
export declare class FireRiskResponse {
    'objectId': string;
    'state': CommonState;
    'fireShed': FireShed;
    'matchedAddress': MatchedAddress;
}
export declare class FireRiskResponseList {
    'fireRisk': Array<FireRiskResponse>;
}
export declare class FireShed {
    'id': number;
    'risk': Risk;
}
export declare class FireStation {
    'numWithinDepartment': string;
    'locationReference': string;
    'travelDistance': Distance;
    'travelTime': Time;
    'contactDetails': FireStationContactDetails;
    'fireDepartment': FireDepartment;
    'geometry': Geometry;
}
export declare class FireStationContactDetails {
    'address': MatchedAddress;
    'phone': string;
}
export declare class FireStations {
    'fireStation': Array<FireStation>;
    'matchedAddress': MatchedAddress;
}
export declare class FireStationsLocation {
    'fireStation': Array<FireStation>;
}
export declare class FloodBoundary {
    'id': string;
    'geometry': GeoRiskGeometry;
}
export declare class FloodHazardPreferences {
    'searchDistanceUnit': string;
    'searchDistance': string;
    'waterBodyType': string;
    'maxCandidates': string;
}
export declare class FloodRiskByAddressRequest {
    'addresses': Array<RiskAddress>;
    'preferences': FloodRiskPreferences;
}
export declare class FloodRiskByLocationRequest {
    'locations': Array<GeoRiskLocations>;
    'preferences': FloodRiskPreferences;
}
export declare class FloodRiskLocationResponse {
    'objectId': string;
    'state': CommonState;
    'floodZone': FloodZone;
    'community': Community;
    'boundary': FloodBoundary;
}
export declare class FloodRiskLocationResponseList {
    'floodRisk': Array<FloodRiskLocationResponse>;
}
export declare class FloodRiskPreferences {
    'includeGeometry': string;
    'includeZoneDesc': string;
}
export declare class FloodRiskResponse {
    'objectId': string;
    'state': CommonState;
    'floodZone': FloodZone;
    'community': Community;
    'boundary': FloodBoundary;
    'matchedAddress': MatchedAddress;
}
export declare class FloodRiskResponseList {
    'floodRisk': Array<FloodRiskResponse>;
}
export declare class FloodZone {
    'code': string;
    'areaType': string;
    'riskLevel': string;
    'primaryZone': PrimaryZone;
    'baseFloodElevation': BaseFloodElevation;
    'additionalInfo': string;
}
export declare class FreeOrReducedPriceLunches {
    'freeLunchesCount': string;
    'reducedPriceLunchedCount': string;
    'totalCount': string;
}
export declare class GenderTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariable>;
    'rangeVariable': Array<RangeVariable>;
}
export declare class GeoEnrichMetadataResponse {
    'sic': Array<SicMetadata>;
    'category': Array<CategoryMetadata>;
}
export declare class GeoEnrichResponse {
    'page': string;
    'candidates': string;
    'totalMatchingCandidates': string;
    'poi': Array<POIPlaces>;
    'matchedAddress': MatchedAddress;
}
export declare class GeoLocationAccessPoint {
    'geometry': Geometry;
    'accuracy': Accuracy;
}
export declare class GeoLocationCountry {
    'code': string;
    'confidence': string;
    'value': string;
}
export declare class GeoLocationFixedLine {
    'geometry': Geometry;
    'accuracy': Accuracy;
    'deviceId': string;
    'country': GeoLocationFixedLineCountry;
}
export declare class GeoLocationFixedLineCountry {
    'code': string;
    'value': string;
}
export declare class GeoLocationIpAddr {
    'geometry': Geometry;
    'accuracy': Accuracy;
    'ipInfo': IpInfo;
}
export declare class GeoLocationPlace {
    'continent': string;
    'country': GeoLocationCountry;
    'consistencyCode': ConsistencyCode;
    'region': string;
    'state': GeoLocationState;
    'city': City;
    'postCode': string;
    'postCodeConfidence': string;
}
export declare class GeoLocationState {
    'confidence': string;
    'value': string;
}
export declare class GeoPos {
    'type': string;
    'coordinates': Array<number>;
    'crs': Crs;
}
export declare class GeoPostGeometry {
    'type': string;
    'coordinates': Array<Array<Array<Array<number>>>>;
}
export declare class GeoRiskBoundaries {
    'boundary': Array<CrimeBoundary>;
}
export declare class GeoRiskCrimeTheme {
    'crimeIndexTheme': CrimeIndexTheme;
}
export declare class GeoRiskGeometry {
    'type': string;
    'coordinates': Array<Array<Array<number>>>;
}
export declare class GeoRiskLocations {
    'geometry': Geometry;
    'objectId': string;
}
export declare class GeoRouteResponse {
    'directionsStyle': string;
    'distance': number;
    'distanceUnit': string;
    'language': string;
    'timeUnit': string;
    'time': number;
    'geometry': RouteGeometry;
    'routeDirections': RouteDirections;
    'intermediatePoints': IntermediatePoints;
}
export declare class GeoTaxLocations {
    'geometry': Geometry;
    'purchaseAmount': string;
    'objectId': string;
}
export declare class GeoTaxRateLocations {
    'geometry': Geometry;
    'objectId': string;
}
export declare class GeoZoneGeometry {
    'type': string;
    'coordinates': Array<number>;
}
export declare class GeocodeAddress {
    'mainAddressLine': string;
    'addressLastLine': string;
    'placeName': string;
    'areaName1': string;
    'areaName2': string;
    'areaName3': string;
    'areaName4': string;
    'postCode1': string;
    'postCode2': string;
    'country': string;
    'addressNumber': string;
    'streetName': string;
    'unitType': string;
    'unitValue': string;
    'customFields': {
        [key: string]: any;
    };
}
export declare class GeocodeCapabilitiesResponse {
    'serviceName': string;
    'serviceDescription': string;
    'coreVersion': string;
    'supportedCountries': Array<string>;
    'supportedOperations': Array<Operation>;
    'customObjects': Array<CustomObject>;
}
export declare class GeocodeCustomPreferences {
    'fALLBACKTOWORLD': boolean;
    'uSEADDRESSPOINTINTERPOLATION': boolean;
    'uSECENTERLINEOFFSET': string;
    'cENTERLINEOFFSET': string;
}
export declare class GeocodePreferences {
    'returnAllCandidateInfo': boolean;
    'fallbackToGeographic': boolean;
    'fallbackToPostal': boolean;
    'maxReturnedCandidates': string;
    'streetOffset': string;
    'cornerOffset': string;
    'matchMode': string;
    'clientLocale': string;
    'clientCoordSysName': string;
    'streetOffsetUnits': string;
    'cornerOffsetUnits': string;
    'mustMatchFields': FieldsMatching;
    'returnFieldsDescriptor': ReturnFieldsDescriptor;
    'outputRecordType': string;
    'customPreferences': GeocodeCustomPreferences;
    'preferredDictionaryOrders': Array<string>;
}
export declare class GeocodeRequest {
    'type': string;
    'preferences': GeocodePreferences;
    'addresses': Array<GeocodeRequestAddress>;
}
export declare class GeocodeRequestAddress {
    'mainAddressLine': string;
    'addressLastLine': string;
    'placeName': string;
    'areaName1': string;
    'areaName2': string;
    'areaName3': string;
    'areaName4': string;
    'postCode1': string;
    'postCode2': string;
    'country': string;
    'addressNumber': string;
    'streetName': string;
    'unitType': string;
    'unitValue': string;
}
export declare class GeocodeServiceResponse {
    'objectId': string;
    'totalPossibleCandidates': number;
    'totalMatches': number;
    'candidates': Array<Candidate>;
}
export declare class GeocodeServiceResponseList {
    'responses': Array<GeocodeServiceResponse>;
}
export declare class Geometry {
    'type': string;
    'coordinates': Array<number>;
}
export declare class GeosearchLocation {
    'address': MatchedAddress;
    'distance': Distance;
    'geometry': Geometry;
    'totalUnitCount': number;
    'ranges': Array<TypeaheadRange>;
}
export declare class GeosearchLocations {
    'location': Array<GeosearchLocation>;
}
export declare class GetCityStateProvinceAPIInput {
    'row': Array<GetCityStateProvinceAPIInputRow>;
}
export declare class GetCityStateProvinceAPIInputRow {
    'userFields': Array<ValidateMailingAddressInputRowUserFields>;
    'postalCode': string;
}
export declare class GetCityStateProvinceAPIOptions {
    'outputVanityCity': string;
    'performCanadianProcessing': string;
    'maximumResults': string;
    'performUSProcessing': string;
}
export declare class GetCityStateProvinceAPIOutput {
    'userFields': Array<ValidateMailingAddressInputRowUserFields>;
    'postalCode': string;
    'city': string;
    'cityType': string;
    'stateProvince': string;
    'status': string;
    'statusCode': string;
    'statusDescription': string;
}
export declare class GetCityStateProvinceAPIRequest {
    'options': GetCityStateProvinceAPIOptions;
    'input': GetCityStateProvinceAPIInput;
}
export declare class GetCityStateProvinceAPIResponse {
    'output': Array<GetCityStateProvinceAPIOutput>;
}
export declare class GetPostalCodesAPIInput {
    'row': Array<GetPostalCodesAPIInputRow>;
}
export declare class GetPostalCodesAPIInputRow {
    'userFields': Array<ValidateMailingAddressInputRowUserFields>;
    'city': string;
    'stateProvince': string;
}
export declare class GetPostalCodesAPIOptions {
    'outputCityType': string;
    'outputVanityCity': string;
}
export declare class GetPostalCodesAPIOutput {
    'userFields': Array<ValidateMailingAddressInputRowUserFields>;
    'postalCode': string;
    'cityType': string;
    'status': string;
    'statusCode': string;
    'statusDescription': string;
}
export declare class GetPostalCodesAPIRequest {
    'options': GetPostalCodesAPIOptions;
    'input': GetPostalCodesAPIInput;
}
export declare class GetPostalCodesAPIResponse {
    'output': Array<GetPostalCodesAPIOutput>;
}
export declare class GlobalUltimateBusiness {
    'name': string;
    'address': Address;
}
export declare class GradeLevelsTaught {
    'pk': string;
    'kg': string;
    'first': string;
    'second': string;
    'third': string;
    'fourth': string;
    'fifth': string;
    'sixth': string;
    'seventh': string;
    'eighth': string;
    'ninth': string;
    'tenth': string;
    'eleventh': string;
    'twelfth': string;
}
export declare class Greatschools {
    'gsId': string;
    'url': string;
    'rating': string;
}
export declare class Grid {
    'code': string;
    'geometry': GeoRiskGeometry;
}
export declare class HealthTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariableV2>;
    'rangeVariable': Array<RangeVariableV2>;
}
export declare class HeatingType {
    'code': string;
    'value': string;
}
export declare class HouseholdSizeTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariable>;
    'rangeVariable': Array<RangeVariable>;
}
export declare class HouseholdsTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariableV2>;
    'rangeVariable': Array<RangeVariableV2>;
}
export declare class HousingTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariableV2>;
    'rangeVariable': Array<RangeVariableV2>;
}
export declare class IPDTaxByAddressBatchRequest {
    'addresses': Array<TaxRateAddress>;
    'preferences': Preferences;
}
export declare class IPDTaxJurisdiction {
    'state': TaxState;
    'county': TaxCounty;
    'place': TaxPlace;
}
export declare class Identity {
    'fullName': string;
    'ageRange': string;
    'gender': string;
    'location': string;
    'coreId': string;
    'pbKey': string;
    'details': IdentityDetail;
}
export declare class IdentityDemographics {
    'maritalStatus': string;
    'occupation': string;
}
export declare class IdentityDetail {
    'name': IdentityName;
    'age': Age;
    'demographics': IdentityDemographics;
    'photos': Array<Photo>;
    'profiles': Profiles;
    'urls': Array<Url>;
    'education': Array<Education>;
    'employment': Array<Employment>;
}
export declare class IdentityName {
    'given': string;
    'family': string;
}
export declare class IdentityResponse {
    'identities': Array<Identity>;
}
export declare class IncomeTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariable>;
    'rangeVariable': Array<RangeVariable>;
}
export declare class IncomeThemeV2 {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariableV2>;
    'rangeVariable': Array<RangeVariableV2>;
}
export declare class IndexVariable {
    'name': string;
    'score': string;
    'category': string;
    'percentile': string;
    'stateScore': string;
}
export declare class IndividualValueVariable {
    'name': string;
    'description': string;
    'value': string;
}
export declare class IndividualValueVariableV2 {
    'name': string;
    'description': string;
    'year': string;
    'value': string;
}
export declare class InputParameter {
    'name': string;
    'description': string;
    'type': string;
    'defaultValue': string;
    'lowBoundary': string;
    'highBoundary': string;
    'allowedValuesWithDescriptions': {
        [key: string]: any;
    };
}
export declare class Interest {
    'name': string;
    'id': string;
    'affinity': string;
    'parentIds': Array<string>;
    'category': string;
}
export declare class IntermediatePoints {
    'type': string;
    'coordinates': Array<Array<number>>;
}
export declare class Intersection {
    'distance': Unit;
    'driveTime': Unit;
    'driveDistance': Unit;
    'geometry': CommonGeometry;
    'roads': Array<Road>;
}
export declare class IntersectionResponse {
    'intersection': Array<Intersection>;
    'matchedAddress': MatchedAddress;
}
export declare class IpInfo {
    'ipAddress': string;
    'proxy': Proxy;
    'network': Network;
    'place': GeoLocationPlace;
}
export declare class Ipd {
    'id': string;
    'districtName': string;
    'districtType': DistrictType;
    'taxCodeDescription': string;
    'effectiveDate': string;
    'expirationDate': string;
    'boundaryBuffer': BoundaryBuffer;
    'rates': Array<Rate>;
}
export declare class KeyLookupRequest {
    'type': string;
    'preferences': GeocodePreferences;
    'keys': Array<Keys>;
}
export declare class Keys {
    'objectId': string;
    'country': string;
    'value': string;
}
export declare class LandUse {
    'code': string;
    'value': string;
}
export declare class LatLongFields {
    'matchCode': string;
    'matchLevel': string;
    'streetMatchCode': string;
    'streetMatchLevel': string;
    'geometry': Geometry;
}
export declare class LifeStyleTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariable>;
    'rangeVariable': Array<RangeVariable>;
}
export declare class Location {
    'label': string;
    'city': string;
    'region': string;
    'regionCode': string;
    'country': string;
    'countryCode': string;
    'formatted': string;
}
export declare class LocationTime {
    'geometry': Geometry;
    'objectId': string;
    'timestamp': string;
}
export declare class Magnitude {
    'value': number;
    'scale': string;
    'bodyWave': number;
    'surfaceWave': number;
}
export declare class MaritalStatusTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariable>;
    'rangeVariable': Array<RangeVariable>;
}
export declare class Match {
    'confidence': string;
    'percentGeocode': string;
    'precisionLevel': string;
    'locationCode': string;
    'matchCode': string;
}
export declare class MatchedAddress {
    'formattedAddress': string;
    'mainAddressLine': string;
    'addressLastLine': string;
    'placeName': string;
    'areaName1': string;
    'areaName2': string;
    'areaName3': string;
    'areaName4': string;
    'postCode': string;
    'postCodeExt': string;
    'country': string;
    'addressNumber': string;
    'streetName': string;
    'unitType': string;
    'unitValue': string;
}
export declare class Matrix {
    'distance': number;
    'distanceUnit': string;
    'endPoint': StartEndPoint;
    'startPoint': StartEndPoint;
    'time': number;
    'timeUnit': string;
}
export declare class Mcd {
    'name': string;
    'code': string;
}
export declare class Network {
    'connectionFromHome': string;
    'organization': string;
    'carrier': Carrier;
    'organizationType': OrganizationType;
    'connectionType': string;
    'lineSpeed': string;
    'ipRouteType': string;
    'hostingFacility': string;
}
export declare class Operation {
    'name': string;
    'requiredInputs': Array<InputParameter>;
    'optionalInputs': Array<InputParameter>;
    'outputs': Array<OutputParameter>;
    'supportLevels': Array<SupportLevel>;
}
export declare class OrganizationType {
    'naicsCode': string;
    'isicCode': string;
    'value': string;
}
export declare class OutputParameter {
    'name': string;
    'description': string;
    'type': string;
}
export declare class PBKeyAddressRequest {
    'addresses': Array<CommonAddress>;
}
export declare class PBKeyResponse {
    'key': string;
    'matchedAddress': MatchedAddress;
}
export declare class PBKeyResponseList {
    'pbkey': Array<PbKey>;
}
export declare class POIBoundaryAddressRequest {
    'addresses': Array<CommonAddress>;
    'preferences': PoiBoundaryPreferences;
}
export declare class POIBoundaryLocationRequest {
    'locations': Array<POIBoundaryLocations>;
    'preferences': PoiBoundaryPreferences;
}
export declare class POIBoundaryLocations {
    'geometry': Geometry;
    'objectId': string;
}
export declare class POIBoundaryResponse {
    'poiBoundary': Array<PoiBoundary>;
}
export declare class POIByGeometryRequest {
    'name': string;
    'type': string;
    'categoryCode': string;
    'sicCode': string;
    'maxCandidates': string;
    'fuzzyOnName': string;
    'page': string;
    'matchMode': string;
    'specificMatchOn': string;
    'geometry': CommonGeometry;
    'geometryAsText': string;
}
export declare class POIPlaces {
    'id': string;
    'poiId': string;
    'pbkey': string;
    'parentPbkey': string;
    'geocodeConfidence': string;
    'ceoName': string;
    'ceoTitle': string;
    'name': string;
    'brandName': string;
    'tradeName': string;
    'franchiseName': string;
    'open24Hours': string;
    'distance': Distance;
    'businessId': BusinessId;
    'relevanceScore': string;
    'contactDetails': PoiContactDetails;
    'poiClassification': PoiClassification;
    'salesVolume': Array<SalesVolume>;
    'employeeCount': EmployeeCount;
    'yearStart': string;
    'goodsAgentCode': string;
    'goodsAgentCodeDescription': string;
    'legalStatusCode': string;
    'organizationStatusCode': string;
    'organizationStatusCodeDescription': string;
    'subsidaryIndicator': string;
    'subsidaryIndicatorDescription': string;
    'parentBusiness': ParentBusiness;
    'domesticUltimateBusiness': DomesticUltimateBusiness;
    'globalUltimateIndicator': string;
    'globalUltimateBusiness': GlobalUltimateBusiness;
    'familyMembers': string;
    'hierarchyCode': string;
    'tickerSymbol': string;
    'exchangeName': string;
    'geometry': Geometry;
}
export declare class PSAPResponse {
    'psapId': string;
    'fccId': string;
    'type': string;
    'count': number;
    'agency': string;
    'phone': string;
    'county': County;
    'coverage': Coverage;
    'contactPerson': ContactPerson;
    'siteDetails': SiteDetails;
    'mailingAddress': MatchedAddress;
}
export declare class Parcel {
    'id': string;
    'censusCode': string;
    'pbkey': string;
    'address': MatchedAddress;
}
export declare class ParcelBoundary {
    'objectId': string;
    'apn': string;
    'pid': string;
    'center': Center;
    'countyfips': string;
    'geometry': CommonGeometry;
    'parcelList': Array<Parcel>;
    'adjacentParcelBoundary': Array<ParcelBoundary>;
    'matchedAddress': MatchedAddress;
}
export declare class ParentBusiness {
    'name': string;
    'address': Address;
}
export declare class PbKey {
    'objectId': string;
    'key': string;
    'matchedAddress': MatchedAddress;
}
export declare class PhoneVerification {
    'phoneNumber': string;
    'locatable': string;
    'network': DeviceStatusNetwork;
    'privacyConsentRequired': string;
}
export declare class Photo {
    'label': string;
    'value': string;
}
export declare class PlaceByLocations {
    'location': Array<PlaceByLocationsLocation>;
}
export declare class PlaceByLocationsLocation {
    'place': PlaceLocation;
}
export declare class PlaceLocation {
    'level': string;
    'levelName': string;
    'name': Array<PlaceLocationName>;
}
export declare class PlaceLocationName {
    'langType': string;
    'langISOCode': string;
    'value': string;
}
export declare class Poi {
    'id': string;
    'name': string;
    'brandName': string;
    'tradeName': string;
    'franchiseName': string;
    'open24Hours': string;
    'contactDetails': ContactDetails;
    'poiClassification': PoiClassification;
    'employeeCount': EmployeeCount;
    'organizationStatusCode': string;
    'organizationStatusCodeDescription': string;
    'parentBusiness': ParentBusiness;
    'tickerSymbol': string;
    'exchangeName': string;
}
export declare class PoiBoundary {
    'objectId': string;
    'center': GeoZoneGeometry;
    'countyfips': string;
    'geometry': CommonGeometry;
    'poiList': Array<Poi>;
    'matchedAddress': MatchedAddress;
    'id': string;
}
export declare class PoiBoundaryPreferences {
    'categoryCode': string;
    'sicCode': string;
    'naicsCode': string;
}
export declare class PoiClassification {
    'sic': Sic;
    'category': Category;
    'alternateIndustryCode': string;
}
export declare class PoiContactDetails {
    'address': Address;
    'phone': string;
    'fax': string;
    'countryAccessCode': string;
    'email': string;
    'url': string;
}
export declare class PoiCount {
    'totalPoisFound': number;
}
export declare class PoiCountRequest {
    'name': string;
    'type': string;
    'categoryCode': string;
    'sicCode': string;
    'fuzzyOnName': string;
    'geometry': CommonGeometry;
    'geometryAsText': string;
}
export declare class Points {
    'objectId': string;
    'country': string;
    'geometry': GeoPos;
}
export declare class Pois {
    'page': string;
    'candidates': string;
    'totalMatchingCandidates': string;
    'poi': Array<Poi>;
    'matchedAddress': MatchedAddress;
}
export declare class PolygonGeometry {
    'type': string;
    'coordinates': Array<Array<Array<number>>>;
}
export declare class PopulationTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariableV2>;
    'rangeVariable': Array<RangeVariableV2>;
}
export declare class PreferencTimeZone {
    'matchMode': string;
}
export declare class Preferences {
    'fallbackToGeographic': string;
    'useGeoTaxAuxiliaryFile': string;
    'matchMode': string;
    'latLongOffset': string;
    'squeeze': string;
    'latLongFormat': string;
    'defaultBufferWidth': string;
    'distanceUnits': string;
    'outputCasing': string;
    'returnCensusFields': string;
    'returnLatLongFields': string;
    'customPreferences': CustomPreferences;
}
export declare class PrimaryZone {
    'code': string;
    'description': string;
}
export declare class Profile {
    'username': string;
    'userid': string;
    'url': string;
    'bio': string;
    'service': string;
    'followers': number;
    'following': number;
}
export declare class Profiles {
    'twitter': Profile;
    'linkedin': Profile;
}
export declare class Properties {
    'name': string;
}
export declare class PropertyAttributes {
    'pbKey': string;
    'propApn': string;
    'propType': string;
    'propSqFt': string;
    'buildgSqFt': string;
    'buildgSqSource': BuildingSqftSource;
    'landUse': LandUse;
    'construction': Construction;
    'roofType': RoofType;
    'subdivision': string;
    'geometry': Geometry;
    'builtYear': string;
    'bedrooms': string;
    'baths': string;
    'pool': string;
    'firePlace': string;
    'mobileHome': string;
    'heatingType': HeatingType;
    'coolingType': CoolingType;
    'assessedValue': string;
    'marketValue': string;
    'appraisedValue': string;
    'taxAmount': string;
    'taxExemptions': Array<TaxExemption>;
    'caExemptions': CaExemptions;
    'salesDate': string;
    'priorSaleDate': string;
    'priorSalesPrice': string;
}
export declare class PropertyInfoAddressRequest {
    'preferences': PropertyInfoPreferences;
    'addresses': Array<MatchedAddress>;
}
export declare class PropertyInfoPreferences {
    'attributeFilter': string;
}
export declare class PropertyInfoResponse {
    'objectId': string;
    'propertyAttributes': PropertyAttributes;
    'matchedAddress': MatchedAddress;
}
export declare class PropertyInfoResponses {
    'propertyInfoResponses': Array<PropertyInfoResponse>;
}
export declare class Proxy {
    'anonymizerStatus': string;
    'level': string;
    'lastDetected': string;
    'type': string;
}
export declare class PurchasingBehaviorTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariable>;
    'rangeVariable': Array<RangeVariable>;
}
export declare class RaceAndEthnicityTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariableV2>;
    'rangeVariable': Array<RangeVariableV2>;
}
export declare class RaceTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariable>;
    'rangeVariable': Array<RangeVariable>;
}
export declare class RangeVariable {
    'count': string;
    'order': string;
    'name': string;
    'description': string;
    'field': Array<Field>;
}
export declare class RangeVariableV2 {
    'count': string;
    'order': string;
    'name': string;
    'alias': string;
    'description': string;
    'baseVariable': string;
    'year': string;
    'field': Array<FieldV2>;
}
export declare class Rate {
    'name': string;
    'format': string;
    'formatDescription': string;
    'value': string;
}
export declare class RateCenterResponse {
    'id': string;
    'name': string;
    'alternateName': string;
    'areaName1': string;
    'geometry': Geometry;
    'areaCodeInfoList': Array<AreaCodeInfo>;
    'matchedAddress': MatchedAddress;
    'match': Match;
    'county': County;
    'count': number;
    'productCode': string;
}
export declare class ReturnFieldsDescriptor {
    'returnAllCustomFields': boolean;
    'returnMatchDescriptor': boolean;
    'returnStreetAddressFields': boolean;
    'returnUnitInformation': boolean;
    'returnedCustomFieldKeys': Array<string>;
}
export declare class ReverseGeocodeRequest {
    'preferences': Preferences;
    'points': Array<Points>;
}
export declare class Risk {
    'type': string;
    'description': string;
    'risk50Rating': number;
    'frequency': number;
    'nonburn': string;
    'pastFires': number;
    'severity': number;
    'continuity': string;
    'adjustment': string;
    'aspect': string;
    'crownFire': string;
    'vegetation': string;
    'foehn': string;
    'golfCourse': string;
    'roadDist': string;
    'slope': string;
    'waterDist': string;
    'tier': string;
    'tierDescription': string;
    'distanceToFireStation': number;
}
export declare class RiskAddress {
    'objectId': string;
    'formattedAddress': string;
    'mainAddressLine': string;
    'addressLastLine': string;
    'placeName': string;
    'areaName1': string;
    'areaName2': string;
    'areaName3': string;
    'areaName4': string;
    'postCode': string;
    'postCodeExt': string;
    'country': string;
    'addressNumber': string;
    'streetName': string;
    'unitType': string;
    'unitValue': string;
}
export declare class Road {
    'roadClass': string;
    'name': string;
    'type': string;
}
export declare class RoofType {
    'code': string;
    'value': string;
}
export declare class RouteBoundary {
    'id': string;
    'type': string;
    'ref': string;
    'geometry': GeoPostGeometry;
}
export declare class RouteDelivery {
    'individualValueVariable': Array<IndividualValueVariable>;
}
export declare class RouteDirection {
    'distance': number;
    'distanceUnit': string;
    'timeUnit': string;
    'time': number;
    'instruction': string;
    'directionGeometry': RouteGeometry;
}
export declare class RouteDirections extends Array<RouteDirection> {
}
export declare class RouteGeometry {
    'type': string;
    'coordinates': Array<Array<number>>;
}
export declare class SalesTax {
    'totalTax': number;
    'totalTaxRate': number;
    'totalTaxAmount': number;
    'stateTax': number;
    'stateTaxRate': number;
    'stateTaxAmount': number;
    'countyTax': number;
    'countyTaxRate': number;
    'countyTaxAmount': number;
    'municipalTax': number;
    'municipalTaxRate': number;
    'municipalTaxAmount': number;
    'spdsTax': Array<SpecialPurposeDistrictTaxRate>;
    'specialTaxRulesApplied': boolean;
    'specialTaxRulesDescriptor': string;
}
export declare class SalesTaxRate {
    'totalTaxRate': number;
    'stateTaxRate': number;
    'countyTaxRate': number;
    'municipalTaxRate': number;
    'spdsTax': Array<SpecialPurposeDistrictTaxRate>;
}
export declare class SalesVolume {
    'currencyCode': string;
    'worldBaseCurrencyCode': string;
    'value': string;
}
export declare class School {
    'id': string;
    'name': string;
    'assigned': string;
    'phone': string;
    'website': string;
    'addressType': string;
    'address': Address;
    'lowestGrade': string;
    'highestGrade': string;
    'schoolType': string;
    'schoolTypeDesc': string;
    'schoolSubType': string;
    'schoolSubTypeDesc': string;
    'gender': string;
    'genderDesc': string;
    'educationLevel': string;
    'educationLevelDesc': string;
    'greatschools': Greatschools;
    'ncesSchoolId': string;
    'ncesDistrictId': string;
    'ncesDataYear': string;
    'schoolRanking': Array<SchoolRanking>;
    'students': string;
    'teachers': string;
    'status': string;
    'studentTeacherRatio': string;
    'choice': string;
    'coextensiv': string;
    'schoolDistricts': SchoolDistrict;
    'schoolProfile': SchoolProfile;
    'gradeLevelsTaught': GradeLevelsTaught;
    'distance': Distance;
    'geometry': Geometry;
}
export declare class SchoolDistrict {
    'ncesDistrictId': string;
    'name': string;
    'totalSchools': string;
    'districtType': string;
    'metro': string;
    'areaInSqM': string;
    'supervisoryUnionId': string;
    'districtEnrollment': string;
    'districtUrl': string;
}
export declare class SchoolProfile {
    'blueRibbon': string;
    'internationalBaccalaureate': string;
    'titleI': string;
    'expensePerStudent': string;
    'studentBelowPovertyPct': string;
    'advancePlacementClasses': string;
    'freeOrReducedPriceLunches': FreeOrReducedPriceLunches;
    'studentEthnicity': StudentEthnicity;
}
export declare class SchoolRanking {
    'current': string;
    'rankYear': string;
    'stateRank': string;
    'numberOfSchools': string;
    'avgMathScore': string;
    'avgReadingScore': string;
    'statePercentileScore': string;
}
export declare class SchoolsNearByResponse {
    'matchedAddress': Address;
    'school': Array<School>;
}
export declare class Segmentation {
    'boundaries': Boundaries;
    'themes': SegmentationThemes;
}
export declare class SegmentationThemes {
    'lifeStyleTheme': LifeStyleTheme;
}
export declare class ShoreLineDistance {
    'unit': string;
    'value': string;
}
export declare class Sic {
    'businessLine': string;
    'sicCode': string;
    'sicCodeDescription': string;
    'primarySicCode': string;
    'secondarySicCode': string;
}
export declare class SicMetadata {
    'code': string;
    'categoryCode': string;
    'tradeDivision': string;
    'tradeGroup': string;
    'class': string;
    'subClass': string;
    'description': string;
}
export declare class SiteDetails {
    'phone': string;
    'fax': string;
    'contactName': string;
    'email': string;
    'address': MatchedAddress;
}
export declare class SpecialPurposeDistrict {
    'districtName': string;
    'districtCode': string;
    'districtNumber': string;
    'versionDate': string;
    'effectiveDate': string;
    'compiledDate': string;
    'updateDate': string;
}
export declare class SpecialPurposeDistrictTax {
    'districtNumber': string;
    'taxRate': number;
    'taxAmount': number;
}
export declare class SpecialPurposeDistrictTaxRate {
    'districtNumber': string;
    'taxRate': number;
    'taxAmount': number;
}
export declare class SpeedLimit {
    'maxSpeed': string;
    'speedUnit': string;
    'speedVerification': string;
    'amPeakAvgSpeed': string;
    'pmPeakAvgSpeed': string;
    'offPeakAvgSpeed': string;
    'nightAvgSpeed': string;
    'weekAvgSpeed': string;
    'road': SpeedRoad;
}
export declare class SpeedRoad {
    'id': string;
    'name': string;
    'altName': string;
    'roadClass': string;
    'type': string;
    'lengthInMeters': string;
    'routeNumber': string;
    'surfaceType': string;
    'trafficFlow': string;
    'isToll': string;
    'beginningLevel': string;
    'endingLevel': string;
}
export declare class Start {
    'year': number;
    'month': number;
    'day': number;
}
export declare class StartEndPoint {
    'type': string;
    'coordinates': Array<number>;
}
export declare class Status {
    'code': string;
    'description': string;
}
export declare class StudentEthnicity {
    'indianAlaskaNative': string;
    'asian': string;
    'hispanic': string;
    'black': string;
    'white': string;
    'hawaiianPacificlslander': string;
    'twoOrMoreRaces': string;
}
export declare class SupplyAndDemandTheme {
    'boundaryRef': string;
    'individualValueVariable': Array<IndividualValueVariableV2>;
    'rangeVariable': Array<RangeVariableV2>;
}
export declare class SupportLevel {
    'supportedDataLevel': number;
    'countries': Array<string>;
    'updatedRequiredInputs': Array<InputParameter>;
    'updatedOptionalInputs': Array<InputParameter>;
    'updatedOptionalOutputs': Array<OutputParameter>;
}
export declare class TaxAddress {
    'objectId': string;
    'mainAddressLine': string;
    'placeName': string;
    'areaName1': string;
    'areaName3': string;
    'postCode1': string;
    'country': string;
    'purchaseAmount': string;
}
export declare class TaxAddressRequest {
    'preferences': Preferences;
    'taxAddresses': Array<TaxAddress>;
}
export declare class TaxBatchLocationResponse {
    'objectId': string;
    'confidence': number;
    'jurisdiction': TaxJurisdiction;
    'matchedAddress': MatchedAddress;
    'salesTax': SalesTax;
    'useTax': UseTax;
    'census': Census;
    'latLongFields': LatLongFields;
}
export declare class TaxBatchResponse {
    'objectId': string;
    'confidence': number;
    'jurisdiction': TaxJurisdiction;
    'matchedAddress': MatchedAddress;
    'salesTax': SalesTax;
    'useTax': UseTax;
    'census': Census;
    'latLongFields': LatLongFields;
}
export declare class TaxCounty {
    'code': string;
    'name': string;
}
export declare class TaxDistrictResponse {
    'objectId': string;
    'confidence': number;
    'jurisdiction': IPDTaxJurisdiction;
    'numOfIpdsFound': number;
    'ipds': Array<Ipd>;
    'matchedAddress': MatchedAddress;
}
export declare class TaxDistrictResponseList {
    'taxDistrictResponse': Array<TaxDistrictResponse>;
}
export declare class TaxExemption {
    'code': string;
    'value': string;
}
export declare class TaxJurisdiction {
    'state': TaxState;
    'county': TaxCounty;
    'place': TaxPlace;
    'spds': Array<SpecialPurposeDistrict>;
}
export declare class TaxLocationPreferences {
    'defaultBufferWidth': string;
    'distanceUnits': string;
    'outputCasing': string;
    'returnCensusFields': string;
    'returnLatLongFields': string;
}
export declare class TaxLocationRequest {
    'preferences': TaxLocationPreferences;
    'locations': Array<GeoTaxLocations>;
}
export declare class TaxLocationResponses {
    'taxResponses': Array<TaxBatchLocationResponse>;
}
export declare class TaxPlace {
    'name': string;
    'code': string;
    'gnisCode': string;
    'selfCollected': boolean;
    'classCode': string;
    'incorporatedFlag': string;
    'lastAnnexedDate': string;
    'lastUpdatedDate': string;
    'lastVerifiedDate': string;
}
export declare class TaxRateAddress {
    'objectId': string;
    'mainAddressLine': string;
    'placeName': string;
    'areaName1': string;
    'areaName3': string;
    'postCode1': string;
    'country': string;
}
export declare class TaxRateAddressRequest {
    'preferences': Preferences;
    'taxRateAddresses': Array<TaxRateAddress>;
}
export declare class TaxRateBatchLocationResponse {
    'objectId': string;
    'confidence': number;
    'jurisdiction': TaxJurisdiction;
    'matchedAddress': MatchedAddress;
    'salesTax': SalesTaxRate;
    'useTax': UseTaxRate;
    'census': Census;
    'latLongFields': LatLongFields;
}
export declare class TaxRateBatchResponse {
    'objectId': string;
    'confidence': number;
    'jurisdiction': TaxJurisdiction;
    'matchedAddress': MatchedAddress;
    'salesTax': SalesTaxRate;
    'useTax': UseTaxRate;
    'census': Census;
    'latLongFields': LatLongFields;
}
export declare class TaxRateLocationRequest {
    'preferences': TaxLocationPreferences;
    'locations': Array<GeoTaxRateLocations>;
}
export declare class TaxRateLocationResponses {
    'taxResponses': Array<TaxRateBatchLocationResponse>;
}
export declare class TaxRateResponse {
    'objectId': string;
    'confidence': number;
    'jurisdiction': TaxJurisdiction;
    'matchedAddress': MatchedAddress;
    'salesTax': SalesTaxRate;
    'useTax': UseTaxRate;
    'latLongFields': LatLongFields;
}
export declare class TaxRateResponses {
    'taxResponses': Array<TaxRateBatchResponse>;
}
export declare class TaxResponse {
    'objectId': string;
    'confidence': number;
    'jurisdiction': TaxJurisdiction;
    'matchedAddress': MatchedAddress;
    'salesTax': SalesTax;
    'useTax': UseTax;
    'latLongFields': LatLongFields;
}
export declare class TaxResponses {
    'taxResponses': Array<TaxBatchResponse>;
}
export declare class TaxState {
    'code': string;
    'name': string;
}
export declare class Time {
    'value': string;
    'unit': string;
}
export declare class Timezone {
    'objectId': string;
    'timezoneName': string;
    'zoneType': string;
    'utcOffset': number;
    'dstOffset': number;
    'timestamp': number;
    'matchedAddress': MatchedAddress;
}
export declare class TimezoneAddressRequest {
    'preferences': PreferencTimeZone;
    'addressTime': Array<AddressTime>;
}
export declare class TimezoneLocation {
    'objectId': string;
    'timezoneName': string;
    'zoneType': string;
    'utcOffset': number;
    'dstOffset': number;
    'timestamp': number;
}
export declare class TimezoneLocationRequest {
    'locationTime': Array<LocationTime>;
}
export declare class TimezoneLocationResponse {
    'timezone': Array<TimezoneLocation>;
}
export declare class TimezoneResponse {
    'timezone': Array<Timezone>;
}
export declare class Topic {
    'name': string;
}
export declare class TravelBoundaries {
    'travelBoundary': TravelBoundary;
}
export declare class TravelBoundary {
    'costs': Costs;
}
export declare class TravelCostMatrixResponse {
    'matrix': Array<Matrix>;
}
export declare class Type {
    'code': string;
    'value': string;
}
export declare class TypeaheadRange {
    'placeName': string;
    'units': Array<TypeaheadUnit>;
}
export declare class TypeaheadUnit {
    'unitInfo': string;
    'formattedUnitAddress': string;
}
export declare class Unit {
    'value': number;
    'unit': string;
}
export declare class Url {
    'value': string;
}
export declare class UseTax {
    'totalTaxRate': number;
    'totalTaxAmount': number;
    'stateTaxRate': number;
    'stateTaxAmount': number;
    'countyTaxRate': number;
    'countyTaxAmount': number;
    'municipalTaxRate': number;
    'municipalTaxAmount': number;
    'spdsTax': Array<SpecialPurposeDistrictTax>;
    'specialTaxRulesApplied': boolean;
    'specialTaxRulesDescriptor': string;
}
export declare class UseTaxRate {
    'totalTaxRate': number;
    'stateTaxRate': number;
    'countyTaxRate': number;
    'municipalTaxRate': number;
    'spdsTax': Array<SpecialPurposeDistrictTaxRate>;
}
export declare class ValidateEmailAddressAPIRequest {
    'options': ValidateEmailAddressOptions;
    'input': ValidateEmailAddressInput;
}
export declare class ValidateEmailAddressAPIResponse {
    'output': Array<ValidateEmailAddressOutput>;
}
export declare class ValidateEmailAddressInput {
    'row': Array<ValidateEmailAddressInputRow>;
}
export declare class ValidateEmailAddressInputRow {
    'userFields': Array<ValidateMailingAddressInputRowUserFields>;
    'rtc': string;
    'bogus': string;
    'role': string;
    'emps': string;
    'fccwireless': string;
    'language': string;
    'complain': string;
    'disposable': string;
    'atc': string;
    'emailAddress': string;
    'rtcTimeout': string;
}
export declare class ValidateEmailAddressOptions {
}
export declare class ValidateEmailAddressOutput {
    'userFields': Array<ValidateMailingAddressInputRowUserFields>;
    'eMAIL': string;
    'fINDING': string;
    'cOMMENT': string;
    'cOMMENTCODE': string;
    'sUGGEMAIL': string;
    'sUGGCOMMENT': string;
    'eRRORRESPONSE': string;
    'eRROR': string;
    'status': string;
    'statusCode': string;
    'statusDescription': string;
}
export declare class ValidateMailingAddressInput {
    'row': Array<ValidateMailingAddressInputRow>;
}
export declare class ValidateMailingAddressInputRow {
    'userFields': Array<ValidateMailingAddressInputRowUserFields>;
    'addressLine1': string;
    'addressLine2': string;
    'firmName': string;
    'city': string;
    'stateProvince': string;
    'country': string;
    'postalCode': string;
}
export declare class ValidateMailingAddressInputRowUserFields {
    'name': string;
    'value': string;
}
export declare class ValidateMailingAddressOptions {
    'outputCasing': string;
}
export declare class ValidateMailingAddressOutput {
    'userFields': Array<ValidateMailingAddressInputRowUserFields>;
    'addressLine1': string;
    'addressLine2': string;
    'firmName': string;
    'city': string;
    'postalCode': string;
    'country': string;
    'stateProvince': string;
    'blockAddress': string;
    'additionalInputData': string;
    'postalCodeBase': string;
    'postalCodeAddOn': string;
    'status': string;
    'statusCode': string;
    'statusDescription': string;
}
export declare class ValidateMailingAddressPremiumInput {
    'row': Array<ValidateMailingAddressPremiumInputRow>;
}
export declare class ValidateMailingAddressPremiumInputRow {
    'userFields': Array<ValidateMailingAddressInputRowUserFields>;
    'addressLine1': string;
    'addressLine2': string;
    'addressLine3': string;
    'addressLine4': string;
    'addressLine5': string;
    'firmName': string;
    'city': string;
    'stateProvince': string;
    'country': string;
    'postalCode': string;
}
export declare class ValidateMailingAddressPremiumOptions {
    'outputAddressBlocks': string;
    'keepMultimatch': string;
    'outputCountryFormat': string;
    'outputRecordType': string;
    'outputFieldLevelReturnCodes': string;
    'outputScript': string;
    'outputCasing': string;
    'maximumResults': string;
}
export declare class ValidateMailingAddressPremiumOutput {
    'userFields': Array<ValidateMailingAddressInputRowUserFields>;
    'status': string;
    'statusCode': string;
    'statusDescription': string;
    'confidence': string;
    'recordType': string;
    'recordTypeDefault': string;
    'multipleMatches': string;
    'couldNotValidate': string;
    'countryLevel': string;
    'addressFormat': string;
    'addressLine1': string;
    'addressLine2': string;
    'addressLine3': string;
    'addressLine4': string;
    'city': string;
    'stateProvince': string;
    'postalCode': string;
    'postalCodeBase': string;
    'postalCodeAddOn': string;
    'country': string;
    'additionalInputData': string;
    'firmName': string;
    'houseNumber': string;
    'leadingDirectional': string;
    'streetName': string;
    'streetSuffix': string;
    'trailingDirectional': string;
    'apartmentLabel': string;
    'apartmentNumber': string;
    'apartmentLabel2': string;
    'apartmentNumber2': string;
    'rRHC': string;
    'pOBox': string;
    'privateMailbox': string;
    'privateMailboxType': string;
    'houseNumberInput': string;
    'leadingDirectionalInput': string;
    'streetNameInput': string;
    'streetSuffixInput': string;
    'trailingDirectionalInput': string;
    'apartmentLabelInput': string;
    'apartmentNumberInput': string;
    'rRHCInput': string;
    'pOBoxInput': string;
    'privateMailboxInput': string;
    'privateMailboxTypeInput': string;
    'cityInput': string;
    'stateProvinceInput': string;
    'postalCodeInput': string;
    'countryInput': string;
    'firmNameInput': string;
    'houseNumberResult': string;
    'leadingDirectionalResult': string;
    'streetResult': string;
    'streetNameResult': string;
    'streetNameAliasType': string;
    'streetSuffixResult': string;
    'trailingDirectionalResult': string;
    'apartmentLabelResult': string;
    'apartmentNumberResult': string;
    'apartmentLabel2Result': string;
    'apartmentNumber2Result': string;
    'rRHCResult': string;
    'rRHCType': string;
    'pOBoxResult': string;
    'cityResult': string;
    'stateProvinceResult': string;
    'postalCodeResult': string;
    'postalCodeCityResult': string;
    'addressRecordResult': string;
    'postalCodeSource': string;
    'postalCodeType': string;
    'countryResult': string;
    'firmNameResult': string;
    'streetNamePreferredAliasResult': string;
    'streetNameAbbreviatedAliasResult': string;
    'addressLine5': string;
    'addressQuality': string;
    'deliverability': string;
    'addressType': string;
    'locality': string;
    'changeScore': string;
    'suburb': string;
    'blockAddress': string;
    'latitude': string;
    'longitude': string;
}
export declare class ValidateMailingAddressPremiumRequest {
    'options': ValidateMailingAddressPremiumOptions;
    'input': ValidateMailingAddressPremiumInput;
}
export declare class ValidateMailingAddressPremiumResponse {
    'output': Array<ValidateMailingAddressPremiumOutput>;
}
export declare class ValidateMailingAddressProInput {
    'row': Array<ValidateMailingAddressProInputRow>;
}
export declare class ValidateMailingAddressProInputRow {
    'userFields': Array<ValidateMailingAddressInputRowUserFields>;
    'addressLine1': string;
    'addressLine2': string;
    'firmName': string;
    'city': string;
    'stateProvince': string;
    'country': string;
    'postalCode': string;
}
export declare class ValidateMailingAddressProOptions {
    'outputAddressBlocks': string;
    'keepMultimatch': string;
    'outputCountryFormat': string;
    'outputScript': string;
    'outputCasing': string;
    'maximumResults': string;
}
export declare class ValidateMailingAddressProOutput {
    'userFields': Array<ValidateMailingAddressInputRowUserFields>;
    'addressLine1': string;
    'addressLine2': string;
    'firmName': string;
    'changeScore': string;
    'locality': string;
    'suburb': string;
    'addressType': string;
    'deliverability': string;
    'addressQuality': string;
    'couldNotValidate': string;
    'city': string;
    'postalCode': string;
    'country': string;
    'stateProvince': string;
    'blockAddress': string;
    'additionalInputData': string;
    'postalCodeBase': string;
    'postalCodeAddOn': string;
    'status': string;
    'statusCode': string;
    'statusDescription': string;
}
export declare class ValidateMailingAddressProRequest {
    'options': ValidateMailingAddressProOptions;
    'input': ValidateMailingAddressProInput;
}
export declare class ValidateMailingAddressProResponse {
    'output': Array<ValidateMailingAddressProOutput>;
}
export declare class ValidateMailingAddressRequest {
    'options': ValidateMailingAddressOptions;
    'input': ValidateMailingAddressInput;
}
export declare class ValidateMailingAddressResponse {
    'output': Array<ValidateMailingAddressOutput>;
}
export declare class ValidateMailingAddressUSCANAPIInput {
    'row': Array<ValidateMailingAddressUSCANAPIInputRow>;
}
export declare class ValidateMailingAddressUSCANAPIInputRow {
    'userFields': Array<ValidateMailingAddressInputRowUserFields>;
    'addressLine1': string;
    'addressLine2': string;
    'addressLine3': string;
    'addressLine4': string;
    'firmName': string;
    'city': string;
    'stateProvince': string;
    'country': string;
    'postalCode': string;
    'uSUrbanName': string;
    'canLanguage': string;
}
export declare class ValidateMailingAddressUSCANAPIOptions {
    'outputAddressBlocks': string;
    'performUSProcessing': string;
    'performDPV': string;
    'outputFormattedOnFail': string;
    'outputPostalCodeSeparator': string;
    'outputCountryFormat': string;
    'keepMultimatch': string;
    'outputCasing': string;
    'maximumResults': string;
    'outputRecordType': string;
    'outputFieldLevelReturnCodes': string;
    'dPVDetermineNoStat': string;
    'streetMatchingStrictness': string;
    'canFrenchApartmentLabel': string;
    'outputAbbreviatedAlias': string;
    'dPVSuccessfulStatusCondition': string;
    'standardAddressPMBLine': string;
    'firmMatchingStrictness': string;
    'canRuralRouteFormat': string;
    'canPreferHouseNum': string;
    'outputPreferredAlias': string;
    'directionalMatchingStrictness': string;
    'extractFirm': string;
    'failOnCMRAMatch': string;
    'canNonCivicFormat': string;
    'canSSLVRFlg': string;
    'outputStreetNameAlias': string;
    'performEWS': string;
    'canOutputCityFormat': string;
    'dualAddressLogic': string;
    'performSuiteLink': string;
    'canStandardAddressFormat': string;
    'outputPreferredCity': string;
    'outputMultinationalCharacters': string;
    'canDeliveryOfficeFormat': string;
    'performLACSLink': string;
    'canDualAddressLogic': string;
    'extractUrb': string;
    'standardAddressFormat': string;
    'canFrenchFormat': string;
    'dPVDetermineVacancy': string;
    'canEnglishApartmentLabel': string;
    'suppressZplusPhantomCarrierR777': string;
    'canOutputCityAlias': string;
    'outputShortCityName': string;
}
export declare class ValidateMailingAddressUSCANAPIOutput {
    'userFields': Array<ValidateMailingAddressInputRowUserFields>;
    'status': string;
    'statusCode': string;
    'statusDescription': string;
    'addressLine1': string;
    'addressLine2': string;
    'city': string;
    'stateProvince': string;
    'postalCode': string;
    'country': string;
    'firmName': string;
    'blockAddress': string;
    'postalCodeBase': string;
    'postalCodeAddOn': string;
    'additionalInputData': string;
    'couldNotValidate': string;
    'addressFormat': string;
    'addressLine3': string;
    'addressLine4': string;
    'addressRecordResult': string;
    'apartmentLabel': string;
    'apartmentLabelInput': string;
    'apartmentLabelResult': string;
    'apartmentNumber': string;
    'apartmentNumberInput': string;
    'apartmentNumberResult': string;
    'cityInput': string;
    'cityResult': string;
    'confidence': string;
    'countryInput': string;
    'countryResult': string;
    'countryLevel': string;
    'firmNameInput': string;
    'firmNameResult': string;
    'houseNumber': string;
    'houseNumberInput': string;
    'houseNumberResult': string;
    'leadingDirectional': string;
    'leadingDirectionalInput': string;
    'leadingDirectionalResult': string;
    'multipleMatches': string;
    'pOBox': string;
    'pOBoxInput': string;
    'pOBoxResult': string;
    'postalCodeInput': string;
    'postalCodeResult': string;
    'postalCodeSource': string;
    'postalCodeType': string;
    'postalCodeCityResult': string;
    'privateMailbox': string;
    'privateMailboxInput': string;
    'privateMailboxType': string;
    'privateMailboxTypeInput': string;
    'recordType': string;
    'recordTypeDefault': string;
    'rRHC': string;
    'rRHCInput': string;
    'rRHCResult': string;
    'rRHCType': string;
    'stateProvinceInput': string;
    'stateProvinceResult': string;
    'streetResult': string;
    'streetName': string;
    'streetNameAliasType': string;
    'streetNameInput': string;
    'streetNameResult': string;
    'streetNameAbbreviatedAliasResult': string;
    'streetNamePreferredAliasResult': string;
    'streetSuffix': string;
    'streetSuffixInput': string;
    'streetSuffixResult': string;
    'trailingDirectional': string;
    'trailingDirectionalInput': string;
    'trailingDirectionalResult': string;
    'matchScore': string;
    'uSLACS': string;
    'uSLACSReturnCode': string;
    'rDI': string;
    'cMRA': string;
    'dPV': string;
    'dPVFootnote': string;
    'suiteLinkReturnCode': string;
    'suiteLinkMatchCode': string;
    'suiteLinkFidelity': string;
    'uSBCCheckDigit': string;
    'postalBarCode': string;
    'uSCarrierRouteCode': string;
    'uSFIPSCountyNumber': string;
    'uSCountyName': string;
    'uSCongressionalDistrict': string;
    'uSAltAddr': string;
    'uSLastLineNumber': string;
    'uSFinanceNumber': string;
    'uSUrbanName': string;
    'uSUrbanNameInput': string;
    'uSUrbanNameResult': string;
    'multimatchCount': string;
    'addressBlock1': string;
    'addressBlock2': string;
    'addressBlock3': string;
    'addressBlock4': string;
    'addressBlock5': string;
    'addressBlock6': string;
    'addressBlock7': string;
    'addressBlock8': string;
    'addressBlock9': string;
    'canLanguage': string;
    'dPVNoStat': string;
    'dPVVacant': string;
}
export declare class ValidateMailingAddressUSCANAPIRequest {
    'options': ValidateMailingAddressUSCANAPIOptions;
    'input': ValidateMailingAddressUSCANAPIInput;
}
export declare class ValidateMailingAddressUSCANAPIResponse {
    'output': Array<ValidateMailingAddressUSCANAPIOutput>;
}
export declare class WaterBody {
    'name': string;
    'distance': ShoreLineDistance;
    'type': Type;
}
export declare class WaterBodyLocationResponse {
    'waterBody': Array<WaterBody>;
}
export declare class WaterBodyResponse {
    'waterBody': Array<WaterBody>;
    'matchedAddress': MatchedAddress;
}
export interface Authentication {
    getOAuthCredentials(requestOptions: request.Options): Promise<{
        body: oAuthCredInfo;
    }>;
}
export declare class OAuth implements Authentication {
    objOAuthCredInfo: oAuthCredInfo;
    oAuthApiKey: string;
    oAuthSecret: string;
    oAuthUrl: string;
    oAuthToken: string;
    constructor();
    getOAuthCredentials(): Promise<{
        response: http.IncomingMessage;
        body: oAuthCredInfo;
    }>;
    private refreshToken;
}
export declare enum AddressVerificationServiceApiApiKeys {
}
export declare class AddressVerificationServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: AddressVerificationServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    getCityStateProvince(inputAddress: GetCityStateProvinceAPIRequest): Promise<{
        response: http.IncomingMessage;
        body: GetCityStateProvinceAPIResponse;
    }>;
    getPostalCodes(inputAddress: GetPostalCodesAPIRequest): Promise<{
        response: http.IncomingMessage;
        body: GetPostalCodesAPIResponse;
    }>;
    validateMailingAddress(inputAddress: ValidateMailingAddressRequest): Promise<{
        response: http.IncomingMessage;
        body: ValidateMailingAddressResponse;
    }>;
    validateMailingAddressPremium(inputAddress: ValidateMailingAddressPremiumRequest): Promise<{
        response: http.IncomingMessage;
        body: ValidateMailingAddressPremiumResponse;
    }>;
    validateMailingAddressPro(inputAddress: ValidateMailingAddressProRequest): Promise<{
        response: http.IncomingMessage;
        body: ValidateMailingAddressProResponse;
    }>;
    validateMailingAddressUSCAN(inputAddress: ValidateMailingAddressUSCANAPIRequest): Promise<{
        response: http.IncomingMessage;
        body: ValidateMailingAddressUSCANAPIResponse;
    }>;
}
export declare enum AddressesAPIServiceApiApiKeys {
}
export declare class AddressesAPIServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: AddressesAPIServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    getAddressesByBoundaryName(country: string, areaName1?: string, areaName2?: string, areaName3?: string, areaName4?: string, postCode?: string, maxCandidates?: string, page?: string): Promise<{
        response: http.IncomingMessage;
        body: AddressesResponse;
    }>;
    getAddressesCountByBoundary(body?: AddressesByBoundaryRequest): Promise<{
        response: http.IncomingMessage;
        body: AddressesCount;
    }>;
    getAddressesCountByBoundaryName(country: string, areaName1?: string, areaName2?: string, areaName3?: string, areaName4?: string, postCode?: string): Promise<{
        response: http.IncomingMessage;
        body: AddressesCount;
    }>;
    getAddressesbyBoundary(body?: AddressesByBoundaryRequest): Promise<{
        response: http.IncomingMessage;
        body: AddressesResponse;
    }>;
}
export declare enum DemographicsServiceApiApiKeys {
}
export declare class DemographicsServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: DemographicsServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    getDemographicsAdvanced(body?: DemographicsAdvancedRequest): Promise<{
        response: http.IncomingMessage;
        body: Demographics;
    }>;
    getDemographicsBasic(address?: string, longitude?: string, latitude?: string, searchRadius?: string, searchRadiusUnit?: string, travelTime?: string, travelTimeUnit?: string, travelDistance?: string, travelDistanceUnit?: string, travelMode?: string, country?: string, profile?: string, filter?: string, includeGeometry?: string): Promise<{
        response: http.IncomingMessage;
        body: Demographics;
    }>;
    getDemographicsByAddressV2(address: string, country?: string, profile?: string, filter?: string, valueFormat?: string, variableLevel?: string): Promise<{
        response: http.IncomingMessage;
        body: Demographics;
    }>;
    getDemographicsByBoundaryIds(boundaryIds?: string, profile?: string, filter?: string, valueFormat?: string, variableLevel?: string): Promise<{
        response: http.IncomingMessage;
        body: Demographics;
    }>;
    getDemographicsByLocationV2(longitude: string, latitude: string, profile?: string, filter?: string, valueFormat?: string, variableLevel?: string): Promise<{
        response: http.IncomingMessage;
        body: Demographics;
    }>;
    getSegmentationByAddress(address: string, country?: string): Promise<{
        response: http.IncomingMessage;
        body: Segmentation;
    }>;
    getSegmentationByLocation(longitude: string, latitude: string): Promise<{
        response: http.IncomingMessage;
        body: Segmentation;
    }>;
}
export declare enum EmailVerificationServiceApiApiKeys {
}
export declare class EmailVerificationServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: EmailVerificationServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    validateEmailAddress(inputEmailAddress: ValidateEmailAddressAPIRequest): Promise<{
        response: http.IncomingMessage;
        body: ValidateEmailAddressAPIResponse;
    }>;
}
export declare enum GeocodeServiceApiApiKeys {
}
export declare class GeocodeServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: GeocodeServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    geocode(datapackBundle: string, country?: string, placeName?: string, mainAddress?: string, lastLine?: string, areaName1?: string, areaName2?: string, areaName3?: string, areaName4?: string, postalCode?: number, matchMode?: string, fallbackGeo?: boolean, fallbackPostal?: boolean, maxCands?: number, streetOffset?: number, streetOffsetUnits?: string, cornerOffset?: number, cornerOffsetUnits?: string): Promise<{
        response: http.IncomingMessage;
        body: GeocodeServiceResponse;
    }>;
    geocodeBatch(body: GeocodeRequest, datapackBundle: string): Promise<{
        response: http.IncomingMessage;
        body: GeocodeServiceResponseList;
    }>;
    getCapabilities(datapackBundle: string, operation?: string, country?: string): Promise<{
        response: http.IncomingMessage;
        body: GeocodeCapabilitiesResponse;
    }>;
    getDictionaries(datapackBundle: string, country?: string): Promise<{
        response: http.IncomingMessage;
        body: ConfiguredDictionaryResponse;
    }>;
    getPreciselyID(address: string, country?: string): Promise<{
        response: http.IncomingMessage;
        body: PBKeyResponse;
    }>;
    getPreciselyIDs(body: PBKeyAddressRequest): Promise<{
        response: http.IncomingMessage;
        body: PBKeyResponseList;
    }>;
    keyLookup(key: string, type?: string, country?: string): Promise<{
        response: http.IncomingMessage;
        body: GeocodeServiceResponse;
    }>;
    keyLookupBatch(body?: KeyLookupRequest): Promise<{
        response: http.IncomingMessage;
        body: GeocodeServiceResponseList;
    }>;
    reverseGeocodBatch(datapackBundle: string, body?: ReverseGeocodeRequest): Promise<{
        response: http.IncomingMessage;
        body: GeocodeServiceResponseList;
    }>;
    reverseGeocode(datapackBundle: string, x: number, y: number, country?: string, coordSysName?: string, distance?: number, distanceUnits?: string): Promise<{
        response: http.IncomingMessage;
        body: GeocodeServiceResponse;
    }>;
}
export declare enum GeolocationServiceApiApiKeys {
}
export declare class GeolocationServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: GeolocationServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    getLocationByIPAddress(ipAddress: string): Promise<{
        response: http.IncomingMessage;
        body: GeoLocationIpAddr;
    }>;
    getLocationByWiFiAccessPoint(mac?: string, ssid?: string, rsid?: string, speed?: string, accessPoint?: string): Promise<{
        response: http.IncomingMessage;
        body: GeoLocationAccessPoint;
    }>;
}
export declare enum IdentityProfilesServiceApiApiKeys {
}
export declare class IdentityProfilesServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: IdentityProfilesServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    getIdentityByAddress(address: string, confidence?: string, maxCandidates?: string, theme?: string, filter?: string): Promise<{
        response: http.IncomingMessage;
        body: IdentityResponse;
    }>;
    getIdentityByEmail(email: string, confidence?: string, theme?: string, filter?: string): Promise<{
        response: http.IncomingMessage;
        body: Identity;
    }>;
    getIdentityByTwitter(twitter: string, confidence?: string, theme?: string, filter?: string): Promise<{
        response: http.IncomingMessage;
        body: Identity;
    }>;
}
export declare enum LocalTaxServiceApiApiKeys {
}
export declare class LocalTaxServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: LocalTaxServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    getBatchTaxByAddress(taxRateTypeId: string, body: TaxAddressRequest): Promise<{
        response: http.IncomingMessage;
        body: TaxResponses;
    }>;
    getBatchTaxByLocation(taxRateTypeId: string, body: TaxLocationRequest): Promise<{
        response: http.IncomingMessage;
        body: TaxLocationResponses;
    }>;
    getBatchTaxRateByAddress(taxRateTypeId: string, body: TaxRateAddressRequest): Promise<{
        response: http.IncomingMessage;
        body: TaxRateResponses;
    }>;
    getBatchTaxRateByLocation(taxRateTypeId: string, body: TaxRateLocationRequest): Promise<{
        response: http.IncomingMessage;
        body: TaxRateLocationResponses;
    }>;
    getIPDTaxByAddress(address: string, returnLatLongFields?: string, latLongFormat?: string): Promise<{
        response: http.IncomingMessage;
        body: TaxDistrictResponse;
    }>;
    getIPDTaxByAddressBatch(body: IPDTaxByAddressBatchRequest): Promise<{
        response: http.IncomingMessage;
        body: TaxDistrictResponseList;
    }>;
    getSpecificTaxByAddress(taxRateTypeId: string, address: string, purchaseAmount: string): Promise<{
        response: http.IncomingMessage;
        body: TaxResponse;
    }>;
    getSpecificTaxByLocation(taxRateTypeId: string, latitude: string, longitude: string, purchaseAmount: string): Promise<{
        response: http.IncomingMessage;
        body: TaxResponse;
    }>;
    getSpecificTaxRateByAddress(taxRateTypeId: string, address: string): Promise<{
        response: http.IncomingMessage;
        body: TaxRateResponse;
    }>;
    getSpecificTaxRateByLocation(taxRateTypeId: string, latitude: string, longitude: string): Promise<{
        response: http.IncomingMessage;
        body: TaxRateResponse;
    }>;
}
export declare enum NeighborhoodsServiceApiApiKeys {
}
export declare class NeighborhoodsServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: NeighborhoodsServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    getPlaceByLocation(longitude: string, latitude: string, levelHint?: string): Promise<{
        response: http.IncomingMessage;
        body: PlaceByLocations;
    }>;
}
export declare enum PhoneVerificationServiceApiApiKeys {
}
export declare class PhoneVerificationServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: PhoneVerificationServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    phoneVerification(phoneNumber: string, includeNetworkInfo?: string): Promise<{
        response: http.IncomingMessage;
        body: PhoneVerification;
    }>;
}
export declare enum PlacesServiceApiApiKeys {
}
export declare class PlacesServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: PlacesServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    getCategoryCodeMetadata(categoryCode?: string, level?: string): Promise<{
        response: http.IncomingMessage;
        body: GeoEnrichMetadataResponse;
    }>;
    getPOIById(id: string): Promise<{
        response: http.IncomingMessage;
        body: POIPlaces;
    }>;
    getPOIsByAddress(address: string, country?: string, name?: string, type?: string, categoryCode?: string, sicCode?: string, maxCandidates?: string, searchRadius?: string, searchRadiusUnit?: string, travelTime?: string, travelTimeUnit?: string, travelDistance?: string, travelDistanceUnit?: string, travelMode?: string, sortBy?: string, fuzzyOnName?: string, page?: string, matchMode?: string, specificMatchOn?: string): Promise<{
        response: http.IncomingMessage;
        body: GeoEnrichResponse;
    }>;
    getPOIsByArea(country: string, areaName3?: string, postcode1?: string, postcode2?: string, name?: string, type?: string, categoryCode?: string, sicCode?: string, maxCandidates?: string, fuzzyOnName?: string, page?: string, matchMode?: string, specificMatchOn?: string): Promise<{
        response: http.IncomingMessage;
        body: GeoEnrichResponse;
    }>;
    getPOIsByBoundary(accept?: string, contentType?: string, body?: POIByGeometryRequest): Promise<{
        response: http.IncomingMessage;
        body: Pois;
    }>;
    getPOIsByLocation(longitude: string, latitude: string, searchText?: string, type?: string, categoryCode?: string, sicCode?: string, maxCandidates?: string, searchRadius?: string, searchRadiusUnit?: string, travelTime?: string, travelTimeUnit?: string, travelDistance?: string, travelDistanceUnit?: string, travelMode?: string, sortBy?: string, fuzzyOnName?: string, page?: string, searchOnNameOnly?: string, matchMode?: string, specificMatchOn?: string): Promise<{
        response: http.IncomingMessage;
        body: GeoEnrichResponse;
    }>;
    getPOIsCount(contentType?: string, body?: PoiCountRequest): Promise<{
        response: http.IncomingMessage;
        body: PoiCount;
    }>;
    getSICMetadata(sicCode?: string, level?: string): Promise<{
        response: http.IncomingMessage;
        body: GeoEnrichMetadataResponse;
    }>;
    poisAutocomplete(longitude?: string, latitude?: string, searchText?: string, searchRadius?: string, searchRadiusUnit?: string, travelTime?: string, travelTimeUnit?: string, travelDistance?: string, travelDistanceUnit?: string, travelMode?: string, country?: string, areaName1?: string, areaName3?: string, postcode1?: string, postcode2?: string, ipAddress?: string, autoDetectLocation?: string, type?: string, categoryCode?: string, sicCode?: string, maxCandidates?: string, sortBy?: string, searchOnNameOnly?: string, matchMode?: string, specificMatchOn?: string): Promise<{
        response: http.IncomingMessage;
        body: GeoEnrichResponse;
    }>;
}
export declare enum PropertyInformationServiceApiApiKeys {
}
export declare class PropertyInformationServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: PropertyInformationServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    getParcelBoundaryByAddress(address: string, accept?: string): Promise<{
        response: http.IncomingMessage;
        body: ParcelBoundary;
    }>;
    getParcelBoundaryByLocation(longitude: string, latitude: string, accept?: string): Promise<{
        response: http.IncomingMessage;
        body: ParcelBoundary;
    }>;
    getPropertyAttributesByAddress(address?: string, attributeFilter?: string): Promise<{
        response: http.IncomingMessage;
        body: PropertyInfoResponse;
    }>;
    getPropertyAttributesByAddressBatch(body?: PropertyInfoAddressRequest): Promise<{
        response: http.IncomingMessage;
        body: PropertyInfoResponses;
    }>;
}
export declare enum RisksServiceApiApiKeys {
}
export declare class RisksServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: RisksServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    getCrimeRiskByAddress(address: string, type?: string, includeGeometry?: string): Promise<{
        response: http.IncomingMessage;
        body: CrimeRiskResponse;
    }>;
    getCrimeRiskByAddressBatch(body?: CrimeRiskByAddressRequest): Promise<{
        response: http.IncomingMessage;
        body: CrimeRiskResponseList;
    }>;
    getCrimeRiskByLocation(longitude: string, latitude: string, type?: string, includeGeometry?: string): Promise<{
        response: http.IncomingMessage;
        body: CrimeRiskLocationResponse;
    }>;
    getCrimeRiskByLocationBatch(body?: CrimeRiskByLocationRequest): Promise<{
        response: http.IncomingMessage;
        body: CrimeRiskLocationResponseList;
    }>;
    getDistanceToFloodHazardByAddress(address: string, maxCandidates?: string, waterBodyType?: string, searchDistance?: string, searchDistanceUnit?: string): Promise<{
        response: http.IncomingMessage;
        body: WaterBodyResponse;
    }>;
    getDistanceToFloodHazardByAddressBatch(body?: DistanceToFloodHazardAddressRequest): Promise<{
        response: http.IncomingMessage;
        body: DistanceToFloodHazardResponse;
    }>;
    getDistanceToFloodHazardByLocation(longitude: string, latitude: string, maxCandidates?: string, waterBodyType?: string, searchDistance?: string, searchDistanceUnit?: string): Promise<{
        response: http.IncomingMessage;
        body: WaterBodyLocationResponse;
    }>;
    getDistanceToFloodHazardByLocationBatch(body?: DistanceToFloodHazardLocationRequest): Promise<{
        response: http.IncomingMessage;
        body: DistanceToFloodHazardLocationResponse;
    }>;
    getEarthquakeHistory(postCode: string, startDate?: string, endDate?: string, minMagnitude?: string, maxMagnitude?: string, maxCandidates?: string): Promise<{
        response: http.IncomingMessage;
        body: EarthquakeHistory;
    }>;
    getEarthquakeRiskByAddress(address: string, richterValue?: string, includeGeometry?: string): Promise<{
        response: http.IncomingMessage;
        body: EarthquakeRiskResponse;
    }>;
    getEarthquakeRiskByAddressBatch(body?: EarthquakeRiskByAddressRequest): Promise<{
        response: http.IncomingMessage;
        body: EarthquakeRiskResponseList;
    }>;
    getEarthquakeRiskByLocation(longitude: string, latitude: string, richterValue?: string, includeGeometry?: string): Promise<{
        response: http.IncomingMessage;
        body: EarthquakeRiskLocationResponse;
    }>;
    getEarthquakeRiskByLocationBatch(body?: EarthquakeRiskByLocationRequest): Promise<{
        response: http.IncomingMessage;
        body: EarthquakeRiskLocationResponseList;
    }>;
    getFireHistory(postCode: string, startDate?: string, endDate?: string, maxCandidates?: string): Promise<{
        response: http.IncomingMessage;
        body: FireHistory;
    }>;
    getFireRiskByAddress(address: string): Promise<{
        response: http.IncomingMessage;
        body: FireRiskResponse;
    }>;
    getFireRiskByAddressBatch(body?: FireRiskByAddressRequest): Promise<{
        response: http.IncomingMessage;
        body: FireRiskResponseList;
    }>;
    getFireRiskByLocation(longitude: string, latitude: string): Promise<{
        response: http.IncomingMessage;
        body: FireRiskLocationResponse;
    }>;
    getFireRiskByLocationBatch(body?: FireRiskByLocationRequest): Promise<{
        response: http.IncomingMessage;
        body: FireRiskLocationResponseList;
    }>;
    getFireStationByAddress(address: string, maxCandidates?: string, travelTime?: string, travelTimeUnit?: string, travelDistance?: string, travelDistanceUnit?: string, sortBy?: string, historicTrafficTimeBucket?: string): Promise<{
        response: http.IncomingMessage;
        body: FireStations;
    }>;
    getFireStationByLocation(longitude: string, latitude: string, maxCandidates?: string, travelTime?: string, travelTimeUnit?: string, travelDistance?: string, travelDistanceUnit?: string, sortBy?: string, historicTrafficTimeBucket?: string): Promise<{
        response: http.IncomingMessage;
        body: FireStationsLocation;
    }>;
    getFloodRiskByAddress(address: string, includeZoneDesc?: string, includeGeometry?: string): Promise<{
        response: http.IncomingMessage;
        body: FloodRiskResponse;
    }>;
    getFloodRiskByAddressBatch(body?: FloodRiskByAddressRequest): Promise<{
        response: http.IncomingMessage;
        body: FloodRiskResponseList;
    }>;
    getFloodRiskByLocation(longitude: string, latitude: string, includeZoneDesc?: string, includeGeometry?: string): Promise<{
        response: http.IncomingMessage;
        body: FloodRiskLocationResponse;
    }>;
    getFloodRiskByLocationBatch(body?: FloodRiskByLocationRequest): Promise<{
        response: http.IncomingMessage;
        body: FloodRiskLocationResponseList;
    }>;
}
export declare enum RoutingServiceApiApiKeys {
}
export declare class RoutingServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: RoutingServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    getRouteByAddress(startAddress: string, endAddress: string, db?: string, country?: string, intermediateAddresses?: string, oip?: string, destinationSrs?: string, optimizeBy?: string, returnDistance?: string, distanceUnit?: string, returnTime?: string, timeUnit?: string, language?: string, directionsStyle?: string, segmentGeometryStyle?: string, primaryNameOnly?: string, majorRoads?: string, historicTrafficTimeBucket?: string, returnDirectionGeometry?: string, useCvr?: string, looseningBarrierRestrictions?: string, vehicleType?: string, weight?: string, weightUnit?: string, height?: string, heightUnit?: string, length?: string, lengthUnit?: string, width?: string, widthUnit?: string, returnIntermediatePoints?: string): Promise<{
        response: http.IncomingMessage;
        body: GeoRouteResponse;
    }>;
    getRouteByLocation(startPoint: string, endPoint: string, db?: string, intermediatePoints?: string, oip?: string, destinationSrs?: string, optimizeBy?: string, returnDistance?: string, distanceUnit?: string, returnTime?: string, timeUnit?: string, language?: string, directionsStyle?: string, segmentGeometryStyle?: string, primaryNameOnly?: string, majorRoads?: string, historicTrafficTimeBucket?: string, returnDirectionGeometry?: string, useCvr?: string, looseningBarrierRestrictions?: string, vehicleType?: string, weight?: string, weightUnit?: string, height?: string, heightUnit?: string, length?: string, lengthUnit?: string, width?: string, widthUnit?: string, returnIntermediatePoints?: string): Promise<{
        response: http.IncomingMessage;
        body: GeoRouteResponse;
    }>;
    getTravelCostMatrixByAddress(startAddresses: string, endAddresses: string, db?: string, country?: string, optimizeBy?: string, returnDistance?: string, destinationSrs?: string, distanceUnit?: string, returnTime?: string, timeUnit?: string, majorRoads?: string, returnOptimalRoutesOnly?: string, historicTrafficTimeBucket?: string, useCvr?: string, looseningBarrierRestrictions?: string, vehicleType?: string, weight?: string, weightUnit?: string, height?: string, heightUnit?: string, length?: string, lengthUnit?: string, width?: string, widthUnit?: string): Promise<{
        response: http.IncomingMessage;
        body: TravelCostMatrixResponse;
    }>;
    getTravelCostMatrixByLocation(startPoints: string, endPoints: string, db?: string, optimizeBy?: string, returnDistance?: string, destinationSrs?: string, distanceUnit?: string, returnTime?: string, timeUnit?: string, majorRoads?: string, returnOptimalRoutesOnly?: string, historicTrafficTimeBucket?: string, useCvr?: string, looseningBarrierRestrictions?: string, vehicleType?: string, weight?: string, weightUnit?: string, height?: string, heightUnit?: string, length?: string, lengthUnit?: string, width?: string, widthUnit?: string): Promise<{
        response: http.IncomingMessage;
        body: TravelCostMatrixResponse;
    }>;
}
export declare enum SchoolsServiceApiApiKeys {
}
export declare class SchoolsServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: SchoolsServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    getSchoolsByAddress(address: string, edLevel?: string, schoolType?: string, schoolSubType?: string, gender?: string, assignedSchoolsOnly?: string, districtSchoolsOnly?: string, searchRadius?: string, searchRadiusUnit?: string, travelTime?: string, travelTimeUnit?: string, travelDistance?: string, travelDistanceUnit?: string, travelMode?: string, maxCandidates?: string): Promise<{
        response: http.IncomingMessage;
        body: SchoolsNearByResponse;
    }>;
}
export declare enum StreetsServiceApiApiKeys {
}
export declare class StreetsServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: StreetsServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    getIntersectionByAddress(address: string, roadClass?: string, driveTime?: string, driveTimeUnit?: string, searchRadius?: string, searchRadiusUnit?: string, historicSpeed?: string, maxCandidates?: string): Promise<{
        response: http.IncomingMessage;
        body: IntersectionResponse;
    }>;
    getIntersectionByLocation(longitude: string, latitude: string, roadClass?: string, driveTime?: string, driveTimeUnit?: string, searchRadius?: string, searchRadiusUnit?: string, historicSpeed?: string, maxCandidates?: string): Promise<{
        response: http.IncomingMessage;
        body: IntersectionResponse;
    }>;
    getNearestSpeedLimit(path: string): Promise<{
        response: http.IncomingMessage;
        body: SpeedLimit;
    }>;
}
export declare enum TelecommInfoServiceApiApiKeys {
}
export declare class TelecommInfoServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: TelecommInfoServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    getRateCenterByAddress(address: string, country?: string, areaCodeInfo?: string, level?: string): Promise<{
        response: http.IncomingMessage;
        body: RateCenterResponse;
    }>;
    getRateCenterByLocation(longitude: string, latitude: string, areaCodeInfo?: string, level?: string): Promise<{
        response: http.IncomingMessage;
        body: RateCenterResponse;
    }>;
}
export declare enum TimeZoneServiceApiApiKeys {
}
export declare class TimeZoneServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: TimeZoneServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    getBatchTimezoneByAddress(body?: TimezoneAddressRequest): Promise<{
        response: http.IncomingMessage;
        body: TimezoneResponse;
    }>;
    getBatchTimezoneByLocation(body?: TimezoneLocationRequest): Promise<{
        response: http.IncomingMessage;
        body: TimezoneLocationResponse;
    }>;
    getTimezoneByAddress(timestamp: string, address: string, matchMode?: string, country?: string): Promise<{
        response: http.IncomingMessage;
        body: Timezone;
    }>;
    getTimezoneByLocation(timestamp: string, longitude: string, latitude: string): Promise<{
        response: http.IncomingMessage;
        body: TimezoneLocation;
    }>;
}
export declare enum TypeaheadServiceApiApiKeys {
}
export declare class TypeaheadServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: TypeaheadServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    search(searchText: string, latitude?: string, longitude?: string, searchRadius?: string, searchRadiusUnit?: string, maxCandidates?: string, country?: string, matchOnAddressNumber?: string, autoDetectLocation?: string, ipAddress?: string, areaName1?: string, areaName3?: string, postCode?: string, returnAdminAreasOnly?: string, includeRangesDetails?: string, searchType?: string, searchOnAddressNumber?: string): Promise<{
        response: http.IncomingMessage;
        body: GeosearchLocations;
    }>;
}
export declare enum ZonesServiceApiApiKeys {
}
export declare class ZonesServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: ZonesServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    getBasicBoundaryByAddress(address: string, distance: string, country?: string, distanceUnit?: string, resolution?: string, responseSrs?: string): Promise<{
        response: http.IncomingMessage;
        body: BasicBoundaryAddress;
    }>;
    getBasicBoundaryByLocation(latitude: string, longitude: string, distance: string, distanceUnit?: string, resolution?: string, responseSrs?: string, srsName?: string): Promise<{
        response: http.IncomingMessage;
        body: BasicBoundary;
    }>;
    getPOIBoundaryByAddress(address: string, categoryCode?: string, sicCode?: string, naicsCode?: string): Promise<{
        response: http.IncomingMessage;
        body: PoiBoundary;
    }>;
    getPOIBoundaryByAddressBatch(body?: POIBoundaryAddressRequest): Promise<{
        response: http.IncomingMessage;
        body: POIBoundaryResponse;
    }>;
    getPOIBoundaryByLocation(latitude: string, longitude: string, categoryCode?: string, sicCode?: string, naicsCode?: string): Promise<{
        response: http.IncomingMessage;
        body: PoiBoundary;
    }>;
    getPOIBoundaryByLocationBatch(body?: POIBoundaryLocationRequest): Promise<{
        response: http.IncomingMessage;
        body: POIBoundaryResponse;
    }>;
    getTravelBoundaryByDistance(costs: string, point?: string, address?: string, costUnit?: string, db?: string, country?: string, maxOffroadDistance?: string, maxOffroadDistanceUnit?: string, destinationSrs?: string, majorRoads?: string, returnHoles?: string, returnIslands?: string, simplificationFactor?: string, bandingStyle?: string, historicTrafficTimeBucket?: string, defaultAmbientSpeed?: string, ambientSpeedUnit?: string): Promise<{
        response: http.IncomingMessage;
        body: TravelBoundaries;
    }>;
    getTravelBoundaryByTime(costs: string, point?: string, address?: string, costUnit?: string, db?: string, country?: string, maxOffroadDistance?: string, maxOffroadDistanceUnit?: string, destinationSrs?: string, majorRoads?: string, returnHoles?: string, returnIslands?: string, simplificationFactor?: string, bandingStyle?: string, historicTrafficTimeBucket?: string, defaultAmbientSpeed?: string, ambientSpeedUnit?: string): Promise<{
        response: http.IncomingMessage;
        body: TravelBoundaries;
    }>;
}
export declare enum _911PSAPServiceApiApiKeys {
}
export declare class _911PSAPServiceApi {
    protected basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: OAuth;
    protected oAuthCred: oAuthCredInfo;
    constructor(oAuthObj: oAuthCredInfo);
    set useQuerystring(value: boolean);
    setApiKey(key: _911PSAPServiceApiApiKeys, value: string): void;
    set accessToken(token: string);
    getAHJPlusPSAPByAddress(address: string): Promise<{
        response: http.IncomingMessage;
        body: AHJPlusPSAPResponse;
    }>;
    getAHJPlusPSAPByLocation(longitude: string, latitude: string): Promise<{
        response: http.IncomingMessage;
        body: AHJPlusPSAPResponse;
    }>;
    getPSAPByAddress(address: string): Promise<{
        response: http.IncomingMessage;
        body: PSAPResponse;
    }>;
    getPSAPByLocation(longitude: string, latitude: string): Promise<{
        response: http.IncomingMessage;
        body: PSAPResponse;
    }>;
}
