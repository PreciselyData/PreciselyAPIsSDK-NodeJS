"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports._911PSAPServiceApi = exports._911PSAPServiceApiApiKeys = exports.ZonesServiceApi = exports.ZonesServiceApiApiKeys = exports.TypeaheadServiceApi = exports.TypeaheadServiceApiApiKeys = exports.TimeZoneServiceApi = exports.TimeZoneServiceApiApiKeys = exports.TelecommInfoServiceApi = exports.TelecommInfoServiceApiApiKeys = exports.StreetsServiceApi = exports.StreetsServiceApiApiKeys = exports.SchoolsServiceApi = exports.SchoolsServiceApiApiKeys = exports.RoutingServiceApi = exports.RoutingServiceApiApiKeys = exports.RisksServiceApi = exports.RisksServiceApiApiKeys = exports.PropertyInformationServiceApi = exports.PropertyInformationServiceApiApiKeys = exports.PlacesServiceApi = exports.PlacesServiceApiApiKeys = exports.PhoneVerificationServiceApi = exports.PhoneVerificationServiceApiApiKeys = exports.NeighborhoodsServiceApi = exports.NeighborhoodsServiceApiApiKeys = exports.LocalTaxServiceApi = exports.LocalTaxServiceApiApiKeys = exports.IdentityProfilesServiceApi = exports.IdentityProfilesServiceApiApiKeys = exports.GeolocationServiceApi = exports.GeolocationServiceApiApiKeys = exports.GeocodeServiceApi = exports.GeocodeServiceApiApiKeys = exports.EmailVerificationServiceApi = exports.EmailVerificationServiceApiApiKeys = exports.DemographicsServiceApi = exports.DemographicsServiceApiApiKeys = exports.AddressesAPIServiceApi = exports.AddressesAPIServiceApiApiKeys = exports.AddressVerificationServiceApi = exports.AddressVerificationServiceApiApiKeys = exports.OAuth = exports.WaterBodyResponse = exports.WaterBodyLocationResponse = exports.WaterBody = exports.ValidateMailingAddressUSCANAPIResponse = exports.ValidateMailingAddressUSCANAPIRequest = exports.ValidateMailingAddressUSCANAPIOutput = exports.ValidateMailingAddressUSCANAPIOptions = exports.ValidateMailingAddressUSCANAPIInputRow = exports.ValidateMailingAddressUSCANAPIInput = exports.ValidateMailingAddressResponse = exports.ValidateMailingAddressRequest = exports.ValidateMailingAddressProResponse = exports.ValidateMailingAddressProRequest = exports.ValidateMailingAddressProOutput = exports.ValidateMailingAddressProOptions = exports.ValidateMailingAddressProInputRow = exports.ValidateMailingAddressProInput = exports.ValidateMailingAddressPremiumResponse = exports.ValidateMailingAddressPremiumRequest = exports.ValidateMailingAddressPremiumOutput = exports.ValidateMailingAddressPremiumOptions = exports.ValidateMailingAddressPremiumInputRow = exports.ValidateMailingAddressPremiumInput = exports.ValidateMailingAddressOutput = exports.ValidateMailingAddressOptions = exports.ValidateMailingAddressInputRowUserFields = exports.ValidateMailingAddressInputRow = exports.ValidateMailingAddressInput = exports.ValidateEmailAddressOutput = exports.ValidateEmailAddressOptions = exports.ValidateEmailAddressInputRow = exports.ValidateEmailAddressInput = exports.ValidateEmailAddressAPIResponse = exports.ValidateEmailAddressAPIRequest = exports.UseTaxRate = exports.UseTax = exports.Url = exports.Unit = exports.TypeaheadUnit = exports.TypeaheadRange = exports.Type = exports.TravelCostMatrixResponse = exports.TravelBoundary = exports.TravelBoundaries = exports.Topic = exports.TimezoneResponse = exports.TimezoneLocationResponse = exports.TimezoneLocationRequest = exports.TimezoneLocation = exports.TimezoneAddressRequest = exports.Timezone = exports.Time = exports.TaxState = exports.TaxResponses = exports.TaxResponse = exports.TaxRateResponses = exports.TaxRateResponse = exports.TaxRateLocationResponses = exports.TaxRateLocationRequest = exports.TaxRateBatchResponse = exports.TaxRateBatchLocationResponse = exports.TaxRateAddressRequest = exports.TaxRateAddress = exports.TaxPlace = exports.TaxLocationResponses = exports.TaxLocationRequest = exports.TaxLocationPreferences = exports.TaxJurisdiction = exports.TaxExemption = exports.TaxDistrictResponseList = exports.TaxDistrictResponse = exports.TaxCounty = exports.TaxBatchResponse = exports.TaxBatchLocationResponse = exports.TaxAddressRequest = exports.TaxAddress = exports.SupportLevel = exports.SupplyAndDemandTheme = exports.StudentEthnicity = exports.Status = exports.StartEndPoint = exports.Start = exports.SpeedRoad = exports.SpeedLimit = exports.SpecialPurposeDistrictTaxRate = exports.SpecialPurposeDistrictTax = exports.SpecialPurposeDistrict = exports.SiteDetails = exports.SicMetadata = exports.Sic = exports.ShoreLineDistance = exports.SegmentationThemes = exports.Segmentation = exports.SchoolsNearByResponse = exports.SchoolRanking = exports.SchoolProfile = exports.SchoolDistrict = exports.School = exports.SalesVolume = exports.SalesTaxRate = exports.SalesTax = exports.RouteGeometry = exports.RouteDirections = exports.RouteDirection = exports.RouteDelivery = exports.RouteBoundary = exports.RoofType = exports.Road = exports.RiskAddress = exports.Risk = exports.ReverseGeocodeRequest = exports.ReturnFieldsDescriptor = exports.RateCenterResponse = exports.Rate = exports.RangeVariableV2 = exports.RangeVariable = exports.RaceTheme = exports.RaceAndEthnicityTheme = exports.PurchasingBehaviorTheme = exports.Proxy = exports.PropertyInfoResponses = exports.PropertyInfoResponse = exports.PropertyInfoPreferences = exports.PropertyInfoAddressRequest = exports.PropertyAttributes = exports.Properties = exports.Profiles = exports.Profile = exports.PrimaryZone = exports.Preferences = exports.PreferencTimeZone = exports.PopulationTheme = exports.PolygonGeometry = exports.Pois = exports.Points = exports.PoiCountRequest = exports.PoiCount = exports.PoiContactDetails = exports.PoiClassification = exports.PoiBoundaryPreferences = exports.PoiBoundary = exports.Poi = exports.PlaceLocationName = exports.PlaceLocation = exports.PlaceByLocationsLocation = exports.PlaceByLocations = exports.Photo = exports.PhoneVerification = exports.PbKey = exports.ParentBusiness = exports.ParcelBoundary = exports.Parcel = exports.PSAPResponse = exports.POIPlaces = exports.POIByGeometryRequest = exports.POIBoundaryResponse = exports.POIBoundaryLocations = exports.POIBoundaryLocationRequest = exports.POIBoundaryAddressRequest = exports.PBKeyResponseList = exports.PBKeyResponse = exports.PBKeyAddressRequest = exports.OutputParameter = exports.OrganizationType = exports.Operation = exports.Network = exports.Mcd = exports.Matrix = exports.MatchedAddress = exports.Match = exports.MaritalStatusTheme = exports.Magnitude = exports.LocationTime = exports.Location = exports.LifeStyleTheme = exports.LatLongFields = exports.LandUse = exports.Keys = exports.KeyLookupRequest = exports.Ipd = exports.IpInfo = exports.IntersectionResponse = exports.Intersection = exports.IntermediatePoints = exports.Interest = exports.InputParameter = exports.IndividualValueVariableV2 = exports.IndividualValueVariable = exports.IndexVariable = exports.IncomeThemeV2 = exports.IncomeTheme = exports.IdentityResponse = exports.IdentityName = exports.IdentityDetail = exports.IdentityDemographics = exports.Identity = exports.IPDTaxJurisdiction = exports.IPDTaxByAddressBatchRequest = exports.HousingTheme = exports.HouseholdsTheme = exports.HouseholdSizeTheme = exports.HeatingType = exports.HealthTheme = exports.Grid = exports.Greatschools = exports.GradeLevelsTaught = exports.GlobalUltimateBusiness = exports.GetPostalCodesAPIResponse = exports.GetPostalCodesAPIRequest = exports.GetPostalCodesAPIOutput = exports.GetPostalCodesAPIOptions = exports.GetPostalCodesAPIInputRow = exports.GetPostalCodesAPIInput = exports.GetCityStateProvinceAPIResponse = exports.GetCityStateProvinceAPIRequest = exports.GetCityStateProvinceAPIOutput = exports.GetCityStateProvinceAPIOptions = exports.GetCityStateProvinceAPIInputRow = exports.GetCityStateProvinceAPIInput = exports.GeosearchLocations = exports.GeosearchLocation = exports.Geometry = exports.GeocodeServiceResponseList = exports.GeocodeServiceResponse = exports.GeocodeRequestAddress = exports.GeocodeRequest = exports.GeocodePreferences = exports.GeocodeCustomPreferences = exports.GeocodeCapabilitiesResponse = exports.GeocodeAddress = exports.GeoZoneGeometry = exports.GeoTaxRateLocations = exports.GeoTaxLocations = exports.GeoRouteResponse = exports.GeoRiskLocations = exports.GeoRiskGeometry = exports.GeoRiskCrimeTheme = exports.GeoRiskBoundaries = exports.GeoPostGeometry = exports.GeoPos = exports.GeoLocationState = exports.GeoLocationPlace = exports.GeoLocationIpAddr = exports.GeoLocationFixedLineCountry = exports.GeoLocationFixedLine = exports.GeoLocationCountry = exports.GeoLocationAccessPoint = exports.GeoEnrichResponse = exports.GeoEnrichMetadataResponse = exports.GenderTheme = exports.FreeOrReducedPriceLunches = exports.FloodZone = exports.FloodRiskResponseList = exports.FloodRiskResponse = exports.FloodRiskPreferences = exports.FloodRiskLocationResponseList = exports.FloodRiskLocationResponse = exports.FloodRiskByLocationRequest = exports.FloodRiskByAddressRequest = exports.FloodHazardPreferences = exports.FloodBoundary = exports.FireStationsLocation = exports.FireStations = exports.FireStationContactDetails = exports.FireStation = exports.FireShed = exports.FireRiskResponseList = exports.FireRiskResponse = exports.FireRiskLocationResponseList = exports.FireRiskLocationResponse = exports.FireRiskByLocationRequest = exports.FireRiskByAddressRequest = exports.FireHistory = exports.FireEventsResponse = exports.FireEvent = exports.FireDepartmentContactDetails = exports.FireDepartment = exports.FinancialProductsTheme = exports.FieldsMatching = exports.FieldV2 = exports.Field = exports.ExpenditureTheme = exports.EventsCount = exports.EthnicityTheme = exports.ErrorInfo = exports.ErrorCode = exports.End = exports.EmploymentTheme = exports.Employment = exports.EmployeeCount = exports.Email = exports.EducationalAttainmentTheme = exports.EducationTheme = exports.Education = exports.EarthquakeRiskResponseList = exports.EarthquakeRiskResponse = exports.EarthquakeRiskPreferences = exports.EarthquakeRiskLocationResponseList = exports.EarthquakeRiskLocationResponse = exports.EarthquakeRiskByLocationRequest = exports.EarthquakeRiskByAddressRequest = exports.EarthquakeLocation = exports.EarthquakeHistory = exports.EarthquakeEventsResponse = exports.EarthquakeEvent = exports.DomesticUltimateBusiness = exports.DistrictType = exports.DistanceToFloodHazardResponse = exports.DistanceToFloodHazardLocationResponse = exports.DistanceToFloodHazardLocationRequest = exports.DistanceToFloodHazardAddressRequest = exports.DistanceToBorder = exports.Distance = exports.DirectionGeometry = exports.Dictionary = exports.DeviceStatusNetwork = exports.Depth = exports.DemographicsThemesV2 = exports.DemographicsThemes = exports.DemographicsAdvancedRequest = exports.DemographicsAdvancedPreferences = exports.Demographics = exports.DateTimeEarthQuake = exports.CustomPreferences = exports.CustomObjectMember = exports.CustomObject = exports.Crs = exports.CrimeRiskResponseList = exports.CrimeRiskResponse = exports.CrimeRiskPreferences = exports.CrimeRiskLocationResponseList = exports.CrimeRiskLocationResponse = exports.CrimeRiskByLocationRequest = exports.CrimeRiskByAddressRequest = exports.CrimeIndexTheme = exports.CrimeBoundary = exports.Coverage = exports.County = exports.CountrySupport = exports.Costs = exports.Cost = exports.CoolingType = exports.ContactPerson = exports.ContactDetails = exports.Construction = exports.ConsistencyCode = exports.ConfiguredDictionaryResponse = exports.CommuterPatternsTheme = exports.Community = exports.CommonState = exports.CommonGeometry = exports.CommonAddress = exports.City = exports.ChannelPreferencesTheme = exports.Center = exports.Census = exports.Cbsa = exports.CategoryMetadata = exports.Category = exports.CarrierRouteResponseList = exports.CarrierRouteResponse = exports.CarrierRoutePreference = exports.CarrierRouteBoundaries = exports.CarrierRouteAddressRequest = exports.Carrier = exports.CandidateRangeUnit = exports.CandidateRange = exports.Candidate = exports.CaExemptions = exports.BusinessId = exports.BuildingSqftSource = exports.BufferRelation = exports.BoundaryPoint = exports.BoundaryBuffer = exports.Boundary = exports.Boundaries = exports.BasicBoundaryAddress = exports.BasicBoundary = exports.BaseFloodElevation = exports.AutomobileTheme = exports.AttitudesAndMotivationTheme = exports.AssetsAndWealthTheme = exports.AreaCodeInfo = exports.Area = exports.AgeTheme = exports.Age = exports.AddressesResponse = exports.AddressesPreferences = exports.AddressesDTO = exports.AddressesCount = exports.AddressesByBoundaryRequest = exports.AddressType = exports.AddressTime = exports.Address = exports.Accuracy = exports.AHJmailingAddress = exports.AHJPlusPSAPResponse = exports.AHJList = exports.AHJ = exports.oAuthCredInfo = void 0;
var request = require("request");
var moment = require("moment");
var Promise = require("bluebird");
var defaultBasePath = 'https://api.precisely.com';
var oAuthCredInfo = (function () {
    function oAuthCredInfo() {
    }
    return oAuthCredInfo;
}());
exports.oAuthCredInfo = oAuthCredInfo;
var AHJ = (function () {
    function AHJ() {
    }
    return AHJ;
}());
exports.AHJ = AHJ;
var AHJList = (function () {
    function AHJList() {
    }
    return AHJList;
}());
exports.AHJList = AHJList;
var AHJPlusPSAPResponse = (function () {
    function AHJPlusPSAPResponse() {
    }
    return AHJPlusPSAPResponse;
}());
exports.AHJPlusPSAPResponse = AHJPlusPSAPResponse;
var AHJmailingAddress = (function () {
    function AHJmailingAddress() {
    }
    return AHJmailingAddress;
}());
exports.AHJmailingAddress = AHJmailingAddress;
var Accuracy = (function () {
    function Accuracy() {
    }
    return Accuracy;
}());
exports.Accuracy = Accuracy;
var Address = (function () {
    function Address() {
    }
    return Address;
}());
exports.Address = Address;
var AddressTime = (function () {
    function AddressTime() {
    }
    return AddressTime;
}());
exports.AddressTime = AddressTime;
var AddressType = (function () {
    function AddressType() {
    }
    return AddressType;
}());
exports.AddressType = AddressType;
var AddressesByBoundaryRequest = (function () {
    function AddressesByBoundaryRequest() {
    }
    return AddressesByBoundaryRequest;
}());
exports.AddressesByBoundaryRequest = AddressesByBoundaryRequest;
var AddressesCount = (function () {
    function AddressesCount() {
    }
    return AddressesCount;
}());
exports.AddressesCount = AddressesCount;
var AddressesDTO = (function () {
    function AddressesDTO() {
    }
    return AddressesDTO;
}());
exports.AddressesDTO = AddressesDTO;
var AddressesPreferences = (function () {
    function AddressesPreferences() {
    }
    return AddressesPreferences;
}());
exports.AddressesPreferences = AddressesPreferences;
var AddressesResponse = (function () {
    function AddressesResponse() {
    }
    return AddressesResponse;
}());
exports.AddressesResponse = AddressesResponse;
var Age = (function () {
    function Age() {
    }
    return Age;
}());
exports.Age = Age;
var AgeTheme = (function () {
    function AgeTheme() {
    }
    return AgeTheme;
}());
exports.AgeTheme = AgeTheme;
var Area = (function () {
    function Area() {
    }
    return Area;
}());
exports.Area = Area;
var AreaCodeInfo = (function () {
    function AreaCodeInfo() {
    }
    return AreaCodeInfo;
}());
exports.AreaCodeInfo = AreaCodeInfo;
var AssetsAndWealthTheme = (function () {
    function AssetsAndWealthTheme() {
    }
    return AssetsAndWealthTheme;
}());
exports.AssetsAndWealthTheme = AssetsAndWealthTheme;
var AttitudesAndMotivationTheme = (function () {
    function AttitudesAndMotivationTheme() {
    }
    return AttitudesAndMotivationTheme;
}());
exports.AttitudesAndMotivationTheme = AttitudesAndMotivationTheme;
var AutomobileTheme = (function () {
    function AutomobileTheme() {
    }
    return AutomobileTheme;
}());
exports.AutomobileTheme = AutomobileTheme;
var BaseFloodElevation = (function () {
    function BaseFloodElevation() {
    }
    return BaseFloodElevation;
}());
exports.BaseFloodElevation = BaseFloodElevation;
var BasicBoundary = (function () {
    function BasicBoundary() {
    }
    return BasicBoundary;
}());
exports.BasicBoundary = BasicBoundary;
var BasicBoundaryAddress = (function () {
    function BasicBoundaryAddress() {
    }
    return BasicBoundaryAddress;
}());
exports.BasicBoundaryAddress = BasicBoundaryAddress;
var Boundaries = (function () {
    function Boundaries() {
    }
    return Boundaries;
}());
exports.Boundaries = Boundaries;
var Boundary = (function () {
    function Boundary() {
    }
    return Boundary;
}());
exports.Boundary = Boundary;
var BoundaryBuffer = (function () {
    function BoundaryBuffer() {
    }
    return BoundaryBuffer;
}());
exports.BoundaryBuffer = BoundaryBuffer;
var BoundaryPoint = (function () {
    function BoundaryPoint() {
    }
    return BoundaryPoint;
}());
exports.BoundaryPoint = BoundaryPoint;
var BufferRelation = (function () {
    function BufferRelation() {
    }
    return BufferRelation;
}());
exports.BufferRelation = BufferRelation;
var BuildingSqftSource = (function () {
    function BuildingSqftSource() {
    }
    return BuildingSqftSource;
}());
exports.BuildingSqftSource = BuildingSqftSource;
var BusinessId = (function () {
    function BusinessId() {
    }
    return BusinessId;
}());
exports.BusinessId = BusinessId;
var CaExemptions = (function () {
    function CaExemptions() {
    }
    return CaExemptions;
}());
exports.CaExemptions = CaExemptions;
var Candidate = (function () {
    function Candidate() {
    }
    return Candidate;
}());
exports.Candidate = Candidate;
var CandidateRange = (function () {
    function CandidateRange() {
    }
    return CandidateRange;
}());
exports.CandidateRange = CandidateRange;
(function (CandidateRange) {
    var SideEnum;
    (function (SideEnum) {
        SideEnum[SideEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
        SideEnum[SideEnum["LEFT"] = 'LEFT'] = "LEFT";
        SideEnum[SideEnum["RIGHT"] = 'RIGHT'] = "RIGHT";
        SideEnum[SideEnum["BOTH"] = 'BOTH'] = "BOTH";
    })(SideEnum = CandidateRange.SideEnum || (CandidateRange.SideEnum = {}));
    var OddEvenIndicatorEnum;
    (function (OddEvenIndicatorEnum) {
        OddEvenIndicatorEnum[OddEvenIndicatorEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
        OddEvenIndicatorEnum[OddEvenIndicatorEnum["BOTH"] = 'BOTH'] = "BOTH";
        OddEvenIndicatorEnum[OddEvenIndicatorEnum["ODD"] = 'ODD'] = "ODD";
        OddEvenIndicatorEnum[OddEvenIndicatorEnum["EVEN"] = 'EVEN'] = "EVEN";
        OddEvenIndicatorEnum[OddEvenIndicatorEnum["IRREGULAR"] = 'IRREGULAR'] = "IRREGULAR";
    })(OddEvenIndicatorEnum = CandidateRange.OddEvenIndicatorEnum || (CandidateRange.OddEvenIndicatorEnum = {}));
})(CandidateRange = exports.CandidateRange || (exports.CandidateRange = {}));
exports.CandidateRange = CandidateRange;
var CandidateRangeUnit = (function () {
    function CandidateRangeUnit() {
    }
    return CandidateRangeUnit;
}());
exports.CandidateRangeUnit = CandidateRangeUnit;
var Carrier = (function () {
    function Carrier() {
    }
    return Carrier;
}());
exports.Carrier = Carrier;
var CarrierRouteAddressRequest = (function () {
    function CarrierRouteAddressRequest() {
    }
    return CarrierRouteAddressRequest;
}());
exports.CarrierRouteAddressRequest = CarrierRouteAddressRequest;
var CarrierRouteBoundaries = (function () {
    function CarrierRouteBoundaries() {
    }
    return CarrierRouteBoundaries;
}());
exports.CarrierRouteBoundaries = CarrierRouteBoundaries;
var CarrierRoutePreference = (function () {
    function CarrierRoutePreference() {
    }
    return CarrierRoutePreference;
}());
exports.CarrierRoutePreference = CarrierRoutePreference;
var CarrierRouteResponse = (function () {
    function CarrierRouteResponse() {
    }
    return CarrierRouteResponse;
}());
exports.CarrierRouteResponse = CarrierRouteResponse;
var CarrierRouteResponseList = (function () {
    function CarrierRouteResponseList() {
    }
    return CarrierRouteResponseList;
}());
exports.CarrierRouteResponseList = CarrierRouteResponseList;
var Category = (function () {
    function Category() {
    }
    return Category;
}());
exports.Category = Category;
var CategoryMetadata = (function () {
    function CategoryMetadata() {
    }
    return CategoryMetadata;
}());
exports.CategoryMetadata = CategoryMetadata;
var Cbsa = (function () {
    function Cbsa() {
    }
    return Cbsa;
}());
exports.Cbsa = Cbsa;
var Census = (function () {
    function Census() {
    }
    return Census;
}());
exports.Census = Census;
var Center = (function () {
    function Center() {
    }
    return Center;
}());
exports.Center = Center;
var ChannelPreferencesTheme = (function () {
    function ChannelPreferencesTheme() {
    }
    return ChannelPreferencesTheme;
}());
exports.ChannelPreferencesTheme = ChannelPreferencesTheme;
var City = (function () {
    function City() {
    }
    return City;
}());
exports.City = City;
var CommonAddress = (function () {
    function CommonAddress() {
    }
    return CommonAddress;
}());
exports.CommonAddress = CommonAddress;
var CommonGeometry = (function () {
    function CommonGeometry() {
    }
    return CommonGeometry;
}());
exports.CommonGeometry = CommonGeometry;
var CommonState = (function () {
    function CommonState() {
    }
    return CommonState;
}());
exports.CommonState = CommonState;
var Community = (function () {
    function Community() {
    }
    return Community;
}());
exports.Community = Community;
var CommuterPatternsTheme = (function () {
    function CommuterPatternsTheme() {
    }
    return CommuterPatternsTheme;
}());
exports.CommuterPatternsTheme = CommuterPatternsTheme;
var ConfiguredDictionaryResponse = (function () {
    function ConfiguredDictionaryResponse() {
    }
    return ConfiguredDictionaryResponse;
}());
exports.ConfiguredDictionaryResponse = ConfiguredDictionaryResponse;
var ConsistencyCode = (function () {
    function ConsistencyCode() {
    }
    return ConsistencyCode;
}());
exports.ConsistencyCode = ConsistencyCode;
var Construction = (function () {
    function Construction() {
    }
    return Construction;
}());
exports.Construction = Construction;
var ContactDetails = (function () {
    function ContactDetails() {
    }
    return ContactDetails;
}());
exports.ContactDetails = ContactDetails;
var ContactPerson = (function () {
    function ContactPerson() {
    }
    return ContactPerson;
}());
exports.ContactPerson = ContactPerson;
var CoolingType = (function () {
    function CoolingType() {
    }
    return CoolingType;
}());
exports.CoolingType = CoolingType;
var Cost = (function () {
    function Cost() {
    }
    return Cost;
}());
exports.Cost = Cost;
var Costs = (function (_super) {
    __extends(Costs, _super);
    function Costs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Costs;
}(Array));
exports.Costs = Costs;
var CountrySupport = (function () {
    function CountrySupport() {
    }
    return CountrySupport;
}());
exports.CountrySupport = CountrySupport;
var County = (function () {
    function County() {
    }
    return County;
}());
exports.County = County;
var Coverage = (function () {
    function Coverage() {
    }
    return Coverage;
}());
exports.Coverage = Coverage;
var CrimeBoundary = (function () {
    function CrimeBoundary() {
    }
    return CrimeBoundary;
}());
exports.CrimeBoundary = CrimeBoundary;
var CrimeIndexTheme = (function () {
    function CrimeIndexTheme() {
    }
    return CrimeIndexTheme;
}());
exports.CrimeIndexTheme = CrimeIndexTheme;
var CrimeRiskByAddressRequest = (function () {
    function CrimeRiskByAddressRequest() {
    }
    return CrimeRiskByAddressRequest;
}());
exports.CrimeRiskByAddressRequest = CrimeRiskByAddressRequest;
var CrimeRiskByLocationRequest = (function () {
    function CrimeRiskByLocationRequest() {
    }
    return CrimeRiskByLocationRequest;
}());
exports.CrimeRiskByLocationRequest = CrimeRiskByLocationRequest;
var CrimeRiskLocationResponse = (function () {
    function CrimeRiskLocationResponse() {
    }
    return CrimeRiskLocationResponse;
}());
exports.CrimeRiskLocationResponse = CrimeRiskLocationResponse;
var CrimeRiskLocationResponseList = (function () {
    function CrimeRiskLocationResponseList() {
    }
    return CrimeRiskLocationResponseList;
}());
exports.CrimeRiskLocationResponseList = CrimeRiskLocationResponseList;
var CrimeRiskPreferences = (function () {
    function CrimeRiskPreferences() {
    }
    return CrimeRiskPreferences;
}());
exports.CrimeRiskPreferences = CrimeRiskPreferences;
var CrimeRiskResponse = (function () {
    function CrimeRiskResponse() {
    }
    return CrimeRiskResponse;
}());
exports.CrimeRiskResponse = CrimeRiskResponse;
var CrimeRiskResponseList = (function () {
    function CrimeRiskResponseList() {
    }
    return CrimeRiskResponseList;
}());
exports.CrimeRiskResponseList = CrimeRiskResponseList;
var Crs = (function () {
    function Crs() {
    }
    return Crs;
}());
exports.Crs = Crs;
var CustomObject = (function () {
    function CustomObject() {
    }
    return CustomObject;
}());
exports.CustomObject = CustomObject;
var CustomObjectMember = (function () {
    function CustomObjectMember() {
    }
    return CustomObjectMember;
}());
exports.CustomObjectMember = CustomObjectMember;
var CustomPreferences = (function () {
    function CustomPreferences() {
    }
    return CustomPreferences;
}());
exports.CustomPreferences = CustomPreferences;
var DateTimeEarthQuake = (function () {
    function DateTimeEarthQuake() {
    }
    return DateTimeEarthQuake;
}());
exports.DateTimeEarthQuake = DateTimeEarthQuake;
var Demographics = (function () {
    function Demographics() {
    }
    return Demographics;
}());
exports.Demographics = Demographics;
var DemographicsAdvancedPreferences = (function () {
    function DemographicsAdvancedPreferences() {
    }
    return DemographicsAdvancedPreferences;
}());
exports.DemographicsAdvancedPreferences = DemographicsAdvancedPreferences;
var DemographicsAdvancedRequest = (function () {
    function DemographicsAdvancedRequest() {
    }
    return DemographicsAdvancedRequest;
}());
exports.DemographicsAdvancedRequest = DemographicsAdvancedRequest;
var DemographicsThemes = (function () {
    function DemographicsThemes() {
    }
    return DemographicsThemes;
}());
exports.DemographicsThemes = DemographicsThemes;
var DemographicsThemesV2 = (function () {
    function DemographicsThemesV2() {
    }
    return DemographicsThemesV2;
}());
exports.DemographicsThemesV2 = DemographicsThemesV2;
var Depth = (function () {
    function Depth() {
    }
    return Depth;
}());
exports.Depth = Depth;
var DeviceStatusNetwork = (function () {
    function DeviceStatusNetwork() {
    }
    return DeviceStatusNetwork;
}());
exports.DeviceStatusNetwork = DeviceStatusNetwork;
var Dictionary = (function () {
    function Dictionary() {
    }
    return Dictionary;
}());
exports.Dictionary = Dictionary;
var DirectionGeometry = (function () {
    function DirectionGeometry() {
    }
    return DirectionGeometry;
}());
exports.DirectionGeometry = DirectionGeometry;
var Distance = (function () {
    function Distance() {
    }
    return Distance;
}());
exports.Distance = Distance;
var DistanceToBorder = (function () {
    function DistanceToBorder() {
    }
    return DistanceToBorder;
}());
exports.DistanceToBorder = DistanceToBorder;
var DistanceToFloodHazardAddressRequest = (function () {
    function DistanceToFloodHazardAddressRequest() {
    }
    return DistanceToFloodHazardAddressRequest;
}());
exports.DistanceToFloodHazardAddressRequest = DistanceToFloodHazardAddressRequest;
var DistanceToFloodHazardLocationRequest = (function () {
    function DistanceToFloodHazardLocationRequest() {
    }
    return DistanceToFloodHazardLocationRequest;
}());
exports.DistanceToFloodHazardLocationRequest = DistanceToFloodHazardLocationRequest;
var DistanceToFloodHazardLocationResponse = (function () {
    function DistanceToFloodHazardLocationResponse() {
    }
    return DistanceToFloodHazardLocationResponse;
}());
exports.DistanceToFloodHazardLocationResponse = DistanceToFloodHazardLocationResponse;
var DistanceToFloodHazardResponse = (function () {
    function DistanceToFloodHazardResponse() {
    }
    return DistanceToFloodHazardResponse;
}());
exports.DistanceToFloodHazardResponse = DistanceToFloodHazardResponse;
var DistrictType = (function () {
    function DistrictType() {
    }
    return DistrictType;
}());
exports.DistrictType = DistrictType;
var DomesticUltimateBusiness = (function () {
    function DomesticUltimateBusiness() {
    }
    return DomesticUltimateBusiness;
}());
exports.DomesticUltimateBusiness = DomesticUltimateBusiness;
var EarthquakeEvent = (function () {
    function EarthquakeEvent() {
    }
    return EarthquakeEvent;
}());
exports.EarthquakeEvent = EarthquakeEvent;
var EarthquakeEventsResponse = (function () {
    function EarthquakeEventsResponse() {
    }
    return EarthquakeEventsResponse;
}());
exports.EarthquakeEventsResponse = EarthquakeEventsResponse;
var EarthquakeHistory = (function () {
    function EarthquakeHistory() {
    }
    return EarthquakeHistory;
}());
exports.EarthquakeHistory = EarthquakeHistory;
var EarthquakeLocation = (function () {
    function EarthquakeLocation() {
    }
    return EarthquakeLocation;
}());
exports.EarthquakeLocation = EarthquakeLocation;
var EarthquakeRiskByAddressRequest = (function () {
    function EarthquakeRiskByAddressRequest() {
    }
    return EarthquakeRiskByAddressRequest;
}());
exports.EarthquakeRiskByAddressRequest = EarthquakeRiskByAddressRequest;
var EarthquakeRiskByLocationRequest = (function () {
    function EarthquakeRiskByLocationRequest() {
    }
    return EarthquakeRiskByLocationRequest;
}());
exports.EarthquakeRiskByLocationRequest = EarthquakeRiskByLocationRequest;
var EarthquakeRiskLocationResponse = (function () {
    function EarthquakeRiskLocationResponse() {
    }
    return EarthquakeRiskLocationResponse;
}());
exports.EarthquakeRiskLocationResponse = EarthquakeRiskLocationResponse;
var EarthquakeRiskLocationResponseList = (function () {
    function EarthquakeRiskLocationResponseList() {
    }
    return EarthquakeRiskLocationResponseList;
}());
exports.EarthquakeRiskLocationResponseList = EarthquakeRiskLocationResponseList;
var EarthquakeRiskPreferences = (function () {
    function EarthquakeRiskPreferences() {
    }
    return EarthquakeRiskPreferences;
}());
exports.EarthquakeRiskPreferences = EarthquakeRiskPreferences;
var EarthquakeRiskResponse = (function () {
    function EarthquakeRiskResponse() {
    }
    return EarthquakeRiskResponse;
}());
exports.EarthquakeRiskResponse = EarthquakeRiskResponse;
var EarthquakeRiskResponseList = (function () {
    function EarthquakeRiskResponseList() {
    }
    return EarthquakeRiskResponseList;
}());
exports.EarthquakeRiskResponseList = EarthquakeRiskResponseList;
var Education = (function () {
    function Education() {
    }
    return Education;
}());
exports.Education = Education;
var EducationTheme = (function () {
    function EducationTheme() {
    }
    return EducationTheme;
}());
exports.EducationTheme = EducationTheme;
var EducationalAttainmentTheme = (function () {
    function EducationalAttainmentTheme() {
    }
    return EducationalAttainmentTheme;
}());
exports.EducationalAttainmentTheme = EducationalAttainmentTheme;
var Email = (function () {
    function Email() {
    }
    return Email;
}());
exports.Email = Email;
var EmployeeCount = (function () {
    function EmployeeCount() {
    }
    return EmployeeCount;
}());
exports.EmployeeCount = EmployeeCount;
var Employment = (function () {
    function Employment() {
    }
    return Employment;
}());
exports.Employment = Employment;
var EmploymentTheme = (function () {
    function EmploymentTheme() {
    }
    return EmploymentTheme;
}());
exports.EmploymentTheme = EmploymentTheme;
var End = (function () {
    function End() {
    }
    return End;
}());
exports.End = End;
var ErrorCode = (function () {
    function ErrorCode() {
    }
    return ErrorCode;
}());
exports.ErrorCode = ErrorCode;
var ErrorInfo = (function () {
    function ErrorInfo() {
    }
    return ErrorInfo;
}());
exports.ErrorInfo = ErrorInfo;
var EthnicityTheme = (function () {
    function EthnicityTheme() {
    }
    return EthnicityTheme;
}());
exports.EthnicityTheme = EthnicityTheme;
var EventsCount = (function () {
    function EventsCount() {
    }
    return EventsCount;
}());
exports.EventsCount = EventsCount;
var ExpenditureTheme = (function () {
    function ExpenditureTheme() {
    }
    return ExpenditureTheme;
}());
exports.ExpenditureTheme = ExpenditureTheme;
var Field = (function () {
    function Field() {
    }
    return Field;
}());
exports.Field = Field;
var FieldV2 = (function () {
    function FieldV2() {
    }
    return FieldV2;
}());
exports.FieldV2 = FieldV2;
var FieldsMatching = (function () {
    function FieldsMatching() {
    }
    return FieldsMatching;
}());
exports.FieldsMatching = FieldsMatching;
var FinancialProductsTheme = (function () {
    function FinancialProductsTheme() {
    }
    return FinancialProductsTheme;
}());
exports.FinancialProductsTheme = FinancialProductsTheme;
var FireDepartment = (function () {
    function FireDepartment() {
    }
    return FireDepartment;
}());
exports.FireDepartment = FireDepartment;
var FireDepartmentContactDetails = (function () {
    function FireDepartmentContactDetails() {
    }
    return FireDepartmentContactDetails;
}());
exports.FireDepartmentContactDetails = FireDepartmentContactDetails;
var FireEvent = (function () {
    function FireEvent() {
    }
    return FireEvent;
}());
exports.FireEvent = FireEvent;
var FireEventsResponse = (function () {
    function FireEventsResponse() {
    }
    return FireEventsResponse;
}());
exports.FireEventsResponse = FireEventsResponse;
var FireHistory = (function () {
    function FireHistory() {
    }
    return FireHistory;
}());
exports.FireHistory = FireHistory;
var FireRiskByAddressRequest = (function () {
    function FireRiskByAddressRequest() {
    }
    return FireRiskByAddressRequest;
}());
exports.FireRiskByAddressRequest = FireRiskByAddressRequest;
var FireRiskByLocationRequest = (function () {
    function FireRiskByLocationRequest() {
    }
    return FireRiskByLocationRequest;
}());
exports.FireRiskByLocationRequest = FireRiskByLocationRequest;
var FireRiskLocationResponse = (function () {
    function FireRiskLocationResponse() {
    }
    return FireRiskLocationResponse;
}());
exports.FireRiskLocationResponse = FireRiskLocationResponse;
var FireRiskLocationResponseList = (function () {
    function FireRiskLocationResponseList() {
    }
    return FireRiskLocationResponseList;
}());
exports.FireRiskLocationResponseList = FireRiskLocationResponseList;
var FireRiskResponse = (function () {
    function FireRiskResponse() {
    }
    return FireRiskResponse;
}());
exports.FireRiskResponse = FireRiskResponse;
var FireRiskResponseList = (function () {
    function FireRiskResponseList() {
    }
    return FireRiskResponseList;
}());
exports.FireRiskResponseList = FireRiskResponseList;
var FireShed = (function () {
    function FireShed() {
    }
    return FireShed;
}());
exports.FireShed = FireShed;
var FireStation = (function () {
    function FireStation() {
    }
    return FireStation;
}());
exports.FireStation = FireStation;
var FireStationContactDetails = (function () {
    function FireStationContactDetails() {
    }
    return FireStationContactDetails;
}());
exports.FireStationContactDetails = FireStationContactDetails;
var FireStations = (function () {
    function FireStations() {
    }
    return FireStations;
}());
exports.FireStations = FireStations;
var FireStationsLocation = (function () {
    function FireStationsLocation() {
    }
    return FireStationsLocation;
}());
exports.FireStationsLocation = FireStationsLocation;
var FloodBoundary = (function () {
    function FloodBoundary() {
    }
    return FloodBoundary;
}());
exports.FloodBoundary = FloodBoundary;
var FloodHazardPreferences = (function () {
    function FloodHazardPreferences() {
    }
    return FloodHazardPreferences;
}());
exports.FloodHazardPreferences = FloodHazardPreferences;
var FloodRiskByAddressRequest = (function () {
    function FloodRiskByAddressRequest() {
    }
    return FloodRiskByAddressRequest;
}());
exports.FloodRiskByAddressRequest = FloodRiskByAddressRequest;
var FloodRiskByLocationRequest = (function () {
    function FloodRiskByLocationRequest() {
    }
    return FloodRiskByLocationRequest;
}());
exports.FloodRiskByLocationRequest = FloodRiskByLocationRequest;
var FloodRiskLocationResponse = (function () {
    function FloodRiskLocationResponse() {
    }
    return FloodRiskLocationResponse;
}());
exports.FloodRiskLocationResponse = FloodRiskLocationResponse;
var FloodRiskLocationResponseList = (function () {
    function FloodRiskLocationResponseList() {
    }
    return FloodRiskLocationResponseList;
}());
exports.FloodRiskLocationResponseList = FloodRiskLocationResponseList;
var FloodRiskPreferences = (function () {
    function FloodRiskPreferences() {
    }
    return FloodRiskPreferences;
}());
exports.FloodRiskPreferences = FloodRiskPreferences;
var FloodRiskResponse = (function () {
    function FloodRiskResponse() {
    }
    return FloodRiskResponse;
}());
exports.FloodRiskResponse = FloodRiskResponse;
var FloodRiskResponseList = (function () {
    function FloodRiskResponseList() {
    }
    return FloodRiskResponseList;
}());
exports.FloodRiskResponseList = FloodRiskResponseList;
var FloodZone = (function () {
    function FloodZone() {
    }
    return FloodZone;
}());
exports.FloodZone = FloodZone;
var FreeOrReducedPriceLunches = (function () {
    function FreeOrReducedPriceLunches() {
    }
    return FreeOrReducedPriceLunches;
}());
exports.FreeOrReducedPriceLunches = FreeOrReducedPriceLunches;
var GenderTheme = (function () {
    function GenderTheme() {
    }
    return GenderTheme;
}());
exports.GenderTheme = GenderTheme;
var GeoEnrichMetadataResponse = (function () {
    function GeoEnrichMetadataResponse() {
    }
    return GeoEnrichMetadataResponse;
}());
exports.GeoEnrichMetadataResponse = GeoEnrichMetadataResponse;
var GeoEnrichResponse = (function () {
    function GeoEnrichResponse() {
    }
    return GeoEnrichResponse;
}());
exports.GeoEnrichResponse = GeoEnrichResponse;
var GeoLocationAccessPoint = (function () {
    function GeoLocationAccessPoint() {
    }
    return GeoLocationAccessPoint;
}());
exports.GeoLocationAccessPoint = GeoLocationAccessPoint;
var GeoLocationCountry = (function () {
    function GeoLocationCountry() {
    }
    return GeoLocationCountry;
}());
exports.GeoLocationCountry = GeoLocationCountry;
var GeoLocationFixedLine = (function () {
    function GeoLocationFixedLine() {
    }
    return GeoLocationFixedLine;
}());
exports.GeoLocationFixedLine = GeoLocationFixedLine;
var GeoLocationFixedLineCountry = (function () {
    function GeoLocationFixedLineCountry() {
    }
    return GeoLocationFixedLineCountry;
}());
exports.GeoLocationFixedLineCountry = GeoLocationFixedLineCountry;
var GeoLocationIpAddr = (function () {
    function GeoLocationIpAddr() {
    }
    return GeoLocationIpAddr;
}());
exports.GeoLocationIpAddr = GeoLocationIpAddr;
var GeoLocationPlace = (function () {
    function GeoLocationPlace() {
    }
    return GeoLocationPlace;
}());
exports.GeoLocationPlace = GeoLocationPlace;
var GeoLocationState = (function () {
    function GeoLocationState() {
    }
    return GeoLocationState;
}());
exports.GeoLocationState = GeoLocationState;
var GeoPos = (function () {
    function GeoPos() {
    }
    return GeoPos;
}());
exports.GeoPos = GeoPos;
var GeoPostGeometry = (function () {
    function GeoPostGeometry() {
    }
    return GeoPostGeometry;
}());
exports.GeoPostGeometry = GeoPostGeometry;
var GeoRiskBoundaries = (function () {
    function GeoRiskBoundaries() {
    }
    return GeoRiskBoundaries;
}());
exports.GeoRiskBoundaries = GeoRiskBoundaries;
var GeoRiskCrimeTheme = (function () {
    function GeoRiskCrimeTheme() {
    }
    return GeoRiskCrimeTheme;
}());
exports.GeoRiskCrimeTheme = GeoRiskCrimeTheme;
var GeoRiskGeometry = (function () {
    function GeoRiskGeometry() {
    }
    return GeoRiskGeometry;
}());
exports.GeoRiskGeometry = GeoRiskGeometry;
var GeoRiskLocations = (function () {
    function GeoRiskLocations() {
    }
    return GeoRiskLocations;
}());
exports.GeoRiskLocations = GeoRiskLocations;
var GeoRouteResponse = (function () {
    function GeoRouteResponse() {
    }
    return GeoRouteResponse;
}());
exports.GeoRouteResponse = GeoRouteResponse;
var GeoTaxLocations = (function () {
    function GeoTaxLocations() {
    }
    return GeoTaxLocations;
}());
exports.GeoTaxLocations = GeoTaxLocations;
var GeoTaxRateLocations = (function () {
    function GeoTaxRateLocations() {
    }
    return GeoTaxRateLocations;
}());
exports.GeoTaxRateLocations = GeoTaxRateLocations;
var GeoZoneGeometry = (function () {
    function GeoZoneGeometry() {
    }
    return GeoZoneGeometry;
}());
exports.GeoZoneGeometry = GeoZoneGeometry;
var GeocodeAddress = (function () {
    function GeocodeAddress() {
    }
    return GeocodeAddress;
}());
exports.GeocodeAddress = GeocodeAddress;
var GeocodeCapabilitiesResponse = (function () {
    function GeocodeCapabilitiesResponse() {
    }
    return GeocodeCapabilitiesResponse;
}());
exports.GeocodeCapabilitiesResponse = GeocodeCapabilitiesResponse;
var GeocodeCustomPreferences = (function () {
    function GeocodeCustomPreferences() {
    }
    return GeocodeCustomPreferences;
}());
exports.GeocodeCustomPreferences = GeocodeCustomPreferences;
var GeocodePreferences = (function () {
    function GeocodePreferences() {
    }
    return GeocodePreferences;
}());
exports.GeocodePreferences = GeocodePreferences;
var GeocodeRequest = (function () {
    function GeocodeRequest() {
    }
    return GeocodeRequest;
}());
exports.GeocodeRequest = GeocodeRequest;
var GeocodeRequestAddress = (function () {
    function GeocodeRequestAddress() {
    }
    return GeocodeRequestAddress;
}());
exports.GeocodeRequestAddress = GeocodeRequestAddress;
var GeocodeServiceResponse = (function () {
    function GeocodeServiceResponse() {
    }
    return GeocodeServiceResponse;
}());
exports.GeocodeServiceResponse = GeocodeServiceResponse;
var GeocodeServiceResponseList = (function () {
    function GeocodeServiceResponseList() {
    }
    return GeocodeServiceResponseList;
}());
exports.GeocodeServiceResponseList = GeocodeServiceResponseList;
var Geometry = (function () {
    function Geometry() {
    }
    return Geometry;
}());
exports.Geometry = Geometry;
var GeosearchLocation = (function () {
    function GeosearchLocation() {
    }
    return GeosearchLocation;
}());
exports.GeosearchLocation = GeosearchLocation;
var GeosearchLocations = (function () {
    function GeosearchLocations() {
    }
    return GeosearchLocations;
}());
exports.GeosearchLocations = GeosearchLocations;
var GetCityStateProvinceAPIInput = (function () {
    function GetCityStateProvinceAPIInput() {
    }
    return GetCityStateProvinceAPIInput;
}());
exports.GetCityStateProvinceAPIInput = GetCityStateProvinceAPIInput;
var GetCityStateProvinceAPIInputRow = (function () {
    function GetCityStateProvinceAPIInputRow() {
    }
    return GetCityStateProvinceAPIInputRow;
}());
exports.GetCityStateProvinceAPIInputRow = GetCityStateProvinceAPIInputRow;
var GetCityStateProvinceAPIOptions = (function () {
    function GetCityStateProvinceAPIOptions() {
    }
    return GetCityStateProvinceAPIOptions;
}());
exports.GetCityStateProvinceAPIOptions = GetCityStateProvinceAPIOptions;
var GetCityStateProvinceAPIOutput = (function () {
    function GetCityStateProvinceAPIOutput() {
    }
    return GetCityStateProvinceAPIOutput;
}());
exports.GetCityStateProvinceAPIOutput = GetCityStateProvinceAPIOutput;
var GetCityStateProvinceAPIRequest = (function () {
    function GetCityStateProvinceAPIRequest() {
    }
    return GetCityStateProvinceAPIRequest;
}());
exports.GetCityStateProvinceAPIRequest = GetCityStateProvinceAPIRequest;
var GetCityStateProvinceAPIResponse = (function () {
    function GetCityStateProvinceAPIResponse() {
    }
    return GetCityStateProvinceAPIResponse;
}());
exports.GetCityStateProvinceAPIResponse = GetCityStateProvinceAPIResponse;
var GetPostalCodesAPIInput = (function () {
    function GetPostalCodesAPIInput() {
    }
    return GetPostalCodesAPIInput;
}());
exports.GetPostalCodesAPIInput = GetPostalCodesAPIInput;
var GetPostalCodesAPIInputRow = (function () {
    function GetPostalCodesAPIInputRow() {
    }
    return GetPostalCodesAPIInputRow;
}());
exports.GetPostalCodesAPIInputRow = GetPostalCodesAPIInputRow;
var GetPostalCodesAPIOptions = (function () {
    function GetPostalCodesAPIOptions() {
    }
    return GetPostalCodesAPIOptions;
}());
exports.GetPostalCodesAPIOptions = GetPostalCodesAPIOptions;
var GetPostalCodesAPIOutput = (function () {
    function GetPostalCodesAPIOutput() {
    }
    return GetPostalCodesAPIOutput;
}());
exports.GetPostalCodesAPIOutput = GetPostalCodesAPIOutput;
var GetPostalCodesAPIRequest = (function () {
    function GetPostalCodesAPIRequest() {
    }
    return GetPostalCodesAPIRequest;
}());
exports.GetPostalCodesAPIRequest = GetPostalCodesAPIRequest;
var GetPostalCodesAPIResponse = (function () {
    function GetPostalCodesAPIResponse() {
    }
    return GetPostalCodesAPIResponse;
}());
exports.GetPostalCodesAPIResponse = GetPostalCodesAPIResponse;
var GlobalUltimateBusiness = (function () {
    function GlobalUltimateBusiness() {
    }
    return GlobalUltimateBusiness;
}());
exports.GlobalUltimateBusiness = GlobalUltimateBusiness;
var GradeLevelsTaught = (function () {
    function GradeLevelsTaught() {
    }
    return GradeLevelsTaught;
}());
exports.GradeLevelsTaught = GradeLevelsTaught;
var Greatschools = (function () {
    function Greatschools() {
    }
    return Greatschools;
}());
exports.Greatschools = Greatschools;
var Grid = (function () {
    function Grid() {
    }
    return Grid;
}());
exports.Grid = Grid;
var HealthTheme = (function () {
    function HealthTheme() {
    }
    return HealthTheme;
}());
exports.HealthTheme = HealthTheme;
var HeatingType = (function () {
    function HeatingType() {
    }
    return HeatingType;
}());
exports.HeatingType = HeatingType;
var HouseholdSizeTheme = (function () {
    function HouseholdSizeTheme() {
    }
    return HouseholdSizeTheme;
}());
exports.HouseholdSizeTheme = HouseholdSizeTheme;
var HouseholdsTheme = (function () {
    function HouseholdsTheme() {
    }
    return HouseholdsTheme;
}());
exports.HouseholdsTheme = HouseholdsTheme;
var HousingTheme = (function () {
    function HousingTheme() {
    }
    return HousingTheme;
}());
exports.HousingTheme = HousingTheme;
var IPDTaxByAddressBatchRequest = (function () {
    function IPDTaxByAddressBatchRequest() {
    }
    return IPDTaxByAddressBatchRequest;
}());
exports.IPDTaxByAddressBatchRequest = IPDTaxByAddressBatchRequest;
var IPDTaxJurisdiction = (function () {
    function IPDTaxJurisdiction() {
    }
    return IPDTaxJurisdiction;
}());
exports.IPDTaxJurisdiction = IPDTaxJurisdiction;
var Identity = (function () {
    function Identity() {
    }
    return Identity;
}());
exports.Identity = Identity;
var IdentityDemographics = (function () {
    function IdentityDemographics() {
    }
    return IdentityDemographics;
}());
exports.IdentityDemographics = IdentityDemographics;
var IdentityDetail = (function () {
    function IdentityDetail() {
    }
    return IdentityDetail;
}());
exports.IdentityDetail = IdentityDetail;
var IdentityName = (function () {
    function IdentityName() {
    }
    return IdentityName;
}());
exports.IdentityName = IdentityName;
var IdentityResponse = (function () {
    function IdentityResponse() {
    }
    return IdentityResponse;
}());
exports.IdentityResponse = IdentityResponse;
var IncomeTheme = (function () {
    function IncomeTheme() {
    }
    return IncomeTheme;
}());
exports.IncomeTheme = IncomeTheme;
var IncomeThemeV2 = (function () {
    function IncomeThemeV2() {
    }
    return IncomeThemeV2;
}());
exports.IncomeThemeV2 = IncomeThemeV2;
var IndexVariable = (function () {
    function IndexVariable() {
    }
    return IndexVariable;
}());
exports.IndexVariable = IndexVariable;
var IndividualValueVariable = (function () {
    function IndividualValueVariable() {
    }
    return IndividualValueVariable;
}());
exports.IndividualValueVariable = IndividualValueVariable;
var IndividualValueVariableV2 = (function () {
    function IndividualValueVariableV2() {
    }
    return IndividualValueVariableV2;
}());
exports.IndividualValueVariableV2 = IndividualValueVariableV2;
var InputParameter = (function () {
    function InputParameter() {
    }
    return InputParameter;
}());
exports.InputParameter = InputParameter;
var Interest = (function () {
    function Interest() {
    }
    return Interest;
}());
exports.Interest = Interest;
var IntermediatePoints = (function () {
    function IntermediatePoints() {
    }
    return IntermediatePoints;
}());
exports.IntermediatePoints = IntermediatePoints;
var Intersection = (function () {
    function Intersection() {
    }
    return Intersection;
}());
exports.Intersection = Intersection;
var IntersectionResponse = (function () {
    function IntersectionResponse() {
    }
    return IntersectionResponse;
}());
exports.IntersectionResponse = IntersectionResponse;
var IpInfo = (function () {
    function IpInfo() {
    }
    return IpInfo;
}());
exports.IpInfo = IpInfo;
var Ipd = (function () {
    function Ipd() {
    }
    return Ipd;
}());
exports.Ipd = Ipd;
var KeyLookupRequest = (function () {
    function KeyLookupRequest() {
    }
    return KeyLookupRequest;
}());
exports.KeyLookupRequest = KeyLookupRequest;
var Keys = (function () {
    function Keys() {
    }
    return Keys;
}());
exports.Keys = Keys;
var LandUse = (function () {
    function LandUse() {
    }
    return LandUse;
}());
exports.LandUse = LandUse;
var LatLongFields = (function () {
    function LatLongFields() {
    }
    return LatLongFields;
}());
exports.LatLongFields = LatLongFields;
var LifeStyleTheme = (function () {
    function LifeStyleTheme() {
    }
    return LifeStyleTheme;
}());
exports.LifeStyleTheme = LifeStyleTheme;
var Location = (function () {
    function Location() {
    }
    return Location;
}());
exports.Location = Location;
var LocationTime = (function () {
    function LocationTime() {
    }
    return LocationTime;
}());
exports.LocationTime = LocationTime;
var Magnitude = (function () {
    function Magnitude() {
    }
    return Magnitude;
}());
exports.Magnitude = Magnitude;
var MaritalStatusTheme = (function () {
    function MaritalStatusTheme() {
    }
    return MaritalStatusTheme;
}());
exports.MaritalStatusTheme = MaritalStatusTheme;
var Match = (function () {
    function Match() {
    }
    return Match;
}());
exports.Match = Match;
var MatchedAddress = (function () {
    function MatchedAddress() {
    }
    return MatchedAddress;
}());
exports.MatchedAddress = MatchedAddress;
var Matrix = (function () {
    function Matrix() {
    }
    return Matrix;
}());
exports.Matrix = Matrix;
var Mcd = (function () {
    function Mcd() {
    }
    return Mcd;
}());
exports.Mcd = Mcd;
var Network = (function () {
    function Network() {
    }
    return Network;
}());
exports.Network = Network;
var Operation = (function () {
    function Operation() {
    }
    return Operation;
}());
exports.Operation = Operation;
var OrganizationType = (function () {
    function OrganizationType() {
    }
    return OrganizationType;
}());
exports.OrganizationType = OrganizationType;
var OutputParameter = (function () {
    function OutputParameter() {
    }
    return OutputParameter;
}());
exports.OutputParameter = OutputParameter;
var PBKeyAddressRequest = (function () {
    function PBKeyAddressRequest() {
    }
    return PBKeyAddressRequest;
}());
exports.PBKeyAddressRequest = PBKeyAddressRequest;
var PBKeyResponse = (function () {
    function PBKeyResponse() {
    }
    return PBKeyResponse;
}());
exports.PBKeyResponse = PBKeyResponse;
var PBKeyResponseList = (function () {
    function PBKeyResponseList() {
    }
    return PBKeyResponseList;
}());
exports.PBKeyResponseList = PBKeyResponseList;
var POIBoundaryAddressRequest = (function () {
    function POIBoundaryAddressRequest() {
    }
    return POIBoundaryAddressRequest;
}());
exports.POIBoundaryAddressRequest = POIBoundaryAddressRequest;
var POIBoundaryLocationRequest = (function () {
    function POIBoundaryLocationRequest() {
    }
    return POIBoundaryLocationRequest;
}());
exports.POIBoundaryLocationRequest = POIBoundaryLocationRequest;
var POIBoundaryLocations = (function () {
    function POIBoundaryLocations() {
    }
    return POIBoundaryLocations;
}());
exports.POIBoundaryLocations = POIBoundaryLocations;
var POIBoundaryResponse = (function () {
    function POIBoundaryResponse() {
    }
    return POIBoundaryResponse;
}());
exports.POIBoundaryResponse = POIBoundaryResponse;
var POIByGeometryRequest = (function () {
    function POIByGeometryRequest() {
    }
    return POIByGeometryRequest;
}());
exports.POIByGeometryRequest = POIByGeometryRequest;
var POIPlaces = (function () {
    function POIPlaces() {
    }
    return POIPlaces;
}());
exports.POIPlaces = POIPlaces;
var PSAPResponse = (function () {
    function PSAPResponse() {
    }
    return PSAPResponse;
}());
exports.PSAPResponse = PSAPResponse;
var Parcel = (function () {
    function Parcel() {
    }
    return Parcel;
}());
exports.Parcel = Parcel;
var ParcelBoundary = (function () {
    function ParcelBoundary() {
    }
    return ParcelBoundary;
}());
exports.ParcelBoundary = ParcelBoundary;
var ParentBusiness = (function () {
    function ParentBusiness() {
    }
    return ParentBusiness;
}());
exports.ParentBusiness = ParentBusiness;
var PbKey = (function () {
    function PbKey() {
    }
    return PbKey;
}());
exports.PbKey = PbKey;
var PhoneVerification = (function () {
    function PhoneVerification() {
    }
    return PhoneVerification;
}());
exports.PhoneVerification = PhoneVerification;
var Photo = (function () {
    function Photo() {
    }
    return Photo;
}());
exports.Photo = Photo;
var PlaceByLocations = (function () {
    function PlaceByLocations() {
    }
    return PlaceByLocations;
}());
exports.PlaceByLocations = PlaceByLocations;
var PlaceByLocationsLocation = (function () {
    function PlaceByLocationsLocation() {
    }
    return PlaceByLocationsLocation;
}());
exports.PlaceByLocationsLocation = PlaceByLocationsLocation;
var PlaceLocation = (function () {
    function PlaceLocation() {
    }
    return PlaceLocation;
}());
exports.PlaceLocation = PlaceLocation;
var PlaceLocationName = (function () {
    function PlaceLocationName() {
    }
    return PlaceLocationName;
}());
exports.PlaceLocationName = PlaceLocationName;
var Poi = (function () {
    function Poi() {
    }
    return Poi;
}());
exports.Poi = Poi;
var PoiBoundary = (function () {
    function PoiBoundary() {
    }
    return PoiBoundary;
}());
exports.PoiBoundary = PoiBoundary;
var PoiBoundaryPreferences = (function () {
    function PoiBoundaryPreferences() {
    }
    return PoiBoundaryPreferences;
}());
exports.PoiBoundaryPreferences = PoiBoundaryPreferences;
var PoiClassification = (function () {
    function PoiClassification() {
    }
    return PoiClassification;
}());
exports.PoiClassification = PoiClassification;
var PoiContactDetails = (function () {
    function PoiContactDetails() {
    }
    return PoiContactDetails;
}());
exports.PoiContactDetails = PoiContactDetails;
var PoiCount = (function () {
    function PoiCount() {
    }
    return PoiCount;
}());
exports.PoiCount = PoiCount;
var PoiCountRequest = (function () {
    function PoiCountRequest() {
    }
    return PoiCountRequest;
}());
exports.PoiCountRequest = PoiCountRequest;
var Points = (function () {
    function Points() {
    }
    return Points;
}());
exports.Points = Points;
var Pois = (function () {
    function Pois() {
    }
    return Pois;
}());
exports.Pois = Pois;
var PolygonGeometry = (function () {
    function PolygonGeometry() {
    }
    return PolygonGeometry;
}());
exports.PolygonGeometry = PolygonGeometry;
var PopulationTheme = (function () {
    function PopulationTheme() {
    }
    return PopulationTheme;
}());
exports.PopulationTheme = PopulationTheme;
var PreferencTimeZone = (function () {
    function PreferencTimeZone() {
    }
    return PreferencTimeZone;
}());
exports.PreferencTimeZone = PreferencTimeZone;
var Preferences = (function () {
    function Preferences() {
    }
    return Preferences;
}());
exports.Preferences = Preferences;
var PrimaryZone = (function () {
    function PrimaryZone() {
    }
    return PrimaryZone;
}());
exports.PrimaryZone = PrimaryZone;
var Profile = (function () {
    function Profile() {
    }
    return Profile;
}());
exports.Profile = Profile;
var Profiles = (function () {
    function Profiles() {
    }
    return Profiles;
}());
exports.Profiles = Profiles;
var Properties = (function () {
    function Properties() {
    }
    return Properties;
}());
exports.Properties = Properties;
var PropertyAttributes = (function () {
    function PropertyAttributes() {
    }
    return PropertyAttributes;
}());
exports.PropertyAttributes = PropertyAttributes;
var PropertyInfoAddressRequest = (function () {
    function PropertyInfoAddressRequest() {
    }
    return PropertyInfoAddressRequest;
}());
exports.PropertyInfoAddressRequest = PropertyInfoAddressRequest;
var PropertyInfoPreferences = (function () {
    function PropertyInfoPreferences() {
    }
    return PropertyInfoPreferences;
}());
exports.PropertyInfoPreferences = PropertyInfoPreferences;
var PropertyInfoResponse = (function () {
    function PropertyInfoResponse() {
    }
    return PropertyInfoResponse;
}());
exports.PropertyInfoResponse = PropertyInfoResponse;
var PropertyInfoResponses = (function () {
    function PropertyInfoResponses() {
    }
    return PropertyInfoResponses;
}());
exports.PropertyInfoResponses = PropertyInfoResponses;
var Proxy = (function () {
    function Proxy() {
    }
    return Proxy;
}());
exports.Proxy = Proxy;
var PurchasingBehaviorTheme = (function () {
    function PurchasingBehaviorTheme() {
    }
    return PurchasingBehaviorTheme;
}());
exports.PurchasingBehaviorTheme = PurchasingBehaviorTheme;
var RaceAndEthnicityTheme = (function () {
    function RaceAndEthnicityTheme() {
    }
    return RaceAndEthnicityTheme;
}());
exports.RaceAndEthnicityTheme = RaceAndEthnicityTheme;
var RaceTheme = (function () {
    function RaceTheme() {
    }
    return RaceTheme;
}());
exports.RaceTheme = RaceTheme;
var RangeVariable = (function () {
    function RangeVariable() {
    }
    return RangeVariable;
}());
exports.RangeVariable = RangeVariable;
var RangeVariableV2 = (function () {
    function RangeVariableV2() {
    }
    return RangeVariableV2;
}());
exports.RangeVariableV2 = RangeVariableV2;
var Rate = (function () {
    function Rate() {
    }
    return Rate;
}());
exports.Rate = Rate;
var RateCenterResponse = (function () {
    function RateCenterResponse() {
    }
    return RateCenterResponse;
}());
exports.RateCenterResponse = RateCenterResponse;
var ReturnFieldsDescriptor = (function () {
    function ReturnFieldsDescriptor() {
    }
    return ReturnFieldsDescriptor;
}());
exports.ReturnFieldsDescriptor = ReturnFieldsDescriptor;
var ReverseGeocodeRequest = (function () {
    function ReverseGeocodeRequest() {
    }
    return ReverseGeocodeRequest;
}());
exports.ReverseGeocodeRequest = ReverseGeocodeRequest;
var Risk = (function () {
    function Risk() {
    }
    return Risk;
}());
exports.Risk = Risk;
var RiskAddress = (function () {
    function RiskAddress() {
    }
    return RiskAddress;
}());
exports.RiskAddress = RiskAddress;
var Road = (function () {
    function Road() {
    }
    return Road;
}());
exports.Road = Road;
var RoofType = (function () {
    function RoofType() {
    }
    return RoofType;
}());
exports.RoofType = RoofType;
var RouteBoundary = (function () {
    function RouteBoundary() {
    }
    return RouteBoundary;
}());
exports.RouteBoundary = RouteBoundary;
var RouteDelivery = (function () {
    function RouteDelivery() {
    }
    return RouteDelivery;
}());
exports.RouteDelivery = RouteDelivery;
var RouteDirection = (function () {
    function RouteDirection() {
    }
    return RouteDirection;
}());
exports.RouteDirection = RouteDirection;
var RouteDirections = (function (_super) {
    __extends(RouteDirections, _super);
    function RouteDirections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RouteDirections;
}(Array));
exports.RouteDirections = RouteDirections;
var RouteGeometry = (function () {
    function RouteGeometry() {
    }
    return RouteGeometry;
}());
exports.RouteGeometry = RouteGeometry;
var SalesTax = (function () {
    function SalesTax() {
    }
    return SalesTax;
}());
exports.SalesTax = SalesTax;
var SalesTaxRate = (function () {
    function SalesTaxRate() {
    }
    return SalesTaxRate;
}());
exports.SalesTaxRate = SalesTaxRate;
var SalesVolume = (function () {
    function SalesVolume() {
    }
    return SalesVolume;
}());
exports.SalesVolume = SalesVolume;
var School = (function () {
    function School() {
    }
    return School;
}());
exports.School = School;
var SchoolDistrict = (function () {
    function SchoolDistrict() {
    }
    return SchoolDistrict;
}());
exports.SchoolDistrict = SchoolDistrict;
var SchoolProfile = (function () {
    function SchoolProfile() {
    }
    return SchoolProfile;
}());
exports.SchoolProfile = SchoolProfile;
var SchoolRanking = (function () {
    function SchoolRanking() {
    }
    return SchoolRanking;
}());
exports.SchoolRanking = SchoolRanking;
var SchoolsNearByResponse = (function () {
    function SchoolsNearByResponse() {
    }
    return SchoolsNearByResponse;
}());
exports.SchoolsNearByResponse = SchoolsNearByResponse;
var Segmentation = (function () {
    function Segmentation() {
    }
    return Segmentation;
}());
exports.Segmentation = Segmentation;
var SegmentationThemes = (function () {
    function SegmentationThemes() {
    }
    return SegmentationThemes;
}());
exports.SegmentationThemes = SegmentationThemes;
var ShoreLineDistance = (function () {
    function ShoreLineDistance() {
    }
    return ShoreLineDistance;
}());
exports.ShoreLineDistance = ShoreLineDistance;
var Sic = (function () {
    function Sic() {
    }
    return Sic;
}());
exports.Sic = Sic;
var SicMetadata = (function () {
    function SicMetadata() {
    }
    return SicMetadata;
}());
exports.SicMetadata = SicMetadata;
var SiteDetails = (function () {
    function SiteDetails() {
    }
    return SiteDetails;
}());
exports.SiteDetails = SiteDetails;
var SpecialPurposeDistrict = (function () {
    function SpecialPurposeDistrict() {
    }
    return SpecialPurposeDistrict;
}());
exports.SpecialPurposeDistrict = SpecialPurposeDistrict;
var SpecialPurposeDistrictTax = (function () {
    function SpecialPurposeDistrictTax() {
    }
    return SpecialPurposeDistrictTax;
}());
exports.SpecialPurposeDistrictTax = SpecialPurposeDistrictTax;
var SpecialPurposeDistrictTaxRate = (function () {
    function SpecialPurposeDistrictTaxRate() {
    }
    return SpecialPurposeDistrictTaxRate;
}());
exports.SpecialPurposeDistrictTaxRate = SpecialPurposeDistrictTaxRate;
var SpeedLimit = (function () {
    function SpeedLimit() {
    }
    return SpeedLimit;
}());
exports.SpeedLimit = SpeedLimit;
var SpeedRoad = (function () {
    function SpeedRoad() {
    }
    return SpeedRoad;
}());
exports.SpeedRoad = SpeedRoad;
var Start = (function () {
    function Start() {
    }
    return Start;
}());
exports.Start = Start;
var StartEndPoint = (function () {
    function StartEndPoint() {
    }
    return StartEndPoint;
}());
exports.StartEndPoint = StartEndPoint;
var Status = (function () {
    function Status() {
    }
    return Status;
}());
exports.Status = Status;
var StudentEthnicity = (function () {
    function StudentEthnicity() {
    }
    return StudentEthnicity;
}());
exports.StudentEthnicity = StudentEthnicity;
var SupplyAndDemandTheme = (function () {
    function SupplyAndDemandTheme() {
    }
    return SupplyAndDemandTheme;
}());
exports.SupplyAndDemandTheme = SupplyAndDemandTheme;
var SupportLevel = (function () {
    function SupportLevel() {
    }
    return SupportLevel;
}());
exports.SupportLevel = SupportLevel;
var TaxAddress = (function () {
    function TaxAddress() {
    }
    return TaxAddress;
}());
exports.TaxAddress = TaxAddress;
var TaxAddressRequest = (function () {
    function TaxAddressRequest() {
    }
    return TaxAddressRequest;
}());
exports.TaxAddressRequest = TaxAddressRequest;
var TaxBatchLocationResponse = (function () {
    function TaxBatchLocationResponse() {
    }
    return TaxBatchLocationResponse;
}());
exports.TaxBatchLocationResponse = TaxBatchLocationResponse;
var TaxBatchResponse = (function () {
    function TaxBatchResponse() {
    }
    return TaxBatchResponse;
}());
exports.TaxBatchResponse = TaxBatchResponse;
var TaxCounty = (function () {
    function TaxCounty() {
    }
    return TaxCounty;
}());
exports.TaxCounty = TaxCounty;
var TaxDistrictResponse = (function () {
    function TaxDistrictResponse() {
    }
    return TaxDistrictResponse;
}());
exports.TaxDistrictResponse = TaxDistrictResponse;
var TaxDistrictResponseList = (function () {
    function TaxDistrictResponseList() {
    }
    return TaxDistrictResponseList;
}());
exports.TaxDistrictResponseList = TaxDistrictResponseList;
var TaxExemption = (function () {
    function TaxExemption() {
    }
    return TaxExemption;
}());
exports.TaxExemption = TaxExemption;
var TaxJurisdiction = (function () {
    function TaxJurisdiction() {
    }
    return TaxJurisdiction;
}());
exports.TaxJurisdiction = TaxJurisdiction;
var TaxLocationPreferences = (function () {
    function TaxLocationPreferences() {
    }
    return TaxLocationPreferences;
}());
exports.TaxLocationPreferences = TaxLocationPreferences;
var TaxLocationRequest = (function () {
    function TaxLocationRequest() {
    }
    return TaxLocationRequest;
}());
exports.TaxLocationRequest = TaxLocationRequest;
var TaxLocationResponses = (function () {
    function TaxLocationResponses() {
    }
    return TaxLocationResponses;
}());
exports.TaxLocationResponses = TaxLocationResponses;
var TaxPlace = (function () {
    function TaxPlace() {
    }
    return TaxPlace;
}());
exports.TaxPlace = TaxPlace;
var TaxRateAddress = (function () {
    function TaxRateAddress() {
    }
    return TaxRateAddress;
}());
exports.TaxRateAddress = TaxRateAddress;
var TaxRateAddressRequest = (function () {
    function TaxRateAddressRequest() {
    }
    return TaxRateAddressRequest;
}());
exports.TaxRateAddressRequest = TaxRateAddressRequest;
var TaxRateBatchLocationResponse = (function () {
    function TaxRateBatchLocationResponse() {
    }
    return TaxRateBatchLocationResponse;
}());
exports.TaxRateBatchLocationResponse = TaxRateBatchLocationResponse;
var TaxRateBatchResponse = (function () {
    function TaxRateBatchResponse() {
    }
    return TaxRateBatchResponse;
}());
exports.TaxRateBatchResponse = TaxRateBatchResponse;
var TaxRateLocationRequest = (function () {
    function TaxRateLocationRequest() {
    }
    return TaxRateLocationRequest;
}());
exports.TaxRateLocationRequest = TaxRateLocationRequest;
var TaxRateLocationResponses = (function () {
    function TaxRateLocationResponses() {
    }
    return TaxRateLocationResponses;
}());
exports.TaxRateLocationResponses = TaxRateLocationResponses;
var TaxRateResponse = (function () {
    function TaxRateResponse() {
    }
    return TaxRateResponse;
}());
exports.TaxRateResponse = TaxRateResponse;
var TaxRateResponses = (function () {
    function TaxRateResponses() {
    }
    return TaxRateResponses;
}());
exports.TaxRateResponses = TaxRateResponses;
var TaxResponse = (function () {
    function TaxResponse() {
    }
    return TaxResponse;
}());
exports.TaxResponse = TaxResponse;
var TaxResponses = (function () {
    function TaxResponses() {
    }
    return TaxResponses;
}());
exports.TaxResponses = TaxResponses;
var TaxState = (function () {
    function TaxState() {
    }
    return TaxState;
}());
exports.TaxState = TaxState;
var Time = (function () {
    function Time() {
    }
    return Time;
}());
exports.Time = Time;
var Timezone = (function () {
    function Timezone() {
    }
    return Timezone;
}());
exports.Timezone = Timezone;
var TimezoneAddressRequest = (function () {
    function TimezoneAddressRequest() {
    }
    return TimezoneAddressRequest;
}());
exports.TimezoneAddressRequest = TimezoneAddressRequest;
var TimezoneLocation = (function () {
    function TimezoneLocation() {
    }
    return TimezoneLocation;
}());
exports.TimezoneLocation = TimezoneLocation;
var TimezoneLocationRequest = (function () {
    function TimezoneLocationRequest() {
    }
    return TimezoneLocationRequest;
}());
exports.TimezoneLocationRequest = TimezoneLocationRequest;
var TimezoneLocationResponse = (function () {
    function TimezoneLocationResponse() {
    }
    return TimezoneLocationResponse;
}());
exports.TimezoneLocationResponse = TimezoneLocationResponse;
var TimezoneResponse = (function () {
    function TimezoneResponse() {
    }
    return TimezoneResponse;
}());
exports.TimezoneResponse = TimezoneResponse;
var Topic = (function () {
    function Topic() {
    }
    return Topic;
}());
exports.Topic = Topic;
var TravelBoundaries = (function () {
    function TravelBoundaries() {
    }
    return TravelBoundaries;
}());
exports.TravelBoundaries = TravelBoundaries;
var TravelBoundary = (function () {
    function TravelBoundary() {
    }
    return TravelBoundary;
}());
exports.TravelBoundary = TravelBoundary;
var TravelCostMatrixResponse = (function () {
    function TravelCostMatrixResponse() {
    }
    return TravelCostMatrixResponse;
}());
exports.TravelCostMatrixResponse = TravelCostMatrixResponse;
var Type = (function () {
    function Type() {
    }
    return Type;
}());
exports.Type = Type;
var TypeaheadRange = (function () {
    function TypeaheadRange() {
    }
    return TypeaheadRange;
}());
exports.TypeaheadRange = TypeaheadRange;
var TypeaheadUnit = (function () {
    function TypeaheadUnit() {
    }
    return TypeaheadUnit;
}());
exports.TypeaheadUnit = TypeaheadUnit;
var Unit = (function () {
    function Unit() {
    }
    return Unit;
}());
exports.Unit = Unit;
var Url = (function () {
    function Url() {
    }
    return Url;
}());
exports.Url = Url;
var UseTax = (function () {
    function UseTax() {
    }
    return UseTax;
}());
exports.UseTax = UseTax;
var UseTaxRate = (function () {
    function UseTaxRate() {
    }
    return UseTaxRate;
}());
exports.UseTaxRate = UseTaxRate;
var ValidateEmailAddressAPIRequest = (function () {
    function ValidateEmailAddressAPIRequest() {
    }
    return ValidateEmailAddressAPIRequest;
}());
exports.ValidateEmailAddressAPIRequest = ValidateEmailAddressAPIRequest;
var ValidateEmailAddressAPIResponse = (function () {
    function ValidateEmailAddressAPIResponse() {
    }
    return ValidateEmailAddressAPIResponse;
}());
exports.ValidateEmailAddressAPIResponse = ValidateEmailAddressAPIResponse;
var ValidateEmailAddressInput = (function () {
    function ValidateEmailAddressInput() {
    }
    return ValidateEmailAddressInput;
}());
exports.ValidateEmailAddressInput = ValidateEmailAddressInput;
var ValidateEmailAddressInputRow = (function () {
    function ValidateEmailAddressInputRow() {
    }
    return ValidateEmailAddressInputRow;
}());
exports.ValidateEmailAddressInputRow = ValidateEmailAddressInputRow;
var ValidateEmailAddressOptions = (function () {
    function ValidateEmailAddressOptions() {
    }
    return ValidateEmailAddressOptions;
}());
exports.ValidateEmailAddressOptions = ValidateEmailAddressOptions;
var ValidateEmailAddressOutput = (function () {
    function ValidateEmailAddressOutput() {
    }
    return ValidateEmailAddressOutput;
}());
exports.ValidateEmailAddressOutput = ValidateEmailAddressOutput;
var ValidateMailingAddressInput = (function () {
    function ValidateMailingAddressInput() {
    }
    return ValidateMailingAddressInput;
}());
exports.ValidateMailingAddressInput = ValidateMailingAddressInput;
var ValidateMailingAddressInputRow = (function () {
    function ValidateMailingAddressInputRow() {
    }
    return ValidateMailingAddressInputRow;
}());
exports.ValidateMailingAddressInputRow = ValidateMailingAddressInputRow;
var ValidateMailingAddressInputRowUserFields = (function () {
    function ValidateMailingAddressInputRowUserFields() {
    }
    return ValidateMailingAddressInputRowUserFields;
}());
exports.ValidateMailingAddressInputRowUserFields = ValidateMailingAddressInputRowUserFields;
var ValidateMailingAddressOptions = (function () {
    function ValidateMailingAddressOptions() {
    }
    return ValidateMailingAddressOptions;
}());
exports.ValidateMailingAddressOptions = ValidateMailingAddressOptions;
var ValidateMailingAddressOutput = (function () {
    function ValidateMailingAddressOutput() {
    }
    return ValidateMailingAddressOutput;
}());
exports.ValidateMailingAddressOutput = ValidateMailingAddressOutput;
var ValidateMailingAddressPremiumInput = (function () {
    function ValidateMailingAddressPremiumInput() {
    }
    return ValidateMailingAddressPremiumInput;
}());
exports.ValidateMailingAddressPremiumInput = ValidateMailingAddressPremiumInput;
var ValidateMailingAddressPremiumInputRow = (function () {
    function ValidateMailingAddressPremiumInputRow() {
    }
    return ValidateMailingAddressPremiumInputRow;
}());
exports.ValidateMailingAddressPremiumInputRow = ValidateMailingAddressPremiumInputRow;
var ValidateMailingAddressPremiumOptions = (function () {
    function ValidateMailingAddressPremiumOptions() {
    }
    return ValidateMailingAddressPremiumOptions;
}());
exports.ValidateMailingAddressPremiumOptions = ValidateMailingAddressPremiumOptions;
var ValidateMailingAddressPremiumOutput = (function () {
    function ValidateMailingAddressPremiumOutput() {
    }
    return ValidateMailingAddressPremiumOutput;
}());
exports.ValidateMailingAddressPremiumOutput = ValidateMailingAddressPremiumOutput;
var ValidateMailingAddressPremiumRequest = (function () {
    function ValidateMailingAddressPremiumRequest() {
    }
    return ValidateMailingAddressPremiumRequest;
}());
exports.ValidateMailingAddressPremiumRequest = ValidateMailingAddressPremiumRequest;
var ValidateMailingAddressPremiumResponse = (function () {
    function ValidateMailingAddressPremiumResponse() {
    }
    return ValidateMailingAddressPremiumResponse;
}());
exports.ValidateMailingAddressPremiumResponse = ValidateMailingAddressPremiumResponse;
var ValidateMailingAddressProInput = (function () {
    function ValidateMailingAddressProInput() {
    }
    return ValidateMailingAddressProInput;
}());
exports.ValidateMailingAddressProInput = ValidateMailingAddressProInput;
var ValidateMailingAddressProInputRow = (function () {
    function ValidateMailingAddressProInputRow() {
    }
    return ValidateMailingAddressProInputRow;
}());
exports.ValidateMailingAddressProInputRow = ValidateMailingAddressProInputRow;
var ValidateMailingAddressProOptions = (function () {
    function ValidateMailingAddressProOptions() {
    }
    return ValidateMailingAddressProOptions;
}());
exports.ValidateMailingAddressProOptions = ValidateMailingAddressProOptions;
var ValidateMailingAddressProOutput = (function () {
    function ValidateMailingAddressProOutput() {
    }
    return ValidateMailingAddressProOutput;
}());
exports.ValidateMailingAddressProOutput = ValidateMailingAddressProOutput;
var ValidateMailingAddressProRequest = (function () {
    function ValidateMailingAddressProRequest() {
    }
    return ValidateMailingAddressProRequest;
}());
exports.ValidateMailingAddressProRequest = ValidateMailingAddressProRequest;
var ValidateMailingAddressProResponse = (function () {
    function ValidateMailingAddressProResponse() {
    }
    return ValidateMailingAddressProResponse;
}());
exports.ValidateMailingAddressProResponse = ValidateMailingAddressProResponse;
var ValidateMailingAddressRequest = (function () {
    function ValidateMailingAddressRequest() {
    }
    return ValidateMailingAddressRequest;
}());
exports.ValidateMailingAddressRequest = ValidateMailingAddressRequest;
var ValidateMailingAddressResponse = (function () {
    function ValidateMailingAddressResponse() {
    }
    return ValidateMailingAddressResponse;
}());
exports.ValidateMailingAddressResponse = ValidateMailingAddressResponse;
var ValidateMailingAddressUSCANAPIInput = (function () {
    function ValidateMailingAddressUSCANAPIInput() {
    }
    return ValidateMailingAddressUSCANAPIInput;
}());
exports.ValidateMailingAddressUSCANAPIInput = ValidateMailingAddressUSCANAPIInput;
var ValidateMailingAddressUSCANAPIInputRow = (function () {
    function ValidateMailingAddressUSCANAPIInputRow() {
    }
    return ValidateMailingAddressUSCANAPIInputRow;
}());
exports.ValidateMailingAddressUSCANAPIInputRow = ValidateMailingAddressUSCANAPIInputRow;
var ValidateMailingAddressUSCANAPIOptions = (function () {
    function ValidateMailingAddressUSCANAPIOptions() {
    }
    return ValidateMailingAddressUSCANAPIOptions;
}());
exports.ValidateMailingAddressUSCANAPIOptions = ValidateMailingAddressUSCANAPIOptions;
var ValidateMailingAddressUSCANAPIOutput = (function () {
    function ValidateMailingAddressUSCANAPIOutput() {
    }
    return ValidateMailingAddressUSCANAPIOutput;
}());
exports.ValidateMailingAddressUSCANAPIOutput = ValidateMailingAddressUSCANAPIOutput;
var ValidateMailingAddressUSCANAPIRequest = (function () {
    function ValidateMailingAddressUSCANAPIRequest() {
    }
    return ValidateMailingAddressUSCANAPIRequest;
}());
exports.ValidateMailingAddressUSCANAPIRequest = ValidateMailingAddressUSCANAPIRequest;
var ValidateMailingAddressUSCANAPIResponse = (function () {
    function ValidateMailingAddressUSCANAPIResponse() {
    }
    return ValidateMailingAddressUSCANAPIResponse;
}());
exports.ValidateMailingAddressUSCANAPIResponse = ValidateMailingAddressUSCANAPIResponse;
var WaterBody = (function () {
    function WaterBody() {
    }
    return WaterBody;
}());
exports.WaterBody = WaterBody;
var WaterBodyLocationResponse = (function () {
    function WaterBodyLocationResponse() {
    }
    return WaterBodyLocationResponse;
}());
exports.WaterBodyLocationResponse = WaterBodyLocationResponse;
var WaterBodyResponse = (function () {
    function WaterBodyResponse() {
    }
    return WaterBodyResponse;
}());
exports.WaterBodyResponse = WaterBodyResponse;
var OAuth = (function () {
    function OAuth(oAuthApiKey, oAuthSecret) {
        this.oAuthApiKey = oAuthApiKey;
        this.oAuthSecret = oAuthSecret;
    }
    OAuth.prototype.getOAuthCredentials = function () {
        if (this.oAuthApiKey === undefined || this.oAuthSecret === undefined) {
            Promise.reject({ response: "Validation Error", body: "oAuthApiKey or oAuthSecret missing" });
        }
        if ((this.objOAuthCredInfo === null || this.objOAuthCredInfo === undefined)) {
            return this.refreshToken();
        }
        else {
            if ((Number(this.objOAuthCredInfo.issuedAt) + Number(this.objOAuthCredInfo.expiresIn)) < (moment().valueOf() + 10000)) {
                return this.refreshToken();
            }
            return Promise.resolve({ response: null, body: this.objOAuthCredInfo });
        }
    };
    OAuth.prototype.refreshToken = function () {
        var _this = this;
        this.oAuthToken = "Basic " + new Buffer(this.oAuthApiKey + ":" + this.oAuthSecret).toString('base64');
        if (this.oAuthUrl === undefined || this.oAuthUrl === null) {
            this.oAuthUrl = "https://api.precisely.com/oauth/token";
        }
        var requestOptions = {
            method: 'POST',
            url: this.oAuthUrl,
            headers: {
                'cache-control': 'no-cache',
                authorization: this.oAuthToken
            },
            body: 'grant_type=client_credentials'
        };
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject({ response: response, body: JSON.parse(error) });
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        _this.objOAuthCredInfo = JSON.parse(body);
                        resolve({ response: response, body: JSON.parse(body) });
                    }
                    else {
                        reject({ response: response, body: JSON.parse(body) });
                    }
                }
            });
        });
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var AddressVerificationServiceApiApiKeys;
(function (AddressVerificationServiceApiApiKeys) {
})(AddressVerificationServiceApiApiKeys = exports.AddressVerificationServiceApiApiKeys || (exports.AddressVerificationServiceApiApiKeys = {}));
var AddressVerificationServiceApi = (function () {
    function AddressVerificationServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(AddressVerificationServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    AddressVerificationServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[AddressVerificationServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(AddressVerificationServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    AddressVerificationServiceApi.prototype.getCityStateProvince = function (inputAddress) {
        var localVarPath = this.basePath + '/addressverification/v1/getcitystateprovince/results.json';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (inputAddress === null || inputAddress === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter inputAddress was null or undefined when calling getCityStateProvince." }] } });
        }
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: inputAddress,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    AddressVerificationServiceApi.prototype.getPostalCodes = function (inputAddress) {
        var localVarPath = this.basePath + '/addressverification/v1/getpostalcodes/results.json';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (inputAddress === null || inputAddress === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter inputAddress was null or undefined when calling getPostalCodes." }] } });
        }
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: inputAddress,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    AddressVerificationServiceApi.prototype.validateMailingAddress = function (inputAddress) {
        var localVarPath = this.basePath + '/addressverification/v1/validatemailingaddress/results.json';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (inputAddress === null || inputAddress === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter inputAddress was null or undefined when calling validateMailingAddress." }] } });
        }
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: inputAddress,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    AddressVerificationServiceApi.prototype.validateMailingAddressPremium = function (inputAddress) {
        var localVarPath = this.basePath + '/addressverification/v1/validatemailingaddresspremium/results.json';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (inputAddress === null || inputAddress === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter inputAddress was null or undefined when calling validateMailingAddressPremium." }] } });
        }
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: inputAddress,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    AddressVerificationServiceApi.prototype.validateMailingAddressPro = function (inputAddress) {
        var localVarPath = this.basePath + '/addressverification/v1/validatemailingaddresspro/results.json';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (inputAddress === null || inputAddress === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter inputAddress was null or undefined when calling validateMailingAddressPro." }] } });
        }
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: inputAddress,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    AddressVerificationServiceApi.prototype.validateMailingAddressUSCAN = function (inputAddress) {
        var localVarPath = this.basePath + '/addressverification/v1/validatemailingaddressuscan/results.json';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (inputAddress === null || inputAddress === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter inputAddress was null or undefined when calling validateMailingAddressUSCAN." }] } });
        }
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: inputAddress,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return AddressVerificationServiceApi;
}());
exports.AddressVerificationServiceApi = AddressVerificationServiceApi;
var AddressesAPIServiceApiApiKeys;
(function (AddressesAPIServiceApiApiKeys) {
})(AddressesAPIServiceApiApiKeys = exports.AddressesAPIServiceApiApiKeys || (exports.AddressesAPIServiceApiApiKeys = {}));
var AddressesAPIServiceApi = (function () {
    function AddressesAPIServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(AddressesAPIServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    AddressesAPIServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[AddressesAPIServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(AddressesAPIServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    AddressesAPIServiceApi.prototype.getAddressesByBoundaryName = function (country, areaName1, areaName2, areaName3, areaName4, postCode, maxCandidates, page) {
        var localVarPath = this.basePath + '/addresses/v1/address/byboundaryname';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (country === null || country === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter country was null or undefined when calling getAddressesByBoundaryName." }] } });
        }
        if (areaName1 !== undefined) {
            queryParameters['areaName1'] = areaName1;
        }
        if (areaName2 !== undefined) {
            queryParameters['areaName2'] = areaName2;
        }
        if (areaName3 !== undefined) {
            queryParameters['areaName3'] = areaName3;
        }
        if (areaName4 !== undefined) {
            queryParameters['areaName4'] = areaName4;
        }
        if (postCode !== undefined) {
            queryParameters['postCode'] = postCode;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        if (maxCandidates !== undefined) {
            queryParameters['maxCandidates'] = maxCandidates;
        }
        if (page !== undefined) {
            queryParameters['page'] = page;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    AddressesAPIServiceApi.prototype.getAddressesCountByBoundary = function (body) {
        var localVarPath = this.basePath + '/addresses/v1/addresscount/byboundary';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    AddressesAPIServiceApi.prototype.getAddressesCountByBoundaryName = function (country, areaName1, areaName2, areaName3, areaName4, postCode) {
        var localVarPath = this.basePath + '/addresses/v1/addresscount/byboundaryname';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (country === null || country === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter country was null or undefined when calling getAddressesCountByBoundaryName." }] } });
        }
        if (areaName1 !== undefined) {
            queryParameters['areaName1'] = areaName1;
        }
        if (areaName2 !== undefined) {
            queryParameters['areaName2'] = areaName2;
        }
        if (areaName3 !== undefined) {
            queryParameters['areaName3'] = areaName3;
        }
        if (areaName4 !== undefined) {
            queryParameters['areaName4'] = areaName4;
        }
        if (postCode !== undefined) {
            queryParameters['postCode'] = postCode;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    AddressesAPIServiceApi.prototype.getAddressesbyBoundary = function (body) {
        var localVarPath = this.basePath + '/addresses/v1/address/byboundary';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return AddressesAPIServiceApi;
}());
exports.AddressesAPIServiceApi = AddressesAPIServiceApi;
var DemographicsServiceApiApiKeys;
(function (DemographicsServiceApiApiKeys) {
})(DemographicsServiceApiApiKeys = exports.DemographicsServiceApiApiKeys || (exports.DemographicsServiceApiApiKeys = {}));
var DemographicsServiceApi = (function () {
    function DemographicsServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(DemographicsServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    DemographicsServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[DemographicsServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(DemographicsServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    DemographicsServiceApi.prototype.getDemographicsAdvanced = function (body) {
        var localVarPath = this.basePath + '/demographics-segmentation/v1/advanced/demographics';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    DemographicsServiceApi.prototype.getDemographicsBasic = function (address, longitude, latitude, searchRadius, searchRadiusUnit, travelTime, travelTimeUnit, travelDistance, travelDistanceUnit, travelMode, country, profile, filter, includeGeometry) {
        var localVarPath = this.basePath + '/demographics-segmentation/v1/basic/demographics';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        if (searchRadius !== undefined) {
            queryParameters['searchRadius'] = searchRadius;
        }
        if (searchRadiusUnit !== undefined) {
            queryParameters['searchRadiusUnit'] = searchRadiusUnit;
        }
        if (travelTime !== undefined) {
            queryParameters['travelTime'] = travelTime;
        }
        if (travelTimeUnit !== undefined) {
            queryParameters['travelTimeUnit'] = travelTimeUnit;
        }
        if (travelDistance !== undefined) {
            queryParameters['travelDistance'] = travelDistance;
        }
        if (travelDistanceUnit !== undefined) {
            queryParameters['travelDistanceUnit'] = travelDistanceUnit;
        }
        if (travelMode !== undefined) {
            queryParameters['travelMode'] = travelMode;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        if (profile !== undefined) {
            queryParameters['profile'] = profile;
        }
        if (filter !== undefined) {
            queryParameters['filter'] = filter;
        }
        if (includeGeometry !== undefined) {
            queryParameters['includeGeometry'] = includeGeometry;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    DemographicsServiceApi.prototype.getDemographicsByAddressV2 = function (address, country, profile, filter, valueFormat, variableLevel) {
        var localVarPath = this.basePath + '/demographics-segmentation/v1/demographics/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getDemographicsByAddressV2." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        if (profile !== undefined) {
            queryParameters['profile'] = profile;
        }
        if (filter !== undefined) {
            queryParameters['filter'] = filter;
        }
        if (valueFormat !== undefined) {
            queryParameters['valueFormat'] = valueFormat;
        }
        if (variableLevel !== undefined) {
            queryParameters['variableLevel'] = variableLevel;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    DemographicsServiceApi.prototype.getDemographicsByBoundaryIds = function (boundaryIds, profile, filter, valueFormat, variableLevel) {
        var localVarPath = this.basePath + '/demographics-segmentation/v1/demographics/byboundaryids';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (boundaryIds !== undefined) {
            queryParameters['boundaryIds'] = boundaryIds;
        }
        if (profile !== undefined) {
            queryParameters['profile'] = profile;
        }
        if (filter !== undefined) {
            queryParameters['filter'] = filter;
        }
        if (valueFormat !== undefined) {
            queryParameters['valueFormat'] = valueFormat;
        }
        if (variableLevel !== undefined) {
            queryParameters['variableLevel'] = variableLevel;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    DemographicsServiceApi.prototype.getDemographicsByLocationV2 = function (longitude, latitude, profile, filter, valueFormat, variableLevel) {
        var localVarPath = this.basePath + '/demographics-segmentation/v1/demographics/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getDemographicsByLocationV2." }] } });
        }
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getDemographicsByLocationV2." }] } });
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        if (profile !== undefined) {
            queryParameters['profile'] = profile;
        }
        if (filter !== undefined) {
            queryParameters['filter'] = filter;
        }
        if (valueFormat !== undefined) {
            queryParameters['valueFormat'] = valueFormat;
        }
        if (variableLevel !== undefined) {
            queryParameters['variableLevel'] = variableLevel;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    DemographicsServiceApi.prototype.getSegmentationByAddress = function (address, country) {
        var localVarPath = this.basePath + '/demographics-segmentation/v1/segmentation/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getSegmentationByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    DemographicsServiceApi.prototype.getSegmentationByLocation = function (longitude, latitude) {
        var localVarPath = this.basePath + '/demographics-segmentation/v1/segmentation/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getSegmentationByLocation." }] } });
        }
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getSegmentationByLocation." }] } });
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return DemographicsServiceApi;
}());
exports.DemographicsServiceApi = DemographicsServiceApi;
var EmailVerificationServiceApiApiKeys;
(function (EmailVerificationServiceApiApiKeys) {
})(EmailVerificationServiceApiApiKeys = exports.EmailVerificationServiceApiApiKeys || (exports.EmailVerificationServiceApiApiKeys = {}));
var EmailVerificationServiceApi = (function () {
    function EmailVerificationServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(EmailVerificationServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailVerificationServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[EmailVerificationServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(EmailVerificationServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    EmailVerificationServiceApi.prototype.validateEmailAddress = function (inputEmailAddress) {
        var localVarPath = this.basePath + '/emailverification/v1/validateemailaddress/results.json';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (inputEmailAddress === null || inputEmailAddress === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter inputEmailAddress was null or undefined when calling validateEmailAddress." }] } });
        }
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: inputEmailAddress,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return EmailVerificationServiceApi;
}());
exports.EmailVerificationServiceApi = EmailVerificationServiceApi;
var GeocodeServiceApiApiKeys;
(function (GeocodeServiceApiApiKeys) {
})(GeocodeServiceApiApiKeys = exports.GeocodeServiceApiApiKeys || (exports.GeocodeServiceApiApiKeys = {}));
var GeocodeServiceApi = (function () {
    function GeocodeServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(GeocodeServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    GeocodeServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[GeocodeServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(GeocodeServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    GeocodeServiceApi.prototype.geocode = function (datapackBundle, country, placeName, mainAddress, lastLine, areaName1, areaName2, areaName3, areaName4, postalCode, matchMode, fallbackGeo, fallbackPostal, maxCands, streetOffset, streetOffsetUnits, cornerOffset, cornerOffsetUnits) {
        var localVarPath = this.basePath + '/geocode/v1/{datapackBundle}/geocode'
            .replace('{' + 'datapackBundle' + '}', String(datapackBundle));
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (datapackBundle === null || datapackBundle === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter datapackBundle was null or undefined when calling geocode." }] } });
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        if (placeName !== undefined) {
            queryParameters['placeName'] = placeName;
        }
        if (mainAddress !== undefined) {
            queryParameters['mainAddress'] = mainAddress;
        }
        if (lastLine !== undefined) {
            queryParameters['lastLine'] = lastLine;
        }
        if (areaName1 !== undefined) {
            queryParameters['areaName1'] = areaName1;
        }
        if (areaName2 !== undefined) {
            queryParameters['areaName2'] = areaName2;
        }
        if (areaName3 !== undefined) {
            queryParameters['areaName3'] = areaName3;
        }
        if (areaName4 !== undefined) {
            queryParameters['areaName4'] = areaName4;
        }
        if (postalCode !== undefined) {
            queryParameters['postalCode'] = postalCode;
        }
        if (matchMode !== undefined) {
            queryParameters['matchMode'] = matchMode;
        }
        if (fallbackGeo !== undefined) {
            queryParameters['fallbackGeo'] = fallbackGeo;
        }
        if (fallbackPostal !== undefined) {
            queryParameters['fallbackPostal'] = fallbackPostal;
        }
        if (maxCands !== undefined) {
            queryParameters['maxCands'] = maxCands;
        }
        if (streetOffset !== undefined) {
            queryParameters['streetOffset'] = streetOffset;
        }
        if (streetOffsetUnits !== undefined) {
            queryParameters['streetOffsetUnits'] = streetOffsetUnits;
        }
        if (cornerOffset !== undefined) {
            queryParameters['cornerOffset'] = cornerOffset;
        }
        if (cornerOffsetUnits !== undefined) {
            queryParameters['cornerOffsetUnits'] = cornerOffsetUnits;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    GeocodeServiceApi.prototype.geocodeBatch = function (body, datapackBundle) {
        var localVarPath = this.basePath + '/geocode/v1/{datapackBundle}/geocode'
            .replace('{' + 'datapackBundle' + '}', String(datapackBundle));
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (body === null || body === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter body was null or undefined when calling geocodeBatch." }] } });
        }
        if (datapackBundle === null || datapackBundle === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter datapackBundle was null or undefined when calling geocodeBatch." }] } });
        }
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    GeocodeServiceApi.prototype.getCapabilities = function (datapackBundle, operation, country) {
        var localVarPath = this.basePath + '/geocode/v1/{datapackBundle}/capabilities'
            .replace('{' + 'datapackBundle' + '}', String(datapackBundle));
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (datapackBundle === null || datapackBundle === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter datapackBundle was null or undefined when calling getCapabilities." }] } });
        }
        if (operation !== undefined) {
            queryParameters['operation'] = operation;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    GeocodeServiceApi.prototype.getDictionaries = function (datapackBundle, country) {
        var localVarPath = this.basePath + '/geocode/v1/{datapackBundle}/dictionaries'
            .replace('{' + 'datapackBundle' + '}', String(datapackBundle));
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (datapackBundle === null || datapackBundle === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter datapackBundle was null or undefined when calling getDictionaries." }] } });
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    GeocodeServiceApi.prototype.getPreciselyID = function (address, country) {
        var localVarPath = this.basePath + '/geocode/v1/key/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getPreciselyID." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    GeocodeServiceApi.prototype.getPreciselyIDs = function (body) {
        var localVarPath = this.basePath + '/geocode/v1/key/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (body === null || body === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter body was null or undefined when calling getPreciselyIDs." }] } });
        }
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    GeocodeServiceApi.prototype.keyLookup = function (key, type, country) {
        var localVarPath = this.basePath + '/geocode/v1/keylookup';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (key === null || key === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter key was null or undefined when calling keyLookup." }] } });
        }
        if (key !== undefined) {
            queryParameters['key'] = key;
        }
        if (type !== undefined) {
            queryParameters['type'] = type;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    GeocodeServiceApi.prototype.keyLookupBatch = function (body) {
        var localVarPath = this.basePath + '/geocode/v1/keylookup';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    GeocodeServiceApi.prototype.reverseGeocodBatch = function (datapackBundle, body) {
        var localVarPath = this.basePath + '/geocode/v1/{datapackBundle}/reverseGeocode'
            .replace('{' + 'datapackBundle' + '}', String(datapackBundle));
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (datapackBundle === null || datapackBundle === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter datapackBundle was null or undefined when calling reverseGeocodBatch." }] } });
        }
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    GeocodeServiceApi.prototype.reverseGeocode = function (datapackBundle, x, y, country, coordSysName, distance, distanceUnits) {
        var localVarPath = this.basePath + '/geocode/v1/{datapackBundle}/reverseGeocode'
            .replace('{' + 'datapackBundle' + '}', String(datapackBundle));
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (datapackBundle === null || datapackBundle === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter datapackBundle was null or undefined when calling reverseGeocode." }] } });
        }
        if (x === null || x === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter x was null or undefined when calling reverseGeocode." }] } });
        }
        if (y === null || y === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter y was null or undefined when calling reverseGeocode." }] } });
        }
        if (x !== undefined) {
            queryParameters['x'] = x;
        }
        if (y !== undefined) {
            queryParameters['y'] = y;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        if (coordSysName !== undefined) {
            queryParameters['coordSysName'] = coordSysName;
        }
        if (distance !== undefined) {
            queryParameters['distance'] = distance;
        }
        if (distanceUnits !== undefined) {
            queryParameters['distanceUnits'] = distanceUnits;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return GeocodeServiceApi;
}());
exports.GeocodeServiceApi = GeocodeServiceApi;
var GeolocationServiceApiApiKeys;
(function (GeolocationServiceApiApiKeys) {
})(GeolocationServiceApiApiKeys = exports.GeolocationServiceApiApiKeys || (exports.GeolocationServiceApiApiKeys = {}));
var GeolocationServiceApi = (function () {
    function GeolocationServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(GeolocationServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    GeolocationServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[GeolocationServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(GeolocationServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    GeolocationServiceApi.prototype.getLocationByIPAddress = function (ipAddress) {
        var localVarPath = this.basePath + '/geolocation/v1/location/byipaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (ipAddress === null || ipAddress === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter ipAddress was null or undefined when calling getLocationByIPAddress." }] } });
        }
        if (ipAddress !== undefined) {
            queryParameters['ipAddress'] = ipAddress;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    GeolocationServiceApi.prototype.getLocationByWiFiAccessPoint = function (mac, ssid, rsid, speed, accessPoint) {
        var localVarPath = this.basePath + '/geolocation/v1/location/byaccesspoint';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (mac !== undefined) {
            queryParameters['mac'] = mac;
        }
        if (ssid !== undefined) {
            queryParameters['ssid'] = ssid;
        }
        if (rsid !== undefined) {
            queryParameters['rsid'] = rsid;
        }
        if (speed !== undefined) {
            queryParameters['speed'] = speed;
        }
        if (accessPoint !== undefined) {
            queryParameters['accessPoint'] = accessPoint;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return GeolocationServiceApi;
}());
exports.GeolocationServiceApi = GeolocationServiceApi;
var IdentityProfilesServiceApiApiKeys;
(function (IdentityProfilesServiceApiApiKeys) {
})(IdentityProfilesServiceApiApiKeys = exports.IdentityProfilesServiceApiApiKeys || (exports.IdentityProfilesServiceApiApiKeys = {}));
var IdentityProfilesServiceApi = (function () {
    function IdentityProfilesServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(IdentityProfilesServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityProfilesServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[IdentityProfilesServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(IdentityProfilesServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    IdentityProfilesServiceApi.prototype.getIdentityByAddress = function (address, confidence, maxCandidates, theme, filter) {
        var localVarPath = this.basePath + '/identityprofiles/v1/identity/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getIdentityByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (confidence !== undefined) {
            queryParameters['confidence'] = confidence;
        }
        if (maxCandidates !== undefined) {
            queryParameters['maxCandidates'] = maxCandidates;
        }
        if (theme !== undefined) {
            queryParameters['theme'] = theme;
        }
        if (filter !== undefined) {
            queryParameters['filter'] = filter;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    IdentityProfilesServiceApi.prototype.getIdentityByEmail = function (email, confidence, theme, filter) {
        var localVarPath = this.basePath + '/identityprofiles/v1/identity/byemail';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (email === null || email === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter email was null or undefined when calling getIdentityByEmail." }] } });
        }
        if (email !== undefined) {
            queryParameters['email'] = email;
        }
        if (confidence !== undefined) {
            queryParameters['confidence'] = confidence;
        }
        if (theme !== undefined) {
            queryParameters['theme'] = theme;
        }
        if (filter !== undefined) {
            queryParameters['filter'] = filter;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    IdentityProfilesServiceApi.prototype.getIdentityByTwitter = function (twitter, confidence, theme, filter) {
        var localVarPath = this.basePath + '/identityprofiles/v1/identity/bytwitter';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (twitter === null || twitter === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter twitter was null or undefined when calling getIdentityByTwitter." }] } });
        }
        if (twitter !== undefined) {
            queryParameters['twitter'] = twitter;
        }
        if (confidence !== undefined) {
            queryParameters['confidence'] = confidence;
        }
        if (theme !== undefined) {
            queryParameters['theme'] = theme;
        }
        if (filter !== undefined) {
            queryParameters['filter'] = filter;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return IdentityProfilesServiceApi;
}());
exports.IdentityProfilesServiceApi = IdentityProfilesServiceApi;
var LocalTaxServiceApiApiKeys;
(function (LocalTaxServiceApiApiKeys) {
})(LocalTaxServiceApiApiKeys = exports.LocalTaxServiceApiApiKeys || (exports.LocalTaxServiceApiApiKeys = {}));
var LocalTaxServiceApi = (function () {
    function LocalTaxServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(LocalTaxServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    LocalTaxServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[LocalTaxServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(LocalTaxServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    LocalTaxServiceApi.prototype.getBatchTaxByAddress = function (taxRateTypeId, body) {
        var localVarPath = this.basePath + '/localtax/v1/tax/{taxRateTypeId}/byaddress'
            .replace('{' + 'taxRateTypeId' + '}', String(taxRateTypeId));
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (taxRateTypeId === null || taxRateTypeId === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter taxRateTypeId was null or undefined when calling getBatchTaxByAddress." }] } });
        }
        if (body === null || body === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter body was null or undefined when calling getBatchTaxByAddress." }] } });
        }
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    LocalTaxServiceApi.prototype.getBatchTaxByLocation = function (taxRateTypeId, body) {
        var localVarPath = this.basePath + '/localtax/v1/tax/{taxRateTypeId}/bylocation'
            .replace('{' + 'taxRateTypeId' + '}', String(taxRateTypeId));
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (taxRateTypeId === null || taxRateTypeId === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter taxRateTypeId was null or undefined when calling getBatchTaxByLocation." }] } });
        }
        if (body === null || body === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter body was null or undefined when calling getBatchTaxByLocation." }] } });
        }
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    LocalTaxServiceApi.prototype.getBatchTaxRateByAddress = function (taxRateTypeId, body) {
        var localVarPath = this.basePath + '/localtax/v1/taxrate/{taxRateTypeId}/byaddress'
            .replace('{' + 'taxRateTypeId' + '}', String(taxRateTypeId));
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (taxRateTypeId === null || taxRateTypeId === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter taxRateTypeId was null or undefined when calling getBatchTaxRateByAddress." }] } });
        }
        if (body === null || body === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter body was null or undefined when calling getBatchTaxRateByAddress." }] } });
        }
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    LocalTaxServiceApi.prototype.getBatchTaxRateByLocation = function (taxRateTypeId, body) {
        var localVarPath = this.basePath + '/localtax/v1/taxrate/{taxRateTypeId}/bylocation'
            .replace('{' + 'taxRateTypeId' + '}', String(taxRateTypeId));
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (taxRateTypeId === null || taxRateTypeId === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter taxRateTypeId was null or undefined when calling getBatchTaxRateByLocation." }] } });
        }
        if (body === null || body === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter body was null or undefined when calling getBatchTaxRateByLocation." }] } });
        }
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    LocalTaxServiceApi.prototype.getIPDTaxByAddress = function (address, returnLatLongFields, latLongFormat) {
        var localVarPath = this.basePath + '/localtax/v1/taxdistrict/ipd/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getIPDTaxByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (returnLatLongFields !== undefined) {
            queryParameters['returnLatLongFields'] = returnLatLongFields;
        }
        if (latLongFormat !== undefined) {
            queryParameters['latLongFormat'] = latLongFormat;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    LocalTaxServiceApi.prototype.getIPDTaxByAddressBatch = function (body) {
        var localVarPath = this.basePath + '/localtax/v1/taxdistrict/ipd/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (body === null || body === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter body was null or undefined when calling getIPDTaxByAddressBatch." }] } });
        }
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    LocalTaxServiceApi.prototype.getSpecificTaxByAddress = function (taxRateTypeId, address, purchaseAmount) {
        var localVarPath = this.basePath + '/localtax/v1/tax/{taxRateTypeId}/byaddress'
            .replace('{' + 'taxRateTypeId' + '}', String(taxRateTypeId));
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (taxRateTypeId === null || taxRateTypeId === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter taxRateTypeId was null or undefined when calling getSpecificTaxByAddress." }] } });
        }
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getSpecificTaxByAddress." }] } });
        }
        if (purchaseAmount === null || purchaseAmount === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter purchaseAmount was null or undefined when calling getSpecificTaxByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (purchaseAmount !== undefined) {
            queryParameters['purchaseAmount'] = purchaseAmount;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    LocalTaxServiceApi.prototype.getSpecificTaxByLocation = function (taxRateTypeId, latitude, longitude, purchaseAmount) {
        var localVarPath = this.basePath + '/localtax/v1/tax/{taxRateTypeId}/bylocation'
            .replace('{' + 'taxRateTypeId' + '}', String(taxRateTypeId));
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (taxRateTypeId === null || taxRateTypeId === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter taxRateTypeId was null or undefined when calling getSpecificTaxByLocation." }] } });
        }
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getSpecificTaxByLocation." }] } });
        }
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getSpecificTaxByLocation." }] } });
        }
        if (purchaseAmount === null || purchaseAmount === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter purchaseAmount was null or undefined when calling getSpecificTaxByLocation." }] } });
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (purchaseAmount !== undefined) {
            queryParameters['purchaseAmount'] = purchaseAmount;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    LocalTaxServiceApi.prototype.getSpecificTaxRateByAddress = function (taxRateTypeId, address) {
        var localVarPath = this.basePath + '/localtax/v1/taxrate/{taxRateTypeId}/byaddress'
            .replace('{' + 'taxRateTypeId' + '}', String(taxRateTypeId));
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (taxRateTypeId === null || taxRateTypeId === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter taxRateTypeId was null or undefined when calling getSpecificTaxRateByAddress." }] } });
        }
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getSpecificTaxRateByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    LocalTaxServiceApi.prototype.getSpecificTaxRateByLocation = function (taxRateTypeId, latitude, longitude) {
        var localVarPath = this.basePath + '/localtax/v1/taxrate/{taxRateTypeId}/bylocation'
            .replace('{' + 'taxRateTypeId' + '}', String(taxRateTypeId));
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (taxRateTypeId === null || taxRateTypeId === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter taxRateTypeId was null or undefined when calling getSpecificTaxRateByLocation." }] } });
        }
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getSpecificTaxRateByLocation." }] } });
        }
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getSpecificTaxRateByLocation." }] } });
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return LocalTaxServiceApi;
}());
exports.LocalTaxServiceApi = LocalTaxServiceApi;
var NeighborhoodsServiceApiApiKeys;
(function (NeighborhoodsServiceApiApiKeys) {
})(NeighborhoodsServiceApiApiKeys = exports.NeighborhoodsServiceApiApiKeys || (exports.NeighborhoodsServiceApiApiKeys = {}));
var NeighborhoodsServiceApi = (function () {
    function NeighborhoodsServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(NeighborhoodsServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    NeighborhoodsServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[NeighborhoodsServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(NeighborhoodsServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    NeighborhoodsServiceApi.prototype.getPlaceByLocation = function (longitude, latitude, levelHint) {
        var localVarPath = this.basePath + '/neighborhoods/v1/place/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getPlaceByLocation." }] } });
        }
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getPlaceByLocation." }] } });
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        if (levelHint !== undefined) {
            queryParameters['levelHint'] = levelHint;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return NeighborhoodsServiceApi;
}());
exports.NeighborhoodsServiceApi = NeighborhoodsServiceApi;
var PhoneVerificationServiceApiApiKeys;
(function (PhoneVerificationServiceApiApiKeys) {
})(PhoneVerificationServiceApiApiKeys = exports.PhoneVerificationServiceApiApiKeys || (exports.PhoneVerificationServiceApiApiKeys = {}));
var PhoneVerificationServiceApi = (function () {
    function PhoneVerificationServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(PhoneVerificationServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    PhoneVerificationServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[PhoneVerificationServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(PhoneVerificationServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    PhoneVerificationServiceApi.prototype.phoneVerification = function (phoneNumber, includeNetworkInfo) {
        var localVarPath = this.basePath + '/phoneverification/v1/phoneverification';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (phoneNumber === null || phoneNumber === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter phoneNumber was null or undefined when calling phoneVerification." }] } });
        }
        if (phoneNumber !== undefined) {
            queryParameters['phoneNumber'] = phoneNumber;
        }
        if (includeNetworkInfo !== undefined) {
            queryParameters['includeNetworkInfo'] = includeNetworkInfo;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return PhoneVerificationServiceApi;
}());
exports.PhoneVerificationServiceApi = PhoneVerificationServiceApi;
var PlacesServiceApiApiKeys;
(function (PlacesServiceApiApiKeys) {
})(PlacesServiceApiApiKeys = exports.PlacesServiceApiApiKeys || (exports.PlacesServiceApiApiKeys = {}));
var PlacesServiceApi = (function () {
    function PlacesServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(PlacesServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    PlacesServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[PlacesServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(PlacesServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    PlacesServiceApi.prototype.getCategoryCodeMetadata = function (categoryCode, level) {
        var localVarPath = this.basePath + '/places/v1/metadata/category';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (categoryCode !== undefined) {
            queryParameters['categoryCode'] = categoryCode;
        }
        if (level !== undefined) {
            queryParameters['level'] = level;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    PlacesServiceApi.prototype.getPOIById = function (id) {
        var localVarPath = this.basePath + '/places/v1/poi/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (id === null || id === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter id was null or undefined when calling getPOIById." }] } });
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    PlacesServiceApi.prototype.getPOIsByAddress = function (address, country, name, type, categoryCode, sicCode, maxCandidates, searchRadius, searchRadiusUnit, travelTime, travelTimeUnit, travelDistance, travelDistanceUnit, travelMode, sortBy, fuzzyOnName, page, matchMode, specificMatchOn) {
        var localVarPath = this.basePath + '/places/v1/poi/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getPOIsByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }
        if (type !== undefined) {
            queryParameters['type'] = type;
        }
        if (categoryCode !== undefined) {
            queryParameters['categoryCode'] = categoryCode;
        }
        if (sicCode !== undefined) {
            queryParameters['sicCode'] = sicCode;
        }
        if (maxCandidates !== undefined) {
            queryParameters['maxCandidates'] = maxCandidates;
        }
        if (searchRadius !== undefined) {
            queryParameters['searchRadius'] = searchRadius;
        }
        if (searchRadiusUnit !== undefined) {
            queryParameters['searchRadiusUnit'] = searchRadiusUnit;
        }
        if (travelTime !== undefined) {
            queryParameters['travelTime'] = travelTime;
        }
        if (travelTimeUnit !== undefined) {
            queryParameters['travelTimeUnit'] = travelTimeUnit;
        }
        if (travelDistance !== undefined) {
            queryParameters['travelDistance'] = travelDistance;
        }
        if (travelDistanceUnit !== undefined) {
            queryParameters['travelDistanceUnit'] = travelDistanceUnit;
        }
        if (travelMode !== undefined) {
            queryParameters['travelMode'] = travelMode;
        }
        if (sortBy !== undefined) {
            queryParameters['sortBy'] = sortBy;
        }
        if (fuzzyOnName !== undefined) {
            queryParameters['fuzzyOnName'] = fuzzyOnName;
        }
        if (page !== undefined) {
            queryParameters['page'] = page;
        }
        if (matchMode !== undefined) {
            queryParameters['matchMode'] = matchMode;
        }
        if (specificMatchOn !== undefined) {
            queryParameters['specificMatchOn'] = specificMatchOn;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    PlacesServiceApi.prototype.getPOIsByArea = function (country, areaName3, postcode1, postcode2, name, type, categoryCode, sicCode, maxCandidates, fuzzyOnName, page, matchMode, specificMatchOn) {
        var localVarPath = this.basePath + '/places/v1/poi/byarea';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (country === null || country === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter country was null or undefined when calling getPOIsByArea." }] } });
        }
        if (areaName3 !== undefined) {
            queryParameters['areaName3'] = areaName3;
        }
        if (postcode1 !== undefined) {
            queryParameters['postcode1'] = postcode1;
        }
        if (postcode2 !== undefined) {
            queryParameters['postcode2'] = postcode2;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }
        if (type !== undefined) {
            queryParameters['type'] = type;
        }
        if (categoryCode !== undefined) {
            queryParameters['categoryCode'] = categoryCode;
        }
        if (sicCode !== undefined) {
            queryParameters['sicCode'] = sicCode;
        }
        if (maxCandidates !== undefined) {
            queryParameters['maxCandidates'] = maxCandidates;
        }
        if (fuzzyOnName !== undefined) {
            queryParameters['fuzzyOnName'] = fuzzyOnName;
        }
        if (page !== undefined) {
            queryParameters['page'] = page;
        }
        if (matchMode !== undefined) {
            queryParameters['matchMode'] = matchMode;
        }
        if (specificMatchOn !== undefined) {
            queryParameters['specificMatchOn'] = specificMatchOn;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    PlacesServiceApi.prototype.getPOIsByBoundary = function (accept, contentType, body) {
        var localVarPath = this.basePath + '/places/v1/poi/byboundary';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        headerParams['Accept'] = accept;
        headerParams['Content-Type'] = contentType;
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    PlacesServiceApi.prototype.getPOIsByLocation = function (longitude, latitude, searchText, type, categoryCode, sicCode, maxCandidates, searchRadius, searchRadiusUnit, travelTime, travelTimeUnit, travelDistance, travelDistanceUnit, travelMode, sortBy, fuzzyOnName, page, searchOnNameOnly, matchMode, specificMatchOn) {
        var localVarPath = this.basePath + '/places/v1/poi/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getPOIsByLocation." }] } });
        }
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getPOIsByLocation." }] } });
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        if (searchText !== undefined) {
            queryParameters['searchText'] = searchText;
        }
        if (type !== undefined) {
            queryParameters['type'] = type;
        }
        if (categoryCode !== undefined) {
            queryParameters['categoryCode'] = categoryCode;
        }
        if (sicCode !== undefined) {
            queryParameters['sicCode'] = sicCode;
        }
        if (maxCandidates !== undefined) {
            queryParameters['maxCandidates'] = maxCandidates;
        }
        if (searchRadius !== undefined) {
            queryParameters['searchRadius'] = searchRadius;
        }
        if (searchRadiusUnit !== undefined) {
            queryParameters['searchRadiusUnit'] = searchRadiusUnit;
        }
        if (travelTime !== undefined) {
            queryParameters['travelTime'] = travelTime;
        }
        if (travelTimeUnit !== undefined) {
            queryParameters['travelTimeUnit'] = travelTimeUnit;
        }
        if (travelDistance !== undefined) {
            queryParameters['travelDistance'] = travelDistance;
        }
        if (travelDistanceUnit !== undefined) {
            queryParameters['travelDistanceUnit'] = travelDistanceUnit;
        }
        if (travelMode !== undefined) {
            queryParameters['travelMode'] = travelMode;
        }
        if (sortBy !== undefined) {
            queryParameters['sortBy'] = sortBy;
        }
        if (fuzzyOnName !== undefined) {
            queryParameters['fuzzyOnName'] = fuzzyOnName;
        }
        if (page !== undefined) {
            queryParameters['page'] = page;
        }
        if (searchOnNameOnly !== undefined) {
            queryParameters['searchOnNameOnly'] = searchOnNameOnly;
        }
        if (matchMode !== undefined) {
            queryParameters['matchMode'] = matchMode;
        }
        if (specificMatchOn !== undefined) {
            queryParameters['specificMatchOn'] = specificMatchOn;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    PlacesServiceApi.prototype.getPOIsCount = function (contentType, body) {
        var localVarPath = this.basePath + '/places/v1/poicount';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        headerParams['Content-Type'] = contentType;
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    PlacesServiceApi.prototype.getSICMetadata = function (sicCode, level) {
        var localVarPath = this.basePath + '/places/v1/metadata/sic';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (sicCode !== undefined) {
            queryParameters['sicCode'] = sicCode;
        }
        if (level !== undefined) {
            queryParameters['level'] = level;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    PlacesServiceApi.prototype.poisAutocomplete = function (longitude, latitude, searchText, searchRadius, searchRadiusUnit, travelTime, travelTimeUnit, travelDistance, travelDistanceUnit, travelMode, country, areaName1, areaName3, postcode1, postcode2, ipAddress, autoDetectLocation, type, categoryCode, sicCode, maxCandidates, sortBy, searchOnNameOnly, matchMode, specificMatchOn) {
        var localVarPath = this.basePath + '/places/v1/poi/autocomplete';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        if (searchText !== undefined) {
            queryParameters['searchText'] = searchText;
        }
        if (searchRadius !== undefined) {
            queryParameters['searchRadius'] = searchRadius;
        }
        if (searchRadiusUnit !== undefined) {
            queryParameters['searchRadiusUnit'] = searchRadiusUnit;
        }
        if (travelTime !== undefined) {
            queryParameters['travelTime'] = travelTime;
        }
        if (travelTimeUnit !== undefined) {
            queryParameters['travelTimeUnit'] = travelTimeUnit;
        }
        if (travelDistance !== undefined) {
            queryParameters['travelDistance'] = travelDistance;
        }
        if (travelDistanceUnit !== undefined) {
            queryParameters['travelDistanceUnit'] = travelDistanceUnit;
        }
        if (travelMode !== undefined) {
            queryParameters['travelMode'] = travelMode;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        if (areaName1 !== undefined) {
            queryParameters['areaName1'] = areaName1;
        }
        if (areaName3 !== undefined) {
            queryParameters['areaName3'] = areaName3;
        }
        if (postcode1 !== undefined) {
            queryParameters['postcode1'] = postcode1;
        }
        if (postcode2 !== undefined) {
            queryParameters['postcode2'] = postcode2;
        }
        if (ipAddress !== undefined) {
            queryParameters['ipAddress'] = ipAddress;
        }
        if (autoDetectLocation !== undefined) {
            queryParameters['autoDetectLocation'] = autoDetectLocation;
        }
        if (type !== undefined) {
            queryParameters['type'] = type;
        }
        if (categoryCode !== undefined) {
            queryParameters['categoryCode'] = categoryCode;
        }
        if (sicCode !== undefined) {
            queryParameters['sicCode'] = sicCode;
        }
        if (maxCandidates !== undefined) {
            queryParameters['maxCandidates'] = maxCandidates;
        }
        if (sortBy !== undefined) {
            queryParameters['sortBy'] = sortBy;
        }
        if (searchOnNameOnly !== undefined) {
            queryParameters['searchOnNameOnly'] = searchOnNameOnly;
        }
        if (matchMode !== undefined) {
            queryParameters['matchMode'] = matchMode;
        }
        if (specificMatchOn !== undefined) {
            queryParameters['specificMatchOn'] = specificMatchOn;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return PlacesServiceApi;
}());
exports.PlacesServiceApi = PlacesServiceApi;
var PropertyInformationServiceApiApiKeys;
(function (PropertyInformationServiceApiApiKeys) {
})(PropertyInformationServiceApiApiKeys = exports.PropertyInformationServiceApiApiKeys || (exports.PropertyInformationServiceApiApiKeys = {}));
var PropertyInformationServiceApi = (function () {
    function PropertyInformationServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(PropertyInformationServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    PropertyInformationServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[PropertyInformationServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(PropertyInformationServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    PropertyInformationServiceApi.prototype.getParcelBoundaryByAddress = function (address, accept) {
        var localVarPath = this.basePath + '/property/v1/parcelboundary/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getParcelBoundaryByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        headerParams['Accept'] = accept;
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    PropertyInformationServiceApi.prototype.getParcelBoundaryByLocation = function (longitude, latitude, accept) {
        var localVarPath = this.basePath + '/property/v1/parcelboundary/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getParcelBoundaryByLocation." }] } });
        }
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getParcelBoundaryByLocation." }] } });
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        headerParams['Accept'] = accept;
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    PropertyInformationServiceApi.prototype.getPropertyAttributesByAddress = function (address, attributeFilter) {
        var localVarPath = this.basePath + '/property/v2/attributes/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (attributeFilter !== undefined) {
            queryParameters['attributeFilter'] = attributeFilter;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    PropertyInformationServiceApi.prototype.getPropertyAttributesByAddressBatch = function (body) {
        var localVarPath = this.basePath + '/property/v2/attributes/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return PropertyInformationServiceApi;
}());
exports.PropertyInformationServiceApi = PropertyInformationServiceApi;
var RisksServiceApiApiKeys;
(function (RisksServiceApiApiKeys) {
})(RisksServiceApiApiKeys = exports.RisksServiceApiApiKeys || (exports.RisksServiceApiApiKeys = {}));
var RisksServiceApi = (function () {
    function RisksServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(RisksServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    RisksServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[RisksServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(RisksServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    RisksServiceApi.prototype.getCrimeRiskByAddress = function (address, type, includeGeometry) {
        var localVarPath = this.basePath + '/risks/v1/crime/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getCrimeRiskByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (type !== undefined) {
            queryParameters['type'] = type;
        }
        if (includeGeometry !== undefined) {
            queryParameters['includeGeometry'] = includeGeometry;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getCrimeRiskByAddressBatch = function (body) {
        var localVarPath = this.basePath + '/risks/v1/crime/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getCrimeRiskByLocation = function (longitude, latitude, type, includeGeometry) {
        var localVarPath = this.basePath + '/risks/v1/crime/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getCrimeRiskByLocation." }] } });
        }
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getCrimeRiskByLocation." }] } });
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        if (type !== undefined) {
            queryParameters['type'] = type;
        }
        if (includeGeometry !== undefined) {
            queryParameters['includeGeometry'] = includeGeometry;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getCrimeRiskByLocationBatch = function (body) {
        var localVarPath = this.basePath + '/risks/v1/crime/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getDistanceToFloodHazardByAddress = function (address, maxCandidates, waterBodyType, searchDistance, searchDistanceUnit) {
        var localVarPath = this.basePath + '/risks/v1/shoreline/distancetofloodhazard/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getDistanceToFloodHazardByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (maxCandidates !== undefined) {
            queryParameters['maxCandidates'] = maxCandidates;
        }
        if (waterBodyType !== undefined) {
            queryParameters['waterBodyType'] = waterBodyType;
        }
        if (searchDistance !== undefined) {
            queryParameters['searchDistance'] = searchDistance;
        }
        if (searchDistanceUnit !== undefined) {
            queryParameters['searchDistanceUnit'] = searchDistanceUnit;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getDistanceToFloodHazardByAddressBatch = function (body) {
        var localVarPath = this.basePath + '/risks/v1/shoreline/distancetofloodhazard/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getDistanceToFloodHazardByLocation = function (longitude, latitude, maxCandidates, waterBodyType, searchDistance, searchDistanceUnit) {
        var localVarPath = this.basePath + '/risks/v1/shoreline/distancetofloodhazard/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getDistanceToFloodHazardByLocation." }] } });
        }
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getDistanceToFloodHazardByLocation." }] } });
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        if (maxCandidates !== undefined) {
            queryParameters['maxCandidates'] = maxCandidates;
        }
        if (waterBodyType !== undefined) {
            queryParameters['waterBodyType'] = waterBodyType;
        }
        if (searchDistance !== undefined) {
            queryParameters['searchDistance'] = searchDistance;
        }
        if (searchDistanceUnit !== undefined) {
            queryParameters['searchDistanceUnit'] = searchDistanceUnit;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getDistanceToFloodHazardByLocationBatch = function (body) {
        var localVarPath = this.basePath + '/risks/v1/shoreline/distancetofloodhazard/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getEarthquakeHistory = function (postCode, startDate, endDate, minMagnitude, maxMagnitude, maxCandidates) {
        var localVarPath = this.basePath + '/risks/v1/earthquakehistory';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (postCode === null || postCode === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter postCode was null or undefined when calling getEarthquakeHistory." }] } });
        }
        if (postCode !== undefined) {
            queryParameters['postCode'] = postCode;
        }
        if (startDate !== undefined) {
            queryParameters['startDate'] = startDate;
        }
        if (endDate !== undefined) {
            queryParameters['endDate'] = endDate;
        }
        if (minMagnitude !== undefined) {
            queryParameters['minMagnitude'] = minMagnitude;
        }
        if (maxMagnitude !== undefined) {
            queryParameters['maxMagnitude'] = maxMagnitude;
        }
        if (maxCandidates !== undefined) {
            queryParameters['maxCandidates'] = maxCandidates;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getEarthquakeRiskByAddress = function (address, richterValue, includeGeometry) {
        var localVarPath = this.basePath + '/risks/v1/earthquake/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getEarthquakeRiskByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (richterValue !== undefined) {
            queryParameters['richterValue'] = richterValue;
        }
        if (includeGeometry !== undefined) {
            queryParameters['includeGeometry'] = includeGeometry;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getEarthquakeRiskByAddressBatch = function (body) {
        var localVarPath = this.basePath + '/risks/v1/earthquake/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getEarthquakeRiskByLocation = function (longitude, latitude, richterValue, includeGeometry) {
        var localVarPath = this.basePath + '/risks/v1/earthquake/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getEarthquakeRiskByLocation." }] } });
        }
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getEarthquakeRiskByLocation." }] } });
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        if (richterValue !== undefined) {
            queryParameters['richterValue'] = richterValue;
        }
        if (includeGeometry !== undefined) {
            queryParameters['includeGeometry'] = includeGeometry;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getEarthquakeRiskByLocationBatch = function (body) {
        var localVarPath = this.basePath + '/risks/v1/earthquake/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getFireHistory = function (postCode, startDate, endDate, maxCandidates) {
        var localVarPath = this.basePath + '/risks/v1/firehistory';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (postCode === null || postCode === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter postCode was null or undefined when calling getFireHistory." }] } });
        }
        if (postCode !== undefined) {
            queryParameters['postCode'] = postCode;
        }
        if (startDate !== undefined) {
            queryParameters['startDate'] = startDate;
        }
        if (endDate !== undefined) {
            queryParameters['endDate'] = endDate;
        }
        if (maxCandidates !== undefined) {
            queryParameters['maxCandidates'] = maxCandidates;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getFireRiskByAddress = function (address) {
        var localVarPath = this.basePath + '/risks/v1/fire/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getFireRiskByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getFireRiskByAddressBatch = function (body) {
        var localVarPath = this.basePath + '/risks/v1/fire/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getFireRiskByLocation = function (longitude, latitude) {
        var localVarPath = this.basePath + '/risks/v1/fire/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getFireRiskByLocation." }] } });
        }
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getFireRiskByLocation." }] } });
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getFireRiskByLocationBatch = function (body) {
        var localVarPath = this.basePath + '/risks/v1/fire/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getFireStationByAddress = function (address, maxCandidates, travelTime, travelTimeUnit, travelDistance, travelDistanceUnit, sortBy, historicTrafficTimeBucket) {
        var localVarPath = this.basePath + '/risks/v1/firestation/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getFireStationByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (maxCandidates !== undefined) {
            queryParameters['maxCandidates'] = maxCandidates;
        }
        if (travelTime !== undefined) {
            queryParameters['travelTime'] = travelTime;
        }
        if (travelTimeUnit !== undefined) {
            queryParameters['travelTimeUnit'] = travelTimeUnit;
        }
        if (travelDistance !== undefined) {
            queryParameters['travelDistance'] = travelDistance;
        }
        if (travelDistanceUnit !== undefined) {
            queryParameters['travelDistanceUnit'] = travelDistanceUnit;
        }
        if (sortBy !== undefined) {
            queryParameters['sortBy'] = sortBy;
        }
        if (historicTrafficTimeBucket !== undefined) {
            queryParameters['historicTrafficTimeBucket'] = historicTrafficTimeBucket;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getFireStationByLocation = function (longitude, latitude, maxCandidates, travelTime, travelTimeUnit, travelDistance, travelDistanceUnit, sortBy, historicTrafficTimeBucket) {
        var localVarPath = this.basePath + '/risks/v1/firestation/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getFireStationByLocation." }] } });
        }
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getFireStationByLocation." }] } });
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        if (maxCandidates !== undefined) {
            queryParameters['maxCandidates'] = maxCandidates;
        }
        if (travelTime !== undefined) {
            queryParameters['travelTime'] = travelTime;
        }
        if (travelTimeUnit !== undefined) {
            queryParameters['travelTimeUnit'] = travelTimeUnit;
        }
        if (travelDistance !== undefined) {
            queryParameters['travelDistance'] = travelDistance;
        }
        if (travelDistanceUnit !== undefined) {
            queryParameters['travelDistanceUnit'] = travelDistanceUnit;
        }
        if (sortBy !== undefined) {
            queryParameters['sortBy'] = sortBy;
        }
        if (historicTrafficTimeBucket !== undefined) {
            queryParameters['historicTrafficTimeBucket'] = historicTrafficTimeBucket;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getFloodRiskByAddress = function (address, includeZoneDesc, includeGeometry) {
        var localVarPath = this.basePath + '/risks/v1/flood/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getFloodRiskByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (includeZoneDesc !== undefined) {
            queryParameters['includeZoneDesc'] = includeZoneDesc;
        }
        if (includeGeometry !== undefined) {
            queryParameters['includeGeometry'] = includeGeometry;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getFloodRiskByAddressBatch = function (body) {
        var localVarPath = this.basePath + '/risks/v1/flood/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getFloodRiskByLocation = function (longitude, latitude, includeZoneDesc, includeGeometry) {
        var localVarPath = this.basePath + '/risks/v1/flood/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getFloodRiskByLocation." }] } });
        }
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getFloodRiskByLocation." }] } });
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        if (includeZoneDesc !== undefined) {
            queryParameters['includeZoneDesc'] = includeZoneDesc;
        }
        if (includeGeometry !== undefined) {
            queryParameters['includeGeometry'] = includeGeometry;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RisksServiceApi.prototype.getFloodRiskByLocationBatch = function (body) {
        var localVarPath = this.basePath + '/risks/v1/flood/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return RisksServiceApi;
}());
exports.RisksServiceApi = RisksServiceApi;
var RoutingServiceApiApiKeys;
(function (RoutingServiceApiApiKeys) {
})(RoutingServiceApiApiKeys = exports.RoutingServiceApiApiKeys || (exports.RoutingServiceApiApiKeys = {}));
var RoutingServiceApi = (function () {
    function RoutingServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(RoutingServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    RoutingServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[RoutingServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(RoutingServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    RoutingServiceApi.prototype.getRouteByAddress = function (startAddress, endAddress, db, country, intermediateAddresses, oip, destinationSrs, optimizeBy, returnDistance, distanceUnit, returnTime, timeUnit, language, directionsStyle, segmentGeometryStyle, primaryNameOnly, majorRoads, historicTrafficTimeBucket, returnDirectionGeometry, useCvr, looseningBarrierRestrictions, vehicleType, weight, weightUnit, height, heightUnit, length, lengthUnit, width, widthUnit, returnIntermediatePoints) {
        var localVarPath = this.basePath + '/routing/v1/route/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (startAddress === null || startAddress === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter startAddress was null or undefined when calling getRouteByAddress." }] } });
        }
        if (endAddress === null || endAddress === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter endAddress was null or undefined when calling getRouteByAddress." }] } });
        }
        if (startAddress !== undefined) {
            queryParameters['startAddress'] = startAddress;
        }
        if (endAddress !== undefined) {
            queryParameters['endAddress'] = endAddress;
        }
        if (db !== undefined) {
            queryParameters['db'] = db;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        if (intermediateAddresses !== undefined) {
            queryParameters['intermediateAddresses'] = intermediateAddresses;
        }
        if (oip !== undefined) {
            queryParameters['oip'] = oip;
        }
        if (destinationSrs !== undefined) {
            queryParameters['destinationSrs'] = destinationSrs;
        }
        if (optimizeBy !== undefined) {
            queryParameters['optimizeBy'] = optimizeBy;
        }
        if (returnDistance !== undefined) {
            queryParameters['returnDistance'] = returnDistance;
        }
        if (distanceUnit !== undefined) {
            queryParameters['distanceUnit'] = distanceUnit;
        }
        if (returnTime !== undefined) {
            queryParameters['returnTime'] = returnTime;
        }
        if (timeUnit !== undefined) {
            queryParameters['timeUnit'] = timeUnit;
        }
        if (language !== undefined) {
            queryParameters['language'] = language;
        }
        if (directionsStyle !== undefined) {
            queryParameters['directionsStyle'] = directionsStyle;
        }
        if (segmentGeometryStyle !== undefined) {
            queryParameters['segmentGeometryStyle'] = segmentGeometryStyle;
        }
        if (primaryNameOnly !== undefined) {
            queryParameters['primaryNameOnly'] = primaryNameOnly;
        }
        if (majorRoads !== undefined) {
            queryParameters['majorRoads'] = majorRoads;
        }
        if (historicTrafficTimeBucket !== undefined) {
            queryParameters['historicTrafficTimeBucket'] = historicTrafficTimeBucket;
        }
        if (returnDirectionGeometry !== undefined) {
            queryParameters['returnDirectionGeometry'] = returnDirectionGeometry;
        }
        if (useCvr !== undefined) {
            queryParameters['useCvr'] = useCvr;
        }
        if (looseningBarrierRestrictions !== undefined) {
            queryParameters['looseningBarrierRestrictions'] = looseningBarrierRestrictions;
        }
        if (vehicleType !== undefined) {
            queryParameters['vehicleType'] = vehicleType;
        }
        if (weight !== undefined) {
            queryParameters['weight'] = weight;
        }
        if (weightUnit !== undefined) {
            queryParameters['weightUnit'] = weightUnit;
        }
        if (height !== undefined) {
            queryParameters['height'] = height;
        }
        if (heightUnit !== undefined) {
            queryParameters['heightUnit'] = heightUnit;
        }
        if (length !== undefined) {
            queryParameters['length'] = length;
        }
        if (lengthUnit !== undefined) {
            queryParameters['lengthUnit'] = lengthUnit;
        }
        if (width !== undefined) {
            queryParameters['width'] = width;
        }
        if (widthUnit !== undefined) {
            queryParameters['widthUnit'] = widthUnit;
        }
        if (returnIntermediatePoints !== undefined) {
            queryParameters['returnIntermediatePoints'] = returnIntermediatePoints;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RoutingServiceApi.prototype.getRouteByLocation = function (startPoint, endPoint, db, intermediatePoints, oip, destinationSrs, optimizeBy, returnDistance, distanceUnit, returnTime, timeUnit, language, directionsStyle, segmentGeometryStyle, primaryNameOnly, majorRoads, historicTrafficTimeBucket, returnDirectionGeometry, useCvr, looseningBarrierRestrictions, vehicleType, weight, weightUnit, height, heightUnit, length, lengthUnit, width, widthUnit, returnIntermediatePoints) {
        var localVarPath = this.basePath + '/routing/v1/route/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (startPoint === null || startPoint === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter startPoint was null or undefined when calling getRouteByLocation." }] } });
        }
        if (endPoint === null || endPoint === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter endPoint was null or undefined when calling getRouteByLocation." }] } });
        }
        if (startPoint !== undefined) {
            queryParameters['startPoint'] = startPoint;
        }
        if (endPoint !== undefined) {
            queryParameters['endPoint'] = endPoint;
        }
        if (db !== undefined) {
            queryParameters['db'] = db;
        }
        if (intermediatePoints !== undefined) {
            queryParameters['intermediatePoints'] = intermediatePoints;
        }
        if (oip !== undefined) {
            queryParameters['oip'] = oip;
        }
        if (destinationSrs !== undefined) {
            queryParameters['destinationSrs'] = destinationSrs;
        }
        if (optimizeBy !== undefined) {
            queryParameters['optimizeBy'] = optimizeBy;
        }
        if (returnDistance !== undefined) {
            queryParameters['returnDistance'] = returnDistance;
        }
        if (distanceUnit !== undefined) {
            queryParameters['distanceUnit'] = distanceUnit;
        }
        if (returnTime !== undefined) {
            queryParameters['returnTime'] = returnTime;
        }
        if (timeUnit !== undefined) {
            queryParameters['timeUnit'] = timeUnit;
        }
        if (language !== undefined) {
            queryParameters['language'] = language;
        }
        if (directionsStyle !== undefined) {
            queryParameters['directionsStyle'] = directionsStyle;
        }
        if (segmentGeometryStyle !== undefined) {
            queryParameters['segmentGeometryStyle'] = segmentGeometryStyle;
        }
        if (primaryNameOnly !== undefined) {
            queryParameters['primaryNameOnly'] = primaryNameOnly;
        }
        if (majorRoads !== undefined) {
            queryParameters['majorRoads'] = majorRoads;
        }
        if (historicTrafficTimeBucket !== undefined) {
            queryParameters['historicTrafficTimeBucket'] = historicTrafficTimeBucket;
        }
        if (returnDirectionGeometry !== undefined) {
            queryParameters['returnDirectionGeometry'] = returnDirectionGeometry;
        }
        if (useCvr !== undefined) {
            queryParameters['useCvr'] = useCvr;
        }
        if (looseningBarrierRestrictions !== undefined) {
            queryParameters['looseningBarrierRestrictions'] = looseningBarrierRestrictions;
        }
        if (vehicleType !== undefined) {
            queryParameters['vehicleType'] = vehicleType;
        }
        if (weight !== undefined) {
            queryParameters['weight'] = weight;
        }
        if (weightUnit !== undefined) {
            queryParameters['weightUnit'] = weightUnit;
        }
        if (height !== undefined) {
            queryParameters['height'] = height;
        }
        if (heightUnit !== undefined) {
            queryParameters['heightUnit'] = heightUnit;
        }
        if (length !== undefined) {
            queryParameters['length'] = length;
        }
        if (lengthUnit !== undefined) {
            queryParameters['lengthUnit'] = lengthUnit;
        }
        if (width !== undefined) {
            queryParameters['width'] = width;
        }
        if (widthUnit !== undefined) {
            queryParameters['widthUnit'] = widthUnit;
        }
        if (returnIntermediatePoints !== undefined) {
            queryParameters['returnIntermediatePoints'] = returnIntermediatePoints;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RoutingServiceApi.prototype.getTravelCostMatrixByAddress = function (startAddresses, endAddresses, db, country, optimizeBy, returnDistance, destinationSrs, distanceUnit, returnTime, timeUnit, majorRoads, returnOptimalRoutesOnly, historicTrafficTimeBucket, useCvr, looseningBarrierRestrictions, vehicleType, weight, weightUnit, height, heightUnit, length, lengthUnit, width, widthUnit) {
        var localVarPath = this.basePath + '/routing/v1/travelcostmatrix/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (startAddresses === null || startAddresses === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter startAddresses was null or undefined when calling getTravelCostMatrixByAddress." }] } });
        }
        if (endAddresses === null || endAddresses === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter endAddresses was null or undefined when calling getTravelCostMatrixByAddress." }] } });
        }
        if (startAddresses !== undefined) {
            queryParameters['startAddresses'] = startAddresses;
        }
        if (endAddresses !== undefined) {
            queryParameters['endAddresses'] = endAddresses;
        }
        if (db !== undefined) {
            queryParameters['db'] = db;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        if (optimizeBy !== undefined) {
            queryParameters['optimizeBy'] = optimizeBy;
        }
        if (returnDistance !== undefined) {
            queryParameters['returnDistance'] = returnDistance;
        }
        if (destinationSrs !== undefined) {
            queryParameters['destinationSrs'] = destinationSrs;
        }
        if (distanceUnit !== undefined) {
            queryParameters['distanceUnit'] = distanceUnit;
        }
        if (returnTime !== undefined) {
            queryParameters['returnTime'] = returnTime;
        }
        if (timeUnit !== undefined) {
            queryParameters['timeUnit'] = timeUnit;
        }
        if (majorRoads !== undefined) {
            queryParameters['majorRoads'] = majorRoads;
        }
        if (returnOptimalRoutesOnly !== undefined) {
            queryParameters['returnOptimalRoutesOnly'] = returnOptimalRoutesOnly;
        }
        if (historicTrafficTimeBucket !== undefined) {
            queryParameters['historicTrafficTimeBucket'] = historicTrafficTimeBucket;
        }
        if (useCvr !== undefined) {
            queryParameters['useCvr'] = useCvr;
        }
        if (looseningBarrierRestrictions !== undefined) {
            queryParameters['looseningBarrierRestrictions'] = looseningBarrierRestrictions;
        }
        if (vehicleType !== undefined) {
            queryParameters['vehicleType'] = vehicleType;
        }
        if (weight !== undefined) {
            queryParameters['weight'] = weight;
        }
        if (weightUnit !== undefined) {
            queryParameters['weightUnit'] = weightUnit;
        }
        if (height !== undefined) {
            queryParameters['height'] = height;
        }
        if (heightUnit !== undefined) {
            queryParameters['heightUnit'] = heightUnit;
        }
        if (length !== undefined) {
            queryParameters['length'] = length;
        }
        if (lengthUnit !== undefined) {
            queryParameters['lengthUnit'] = lengthUnit;
        }
        if (width !== undefined) {
            queryParameters['width'] = width;
        }
        if (widthUnit !== undefined) {
            queryParameters['widthUnit'] = widthUnit;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    RoutingServiceApi.prototype.getTravelCostMatrixByLocation = function (startPoints, endPoints, db, optimizeBy, returnDistance, destinationSrs, distanceUnit, returnTime, timeUnit, majorRoads, returnOptimalRoutesOnly, historicTrafficTimeBucket, useCvr, looseningBarrierRestrictions, vehicleType, weight, weightUnit, height, heightUnit, length, lengthUnit, width, widthUnit) {
        var localVarPath = this.basePath + '/routing/v1/travelcostmatrix/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (startPoints === null || startPoints === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter startPoints was null or undefined when calling getTravelCostMatrixByLocation." }] } });
        }
        if (endPoints === null || endPoints === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter endPoints was null or undefined when calling getTravelCostMatrixByLocation." }] } });
        }
        if (startPoints !== undefined) {
            queryParameters['startPoints'] = startPoints;
        }
        if (endPoints !== undefined) {
            queryParameters['endPoints'] = endPoints;
        }
        if (db !== undefined) {
            queryParameters['db'] = db;
        }
        if (optimizeBy !== undefined) {
            queryParameters['optimizeBy'] = optimizeBy;
        }
        if (returnDistance !== undefined) {
            queryParameters['returnDistance'] = returnDistance;
        }
        if (destinationSrs !== undefined) {
            queryParameters['destinationSrs'] = destinationSrs;
        }
        if (distanceUnit !== undefined) {
            queryParameters['distanceUnit'] = distanceUnit;
        }
        if (returnTime !== undefined) {
            queryParameters['returnTime'] = returnTime;
        }
        if (timeUnit !== undefined) {
            queryParameters['timeUnit'] = timeUnit;
        }
        if (majorRoads !== undefined) {
            queryParameters['majorRoads'] = majorRoads;
        }
        if (returnOptimalRoutesOnly !== undefined) {
            queryParameters['returnOptimalRoutesOnly'] = returnOptimalRoutesOnly;
        }
        if (historicTrafficTimeBucket !== undefined) {
            queryParameters['historicTrafficTimeBucket'] = historicTrafficTimeBucket;
        }
        if (useCvr !== undefined) {
            queryParameters['useCvr'] = useCvr;
        }
        if (looseningBarrierRestrictions !== undefined) {
            queryParameters['looseningBarrierRestrictions'] = looseningBarrierRestrictions;
        }
        if (vehicleType !== undefined) {
            queryParameters['vehicleType'] = vehicleType;
        }
        if (weight !== undefined) {
            queryParameters['weight'] = weight;
        }
        if (weightUnit !== undefined) {
            queryParameters['weightUnit'] = weightUnit;
        }
        if (height !== undefined) {
            queryParameters['height'] = height;
        }
        if (heightUnit !== undefined) {
            queryParameters['heightUnit'] = heightUnit;
        }
        if (length !== undefined) {
            queryParameters['length'] = length;
        }
        if (lengthUnit !== undefined) {
            queryParameters['lengthUnit'] = lengthUnit;
        }
        if (width !== undefined) {
            queryParameters['width'] = width;
        }
        if (widthUnit !== undefined) {
            queryParameters['widthUnit'] = widthUnit;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return RoutingServiceApi;
}());
exports.RoutingServiceApi = RoutingServiceApi;
var SchoolsServiceApiApiKeys;
(function (SchoolsServiceApiApiKeys) {
})(SchoolsServiceApiApiKeys = exports.SchoolsServiceApiApiKeys || (exports.SchoolsServiceApiApiKeys = {}));
var SchoolsServiceApi = (function () {
    function SchoolsServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(SchoolsServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    SchoolsServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[SchoolsServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(SchoolsServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    SchoolsServiceApi.prototype.getSchoolsByAddress = function (address, edLevel, schoolType, schoolSubType, gender, assignedSchoolsOnly, districtSchoolsOnly, searchRadius, searchRadiusUnit, travelTime, travelTimeUnit, travelDistance, travelDistanceUnit, travelMode, maxCandidates) {
        var localVarPath = this.basePath + '/schools/v1/school/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getSchoolsByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (edLevel !== undefined) {
            queryParameters['edLevel'] = edLevel;
        }
        if (schoolType !== undefined) {
            queryParameters['schoolType'] = schoolType;
        }
        if (schoolSubType !== undefined) {
            queryParameters['schoolSubType'] = schoolSubType;
        }
        if (gender !== undefined) {
            queryParameters['gender'] = gender;
        }
        if (assignedSchoolsOnly !== undefined) {
            queryParameters['assignedSchoolsOnly'] = assignedSchoolsOnly;
        }
        if (districtSchoolsOnly !== undefined) {
            queryParameters['districtSchoolsOnly'] = districtSchoolsOnly;
        }
        if (searchRadius !== undefined) {
            queryParameters['searchRadius'] = searchRadius;
        }
        if (searchRadiusUnit !== undefined) {
            queryParameters['searchRadiusUnit'] = searchRadiusUnit;
        }
        if (travelTime !== undefined) {
            queryParameters['travelTime'] = travelTime;
        }
        if (travelTimeUnit !== undefined) {
            queryParameters['travelTimeUnit'] = travelTimeUnit;
        }
        if (travelDistance !== undefined) {
            queryParameters['travelDistance'] = travelDistance;
        }
        if (travelDistanceUnit !== undefined) {
            queryParameters['travelDistanceUnit'] = travelDistanceUnit;
        }
        if (travelMode !== undefined) {
            queryParameters['travelMode'] = travelMode;
        }
        if (maxCandidates !== undefined) {
            queryParameters['maxCandidates'] = maxCandidates;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return SchoolsServiceApi;
}());
exports.SchoolsServiceApi = SchoolsServiceApi;
var StreetsServiceApiApiKeys;
(function (StreetsServiceApiApiKeys) {
})(StreetsServiceApiApiKeys = exports.StreetsServiceApiApiKeys || (exports.StreetsServiceApiApiKeys = {}));
var StreetsServiceApi = (function () {
    function StreetsServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(StreetsServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    StreetsServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[StreetsServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(StreetsServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    StreetsServiceApi.prototype.getIntersectionByAddress = function (address, roadClass, driveTime, driveTimeUnit, searchRadius, searchRadiusUnit, historicSpeed, maxCandidates) {
        var localVarPath = this.basePath + '/streets/v1/intersection/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getIntersectionByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (roadClass !== undefined) {
            queryParameters['roadClass'] = roadClass;
        }
        if (driveTime !== undefined) {
            queryParameters['driveTime'] = driveTime;
        }
        if (driveTimeUnit !== undefined) {
            queryParameters['driveTimeUnit'] = driveTimeUnit;
        }
        if (searchRadius !== undefined) {
            queryParameters['searchRadius'] = searchRadius;
        }
        if (searchRadiusUnit !== undefined) {
            queryParameters['searchRadiusUnit'] = searchRadiusUnit;
        }
        if (historicSpeed !== undefined) {
            queryParameters['historicSpeed'] = historicSpeed;
        }
        if (maxCandidates !== undefined) {
            queryParameters['maxCandidates'] = maxCandidates;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    StreetsServiceApi.prototype.getIntersectionByLocation = function (longitude, latitude, roadClass, driveTime, driveTimeUnit, searchRadius, searchRadiusUnit, historicSpeed, maxCandidates) {
        var localVarPath = this.basePath + '/streets/v1/intersection/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getIntersectionByLocation." }] } });
        }
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getIntersectionByLocation." }] } });
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        if (roadClass !== undefined) {
            queryParameters['roadClass'] = roadClass;
        }
        if (driveTime !== undefined) {
            queryParameters['driveTime'] = driveTime;
        }
        if (driveTimeUnit !== undefined) {
            queryParameters['driveTimeUnit'] = driveTimeUnit;
        }
        if (searchRadius !== undefined) {
            queryParameters['searchRadius'] = searchRadius;
        }
        if (searchRadiusUnit !== undefined) {
            queryParameters['searchRadiusUnit'] = searchRadiusUnit;
        }
        if (historicSpeed !== undefined) {
            queryParameters['historicSpeed'] = historicSpeed;
        }
        if (maxCandidates !== undefined) {
            queryParameters['maxCandidates'] = maxCandidates;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    StreetsServiceApi.prototype.getNearestSpeedLimit = function (path) {
        var localVarPath = this.basePath + '/streets/v1/speedlimit';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (path === null || path === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter path was null or undefined when calling getNearestSpeedLimit." }] } });
        }
        if (path !== undefined) {
            queryParameters['path'] = path;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return StreetsServiceApi;
}());
exports.StreetsServiceApi = StreetsServiceApi;
var TelecommInfoServiceApiApiKeys;
(function (TelecommInfoServiceApiApiKeys) {
})(TelecommInfoServiceApiApiKeys = exports.TelecommInfoServiceApiApiKeys || (exports.TelecommInfoServiceApiApiKeys = {}));
var TelecommInfoServiceApi = (function () {
    function TelecommInfoServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(TelecommInfoServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    TelecommInfoServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[TelecommInfoServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(TelecommInfoServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    TelecommInfoServiceApi.prototype.getRateCenterByAddress = function (address, country, areaCodeInfo, level) {
        var localVarPath = this.basePath + '/telecomm/v1/ratecenter/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getRateCenterByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        if (areaCodeInfo !== undefined) {
            queryParameters['AreaCodeInfo'] = areaCodeInfo;
        }
        if (level !== undefined) {
            queryParameters['level'] = level;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    TelecommInfoServiceApi.prototype.getRateCenterByLocation = function (longitude, latitude, areaCodeInfo, level) {
        var localVarPath = this.basePath + '/telecomm/v1/ratecenter/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getRateCenterByLocation." }] } });
        }
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getRateCenterByLocation." }] } });
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        if (areaCodeInfo !== undefined) {
            queryParameters['AreaCodeInfo'] = areaCodeInfo;
        }
        if (level !== undefined) {
            queryParameters['level'] = level;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return TelecommInfoServiceApi;
}());
exports.TelecommInfoServiceApi = TelecommInfoServiceApi;
var TimeZoneServiceApiApiKeys;
(function (TimeZoneServiceApiApiKeys) {
})(TimeZoneServiceApiApiKeys = exports.TimeZoneServiceApiApiKeys || (exports.TimeZoneServiceApiApiKeys = {}));
var TimeZoneServiceApi = (function () {
    function TimeZoneServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(TimeZoneServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    TimeZoneServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[TimeZoneServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(TimeZoneServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    TimeZoneServiceApi.prototype.getBatchTimezoneByAddress = function (body) {
        var localVarPath = this.basePath + '/timezone/v1/timezone/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    TimeZoneServiceApi.prototype.getBatchTimezoneByLocation = function (body) {
        var localVarPath = this.basePath + '/timezone/v1/timezone/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    TimeZoneServiceApi.prototype.getTimezoneByAddress = function (timestamp, address, matchMode, country) {
        var localVarPath = this.basePath + '/timezone/v1/timezone/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (timestamp === null || timestamp === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter timestamp was null or undefined when calling getTimezoneByAddress." }] } });
        }
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getTimezoneByAddress." }] } });
        }
        if (timestamp !== undefined) {
            queryParameters['timestamp'] = timestamp;
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (matchMode !== undefined) {
            queryParameters['matchMode'] = matchMode;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    TimeZoneServiceApi.prototype.getTimezoneByLocation = function (timestamp, longitude, latitude) {
        var localVarPath = this.basePath + '/timezone/v1/timezone/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (timestamp === null || timestamp === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter timestamp was null or undefined when calling getTimezoneByLocation." }] } });
        }
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getTimezoneByLocation." }] } });
        }
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getTimezoneByLocation." }] } });
        }
        if (timestamp !== undefined) {
            queryParameters['timestamp'] = timestamp;
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return TimeZoneServiceApi;
}());
exports.TimeZoneServiceApi = TimeZoneServiceApi;
var TypeaheadServiceApiApiKeys;
(function (TypeaheadServiceApiApiKeys) {
})(TypeaheadServiceApiApiKeys = exports.TypeaheadServiceApiApiKeys || (exports.TypeaheadServiceApiApiKeys = {}));
var TypeaheadServiceApi = (function () {
    function TypeaheadServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(TypeaheadServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    TypeaheadServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[TypeaheadServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(TypeaheadServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    TypeaheadServiceApi.prototype.search = function (searchText, latitude, longitude, searchRadius, searchRadiusUnit, maxCandidates, country, matchOnAddressNumber, autoDetectLocation, ipAddress, areaName1, areaName3, postCode, returnAdminAreasOnly, includeRangesDetails, searchType, searchOnAddressNumber) {
        var localVarPath = this.basePath + '/typeahead/v1/locations';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (searchText === null || searchText === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter searchText was null or undefined when calling search." }] } });
        }
        if (searchText !== undefined) {
            queryParameters['searchText'] = searchText;
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (searchRadius !== undefined) {
            queryParameters['searchRadius'] = searchRadius;
        }
        if (searchRadiusUnit !== undefined) {
            queryParameters['searchRadiusUnit'] = searchRadiusUnit;
        }
        if (maxCandidates !== undefined) {
            queryParameters['maxCandidates'] = maxCandidates;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        if (matchOnAddressNumber !== undefined) {
            queryParameters['matchOnAddressNumber'] = matchOnAddressNumber;
        }
        if (autoDetectLocation !== undefined) {
            queryParameters['autoDetectLocation'] = autoDetectLocation;
        }
        if (ipAddress !== undefined) {
            queryParameters['ipAddress'] = ipAddress;
        }
        if (areaName1 !== undefined) {
            queryParameters['areaName1'] = areaName1;
        }
        if (areaName3 !== undefined) {
            queryParameters['areaName3'] = areaName3;
        }
        if (postCode !== undefined) {
            queryParameters['postCode'] = postCode;
        }
        if (returnAdminAreasOnly !== undefined) {
            queryParameters['returnAdminAreasOnly'] = returnAdminAreasOnly;
        }
        if (includeRangesDetails !== undefined) {
            queryParameters['includeRangesDetails'] = includeRangesDetails;
        }
        if (searchType !== undefined) {
            queryParameters['searchType'] = searchType;
        }
        if (searchOnAddressNumber !== undefined) {
            queryParameters['searchOnAddressNumber'] = searchOnAddressNumber;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return TypeaheadServiceApi;
}());
exports.TypeaheadServiceApi = TypeaheadServiceApi;
var ZonesServiceApiApiKeys;
(function (ZonesServiceApiApiKeys) {
})(ZonesServiceApiApiKeys = exports.ZonesServiceApiApiKeys || (exports.ZonesServiceApiApiKeys = {}));
var ZonesServiceApi = (function () {
    function ZonesServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(ZonesServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    ZonesServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[ZonesServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(ZonesServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    ZonesServiceApi.prototype.getBasicBoundaryByAddress = function (address, distance, country, distanceUnit, resolution, responseSrs) {
        var localVarPath = this.basePath + '/zones/v1/basicboundary/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getBasicBoundaryByAddress." }] } });
        }
        if (distance === null || distance === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter distance was null or undefined when calling getBasicBoundaryByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        if (distance !== undefined) {
            queryParameters['distance'] = distance;
        }
        if (distanceUnit !== undefined) {
            queryParameters['distanceUnit'] = distanceUnit;
        }
        if (resolution !== undefined) {
            queryParameters['resolution'] = resolution;
        }
        if (responseSrs !== undefined) {
            queryParameters['responseSrs'] = responseSrs;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    ZonesServiceApi.prototype.getBasicBoundaryByLocation = function (latitude, longitude, distance, distanceUnit, resolution, responseSrs, srsName) {
        var localVarPath = this.basePath + '/zones/v1/basicboundary/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getBasicBoundaryByLocation." }] } });
        }
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getBasicBoundaryByLocation." }] } });
        }
        if (distance === null || distance === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter distance was null or undefined when calling getBasicBoundaryByLocation." }] } });
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (distance !== undefined) {
            queryParameters['distance'] = distance;
        }
        if (distanceUnit !== undefined) {
            queryParameters['distanceUnit'] = distanceUnit;
        }
        if (resolution !== undefined) {
            queryParameters['resolution'] = resolution;
        }
        if (responseSrs !== undefined) {
            queryParameters['responseSrs'] = responseSrs;
        }
        if (srsName !== undefined) {
            queryParameters['srsName'] = srsName;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    ZonesServiceApi.prototype.getPOIBoundaryByAddress = function (address, categoryCode, sicCode, naicsCode) {
        var localVarPath = this.basePath + '/zones/v1/poiboundary/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getPOIBoundaryByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (categoryCode !== undefined) {
            queryParameters['categoryCode'] = categoryCode;
        }
        if (sicCode !== undefined) {
            queryParameters['sicCode'] = sicCode;
        }
        if (naicsCode !== undefined) {
            queryParameters['naicsCode'] = naicsCode;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    ZonesServiceApi.prototype.getPOIBoundaryByAddressBatch = function (body) {
        var localVarPath = this.basePath + '/zones/v1/poiboundary/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    ZonesServiceApi.prototype.getPOIBoundaryByLocation = function (latitude, longitude, categoryCode, sicCode, naicsCode) {
        var localVarPath = this.basePath + '/zones/v1/poiboundary/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getPOIBoundaryByLocation." }] } });
        }
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getPOIBoundaryByLocation." }] } });
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (categoryCode !== undefined) {
            queryParameters['categoryCode'] = categoryCode;
        }
        if (sicCode !== undefined) {
            queryParameters['sicCode'] = sicCode;
        }
        if (naicsCode !== undefined) {
            queryParameters['naicsCode'] = naicsCode;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    ZonesServiceApi.prototype.getPOIBoundaryByLocationBatch = function (body) {
        var localVarPath = this.basePath + '/zones/v1/poiboundary/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    ZonesServiceApi.prototype.getTravelBoundaryByDistance = function (costs, point, address, costUnit, db, country, maxOffroadDistance, maxOffroadDistanceUnit, destinationSrs, majorRoads, returnHoles, returnIslands, simplificationFactor, bandingStyle, historicTrafficTimeBucket, defaultAmbientSpeed, ambientSpeedUnit) {
        var localVarPath = this.basePath + '/zones/v1/travelboundary/bydistance';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (costs === null || costs === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter costs was null or undefined when calling getTravelBoundaryByDistance." }] } });
        }
        if (point !== undefined) {
            queryParameters['point'] = point;
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (costs !== undefined) {
            queryParameters['costs'] = costs;
        }
        if (costUnit !== undefined) {
            queryParameters['costUnit'] = costUnit;
        }
        if (db !== undefined) {
            queryParameters['db'] = db;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        if (maxOffroadDistance !== undefined) {
            queryParameters['maxOffroadDistance'] = maxOffroadDistance;
        }
        if (maxOffroadDistanceUnit !== undefined) {
            queryParameters['maxOffroadDistanceUnit'] = maxOffroadDistanceUnit;
        }
        if (destinationSrs !== undefined) {
            queryParameters['destinationSrs'] = destinationSrs;
        }
        if (majorRoads !== undefined) {
            queryParameters['majorRoads'] = majorRoads;
        }
        if (returnHoles !== undefined) {
            queryParameters['returnHoles'] = returnHoles;
        }
        if (returnIslands !== undefined) {
            queryParameters['returnIslands'] = returnIslands;
        }
        if (simplificationFactor !== undefined) {
            queryParameters['simplificationFactor'] = simplificationFactor;
        }
        if (bandingStyle !== undefined) {
            queryParameters['bandingStyle'] = bandingStyle;
        }
        if (historicTrafficTimeBucket !== undefined) {
            queryParameters['historicTrafficTimeBucket'] = historicTrafficTimeBucket;
        }
        if (defaultAmbientSpeed !== undefined) {
            queryParameters['defaultAmbientSpeed'] = defaultAmbientSpeed;
        }
        if (ambientSpeedUnit !== undefined) {
            queryParameters['ambientSpeedUnit'] = ambientSpeedUnit;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    ZonesServiceApi.prototype.getTravelBoundaryByTime = function (costs, point, address, costUnit, db, country, maxOffroadDistance, maxOffroadDistanceUnit, destinationSrs, majorRoads, returnHoles, returnIslands, simplificationFactor, bandingStyle, historicTrafficTimeBucket, defaultAmbientSpeed, ambientSpeedUnit) {
        var localVarPath = this.basePath + '/zones/v1/travelboundary/bytime';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (costs === null || costs === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter costs was null or undefined when calling getTravelBoundaryByTime." }] } });
        }
        if (point !== undefined) {
            queryParameters['point'] = point;
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        if (costs !== undefined) {
            queryParameters['costs'] = costs;
        }
        if (costUnit !== undefined) {
            queryParameters['costUnit'] = costUnit;
        }
        if (db !== undefined) {
            queryParameters['db'] = db;
        }
        if (country !== undefined) {
            queryParameters['country'] = country;
        }
        if (maxOffroadDistance !== undefined) {
            queryParameters['maxOffroadDistance'] = maxOffroadDistance;
        }
        if (maxOffroadDistanceUnit !== undefined) {
            queryParameters['maxOffroadDistanceUnit'] = maxOffroadDistanceUnit;
        }
        if (destinationSrs !== undefined) {
            queryParameters['destinationSrs'] = destinationSrs;
        }
        if (majorRoads !== undefined) {
            queryParameters['majorRoads'] = majorRoads;
        }
        if (returnHoles !== undefined) {
            queryParameters['returnHoles'] = returnHoles;
        }
        if (returnIslands !== undefined) {
            queryParameters['returnIslands'] = returnIslands;
        }
        if (simplificationFactor !== undefined) {
            queryParameters['simplificationFactor'] = simplificationFactor;
        }
        if (bandingStyle !== undefined) {
            queryParameters['bandingStyle'] = bandingStyle;
        }
        if (historicTrafficTimeBucket !== undefined) {
            queryParameters['historicTrafficTimeBucket'] = historicTrafficTimeBucket;
        }
        if (defaultAmbientSpeed !== undefined) {
            queryParameters['defaultAmbientSpeed'] = defaultAmbientSpeed;
        }
        if (ambientSpeedUnit !== undefined) {
            queryParameters['ambientSpeedUnit'] = ambientSpeedUnit;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return ZonesServiceApi;
}());
exports.ZonesServiceApi = ZonesServiceApi;
var _911PSAPServiceApiApiKeys;
(function (_911PSAPServiceApiApiKeys) {
})(_911PSAPServiceApiApiKeys = exports._911PSAPServiceApiApiKeys || (exports._911PSAPServiceApiApiKeys = {}));
var _911PSAPServiceApi = (function () {
    function _911PSAPServiceApi(oAuthObj, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        if (oAuthObj) {
            this.oAuthCred = oAuthObj;
        }
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(_911PSAPServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    _911PSAPServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[_911PSAPServiceApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(_911PSAPServiceApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.objOAuthCredInfo.access_token = token;
        },
        enumerable: false,
        configurable: true
    });
    _911PSAPServiceApi.prototype.getAHJPlusPSAPByAddress = function (address) {
        var localVarPath = this.basePath + '/911/v1/ahj-psap/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getAHJPlusPSAPByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    _911PSAPServiceApi.prototype.getAHJPlusPSAPByLocation = function (longitude, latitude) {
        var localVarPath = this.basePath + '/911/v1/ahj-psap/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getAHJPlusPSAPByLocation." }] } });
        }
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getAHJPlusPSAPByLocation." }] } });
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    _911PSAPServiceApi.prototype.getPSAPByAddress = function (address) {
        var localVarPath = this.basePath + '/911/v1/psap/byaddress';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (address === null || address === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter address was null or undefined when calling getPSAPByAddress." }] } });
        }
        if (address !== undefined) {
            queryParameters['address'] = address;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    _911PSAPServiceApi.prototype.getPSAPByLocation = function (longitude, latitude) {
        var localVarPath = this.basePath + '/911/v1/psap/bylocation';
        var queryParameters = {};
        var headerParams = this.defaultHeaders;
        var formParams = {};
        if (longitude === null || longitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter longitude was null or undefined when calling getPSAPByLocation." }] } });
        }
        if (latitude === null || latitude === undefined) {
            return Promise.reject({ response: null, body: { errors: [{ "errorCode": "Validation_Error", errorDescription: "Required parameter latitude was null or undefined when calling getPSAPByLocation." }] } });
        }
        if (longitude !== undefined) {
            queryParameters['longitude'] = longitude;
        }
        if (latitude !== undefined) {
            queryParameters['latitude'] = latitude;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        requestOptions.headers = { "authorization": "Bearer " + this.oAuthCred.access_token };
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject(response);
                    }
                }
            });
        });
    };
    return _911PSAPServiceApi;
}());
exports._911PSAPServiceApi = _911PSAPServiceApi;
//# sourceMappingURL=api.js.map