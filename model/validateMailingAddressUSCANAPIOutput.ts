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
import { GetPostalCodesAPIOutputUserFields } from './getPostalCodesAPIOutputUserFields';

export class ValidateMailingAddressUSCANAPIOutput {
    /**
    * These fields are returned, unmodified, in the user_fields section of the response.
    */
    'userFields'?: Array<GetPostalCodesAPIOutputUserFields>;
    /**
    * Reports the success or failure of the match attempt.
    */
    'status'?: string;
    /**
    * Reason for failure, if there is one.
    */
    'statusCode'?: string;
    /**
    * Specifies the description of the problem, if there is one.
    */
    'statusDescription'?: string;
    /**
    * Specifies the first line of the validated and standardized address.
    */
    'addressLine1'?: string;
    /**
    * Specifies the second line of the validated and standardized address.
    */
    'addressLine2'?: string;
    /**
    * Specifies the validated city name.
    */
    'city'?: string;
    /**
    * Specifies the validated state or province abbreviation.
    */
    'stateProvince'?: string;
    /**
    * Specifies the validated ZIP Code or postal code.
    */
    'postalCode'?: string;
    /**
    * Specifies the country in the format determined by the selection from ISO or UPO or English.
    */
    'country'?: string;
    /**
    * Specifies the validated firm or company name.
    */
    'firmName'?: string;
    /**
    * Specifies the formatted address, as it would appear on a physical mail piece. 
    */
    'blockAddress'?: string;
    /**
    * Specifies the 5-digit ZIP Code.
    */
    'postalCodeBase'?: string;
    /**
    * Specifies the 4-digit add-on part of the ZIP Code.
    */
    'postalCodeAddOn'?: string;
    /**
    * Specifies input data not used by the address validation process.
    */
    'additionalInputData'?: string;
    /**
    * Specifies the address component that could not be validated, in case no match is found. 
    */
    'couldNotValidate'?: string;
    /**
    * Specifies the type of address data being returned.
    */
    'addressFormat'?: string;
    /**
    * Specifies the third line of the validated and standardized address. If the address could not be validated, the third line of the input address without any changes.
    */
    'addressLine3'?: string;
    /**
    * Specifies the fourth line of the validated and standardized address. If the address could not be validated, the fourth line of the input address without any changes.
    */
    'addressLine4'?: string;
    /**
    * Specifies the result codes that apply to international addresses only.
    */
    'addressRecordResult'?: string;
    /**
    * Specifies the apartment designator such as STE or APT.
    */
    'apartmentLabel'?: string;
    /**
    * Specifies the apartment designator such as STE or APT.
    */
    'apartmentLabelInput'?: string;
    /**
    * Specifies the result of apartment label.
    */
    'apartmentLabelResult'?: string;
    /**
    * Specifies the apartment number.
    */
    'apartmentNumber'?: string;
    /**
    * Specifies the apartment number.
    */
    'apartmentNumberInput'?: string;
    /**
    * Specifies the result of apartment number.
    */
    'apartmentNumberResult'?: string;
    /**
    * Specifies the validated city name.
    */
    'cityInput'?: string;
    /**
    * Specifies the result of the validated city name.
    */
    'cityResult'?: string;
    /**
    * Specifies the the level of confidence assigned to the address being returned.
    */
    'confidence'?: string;
    /**
    * Specifies the name of the country.
    */
    'countryInput'?: string;
    /**
    * Specifies the result code for the country.
    */
    'countryResult'?: string;
    /**
    * Specifies the category of address matching available.
    */
    'countryLevel'?: string;
    /**
    * Specifies the validated firm or company name.
    */
    'firmNameInput'?: string;
    /**
    * Specifies if the firm name got validated.
    */
    'firmNameResult'?: string;
    /**
    * Specifies the house number.
    */
    'houseNumber'?: string;
    /**
    * Specifies the house number.
    */
    'houseNumberInput'?: string;
    /**
    * Specifies the result for house number.
    */
    'houseNumberResult'?: string;
    /**
    * Specifies the leading directional.
    */
    'leadingDirectional'?: string;
    /**
    * Specifies the leading directional.
    */
    'leadingDirectionalInput'?: string;
    /**
    * Specifies the result of leading directional.
    */
    'leadingDirectionalResult'?: string;
    /**
    * Specifies the address component with multiple matches, if multiple matches were found: 
    */
    'multipleMatches'?: string;
    /**
    * Specifies the post office box number.
    */
    'pOBox'?: string;
    /**
    * Specifies the post office box number.
    */
    'pOBoxInput'?: string;
    /**
    * Specifies the result of post office box number.
    */
    'pOBoxResult'?: string;
    /**
    * Specifies the validated postal code. For U.S. addresses, this is the ZIP code.
    */
    'postalCodeInput'?: string;
    /**
    * Specifies the result of validated postal code.
    */
    'postalCodeResult'?: string;
    /**
    * Specifies the result code.
    */
    'postalCodeSource'?: string;
    /**
    * Specifies the type of postal code returned.
    */
    'postalCodeType'?: string;
    /**
    * Specifies the international result code.
    */
    'postalCodeCityResult'?: string;
    /**
    * Specifies the private mailbox indicator.
    */
    'privateMailbox'?: string;
    /**
    * Specifies the private mailbox indicator.
    */
    'privateMailboxInput'?: string;
    /**
    * Specifies the type of private mailbox.
    */
    'privateMailboxType'?: string;
    /**
    * Specifies the type of private mailbox.
    */
    'privateMailboxTypeInput'?: string;
    /**
    * Specifies the type of address record, as defined by U.S. and Canadian postal authorities.
    */
    'recordType'?: string;
    /**
    * Specifies the code indicating the default match.
    */
    'recordTypeDefault'?: string;
    /**
    * Specifies the Rural Route/Highway Contract indicator.
    */
    'rRHC'?: string;
    /**
    * Specifies the Rural Route/Highway Contract indicator.
    */
    'rRHCInput'?: string;
    /**
    * Specifies the result for Rural Route/Highway Contract indicator.
    */
    'rRHCResult'?: string;
    /**
    * Specifies the result code for Rural Route/Highway Contract indicator.
    */
    'rRHCType'?: string;
    /**
    * Specifies the validated state or province abbreviation.
    */
    'stateProvinceInput'?: string;
    /**
    * Specifies the result of validated state or province abbreviation.
    */
    'stateProvinceResult'?: string;
    /**
    * Specifies the result codes for international addresses.
    */
    'streetResult'?: string;
    /**
    * Specifies the street name.
    */
    'streetName'?: string;
    /**
    * Specifies result code that applies to U.S. addresses only.
    */
    'streetNameAliasType'?: string;
    /**
    * Specifies the street name.
    */
    'streetNameInput'?: string;
    /**
    * Specifies the result of the street name.
    */
    'streetNameResult'?: string;
    /**
    * Indicates the result of abbreviated alias processing.
    */
    'streetNameAbbreviatedAliasResult'?: string;
    /**
    * Specifies the result of preferred alias processing.
    */
    'streetNamePreferredAliasResult'?: string;
    /**
    * Specifies the street suffix.
    */
    'streetSuffix'?: string;
    /**
    * Specifies the street suffix.
    */
    'streetSuffixInput'?: string;
    /**
    * Specifies the result of the street suffix.
    */
    'streetSuffixResult'?: string;
    /**
    * Specifies the trailing directional.
    */
    'trailingDirectional'?: string;
    /**
    * Specifies the trailing directional.
    */
    'trailingDirectionalInput'?: string;
    /**
    * Specifies the result of the trailing directional.
    */
    'trailingDirectionalResult'?: string;
    /**
    * Specifies an indication of the degree to which the output address is correct.
    */
    'matchScore'?: string;
    /**
    * Specifies whether the address is a candidate for LACS conversion. This is for U.S. addresses only).
    */
    'uSLACS'?: string;
    /**
    * Specifies the the success or failure of LACS processing. This is for U.S. addresses only).
    */
    'uSLACSReturnCode'?: string;
    /**
    * Specifies the values indicating address type.
    */
    'rDI'?: string;
    /**
    * Specifies if the address is a Commercial Mail Receiving Agency (CMRA).
    */
    'cMRA'?: string;
    /**
    * Specifies the results of Delivery Point Validation (DPV) processing.
    */
    'dPV'?: string;
    /**
    * Specifies the DPV footnote codes.
    */
    'dPVFootnote'?: string;
    /**
    * Indicates whether or not API corrected the secondary address information (U.S. addresses only). 
    */
    'suiteLinkReturnCode'?: string;
    /**
    * Provides additional information on the SuiteLink match attempt. (U.S. addresses only)
    */
    'suiteLinkMatchCode'?: string;
    /**
    * Indicates how well ValidateAddress matched the firm name to the firm names in the SuiteLink database.
    */
    'suiteLinkFidelity'?: string;
    /**
    * Specifies the check-digit portion of the 11-digit delivery point barcode.
    */
    'uSBCCheckDigit'?: string;
    /**
    * Specifies the delivery point portion of the delivery point barcode.
    */
    'postalBarCode'?: string;
    /**
    * Specifies carrier route code.
    */
    'uSCarrierRouteCode'?: string;
    /**
    * Specifies FIPS (Federal Information Processing Standards) county number (U.S. addresses only).
    */
    'uSFIPSCountyNumber'?: string;
    /**
    * Specifies the county name (U.S. addresses only).
    */
    'uSCountyName'?: string;
    /**
    * Specifies congressional district (U.S. addresses only).
    */
    'uSCongressionalDistrict'?: string;
    /**
    * Specifies whether the alternate address matching logic was used, and if so which logic was used (U.S. addresses only).
    */
    'uSAltAddr'?: string;
    /**
    * Specifies a six-character alphanumeric value that groups together ZIP Codes that share the same primary city.
    */
    'uSLastLineNumber'?: string;
    /**
    * Specifies the finance number in which the address resides (U.S. addresses only).
    */
    'uSFinanceNumber'?: string;
    /**
    * U.S. address urbanization name. Used primarily for Puerto Rico addresses.
    */
    'uSUrbanName'?: string;
    /**
    * U.S. address urbanization name. Used primarily for Puerto Rico addresses.
    */
    'uSUrbanNameInput'?: string;
    /**
    * U.S. address urbanization name. Used primarily for Puerto Rico addresses.
    */
    'uSUrbanNameResult'?: string;
    /**
    * If the address was matched to multiple candidate addresses in the reference data, this field contains the number of candidate matches found.
    */
    'multimatchCount'?: string;
    /**
    * AddressBlock1
    */
    'addressBlock1'?: string;
    /**
    * AddressBlock2
    */
    'addressBlock2'?: string;
    /**
    * AddressBlock3
    */
    'addressBlock3'?: string;
    /**
    * AddressBlock4
    */
    'addressBlock4'?: string;
    /**
    * AddressBlock5
    */
    'addressBlock5'?: string;
    /**
    * AddressBlock6
    */
    'addressBlock6'?: string;
    /**
    * AddressBlock7
    */
    'addressBlock7'?: string;
    /**
    * AddressBlock8
    */
    'addressBlock8'?: string;
    /**
    * AddressBlock9
    */
    'addressBlock9'?: string;
    /**
    * Specifies whether the address is in English or French. This is for Canadian address only.
    */
    'canLanguage'?: string;
    /**
    * Specifies whether the building is a no stat building and therefore unable to receive mail.
    */
    'dPVNoStat'?: string;
    /**
    * Specifies whether the building is vacant, unoccupied for 90 days.
    */
    'dPVVacant'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userFields",
            "baseName": "user_fields",
            "type": "Array<GetPostalCodesAPIOutputUserFields>"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "string"
        },
        {
            "name": "statusCode",
            "baseName": "Status.Code",
            "type": "string"
        },
        {
            "name": "statusDescription",
            "baseName": "Status.description",
            "type": "string"
        },
        {
            "name": "addressLine1",
            "baseName": "AddressLine1",
            "type": "string"
        },
        {
            "name": "addressLine2",
            "baseName": "AddressLine2",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "City",
            "type": "string"
        },
        {
            "name": "stateProvince",
            "baseName": "StateProvince",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "PostalCode",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "Country",
            "type": "string"
        },
        {
            "name": "firmName",
            "baseName": "FirmName",
            "type": "string"
        },
        {
            "name": "blockAddress",
            "baseName": "BlockAddress",
            "type": "string"
        },
        {
            "name": "postalCodeBase",
            "baseName": "PostalCode.Base",
            "type": "string"
        },
        {
            "name": "postalCodeAddOn",
            "baseName": "PostalCode.AddOn",
            "type": "string"
        },
        {
            "name": "additionalInputData",
            "baseName": "AdditionalInputData",
            "type": "string"
        },
        {
            "name": "couldNotValidate",
            "baseName": "CouldNotValidate",
            "type": "string"
        },
        {
            "name": "addressFormat",
            "baseName": "AddressFormat",
            "type": "string"
        },
        {
            "name": "addressLine3",
            "baseName": "AddressLine3",
            "type": "string"
        },
        {
            "name": "addressLine4",
            "baseName": "AddressLine4",
            "type": "string"
        },
        {
            "name": "addressRecordResult",
            "baseName": "AddressRecord.Result",
            "type": "string"
        },
        {
            "name": "apartmentLabel",
            "baseName": "ApartmentLabel",
            "type": "string"
        },
        {
            "name": "apartmentLabelInput",
            "baseName": "ApartmentLabel.Input",
            "type": "string"
        },
        {
            "name": "apartmentLabelResult",
            "baseName": "ApartmentLabel.Result",
            "type": "string"
        },
        {
            "name": "apartmentNumber",
            "baseName": "ApartmentNumber",
            "type": "string"
        },
        {
            "name": "apartmentNumberInput",
            "baseName": "ApartmentNumber.Input",
            "type": "string"
        },
        {
            "name": "apartmentNumberResult",
            "baseName": "ApartmentNumber.Result",
            "type": "string"
        },
        {
            "name": "cityInput",
            "baseName": "City.Input",
            "type": "string"
        },
        {
            "name": "cityResult",
            "baseName": "City.Result",
            "type": "string"
        },
        {
            "name": "confidence",
            "baseName": "Confidence",
            "type": "string"
        },
        {
            "name": "countryInput",
            "baseName": "Country.Input",
            "type": "string"
        },
        {
            "name": "countryResult",
            "baseName": "Country.Result",
            "type": "string"
        },
        {
            "name": "countryLevel",
            "baseName": "CountryLevel",
            "type": "string"
        },
        {
            "name": "firmNameInput",
            "baseName": "FirmName.Input",
            "type": "string"
        },
        {
            "name": "firmNameResult",
            "baseName": "FirmName.Result",
            "type": "string"
        },
        {
            "name": "houseNumber",
            "baseName": "HouseNumber",
            "type": "string"
        },
        {
            "name": "houseNumberInput",
            "baseName": "HouseNumber.Input",
            "type": "string"
        },
        {
            "name": "houseNumberResult",
            "baseName": "HouseNumber.Result",
            "type": "string"
        },
        {
            "name": "leadingDirectional",
            "baseName": "LeadingDirectional",
            "type": "string"
        },
        {
            "name": "leadingDirectionalInput",
            "baseName": "LeadingDirectional.Input",
            "type": "string"
        },
        {
            "name": "leadingDirectionalResult",
            "baseName": "LeadingDirectional.Result",
            "type": "string"
        },
        {
            "name": "multipleMatches",
            "baseName": "MultipleMatches",
            "type": "string"
        },
        {
            "name": "pOBox",
            "baseName": "POBox",
            "type": "string"
        },
        {
            "name": "pOBoxInput",
            "baseName": "POBox.Input",
            "type": "string"
        },
        {
            "name": "pOBoxResult",
            "baseName": "POBox.Result",
            "type": "string"
        },
        {
            "name": "postalCodeInput",
            "baseName": "PostalCode.Input",
            "type": "string"
        },
        {
            "name": "postalCodeResult",
            "baseName": "PostalCode.Result",
            "type": "string"
        },
        {
            "name": "postalCodeSource",
            "baseName": "PostalCode.Source",
            "type": "string"
        },
        {
            "name": "postalCodeType",
            "baseName": "PostalCode.Type",
            "type": "string"
        },
        {
            "name": "postalCodeCityResult",
            "baseName": "PostalCodeCity.Result",
            "type": "string"
        },
        {
            "name": "privateMailbox",
            "baseName": "PrivateMailbox",
            "type": "string"
        },
        {
            "name": "privateMailboxInput",
            "baseName": "PrivateMailbox.Input",
            "type": "string"
        },
        {
            "name": "privateMailboxType",
            "baseName": "PrivateMailbox.Type",
            "type": "string"
        },
        {
            "name": "privateMailboxTypeInput",
            "baseName": "PrivateMailbox.Type.Input",
            "type": "string"
        },
        {
            "name": "recordType",
            "baseName": "RecordType",
            "type": "string"
        },
        {
            "name": "recordTypeDefault",
            "baseName": "RecordType.Default",
            "type": "string"
        },
        {
            "name": "rRHC",
            "baseName": "RRHC",
            "type": "string"
        },
        {
            "name": "rRHCInput",
            "baseName": "RRHC.Input",
            "type": "string"
        },
        {
            "name": "rRHCResult",
            "baseName": "RRHC.Result",
            "type": "string"
        },
        {
            "name": "rRHCType",
            "baseName": "RRHC.Type",
            "type": "string"
        },
        {
            "name": "stateProvinceInput",
            "baseName": "StateProvince.Input",
            "type": "string"
        },
        {
            "name": "stateProvinceResult",
            "baseName": "StateProvince.Result",
            "type": "string"
        },
        {
            "name": "streetResult",
            "baseName": "Street.Result",
            "type": "string"
        },
        {
            "name": "streetName",
            "baseName": "StreetName",
            "type": "string"
        },
        {
            "name": "streetNameAliasType",
            "baseName": "StreetName.Alias.Type",
            "type": "string"
        },
        {
            "name": "streetNameInput",
            "baseName": "StreetName.Input",
            "type": "string"
        },
        {
            "name": "streetNameResult",
            "baseName": "StreetName.Result",
            "type": "string"
        },
        {
            "name": "streetNameAbbreviatedAliasResult",
            "baseName": "StreetNameAbbreviatedAlias.Result",
            "type": "string"
        },
        {
            "name": "streetNamePreferredAliasResult",
            "baseName": "StreetNamePreferredAlias.Result",
            "type": "string"
        },
        {
            "name": "streetSuffix",
            "baseName": "StreetSuffix",
            "type": "string"
        },
        {
            "name": "streetSuffixInput",
            "baseName": "StreetSuffix.Input",
            "type": "string"
        },
        {
            "name": "streetSuffixResult",
            "baseName": "StreetSuffix.Result",
            "type": "string"
        },
        {
            "name": "trailingDirectional",
            "baseName": "TrailingDirectional",
            "type": "string"
        },
        {
            "name": "trailingDirectionalInput",
            "baseName": "TrailingDirectional.Input",
            "type": "string"
        },
        {
            "name": "trailingDirectionalResult",
            "baseName": "TrailingDirectional.Result",
            "type": "string"
        },
        {
            "name": "matchScore",
            "baseName": "MatchScore",
            "type": "string"
        },
        {
            "name": "uSLACS",
            "baseName": "USLACS",
            "type": "string"
        },
        {
            "name": "uSLACSReturnCode",
            "baseName": "USLACS.ReturnCode",
            "type": "string"
        },
        {
            "name": "rDI",
            "baseName": "RDI",
            "type": "string"
        },
        {
            "name": "cMRA",
            "baseName": "CMRA",
            "type": "string"
        },
        {
            "name": "dPV",
            "baseName": "DPV",
            "type": "string"
        },
        {
            "name": "dPVFootnote",
            "baseName": "DPVFootnote",
            "type": "string"
        },
        {
            "name": "suiteLinkReturnCode",
            "baseName": "SuiteLinkReturnCode",
            "type": "string"
        },
        {
            "name": "suiteLinkMatchCode",
            "baseName": "SuiteLinkMatchCode",
            "type": "string"
        },
        {
            "name": "suiteLinkFidelity",
            "baseName": "SuiteLinkFidelity",
            "type": "string"
        },
        {
            "name": "uSBCCheckDigit",
            "baseName": "USBCCheckDigit",
            "type": "string"
        },
        {
            "name": "postalBarCode",
            "baseName": "PostalBarCode",
            "type": "string"
        },
        {
            "name": "uSCarrierRouteCode",
            "baseName": "USCarrierRouteCode",
            "type": "string"
        },
        {
            "name": "uSFIPSCountyNumber",
            "baseName": "USFIPSCountyNumber",
            "type": "string"
        },
        {
            "name": "uSCountyName",
            "baseName": "USCountyName",
            "type": "string"
        },
        {
            "name": "uSCongressionalDistrict",
            "baseName": "USCongressionalDistrict",
            "type": "string"
        },
        {
            "name": "uSAltAddr",
            "baseName": "USAltAddr",
            "type": "string"
        },
        {
            "name": "uSLastLineNumber",
            "baseName": "USLastLineNumber",
            "type": "string"
        },
        {
            "name": "uSFinanceNumber",
            "baseName": "USFinanceNumber",
            "type": "string"
        },
        {
            "name": "uSUrbanName",
            "baseName": "USUrbanName",
            "type": "string"
        },
        {
            "name": "uSUrbanNameInput",
            "baseName": "USUrbanName.Input",
            "type": "string"
        },
        {
            "name": "uSUrbanNameResult",
            "baseName": "USUrbanName.Result",
            "type": "string"
        },
        {
            "name": "multimatchCount",
            "baseName": "MultimatchCount",
            "type": "string"
        },
        {
            "name": "addressBlock1",
            "baseName": "AddressBlock1",
            "type": "string"
        },
        {
            "name": "addressBlock2",
            "baseName": "AddressBlock2",
            "type": "string"
        },
        {
            "name": "addressBlock3",
            "baseName": "AddressBlock3",
            "type": "string"
        },
        {
            "name": "addressBlock4",
            "baseName": "AddressBlock4",
            "type": "string"
        },
        {
            "name": "addressBlock5",
            "baseName": "AddressBlock5",
            "type": "string"
        },
        {
            "name": "addressBlock6",
            "baseName": "AddressBlock6",
            "type": "string"
        },
        {
            "name": "addressBlock7",
            "baseName": "AddressBlock7",
            "type": "string"
        },
        {
            "name": "addressBlock8",
            "baseName": "AddressBlock8",
            "type": "string"
        },
        {
            "name": "addressBlock9",
            "baseName": "AddressBlock9",
            "type": "string"
        },
        {
            "name": "canLanguage",
            "baseName": "CanLanguage",
            "type": "string"
        },
        {
            "name": "dPVNoStat",
            "baseName": "DPVNoStat",
            "type": "string"
        },
        {
            "name": "dPVVacant",
            "baseName": "DPVVacant",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ValidateMailingAddressUSCANAPIOutput.attributeTypeMap;
    }
}

