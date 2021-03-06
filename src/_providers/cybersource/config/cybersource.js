(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddNegativeListRequest', 'model/AuthReversalRequest', 'model/AuthorizationOptions', 'model/BillTo', 'model/BuyerInformation', 'model/CapturePaymentRequest', 'model/CardInfo', 'model/CheckPayerAuthEnrollmentRequest', 'model/CreateAdhocReportRequest', 'model/CreateCreditRequest', 'model/CreateDecisionManagerCaseRequest', 'model/CreateInstrumentIdentifierRequest', 'model/CreateInvoiceRequest', 'model/CreatePaymentInstrumentRequest', 'model/CreatePaymentRequest', 'model/CreateReportSubscriptionRequest', 'model/CreateSearchRequest', 'model/DerPublicKey', 'model/Detail', 'model/EmbeddedInstrumentIdentifierRequest', 'model/EmbeddedInstrumentIdentifierResponse', 'model/Error', 'model/ErrorBean', 'model/ErrorFieldBean', 'model/ErrorLinks', 'model/ErrorResponse', 'model/ErrorResponseWithHAL', 'model/ExistingInstrumentIdentifierId', 'model/FileBean', 'model/FileDetail', 'model/FileDetailsResponse', 'model/FlexV1KeysPost200Response', 'model/FlexV1KeysPost200ResponseDer', 'model/FlexV1KeysPost200ResponseJwk', 'model/FlexV1TokensPost200Response', 'model/Flexv1tokensCardInfo', 'model/FraudMarkingActionRequest', 'model/GeneratePublicKeyRequest', 'model/IncrementAuthRequest', 'model/Initiator', 'model/InlineResponse400', 'model/InlineResponse4001', 'model/InlineResponse4001Fields', 'model/InlineResponseDefault', 'model/InlineResponseDefaultLinks', 'model/InlineResponseDefaultLinksNext', 'model/InlineResponseDefaultResponseStatus', 'model/InlineResponseDefaultResponseStatusDetails', 'model/InstrumentIdentifierBankAccount', 'model/InstrumentIdentifierCard', 'model/InstrumentIdentifierEnrollableCard', 'model/InstrumentIdentifierPaymentInstrumentsLink', 'model/InstrumentIdentifierProcessingInformation', 'model/InstrumentIdentifierResponse', 'model/InstrumentIdentifierTokenizedCard', 'model/InstrumentIdentifierUpdate', 'model/InvoiceSettingsRequest', 'model/InvoicingV2InvoiceSettingsGet200Response', 'model/InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformation', 'model/InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformationHeaderStyle', 'model/InvoicingV2InvoicesAllGet200Response', 'model/InvoicingV2InvoicesAllGet200ResponseCustomerInformation', 'model/InvoicingV2InvoicesAllGet200ResponseInvoiceInformation', 'model/InvoicingV2InvoicesAllGet200ResponseInvoices', 'model/InvoicingV2InvoicesAllGet200ResponseLinks', 'model/InvoicingV2InvoicesAllGet200ResponseLinks1', 'model/InvoicingV2InvoicesAllGet200ResponseOrderInformation', 'model/InvoicingV2InvoicesAllGet200ResponseOrderInformationAmountDetails', 'model/InvoicingV2InvoicesAllGet400Response', 'model/InvoicingV2InvoicesAllGet404Response', 'model/InvoicingV2InvoicesAllGet502Response', 'model/InvoicingV2InvoicesGet200Response', 'model/InvoicingV2InvoicesGet200ResponseInvoiceHistory', 'model/InvoicingV2InvoicesGet200ResponseTransactionDetails', 'model/InvoicingV2InvoicesPost201Response', 'model/InvoicingV2InvoicesPost201ResponseInvoiceInformation', 'model/InvoicingV2InvoicesPost201ResponseOrderInformation', 'model/InvoicingV2InvoicesPost201ResponseOrderInformationAmountDetails', 'model/InvoicingV2InvoicesPost202Response', 'model/Invoicingv2invoicesCustomerInformation', 'model/Invoicingv2invoicesInvoiceInformation', 'model/Invoicingv2invoicesOrderInformation', 'model/Invoicingv2invoicesOrderInformationAmountDetails', 'model/Invoicingv2invoicesOrderInformationAmountDetailsFreight', 'model/Invoicingv2invoicesOrderInformationAmountDetailsTaxDetails', 'model/Invoicingv2invoicesOrderInformationLineItems', 'model/Invoicingv2invoicesidInvoiceInformation', 'model/Issuer', 'model/JsonWebKey', 'model/KeyParameters', 'model/KeyResult', 'model/Link', 'model/Links', 'model/MerchantInformation', 'model/MerchantInitiatedTransaction', 'model/Metadata', 'model/MitReversalRequest', 'model/MitVoidRequest', 'model/Model409Link', 'model/Model409Links', 'model/OctCreatePaymentRequest', 'model/PIForIILinkFirst', 'model/PIForIILinkLast', 'model/PIForIILinkNext', 'model/PIForIILinkPrev', 'model/PIForIILinkSelf', 'model/PaymentInstrument', 'model/PaymentInstrumentBankAccount', 'model/PaymentInstrumentCard', 'model/PaymentInstrumentForInstrumentIdentifierLinks', 'model/PaymentInstrumentInstrumentIdentifierRequest', 'model/PaymentInstrumentSelfLink', 'model/PaymentInstrumentsArray', 'model/PaymentInstrumentsForInstrumentIdentifier', 'model/PaymentInstrumentsLinks', 'model/PersonalIdentification', 'model/PersonalIdentificationArray', 'model/PredefinedSubscriptionRequestBean', 'model/ProcessingInformation', 'model/PtsV1TransactionBatchesGet200Response', 'model/PtsV1TransactionBatchesGet200ResponseLinks', 'model/PtsV1TransactionBatchesGet200ResponseLinksSelf', 'model/PtsV1TransactionBatchesGet200ResponseTransactionBatches', 'model/PtsV1TransactionBatchesGet400Response', 'model/PtsV1TransactionBatchesGet400ResponseErrorInformation', 'model/PtsV1TransactionBatchesGet400ResponseErrorInformationDetails', 'model/PtsV1TransactionBatchesGet500Response', 'model/PtsV1TransactionBatchesGet500ResponseErrorInformation', 'model/PtsV1TransactionBatchesIdGet200Response', 'model/PtsV1TransactionBatchesIdGet200ResponseLinks', 'model/PtsV1TransactionBatchesIdGet200ResponseLinksTransactions', 'model/PtsV2CreditsPost201Response', 'model/PtsV2CreditsPost201ResponseCreditAmountDetails', 'model/PtsV2CreditsPost201ResponsePaymentInformation', 'model/PtsV2CreditsPost201ResponseProcessingInformation', 'model/PtsV2CreditsPost201ResponseProcessingInformationBankTransferOptions', 'model/PtsV2IncrementalAuthorizationPatch201Response', 'model/PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation', 'model/PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation', 'model/PtsV2IncrementalAuthorizationPatch201ResponseLinks', 'model/PtsV2IncrementalAuthorizationPatch201ResponseOrderInformation', 'model/PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformation', 'model/PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformationAccountFeatures', 'model/PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation', 'model/PtsV2IncrementalAuthorizationPatch400Response', 'model/PtsV2PaymentsCapturesPost201Response', 'model/PtsV2PaymentsCapturesPost201ResponseLinks', 'model/PtsV2PaymentsCapturesPost201ResponseOrderInformation', 'model/PtsV2PaymentsCapturesPost201ResponseOrderInformationAmountDetails', 'model/PtsV2PaymentsCapturesPost201ResponseOrderInformationInvoiceDetails', 'model/PtsV2PaymentsCapturesPost201ResponsePointOfSaleInformation', 'model/PtsV2PaymentsCapturesPost201ResponseProcessingInformation', 'model/PtsV2PaymentsCapturesPost201ResponseProcessorInformation', 'model/PtsV2PaymentsCapturesPost400Response', 'model/PtsV2PaymentsPost201Response', 'model/PtsV2PaymentsPost201ResponseClientReferenceInformation', 'model/PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation', 'model/PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationIvr', 'model/PtsV2PaymentsPost201ResponseErrorInformation', 'model/PtsV2PaymentsPost201ResponseErrorInformationDetails', 'model/PtsV2PaymentsPost201ResponseInstallmentInformation', 'model/PtsV2PaymentsPost201ResponseIssuerInformation', 'model/PtsV2PaymentsPost201ResponseLinks', 'model/PtsV2PaymentsPost201ResponseLinksSelf', 'model/PtsV2PaymentsPost201ResponseOrderInformation', 'model/PtsV2PaymentsPost201ResponseOrderInformationAmountDetails', 'model/PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails', 'model/PtsV2PaymentsPost201ResponsePaymentInformation', 'model/PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures', 'model/PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances', 'model/PtsV2PaymentsPost201ResponsePaymentInformationBank', 'model/PtsV2PaymentsPost201ResponsePaymentInformationBankAccount', 'model/PtsV2PaymentsPost201ResponsePaymentInformationCard', 'model/PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard', 'model/PtsV2PaymentsPost201ResponsePointOfSaleInformation', 'model/PtsV2PaymentsPost201ResponsePointOfSaleInformationEmv', 'model/PtsV2PaymentsPost201ResponseProcessingInformation', 'model/PtsV2PaymentsPost201ResponseProcessingInformationBankTransferOptions', 'model/PtsV2PaymentsPost201ResponseProcessorInformation', 'model/PtsV2PaymentsPost201ResponseProcessorInformationAchVerification', 'model/PtsV2PaymentsPost201ResponseProcessorInformationAvs', 'model/PtsV2PaymentsPost201ResponseProcessorInformationCardVerification', 'model/PtsV2PaymentsPost201ResponseProcessorInformationConsumerAuthenticationResponse', 'model/PtsV2PaymentsPost201ResponseProcessorInformationCustomer', 'model/PtsV2PaymentsPost201ResponseProcessorInformationElectronicVerificationResults', 'model/PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice', 'model/PtsV2PaymentsPost201ResponseProcessorInformationRouting', 'model/PtsV2PaymentsPost201ResponseRiskInformation', 'model/PtsV2PaymentsPost201ResponseRiskInformationInfoCodes', 'model/PtsV2PaymentsPost201ResponseRiskInformationIpAddress', 'model/PtsV2PaymentsPost201ResponseRiskInformationProfile', 'model/PtsV2PaymentsPost201ResponseRiskInformationProviders', 'model/PtsV2PaymentsPost201ResponseRiskInformationProvidersProviderName', 'model/PtsV2PaymentsPost201ResponseRiskInformationRules', 'model/PtsV2PaymentsPost201ResponseRiskInformationScore', 'model/PtsV2PaymentsPost201ResponseRiskInformationTravel', 'model/PtsV2PaymentsPost201ResponseRiskInformationTravelActualFinalDestination', 'model/PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDeparture', 'model/PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDestination', 'model/PtsV2PaymentsPost201ResponseRiskInformationTravelLastDestination', 'model/PtsV2PaymentsPost201ResponseRiskInformationVelocity', 'model/PtsV2PaymentsPost201ResponseRiskInformationVelocityMorphing', 'model/PtsV2PaymentsPost400Response', 'model/PtsV2PaymentsPost502Response', 'model/PtsV2PaymentsRefundPost201Response', 'model/PtsV2PaymentsRefundPost201ResponseLinks', 'model/PtsV2PaymentsRefundPost201ResponseOrderInformation', 'model/PtsV2PaymentsRefundPost201ResponseProcessorInformation', 'model/PtsV2PaymentsRefundPost201ResponseRefundAmountDetails', 'model/PtsV2PaymentsRefundPost400Response', 'model/PtsV2PaymentsReversalsPost201Response', 'model/PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation', 'model/PtsV2PaymentsReversalsPost201ResponseIssuerInformation', 'model/PtsV2PaymentsReversalsPost201ResponseProcessorInformation', 'model/PtsV2PaymentsReversalsPost201ResponseReversalAmountDetails', 'model/PtsV2PaymentsReversalsPost400Response', 'model/PtsV2PaymentsVoidsPost201Response', 'model/PtsV2PaymentsVoidsPost201ResponseProcessorInformation', 'model/PtsV2PaymentsVoidsPost201ResponseVoidAmountDetails', 'model/PtsV2PaymentsVoidsPost400Response', 'model/PtsV2PayoutsPost201Response', 'model/PtsV2PayoutsPost201ResponseErrorInformation', 'model/PtsV2PayoutsPost201ResponseMerchantInformation', 'model/PtsV2PayoutsPost201ResponseMerchantInformationMerchantDescriptor', 'model/PtsV2PayoutsPost201ResponseOrderInformation', 'model/PtsV2PayoutsPost201ResponseOrderInformationAmountDetails', 'model/PtsV2PayoutsPost201ResponseProcessorInformation', 'model/PtsV2PayoutsPost201ResponseRecipientInformation', 'model/PtsV2PayoutsPost201ResponseRecipientInformationCard', 'model/PtsV2PayoutsPost400Response', 'model/Ptsv2creditsInstallmentInformation', 'model/Ptsv2creditsProcessingInformation', 'model/Ptsv2creditsProcessingInformationBankTransferOptions', 'model/Ptsv2creditsProcessingInformationElectronicBenefitsTransfer', 'model/Ptsv2creditsProcessingInformationJapanPaymentOptions', 'model/Ptsv2creditsProcessingInformationPurchaseOptions', 'model/Ptsv2paymentsAcquirerInformation', 'model/Ptsv2paymentsAggregatorInformation', 'model/Ptsv2paymentsAggregatorInformationSubMerchant', 'model/Ptsv2paymentsBuyerInformation', 'model/Ptsv2paymentsBuyerInformationPersonalIdentification', 'model/Ptsv2paymentsClientReferenceInformation', 'model/Ptsv2paymentsClientReferenceInformationPartner', 'model/Ptsv2paymentsConsumerAuthenticationInformation', 'model/Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication', 'model/Ptsv2paymentsDeviceInformation', 'model/Ptsv2paymentsDeviceInformationRawData', 'model/Ptsv2paymentsInstallmentInformation', 'model/Ptsv2paymentsIssuerInformation', 'model/Ptsv2paymentsMerchantDefinedInformation', 'model/Ptsv2paymentsMerchantInformation', 'model/Ptsv2paymentsMerchantInformationMerchantDescriptor', 'model/Ptsv2paymentsMerchantInformationServiceFeeDescriptor', 'model/Ptsv2paymentsOrderInformation', 'model/Ptsv2paymentsOrderInformationAmountDetails', 'model/Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts', 'model/Ptsv2paymentsOrderInformationAmountDetailsCurrencyConversion', 'model/Ptsv2paymentsOrderInformationAmountDetailsSurcharge', 'model/Ptsv2paymentsOrderInformationAmountDetailsTaxDetails', 'model/Ptsv2paymentsOrderInformationBillTo', 'model/Ptsv2paymentsOrderInformationBillToCompany', 'model/Ptsv2paymentsOrderInformationInvoiceDetails', 'model/Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum', 'model/Ptsv2paymentsOrderInformationLineItems', 'model/Ptsv2paymentsOrderInformationPassenger', 'model/Ptsv2paymentsOrderInformationShipTo', 'model/Ptsv2paymentsOrderInformationShippingDetails', 'model/Ptsv2paymentsPaymentInformation', 'model/Ptsv2paymentsPaymentInformationBank', 'model/Ptsv2paymentsPaymentInformationBankAccount', 'model/Ptsv2paymentsPaymentInformationCard', 'model/Ptsv2paymentsPaymentInformationCustomer', 'model/Ptsv2paymentsPaymentInformationFluidData', 'model/Ptsv2paymentsPaymentInformationTokenizedCard', 'model/Ptsv2paymentsPointOfSaleInformation', 'model/Ptsv2paymentsPointOfSaleInformationEmv', 'model/Ptsv2paymentsProcessingInformation', 'model/Ptsv2paymentsProcessingInformationAuthorizationOptions', 'model/Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiator', 'model/Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction', 'model/Ptsv2paymentsProcessingInformationBankTransferOptions', 'model/Ptsv2paymentsProcessingInformationCaptureOptions', 'model/Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer', 'model/Ptsv2paymentsProcessingInformationJapanPaymentOptions', 'model/Ptsv2paymentsProcessingInformationLoanOptions', 'model/Ptsv2paymentsProcessingInformationPurchaseOptions', 'model/Ptsv2paymentsProcessingInformationRecurringOptions', 'model/Ptsv2paymentsPromotionInformation', 'model/Ptsv2paymentsRecipientInformation', 'model/Ptsv2paymentsRecurringPaymentInformation', 'model/Ptsv2paymentsRiskInformation', 'model/Ptsv2paymentsRiskInformationBuyerHistory', 'model/Ptsv2paymentsRiskInformationBuyerHistoryAccountHistory', 'model/Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount', 'model/Ptsv2paymentsRiskInformationProfile', 'model/Ptsv2paymentsTokenInformation', 'model/Ptsv2paymentsTravelInformation', 'model/Ptsv2paymentsTravelInformationAgency', 'model/Ptsv2paymentsTravelInformationLodging', 'model/Ptsv2paymentsTravelInformationLodgingRoom', 'model/Ptsv2paymentsTravelInformationTransit', 'model/Ptsv2paymentsTravelInformationTransitAirline', 'model/Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation', 'model/Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService', 'model/Ptsv2paymentsTravelInformationTransitAirlineLegs', 'model/Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer', 'model/Ptsv2paymentsidClientReferenceInformation', 'model/Ptsv2paymentsidClientReferenceInformationPartner', 'model/Ptsv2paymentsidMerchantInformation', 'model/Ptsv2paymentsidOrderInformation', 'model/Ptsv2paymentsidOrderInformationAmountDetails', 'model/Ptsv2paymentsidProcessingInformation', 'model/Ptsv2paymentsidProcessingInformationAuthorizationOptions', 'model/Ptsv2paymentsidProcessingInformationAuthorizationOptionsInitiator', 'model/Ptsv2paymentsidTravelInformation', 'model/Ptsv2paymentsidcapturesAggregatorInformation', 'model/Ptsv2paymentsidcapturesAggregatorInformationSubMerchant', 'model/Ptsv2paymentsidcapturesBuyerInformation', 'model/Ptsv2paymentsidcapturesDeviceInformation', 'model/Ptsv2paymentsidcapturesInstallmentInformation', 'model/Ptsv2paymentsidcapturesMerchantInformation', 'model/Ptsv2paymentsidcapturesOrderInformation', 'model/Ptsv2paymentsidcapturesOrderInformationAmountDetails', 'model/Ptsv2paymentsidcapturesOrderInformationBillTo', 'model/Ptsv2paymentsidcapturesOrderInformationInvoiceDetails', 'model/Ptsv2paymentsidcapturesOrderInformationShipTo', 'model/Ptsv2paymentsidcapturesOrderInformationShippingDetails', 'model/Ptsv2paymentsidcapturesPaymentInformation', 'model/Ptsv2paymentsidcapturesPaymentInformationCard', 'model/Ptsv2paymentsidcapturesPointOfSaleInformation', 'model/Ptsv2paymentsidcapturesPointOfSaleInformationEmv', 'model/Ptsv2paymentsidcapturesProcessingInformation', 'model/Ptsv2paymentsidcapturesProcessingInformationAuthorizationOptions', 'model/Ptsv2paymentsidcapturesProcessingInformationCaptureOptions', 'model/Ptsv2paymentsidcapturesTravelInformation', 'model/Ptsv2paymentsidrefundsMerchantInformation', 'model/Ptsv2paymentsidrefundsOrderInformation', 'model/Ptsv2paymentsidrefundsOrderInformationLineItems', 'model/Ptsv2paymentsidrefundsPaymentInformation', 'model/Ptsv2paymentsidrefundsPaymentInformationCard', 'model/Ptsv2paymentsidrefundsPaymentInformationPaymentType', 'model/Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod', 'model/Ptsv2paymentsidrefundsPointOfSaleInformation', 'model/Ptsv2paymentsidrefundsProcessingInformation', 'model/Ptsv2paymentsidrefundsProcessingInformationRecurringOptions', 'model/Ptsv2paymentsidreversalsClientReferenceInformation', 'model/Ptsv2paymentsidreversalsClientReferenceInformationPartner', 'model/Ptsv2paymentsidreversalsOrderInformation', 'model/Ptsv2paymentsidreversalsOrderInformationAmountDetails', 'model/Ptsv2paymentsidreversalsOrderInformationLineItems', 'model/Ptsv2paymentsidreversalsPointOfSaleInformation', 'model/Ptsv2paymentsidreversalsPointOfSaleInformationEmv', 'model/Ptsv2paymentsidreversalsProcessingInformation', 'model/Ptsv2paymentsidreversalsReversalInformation', 'model/Ptsv2paymentsidreversalsReversalInformationAmountDetails', 'model/Ptsv2paymentsidvoidsPaymentInformation', 'model/Ptsv2payoutsClientReferenceInformation', 'model/Ptsv2payoutsMerchantInformation', 'model/Ptsv2payoutsMerchantInformationMerchantDescriptor', 'model/Ptsv2payoutsOrderInformation', 'model/Ptsv2payoutsOrderInformationAmountDetails', 'model/Ptsv2payoutsOrderInformationAmountDetailsSurcharge', 'model/Ptsv2payoutsOrderInformationBillTo', 'model/Ptsv2payoutsPaymentInformation', 'model/Ptsv2payoutsPaymentInformationCard', 'model/Ptsv2payoutsProcessingInformation', 'model/Ptsv2payoutsProcessingInformationPayoutsOptions', 'model/Ptsv2payoutsRecipientInformation', 'model/Ptsv2payoutsSenderInformation', 'model/Ptsv2payoutsSenderInformationAccount', 'model/RefundCaptureRequest', 'model/RefundPaymentRequest', 'model/ReportingV3ConversionDetailsGet200Response', 'model/ReportingV3ConversionDetailsGet200ResponseConversionDetails', 'model/ReportingV3ConversionDetailsGet200ResponseNotes', 'model/ReportingV3NetFundingsGet200Response', 'model/ReportingV3NetFundingsGet200ResponseNetFundingSummaries', 'model/ReportingV3NetFundingsGet200ResponseTotalPurchases', 'model/ReportingV3NotificationofChangesGet200Response', 'model/ReportingV3NotificationofChangesGet200ResponseNotificationOfChanges', 'model/ReportingV3PaymentBatchSummariesGet200Response', 'model/ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries', 'model/ReportingV3PurchaseRefundDetailsGet200Response', 'model/ReportingV3PurchaseRefundDetailsGet200ResponseAuthorizations', 'model/ReportingV3PurchaseRefundDetailsGet200ResponseFeeAndFundingDetails', 'model/ReportingV3PurchaseRefundDetailsGet200ResponseOthers', 'model/ReportingV3PurchaseRefundDetailsGet200ResponseRequestDetails', 'model/ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses', 'model/ReportingV3PurchaseRefundDetailsGet200ResponseSettlements', 'model/ReportingV3ReportDefinitionsGet200Response', 'model/ReportingV3ReportDefinitionsGet200ResponseReportDefinitions', 'model/ReportingV3ReportDefinitionsNameGet200Response', 'model/ReportingV3ReportDefinitionsNameGet200ResponseAttributes', 'model/ReportingV3ReportDefinitionsNameGet200ResponseDefaultSettings', 'model/ReportingV3ReportSubscriptionsGet200Response', 'model/ReportingV3ReportSubscriptionsGet200ResponseSubscriptions', 'model/ReportingV3ReportsGet200Response', 'model/ReportingV3ReportsGet200ResponseLink', 'model/ReportingV3ReportsGet200ResponseLinkReportDownload', 'model/ReportingV3ReportsGet200ResponseReportSearchResults', 'model/ReportingV3ReportsIdGet200Response', 'model/Reportingv3ReportDownloadsGet400Response', 'model/Reportingv3ReportDownloadsGet400ResponseDetails', 'model/Reportingv3reportsReportPreferences', 'model/ResponseStatus', 'model/ResponseStatusDetails', 'model/RiskV1AddressVerificationsPost201Response', 'model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation', 'model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationBarCode', 'model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddress', 'model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddressAddress1', 'model/RiskV1AuthenticationResultsPost201Response', 'model/RiskV1AuthenticationResultsPost201ResponseConsumerAuthenticationInformation', 'model/RiskV1AuthenticationsPost201Response', 'model/RiskV1AuthenticationsPost201ResponseConsumerAuthenticationInformation', 'model/RiskV1AuthenticationsPost201ResponseOrderInformation', 'model/RiskV1AuthenticationsPost201ResponseOrderInformationAmountDetails', 'model/RiskV1AuthenticationsPost400Response', 'model/RiskV1DecisionsPost201Response', 'model/RiskV1DecisionsPost201ResponsePaymentInformation', 'model/RiskV1DecisionsPost400Response', 'model/RiskV1ExportComplianceInquiriesPost201Response', 'model/RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformation', 'model/RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformationWatchList', 'model/RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformationWatchListMatches', 'model/RiskV1UpdatePost201Response', 'model/Riskv1addressverificationsBuyerInformation', 'model/Riskv1addressverificationsClientReferenceInformation', 'model/Riskv1addressverificationsOrderInformation', 'model/Riskv1addressverificationsOrderInformationBillTo', 'model/Riskv1addressverificationsOrderInformationLineItems', 'model/Riskv1addressverificationsOrderInformationShipTo', 'model/Riskv1authenticationresultsConsumerAuthenticationInformation', 'model/Riskv1authenticationresultsOrderInformation', 'model/Riskv1authenticationresultsOrderInformationLineItems', 'model/Riskv1authenticationresultsPaymentInformation', 'model/Riskv1authenticationresultsPaymentInformationCard', 'model/Riskv1authenticationresultsPaymentInformationTokenizedCard', 'model/Riskv1authenticationsBuyerInformation', 'model/Riskv1authenticationsClientReferenceInformation', 'model/Riskv1authenticationsConsumerAuthenticationInformation', 'model/Riskv1authenticationsConsumerAuthenticationInformationStrongAuthentication', 'model/Riskv1authenticationsDeviceInformation', 'model/Riskv1authenticationsMerchantInformation', 'model/Riskv1authenticationsMerchantInformationMerchantDescriptor', 'model/Riskv1authenticationsOrderInformation', 'model/Riskv1authenticationsOrderInformationAmountDetails', 'model/Riskv1authenticationsOrderInformationBillTo', 'model/Riskv1authenticationsOrderInformationLineItems', 'model/Riskv1authenticationsOrderInformationShipTo', 'model/Riskv1authenticationsPaymentInformation', 'model/Riskv1authenticationsPaymentInformationCard', 'model/Riskv1authenticationsPaymentInformationFluidData', 'model/Riskv1authenticationsPaymentInformationTokenizedCard', 'model/Riskv1authenticationsProcessingInformation', 'model/Riskv1authenticationsRiskInformation', 'model/Riskv1authenticationsTravelInformation', 'model/Riskv1authenticationsTravelInformationLegs', 'model/Riskv1authenticationsTravelInformationPassengers', 'model/Riskv1decisionsBuyerInformation', 'model/Riskv1decisionsCardVerification', 'model/Riskv1decisionsClientReferenceInformation', 'model/Riskv1decisionsDeviceInformation', 'model/Riskv1decisionsMerchantDefinedInformation', 'model/Riskv1decisionsOrderInformation', 'model/Riskv1decisionsOrderInformationAmountDetails', 'model/Riskv1decisionsOrderInformationBillTo', 'model/Riskv1decisionsOrderInformationLineItems', 'model/Riskv1decisionsOrderInformationShipTo', 'model/Riskv1decisionsOrderInformationShippingDetails', 'model/Riskv1decisionsPaymentInformation', 'model/Riskv1decisionsPaymentInformationCard', 'model/Riskv1decisionsPaymentInformationTokenizedCard', 'model/Riskv1decisionsProcessorInformation', 'model/Riskv1decisionsProcessorInformationAvs', 'model/Riskv1decisionsRiskInformation', 'model/Riskv1decisionsTravelInformation', 'model/Riskv1decisionsTravelInformationLegs', 'model/Riskv1decisionsidmarkingRiskInformation', 'model/Riskv1decisionsidmarkingRiskInformationMarkingDetails', 'model/Riskv1exportcomplianceinquiriesDeviceInformation', 'model/Riskv1exportcomplianceinquiriesExportComplianceInformation', 'model/Riskv1exportcomplianceinquiriesExportComplianceInformationWeights', 'model/Riskv1exportcomplianceinquiriesOrderInformation', 'model/Riskv1exportcomplianceinquiriesOrderInformationBillTo', 'model/Riskv1exportcomplianceinquiriesOrderInformationBillToCompany', 'model/Riskv1exportcomplianceinquiriesOrderInformationLineItems', 'model/Riskv1exportcomplianceinquiriesOrderInformationShipTo', 'model/Riskv1liststypeentriesBuyerInformation', 'model/Riskv1liststypeentriesDeviceInformation', 'model/Riskv1liststypeentriesOrderInformation', 'model/Riskv1liststypeentriesOrderInformationAddress', 'model/Riskv1liststypeentriesOrderInformationBillTo', 'model/Riskv1liststypeentriesOrderInformationLineItems', 'model/Riskv1liststypeentriesOrderInformationShipTo', 'model/Riskv1liststypeentriesPaymentInformation', 'model/Riskv1liststypeentriesPaymentInformationBank', 'model/Riskv1liststypeentriesPaymentInformationCard', 'model/Riskv1liststypeentriesRiskInformation', 'model/Riskv1liststypeentriesRiskInformationMarkingDetails', 'model/SelfLinkBean', 'model/TmsV1InstrumentIdentifiersDelete409Response', 'model/TmsV1InstrumentIdentifiersDelete409ResponseLinks', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbedded', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBankAccount', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBillTo', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformation', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationIssuedBy', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationPersonalIdentification', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedCard', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedEmbedded', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedEmbeddedInstrumentIdentifier', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedLinks', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedLinksSelf', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedMerchantInformation', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedMerchantInformationMerchantDescriptor', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedPaymentInstruments', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedProcessingInformation', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedProcessingInformationBankTransferOptions', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinks', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksFirst', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksLast', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksNext', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksPrev', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksSelf', 'model/TmsV1InstrumentIdentifiersPost200Response', 'model/TmsV1InstrumentIdentifiersPost200ResponseCard', 'model/TmsV1InstrumentIdentifiersPost200ResponseIssuer', 'model/TmsV1InstrumentIdentifiersPost200ResponseLinks', 'model/TmsV1InstrumentIdentifiersPost200ResponseLinksPaymentInstruments', 'model/TmsV1InstrumentIdentifiersPost200ResponseLinksSelf', 'model/TmsV1InstrumentIdentifiersPost200ResponseMetadata', 'model/TmsV1InstrumentIdentifiersPost200ResponseProcessingInformation', 'model/TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptions', 'model/TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptionsInitiator', 'model/TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction', 'model/TmsV1InstrumentIdentifiersPost200ResponseTokenizedCard', 'model/TmsV1InstrumentIdentifiersPost200ResponseTokenizedCardCard', 'model/Tmsv1instrumentidentifiersBankAccount', 'model/Tmsv1instrumentidentifiersBillTo', 'model/Tmsv1instrumentidentifiersCard', 'model/Tmsv1instrumentidentifiersDetails', 'model/Tmsv1paymentinstrumentsInstrumentIdentifier', 'model/TokenizeParameters', 'model/TokenizeRequest', 'model/TokenizeResult', 'model/TssV2TransactionsGet200Response', 'model/TssV2TransactionsGet200ResponseApplicationInformation', 'model/TssV2TransactionsGet200ResponseApplicationInformationApplications', 'model/TssV2TransactionsGet200ResponseBuyerInformation', 'model/TssV2TransactionsGet200ResponseClientReferenceInformation', 'model/TssV2TransactionsGet200ResponseConsumerAuthenticationInformation', 'model/TssV2TransactionsGet200ResponseDeviceInformation', 'model/TssV2TransactionsGet200ResponseErrorInformation', 'model/TssV2TransactionsGet200ResponseFraudMarkingInformation', 'model/TssV2TransactionsGet200ResponseInstallmentInformation', 'model/TssV2TransactionsGet200ResponseLinks', 'model/TssV2TransactionsGet200ResponseMerchantInformation', 'model/TssV2TransactionsGet200ResponseMerchantInformationMerchantDescriptor', 'model/TssV2TransactionsGet200ResponseOrderInformation', 'model/TssV2TransactionsGet200ResponseOrderInformationAmountDetails', 'model/TssV2TransactionsGet200ResponseOrderInformationBillTo', 'model/TssV2TransactionsGet200ResponseOrderInformationInvoiceDetails', 'model/TssV2TransactionsGet200ResponseOrderInformationLineItems', 'model/TssV2TransactionsGet200ResponseOrderInformationShipTo', 'model/TssV2TransactionsGet200ResponseOrderInformationShippingDetails', 'model/TssV2TransactionsGet200ResponsePaymentInformation', 'model/TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures', 'model/TssV2TransactionsGet200ResponsePaymentInformationBank', 'model/TssV2TransactionsGet200ResponsePaymentInformationBankAccount', 'model/TssV2TransactionsGet200ResponsePaymentInformationBankMandate', 'model/TssV2TransactionsGet200ResponsePaymentInformationCard', 'model/TssV2TransactionsGet200ResponsePaymentInformationInvoice', 'model/TssV2TransactionsGet200ResponsePaymentInformationPaymentType', 'model/TssV2TransactionsGet200ResponsePointOfSaleInformation', 'model/TssV2TransactionsGet200ResponseProcessingInformation', 'model/TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions', 'model/TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions', 'model/TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions', 'model/TssV2TransactionsGet200ResponseProcessorInformation', 'model/TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults', 'model/TssV2TransactionsGet200ResponseProcessorInformationProcessor', 'model/TssV2TransactionsGet200ResponseRiskInformation', 'model/TssV2TransactionsGet200ResponseRiskInformationProfile', 'model/TssV2TransactionsGet200ResponseRiskInformationRules', 'model/TssV2TransactionsGet200ResponseRiskInformationScore', 'model/TssV2TransactionsGet200ResponseSenderInformation', 'model/TssV2TransactionsPost201Response', 'model/TssV2TransactionsPost201ResponseEmbedded', 'model/TssV2TransactionsPost201ResponseEmbeddedApplicationInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedBuyerInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedDeviceInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedLinks', 'model/TssV2TransactionsPost201ResponseEmbeddedMerchantInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedOrderInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedOrderInformationBillTo', 'model/TssV2TransactionsPost201ResponseEmbeddedOrderInformationShipTo', 'model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationCard', 'model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType', 'model/TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner', 'model/TssV2TransactionsPost201ResponseEmbeddedProcessingInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedProcessorInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedRiskInformation', 'model/TssV2TransactionsPost201ResponseEmbeddedRiskInformationProviders', 'model/TssV2TransactionsPost201ResponseEmbeddedRiskInformationProvidersFingerprint', 'model/TssV2TransactionsPost201ResponseEmbeddedTransactionSummaries', 'model/TssV2TransactionsPost400Response', 'model/UmsV1UsersGet200Response', 'model/UmsV1UsersGet200ResponseAccountInformation', 'model/UmsV1UsersGet200ResponseContactInformation', 'model/UmsV1UsersGet200ResponseOrganizationInformation', 'model/UmsV1UsersGet200ResponseUsers', 'model/UpdateInstrumentIdentifierRequest', 'model/UpdateInvoiceRequest', 'model/UpdatePaymentInstrumentRequest', 'model/V1FileDetailsGet200Response', 'model/V1FileDetailsGet200ResponseFileDetails', 'model/V1FileDetailsGet200ResponseLinks', 'model/V1FileDetailsGet200ResponseLinksFiles', 'model/V1FileDetailsGet200ResponseLinksSelf', 'model/ValidateExportComplianceRequest', 'model/ValidateRequest', 'model/VerifyCustomerAddressRequest', 'model/VoidCaptureRequest', 'model/VoidCreditRequest', 'model/VoidPaymentRequest', 'model/VoidRefundRequest', 'api/CaptureApi', 'api/ConversionDetailsApi', 'api/CreditApi', 'api/DecisionManagerApi', 'api/DownloadDTDApi', 'api/DownloadXSDApi', 'api/InstrumentIdentifierApi', 'api/InvoiceSettingsApi', 'api/InvoicesApi', 'api/KeyGenerationApi', 'api/NetFundingsApi', 'api/NotificationOfChangesApi', 'api/PayerAuthenticationApi', 'api/PaymentBatchSummariesApi', 'api/PaymentInstrumentApi', 'api/PaymentsApi', 'api/PayoutsApi', 'api/PurchaseAndRefundDetailsApi', 'api/RefundApi', 'api/ReportDefinitionsApi', 'api/ReportDownloadsApi', 'api/ReportSubscriptionsApi', 'api/ReportsApi', 'api/ReversalApi', 'api/SearchTransactionsApi', 'api/SecureFileShareApi', 'api/TokenizationApi', 'api/TransactionBatchesApi', 'api/TransactionDetailsApi', 'api/UserManagementApi', 'api/VerificationApi', 'api/VoidApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AddNegativeListRequest'), require('./model/AuthReversalRequest'), require('./model/AuthorizationOptions'), require('./model/BillTo'), require('./model/BuyerInformation'), require('./model/CapturePaymentRequest'), require('./model/CardInfo'), require('./model/CheckPayerAuthEnrollmentRequest'), require('./model/CreateAdhocReportRequest'), require('./model/CreateCreditRequest'), require('./model/CreateDecisionManagerCaseRequest'), require('./model/CreateInstrumentIdentifierRequest'), require('./model/CreateInvoiceRequest'), require('./model/CreatePaymentInstrumentRequest'), require('./model/CreatePaymentRequest'), require('./model/CreateReportSubscriptionRequest'), require('./model/CreateSearchRequest'), require('./model/DerPublicKey'), require('./model/Detail'), require('./model/EmbeddedInstrumentIdentifierRequest'), require('./model/EmbeddedInstrumentIdentifierResponse'), require('./model/Error'), require('./model/ErrorBean'), require('./model/ErrorFieldBean'), require('./model/ErrorLinks'), require('./model/ErrorResponse'), require('./model/ErrorResponseWithHAL'), require('./model/ExistingInstrumentIdentifierId'), require('./model/FileBean'), require('./model/FileDetail'), require('./model/FileDetailsResponse'), require('./model/FlexV1KeysPost200Response'), require('./model/FlexV1KeysPost200ResponseDer'), require('./model/FlexV1KeysPost200ResponseJwk'), require('./model/FlexV1TokensPost200Response'), require('./model/Flexv1tokensCardInfo'), require('./model/FraudMarkingActionRequest'), require('./model/GeneratePublicKeyRequest'), require('./model/IncrementAuthRequest'), require('./model/Initiator'), require('./model/InlineResponse400'), require('./model/InlineResponse4001'), require('./model/InlineResponse4001Fields'), require('./model/InlineResponseDefault'), require('./model/InlineResponseDefaultLinks'), require('./model/InlineResponseDefaultLinksNext'), require('./model/InlineResponseDefaultResponseStatus'), require('./model/InlineResponseDefaultResponseStatusDetails'), require('./model/InstrumentIdentifierBankAccount'), require('./model/InstrumentIdentifierCard'), require('./model/InstrumentIdentifierEnrollableCard'), require('./model/InstrumentIdentifierPaymentInstrumentsLink'), require('./model/InstrumentIdentifierProcessingInformation'), require('./model/InstrumentIdentifierResponse'), require('./model/InstrumentIdentifierTokenizedCard'), require('./model/InstrumentIdentifierUpdate'), require('./model/InvoiceSettingsRequest'), require('./model/InvoicingV2InvoiceSettingsGet200Response'), require('./model/InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformation'), require('./model/InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformationHeaderStyle'), require('./model/InvoicingV2InvoicesAllGet200Response'), require('./model/InvoicingV2InvoicesAllGet200ResponseCustomerInformation'), require('./model/InvoicingV2InvoicesAllGet200ResponseInvoiceInformation'), require('./model/InvoicingV2InvoicesAllGet200ResponseInvoices'), require('./model/InvoicingV2InvoicesAllGet200ResponseLinks'), require('./model/InvoicingV2InvoicesAllGet200ResponseLinks1'), require('./model/InvoicingV2InvoicesAllGet200ResponseOrderInformation'), require('./model/InvoicingV2InvoicesAllGet200ResponseOrderInformationAmountDetails'), require('./model/InvoicingV2InvoicesAllGet400Response'), require('./model/InvoicingV2InvoicesAllGet404Response'), require('./model/InvoicingV2InvoicesAllGet502Response'), require('./model/InvoicingV2InvoicesGet200Response'), require('./model/InvoicingV2InvoicesGet200ResponseInvoiceHistory'), require('./model/InvoicingV2InvoicesGet200ResponseTransactionDetails'), require('./model/InvoicingV2InvoicesPost201Response'), require('./model/InvoicingV2InvoicesPost201ResponseInvoiceInformation'), require('./model/InvoicingV2InvoicesPost201ResponseOrderInformation'), require('./model/InvoicingV2InvoicesPost201ResponseOrderInformationAmountDetails'), require('./model/InvoicingV2InvoicesPost202Response'), require('./model/Invoicingv2invoicesCustomerInformation'), require('./model/Invoicingv2invoicesInvoiceInformation'), require('./model/Invoicingv2invoicesOrderInformation'), require('./model/Invoicingv2invoicesOrderInformationAmountDetails'), require('./model/Invoicingv2invoicesOrderInformationAmountDetailsFreight'), require('./model/Invoicingv2invoicesOrderInformationAmountDetailsTaxDetails'), require('./model/Invoicingv2invoicesOrderInformationLineItems'), require('./model/Invoicingv2invoicesidInvoiceInformation'), require('./model/Issuer'), require('./model/JsonWebKey'), require('./model/KeyParameters'), require('./model/KeyResult'), require('./model/Link'), require('./model/Links'), require('./model/MerchantInformation'), require('./model/MerchantInitiatedTransaction'), require('./model/Metadata'), require('./model/MitReversalRequest'), require('./model/MitVoidRequest'), require('./model/Model409Link'), require('./model/Model409Links'), require('./model/OctCreatePaymentRequest'), require('./model/PIForIILinkFirst'), require('./model/PIForIILinkLast'), require('./model/PIForIILinkNext'), require('./model/PIForIILinkPrev'), require('./model/PIForIILinkSelf'), require('./model/PaymentInstrument'), require('./model/PaymentInstrumentBankAccount'), require('./model/PaymentInstrumentCard'), require('./model/PaymentInstrumentForInstrumentIdentifierLinks'), require('./model/PaymentInstrumentInstrumentIdentifierRequest'), require('./model/PaymentInstrumentSelfLink'), require('./model/PaymentInstrumentsArray'), require('./model/PaymentInstrumentsForInstrumentIdentifier'), require('./model/PaymentInstrumentsLinks'), require('./model/PersonalIdentification'), require('./model/PersonalIdentificationArray'), require('./model/PredefinedSubscriptionRequestBean'), require('./model/ProcessingInformation'), require('./model/PtsV1TransactionBatchesGet200Response'), require('./model/PtsV1TransactionBatchesGet200ResponseLinks'), require('./model/PtsV1TransactionBatchesGet200ResponseLinksSelf'), require('./model/PtsV1TransactionBatchesGet200ResponseTransactionBatches'), require('./model/PtsV1TransactionBatchesGet400Response'), require('./model/PtsV1TransactionBatchesGet400ResponseErrorInformation'), require('./model/PtsV1TransactionBatchesGet400ResponseErrorInformationDetails'), require('./model/PtsV1TransactionBatchesGet500Response'), require('./model/PtsV1TransactionBatchesGet500ResponseErrorInformation'), require('./model/PtsV1TransactionBatchesIdGet200Response'), require('./model/PtsV1TransactionBatchesIdGet200ResponseLinks'), require('./model/PtsV1TransactionBatchesIdGet200ResponseLinksTransactions'), require('./model/PtsV2CreditsPost201Response'), require('./model/PtsV2CreditsPost201ResponseCreditAmountDetails'), require('./model/PtsV2CreditsPost201ResponsePaymentInformation'), require('./model/PtsV2CreditsPost201ResponseProcessingInformation'), require('./model/PtsV2CreditsPost201ResponseProcessingInformationBankTransferOptions'), require('./model/PtsV2IncrementalAuthorizationPatch201Response'), require('./model/PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation'), require('./model/PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation'), require('./model/PtsV2IncrementalAuthorizationPatch201ResponseLinks'), require('./model/PtsV2IncrementalAuthorizationPatch201ResponseOrderInformation'), require('./model/PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformation'), require('./model/PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformationAccountFeatures'), require('./model/PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation'), require('./model/PtsV2IncrementalAuthorizationPatch400Response'), require('./model/PtsV2PaymentsCapturesPost201Response'), require('./model/PtsV2PaymentsCapturesPost201ResponseLinks'), require('./model/PtsV2PaymentsCapturesPost201ResponseOrderInformation'), require('./model/PtsV2PaymentsCapturesPost201ResponseOrderInformationAmountDetails'), require('./model/PtsV2PaymentsCapturesPost201ResponseOrderInformationInvoiceDetails'), require('./model/PtsV2PaymentsCapturesPost201ResponsePointOfSaleInformation'), require('./model/PtsV2PaymentsCapturesPost201ResponseProcessingInformation'), require('./model/PtsV2PaymentsCapturesPost201ResponseProcessorInformation'), require('./model/PtsV2PaymentsCapturesPost400Response'), require('./model/PtsV2PaymentsPost201Response'), require('./model/PtsV2PaymentsPost201ResponseClientReferenceInformation'), require('./model/PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation'), require('./model/PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationIvr'), require('./model/PtsV2PaymentsPost201ResponseErrorInformation'), require('./model/PtsV2PaymentsPost201ResponseErrorInformationDetails'), require('./model/PtsV2PaymentsPost201ResponseInstallmentInformation'), require('./model/PtsV2PaymentsPost201ResponseIssuerInformation'), require('./model/PtsV2PaymentsPost201ResponseLinks'), require('./model/PtsV2PaymentsPost201ResponseLinksSelf'), require('./model/PtsV2PaymentsPost201ResponseOrderInformation'), require('./model/PtsV2PaymentsPost201ResponseOrderInformationAmountDetails'), require('./model/PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails'), require('./model/PtsV2PaymentsPost201ResponsePaymentInformation'), require('./model/PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures'), require('./model/PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances'), require('./model/PtsV2PaymentsPost201ResponsePaymentInformationBank'), require('./model/PtsV2PaymentsPost201ResponsePaymentInformationBankAccount'), require('./model/PtsV2PaymentsPost201ResponsePaymentInformationCard'), require('./model/PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard'), require('./model/PtsV2PaymentsPost201ResponsePointOfSaleInformation'), require('./model/PtsV2PaymentsPost201ResponsePointOfSaleInformationEmv'), require('./model/PtsV2PaymentsPost201ResponseProcessingInformation'), require('./model/PtsV2PaymentsPost201ResponseProcessingInformationBankTransferOptions'), require('./model/PtsV2PaymentsPost201ResponseProcessorInformation'), require('./model/PtsV2PaymentsPost201ResponseProcessorInformationAchVerification'), require('./model/PtsV2PaymentsPost201ResponseProcessorInformationAvs'), require('./model/PtsV2PaymentsPost201ResponseProcessorInformationCardVerification'), require('./model/PtsV2PaymentsPost201ResponseProcessorInformationConsumerAuthenticationResponse'), require('./model/PtsV2PaymentsPost201ResponseProcessorInformationCustomer'), require('./model/PtsV2PaymentsPost201ResponseProcessorInformationElectronicVerificationResults'), require('./model/PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice'), require('./model/PtsV2PaymentsPost201ResponseProcessorInformationRouting'), require('./model/PtsV2PaymentsPost201ResponseRiskInformation'), require('./model/PtsV2PaymentsPost201ResponseRiskInformationInfoCodes'), require('./model/PtsV2PaymentsPost201ResponseRiskInformationIpAddress'), require('./model/PtsV2PaymentsPost201ResponseRiskInformationProfile'), require('./model/PtsV2PaymentsPost201ResponseRiskInformationProviders'), require('./model/PtsV2PaymentsPost201ResponseRiskInformationProvidersProviderName'), require('./model/PtsV2PaymentsPost201ResponseRiskInformationRules'), require('./model/PtsV2PaymentsPost201ResponseRiskInformationScore'), require('./model/PtsV2PaymentsPost201ResponseRiskInformationTravel'), require('./model/PtsV2PaymentsPost201ResponseRiskInformationTravelActualFinalDestination'), require('./model/PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDeparture'), require('./model/PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDestination'), require('./model/PtsV2PaymentsPost201ResponseRiskInformationTravelLastDestination'), require('./model/PtsV2PaymentsPost201ResponseRiskInformationVelocity'), require('./model/PtsV2PaymentsPost201ResponseRiskInformationVelocityMorphing'), require('./model/PtsV2PaymentsPost400Response'), require('./model/PtsV2PaymentsPost502Response'), require('./model/PtsV2PaymentsRefundPost201Response'), require('./model/PtsV2PaymentsRefundPost201ResponseLinks'), require('./model/PtsV2PaymentsRefundPost201ResponseOrderInformation'), require('./model/PtsV2PaymentsRefundPost201ResponseProcessorInformation'), require('./model/PtsV2PaymentsRefundPost201ResponseRefundAmountDetails'), require('./model/PtsV2PaymentsRefundPost400Response'), require('./model/PtsV2PaymentsReversalsPost201Response'), require('./model/PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation'), require('./model/PtsV2PaymentsReversalsPost201ResponseIssuerInformation'), require('./model/PtsV2PaymentsReversalsPost201ResponseProcessorInformation'), require('./model/PtsV2PaymentsReversalsPost201ResponseReversalAmountDetails'), require('./model/PtsV2PaymentsReversalsPost400Response'), require('./model/PtsV2PaymentsVoidsPost201Response'), require('./model/PtsV2PaymentsVoidsPost201ResponseProcessorInformation'), require('./model/PtsV2PaymentsVoidsPost201ResponseVoidAmountDetails'), require('./model/PtsV2PaymentsVoidsPost400Response'), require('./model/PtsV2PayoutsPost201Response'), require('./model/PtsV2PayoutsPost201ResponseErrorInformation'), require('./model/PtsV2PayoutsPost201ResponseMerchantInformation'), require('./model/PtsV2PayoutsPost201ResponseMerchantInformationMerchantDescriptor'), require('./model/PtsV2PayoutsPost201ResponseOrderInformation'), require('./model/PtsV2PayoutsPost201ResponseOrderInformationAmountDetails'), require('./model/PtsV2PayoutsPost201ResponseProcessorInformation'), require('./model/PtsV2PayoutsPost201ResponseRecipientInformation'), require('./model/PtsV2PayoutsPost201ResponseRecipientInformationCard'), require('./model/PtsV2PayoutsPost400Response'), require('./model/Ptsv2creditsInstallmentInformation'), require('./model/Ptsv2creditsProcessingInformation'), require('./model/Ptsv2creditsProcessingInformationBankTransferOptions'), require('./model/Ptsv2creditsProcessingInformationElectronicBenefitsTransfer'), require('./model/Ptsv2creditsProcessingInformationJapanPaymentOptions'), require('./model/Ptsv2creditsProcessingInformationPurchaseOptions'), require('./model/Ptsv2paymentsAcquirerInformation'), require('./model/Ptsv2paymentsAggregatorInformation'), require('./model/Ptsv2paymentsAggregatorInformationSubMerchant'), require('./model/Ptsv2paymentsBuyerInformation'), require('./model/Ptsv2paymentsBuyerInformationPersonalIdentification'), require('./model/Ptsv2paymentsClientReferenceInformation'), require('./model/Ptsv2paymentsClientReferenceInformationPartner'), require('./model/Ptsv2paymentsConsumerAuthenticationInformation'), require('./model/Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication'), require('./model/Ptsv2paymentsDeviceInformation'), require('./model/Ptsv2paymentsDeviceInformationRawData'), require('./model/Ptsv2paymentsInstallmentInformation'), require('./model/Ptsv2paymentsIssuerInformation'), require('./model/Ptsv2paymentsMerchantDefinedInformation'), require('./model/Ptsv2paymentsMerchantInformation'), require('./model/Ptsv2paymentsMerchantInformationMerchantDescriptor'), require('./model/Ptsv2paymentsMerchantInformationServiceFeeDescriptor'), require('./model/Ptsv2paymentsOrderInformation'), require('./model/Ptsv2paymentsOrderInformationAmountDetails'), require('./model/Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts'), require('./model/Ptsv2paymentsOrderInformationAmountDetailsCurrencyConversion'), require('./model/Ptsv2paymentsOrderInformationAmountDetailsSurcharge'), require('./model/Ptsv2paymentsOrderInformationAmountDetailsTaxDetails'), require('./model/Ptsv2paymentsOrderInformationBillTo'), require('./model/Ptsv2paymentsOrderInformationBillToCompany'), require('./model/Ptsv2paymentsOrderInformationInvoiceDetails'), require('./model/Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum'), require('./model/Ptsv2paymentsOrderInformationLineItems'), require('./model/Ptsv2paymentsOrderInformationPassenger'), require('./model/Ptsv2paymentsOrderInformationShipTo'), require('./model/Ptsv2paymentsOrderInformationShippingDetails'), require('./model/Ptsv2paymentsPaymentInformation'), require('./model/Ptsv2paymentsPaymentInformationBank'), require('./model/Ptsv2paymentsPaymentInformationBankAccount'), require('./model/Ptsv2paymentsPaymentInformationCard'), require('./model/Ptsv2paymentsPaymentInformationCustomer'), require('./model/Ptsv2paymentsPaymentInformationFluidData'), require('./model/Ptsv2paymentsPaymentInformationTokenizedCard'), require('./model/Ptsv2paymentsPointOfSaleInformation'), require('./model/Ptsv2paymentsPointOfSaleInformationEmv'), require('./model/Ptsv2paymentsProcessingInformation'), require('./model/Ptsv2paymentsProcessingInformationAuthorizationOptions'), require('./model/Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiator'), require('./model/Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction'), require('./model/Ptsv2paymentsProcessingInformationBankTransferOptions'), require('./model/Ptsv2paymentsProcessingInformationCaptureOptions'), require('./model/Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer'), require('./model/Ptsv2paymentsProcessingInformationJapanPaymentOptions'), require('./model/Ptsv2paymentsProcessingInformationLoanOptions'), require('./model/Ptsv2paymentsProcessingInformationPurchaseOptions'), require('./model/Ptsv2paymentsProcessingInformationRecurringOptions'), require('./model/Ptsv2paymentsPromotionInformation'), require('./model/Ptsv2paymentsRecipientInformation'), require('./model/Ptsv2paymentsRecurringPaymentInformation'), require('./model/Ptsv2paymentsRiskInformation'), require('./model/Ptsv2paymentsRiskInformationBuyerHistory'), require('./model/Ptsv2paymentsRiskInformationBuyerHistoryAccountHistory'), require('./model/Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount'), require('./model/Ptsv2paymentsRiskInformationProfile'), require('./model/Ptsv2paymentsTokenInformation'), require('./model/Ptsv2paymentsTravelInformation'), require('./model/Ptsv2paymentsTravelInformationAgency'), require('./model/Ptsv2paymentsTravelInformationLodging'), require('./model/Ptsv2paymentsTravelInformationLodgingRoom'), require('./model/Ptsv2paymentsTravelInformationTransit'), require('./model/Ptsv2paymentsTravelInformationTransitAirline'), require('./model/Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation'), require('./model/Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService'), require('./model/Ptsv2paymentsTravelInformationTransitAirlineLegs'), require('./model/Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer'), require('./model/Ptsv2paymentsidClientReferenceInformation'), require('./model/Ptsv2paymentsidClientReferenceInformationPartner'), require('./model/Ptsv2paymentsidMerchantInformation'), require('./model/Ptsv2paymentsidOrderInformation'), require('./model/Ptsv2paymentsidOrderInformationAmountDetails'), require('./model/Ptsv2paymentsidProcessingInformation'), require('./model/Ptsv2paymentsidProcessingInformationAuthorizationOptions'), require('./model/Ptsv2paymentsidProcessingInformationAuthorizationOptionsInitiator'), require('./model/Ptsv2paymentsidTravelInformation'), require('./model/Ptsv2paymentsidcapturesAggregatorInformation'), require('./model/Ptsv2paymentsidcapturesAggregatorInformationSubMerchant'), require('./model/Ptsv2paymentsidcapturesBuyerInformation'), require('./model/Ptsv2paymentsidcapturesDeviceInformation'), require('./model/Ptsv2paymentsidcapturesInstallmentInformation'), require('./model/Ptsv2paymentsidcapturesMerchantInformation'), require('./model/Ptsv2paymentsidcapturesOrderInformation'), require('./model/Ptsv2paymentsidcapturesOrderInformationAmountDetails'), require('./model/Ptsv2paymentsidcapturesOrderInformationBillTo'), require('./model/Ptsv2paymentsidcapturesOrderInformationInvoiceDetails'), require('./model/Ptsv2paymentsidcapturesOrderInformationShipTo'), require('./model/Ptsv2paymentsidcapturesOrderInformationShippingDetails'), require('./model/Ptsv2paymentsidcapturesPaymentInformation'), require('./model/Ptsv2paymentsidcapturesPaymentInformationCard'), require('./model/Ptsv2paymentsidcapturesPointOfSaleInformation'), require('./model/Ptsv2paymentsidcapturesPointOfSaleInformationEmv'), require('./model/Ptsv2paymentsidcapturesProcessingInformation'), require('./model/Ptsv2paymentsidcapturesProcessingInformationAuthorizationOptions'), require('./model/Ptsv2paymentsidcapturesProcessingInformationCaptureOptions'), require('./model/Ptsv2paymentsidcapturesTravelInformation'), require('./model/Ptsv2paymentsidrefundsMerchantInformation'), require('./model/Ptsv2paymentsidrefundsOrderInformation'), require('./model/Ptsv2paymentsidrefundsOrderInformationLineItems'), require('./model/Ptsv2paymentsidrefundsPaymentInformation'), require('./model/Ptsv2paymentsidrefundsPaymentInformationCard'), require('./model/Ptsv2paymentsidrefundsPaymentInformationPaymentType'), require('./model/Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod'), require('./model/Ptsv2paymentsidrefundsPointOfSaleInformation'), require('./model/Ptsv2paymentsidrefundsProcessingInformation'), require('./model/Ptsv2paymentsidrefundsProcessingInformationRecurringOptions'), require('./model/Ptsv2paymentsidreversalsClientReferenceInformation'), require('./model/Ptsv2paymentsidreversalsClientReferenceInformationPartner'), require('./model/Ptsv2paymentsidreversalsOrderInformation'), require('./model/Ptsv2paymentsidreversalsOrderInformationAmountDetails'), require('./model/Ptsv2paymentsidreversalsOrderInformationLineItems'), require('./model/Ptsv2paymentsidreversalsPointOfSaleInformation'), require('./model/Ptsv2paymentsidreversalsPointOfSaleInformationEmv'), require('./model/Ptsv2paymentsidreversalsProcessingInformation'), require('./model/Ptsv2paymentsidreversalsReversalInformation'), require('./model/Ptsv2paymentsidreversalsReversalInformationAmountDetails'), require('./model/Ptsv2paymentsidvoidsPaymentInformation'), require('./model/Ptsv2payoutsClientReferenceInformation'), require('./model/Ptsv2payoutsMerchantInformation'), require('./model/Ptsv2payoutsMerchantInformationMerchantDescriptor'), require('./model/Ptsv2payoutsOrderInformation'), require('./model/Ptsv2payoutsOrderInformationAmountDetails'), require('./model/Ptsv2payoutsOrderInformationAmountDetailsSurcharge'), require('./model/Ptsv2payoutsOrderInformationBillTo'), require('./model/Ptsv2payoutsPaymentInformation'), require('./model/Ptsv2payoutsPaymentInformationCard'), require('./model/Ptsv2payoutsProcessingInformation'), require('./model/Ptsv2payoutsProcessingInformationPayoutsOptions'), require('./model/Ptsv2payoutsRecipientInformation'), require('./model/Ptsv2payoutsSenderInformation'), require('./model/Ptsv2payoutsSenderInformationAccount'), require('./model/RefundCaptureRequest'), require('./model/RefundPaymentRequest'), require('./model/ReportingV3ConversionDetailsGet200Response'), require('./model/ReportingV3ConversionDetailsGet200ResponseConversionDetails'), require('./model/ReportingV3ConversionDetailsGet200ResponseNotes'), require('./model/ReportingV3NetFundingsGet200Response'), require('./model/ReportingV3NetFundingsGet200ResponseNetFundingSummaries'), require('./model/ReportingV3NetFundingsGet200ResponseTotalPurchases'), require('./model/ReportingV3NotificationofChangesGet200Response'), require('./model/ReportingV3NotificationofChangesGet200ResponseNotificationOfChanges'), require('./model/ReportingV3PaymentBatchSummariesGet200Response'), require('./model/ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries'), require('./model/ReportingV3PurchaseRefundDetailsGet200Response'), require('./model/ReportingV3PurchaseRefundDetailsGet200ResponseAuthorizations'), require('./model/ReportingV3PurchaseRefundDetailsGet200ResponseFeeAndFundingDetails'), require('./model/ReportingV3PurchaseRefundDetailsGet200ResponseOthers'), require('./model/ReportingV3PurchaseRefundDetailsGet200ResponseRequestDetails'), require('./model/ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses'), require('./model/ReportingV3PurchaseRefundDetailsGet200ResponseSettlements'), require('./model/ReportingV3ReportDefinitionsGet200Response'), require('./model/ReportingV3ReportDefinitionsGet200ResponseReportDefinitions'), require('./model/ReportingV3ReportDefinitionsNameGet200Response'), require('./model/ReportingV3ReportDefinitionsNameGet200ResponseAttributes'), require('./model/ReportingV3ReportDefinitionsNameGet200ResponseDefaultSettings'), require('./model/ReportingV3ReportSubscriptionsGet200Response'), require('./model/ReportingV3ReportSubscriptionsGet200ResponseSubscriptions'), require('./model/ReportingV3ReportsGet200Response'), require('./model/ReportingV3ReportsGet200ResponseLink'), require('./model/ReportingV3ReportsGet200ResponseLinkReportDownload'), require('./model/ReportingV3ReportsGet200ResponseReportSearchResults'), require('./model/ReportingV3ReportsIdGet200Response'), require('./model/Reportingv3ReportDownloadsGet400Response'), require('./model/Reportingv3ReportDownloadsGet400ResponseDetails'), require('./model/Reportingv3reportsReportPreferences'), require('./model/ResponseStatus'), require('./model/ResponseStatusDetails'), require('./model/RiskV1AddressVerificationsPost201Response'), require('./model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation'), require('./model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationBarCode'), require('./model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddress'), require('./model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddressAddress1'), require('./model/RiskV1AuthenticationResultsPost201Response'), require('./model/RiskV1AuthenticationResultsPost201ResponseConsumerAuthenticationInformation'), require('./model/RiskV1AuthenticationsPost201Response'), require('./model/RiskV1AuthenticationsPost201ResponseConsumerAuthenticationInformation'), require('./model/RiskV1AuthenticationsPost201ResponseOrderInformation'), require('./model/RiskV1AuthenticationsPost201ResponseOrderInformationAmountDetails'), require('./model/RiskV1AuthenticationsPost400Response'), require('./model/RiskV1DecisionsPost201Response'), require('./model/RiskV1DecisionsPost201ResponsePaymentInformation'), require('./model/RiskV1DecisionsPost400Response'), require('./model/RiskV1ExportComplianceInquiriesPost201Response'), require('./model/RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformation'), require('./model/RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformationWatchList'), require('./model/RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformationWatchListMatches'), require('./model/RiskV1UpdatePost201Response'), require('./model/Riskv1addressverificationsBuyerInformation'), require('./model/Riskv1addressverificationsClientReferenceInformation'), require('./model/Riskv1addressverificationsOrderInformation'), require('./model/Riskv1addressverificationsOrderInformationBillTo'), require('./model/Riskv1addressverificationsOrderInformationLineItems'), require('./model/Riskv1addressverificationsOrderInformationShipTo'), require('./model/Riskv1authenticationresultsConsumerAuthenticationInformation'), require('./model/Riskv1authenticationresultsOrderInformation'), require('./model/Riskv1authenticationresultsOrderInformationLineItems'), require('./model/Riskv1authenticationresultsPaymentInformation'), require('./model/Riskv1authenticationresultsPaymentInformationCard'), require('./model/Riskv1authenticationresultsPaymentInformationTokenizedCard'), require('./model/Riskv1authenticationsBuyerInformation'), require('./model/Riskv1authenticationsClientReferenceInformation'), require('./model/Riskv1authenticationsConsumerAuthenticationInformation'), require('./model/Riskv1authenticationsConsumerAuthenticationInformationStrongAuthentication'), require('./model/Riskv1authenticationsDeviceInformation'), require('./model/Riskv1authenticationsMerchantInformation'), require('./model/Riskv1authenticationsMerchantInformationMerchantDescriptor'), require('./model/Riskv1authenticationsOrderInformation'), require('./model/Riskv1authenticationsOrderInformationAmountDetails'), require('./model/Riskv1authenticationsOrderInformationBillTo'), require('./model/Riskv1authenticationsOrderInformationLineItems'), require('./model/Riskv1authenticationsOrderInformationShipTo'), require('./model/Riskv1authenticationsPaymentInformation'), require('./model/Riskv1authenticationsPaymentInformationCard'), require('./model/Riskv1authenticationsPaymentInformationFluidData'), require('./model/Riskv1authenticationsPaymentInformationTokenizedCard'), require('./model/Riskv1authenticationsProcessingInformation'), require('./model/Riskv1authenticationsRiskInformation'), require('./model/Riskv1authenticationsTravelInformation'), require('./model/Riskv1authenticationsTravelInformationLegs'), require('./model/Riskv1authenticationsTravelInformationPassengers'), require('./model/Riskv1decisionsBuyerInformation'), require('./model/Riskv1decisionsCardVerification'), require('./model/Riskv1decisionsClientReferenceInformation'), require('./model/Riskv1decisionsDeviceInformation'), require('./model/Riskv1decisionsMerchantDefinedInformation'), require('./model/Riskv1decisionsOrderInformation'), require('./model/Riskv1decisionsOrderInformationAmountDetails'), require('./model/Riskv1decisionsOrderInformationBillTo'), require('./model/Riskv1decisionsOrderInformationLineItems'), require('./model/Riskv1decisionsOrderInformationShipTo'), require('./model/Riskv1decisionsOrderInformationShippingDetails'), require('./model/Riskv1decisionsPaymentInformation'), require('./model/Riskv1decisionsPaymentInformationCard'), require('./model/Riskv1decisionsPaymentInformationTokenizedCard'), require('./model/Riskv1decisionsProcessorInformation'), require('./model/Riskv1decisionsProcessorInformationAvs'), require('./model/Riskv1decisionsRiskInformation'), require('./model/Riskv1decisionsTravelInformation'), require('./model/Riskv1decisionsTravelInformationLegs'), require('./model/Riskv1decisionsidmarkingRiskInformation'), require('./model/Riskv1decisionsidmarkingRiskInformationMarkingDetails'), require('./model/Riskv1exportcomplianceinquiriesDeviceInformation'), require('./model/Riskv1exportcomplianceinquiriesExportComplianceInformation'), require('./model/Riskv1exportcomplianceinquiriesExportComplianceInformationWeights'), require('./model/Riskv1exportcomplianceinquiriesOrderInformation'), require('./model/Riskv1exportcomplianceinquiriesOrderInformationBillTo'), require('./model/Riskv1exportcomplianceinquiriesOrderInformationBillToCompany'), require('./model/Riskv1exportcomplianceinquiriesOrderInformationLineItems'), require('./model/Riskv1exportcomplianceinquiriesOrderInformationShipTo'), require('./model/Riskv1liststypeentriesBuyerInformation'), require('./model/Riskv1liststypeentriesDeviceInformation'), require('./model/Riskv1liststypeentriesOrderInformation'), require('./model/Riskv1liststypeentriesOrderInformationAddress'), require('./model/Riskv1liststypeentriesOrderInformationBillTo'), require('./model/Riskv1liststypeentriesOrderInformationLineItems'), require('./model/Riskv1liststypeentriesOrderInformationShipTo'), require('./model/Riskv1liststypeentriesPaymentInformation'), require('./model/Riskv1liststypeentriesPaymentInformationBank'), require('./model/Riskv1liststypeentriesPaymentInformationCard'), require('./model/Riskv1liststypeentriesRiskInformation'), require('./model/Riskv1liststypeentriesRiskInformationMarkingDetails'), require('./model/SelfLinkBean'), require('./model/TmsV1InstrumentIdentifiersDelete409Response'), require('./model/TmsV1InstrumentIdentifiersDelete409ResponseLinks'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbedded'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBankAccount'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBillTo'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformation'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationIssuedBy'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationPersonalIdentification'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedCard'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedEmbedded'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedEmbeddedInstrumentIdentifier'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedLinks'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedLinksSelf'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedMerchantInformation'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedMerchantInformationMerchantDescriptor'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedPaymentInstruments'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedProcessingInformation'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedProcessingInformationBankTransferOptions'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinks'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksFirst'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksLast'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksNext'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksPrev'), require('./model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksSelf'), require('./model/TmsV1InstrumentIdentifiersPost200Response'), require('./model/TmsV1InstrumentIdentifiersPost200ResponseCard'), require('./model/TmsV1InstrumentIdentifiersPost200ResponseIssuer'), require('./model/TmsV1InstrumentIdentifiersPost200ResponseLinks'), require('./model/TmsV1InstrumentIdentifiersPost200ResponseLinksPaymentInstruments'), require('./model/TmsV1InstrumentIdentifiersPost200ResponseLinksSelf'), require('./model/TmsV1InstrumentIdentifiersPost200ResponseMetadata'), require('./model/TmsV1InstrumentIdentifiersPost200ResponseProcessingInformation'), require('./model/TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptions'), require('./model/TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptionsInitiator'), require('./model/TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction'), require('./model/TmsV1InstrumentIdentifiersPost200ResponseTokenizedCard'), require('./model/TmsV1InstrumentIdentifiersPost200ResponseTokenizedCardCard'), require('./model/Tmsv1instrumentidentifiersBankAccount'), require('./model/Tmsv1instrumentidentifiersBillTo'), require('./model/Tmsv1instrumentidentifiersCard'), require('./model/Tmsv1instrumentidentifiersDetails'), require('./model/Tmsv1paymentinstrumentsInstrumentIdentifier'), require('./model/TokenizeParameters'), require('./model/TokenizeRequest'), require('./model/TokenizeResult'), require('./model/TssV2TransactionsGet200Response'), require('./model/TssV2TransactionsGet200ResponseApplicationInformation'), require('./model/TssV2TransactionsGet200ResponseApplicationInformationApplications'), require('./model/TssV2TransactionsGet200ResponseBuyerInformation'), require('./model/TssV2TransactionsGet200ResponseClientReferenceInformation'), require('./model/TssV2TransactionsGet200ResponseConsumerAuthenticationInformation'), require('./model/TssV2TransactionsGet200ResponseDeviceInformation'), require('./model/TssV2TransactionsGet200ResponseErrorInformation'), require('./model/TssV2TransactionsGet200ResponseFraudMarkingInformation'), require('./model/TssV2TransactionsGet200ResponseInstallmentInformation'), require('./model/TssV2TransactionsGet200ResponseLinks'), require('./model/TssV2TransactionsGet200ResponseMerchantInformation'), require('./model/TssV2TransactionsGet200ResponseMerchantInformationMerchantDescriptor'), require('./model/TssV2TransactionsGet200ResponseOrderInformation'), require('./model/TssV2TransactionsGet200ResponseOrderInformationAmountDetails'), require('./model/TssV2TransactionsGet200ResponseOrderInformationBillTo'), require('./model/TssV2TransactionsGet200ResponseOrderInformationInvoiceDetails'), require('./model/TssV2TransactionsGet200ResponseOrderInformationLineItems'), require('./model/TssV2TransactionsGet200ResponseOrderInformationShipTo'), require('./model/TssV2TransactionsGet200ResponseOrderInformationShippingDetails'), require('./model/TssV2TransactionsGet200ResponsePaymentInformation'), require('./model/TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures'), require('./model/TssV2TransactionsGet200ResponsePaymentInformationBank'), require('./model/TssV2TransactionsGet200ResponsePaymentInformationBankAccount'), require('./model/TssV2TransactionsGet200ResponsePaymentInformationBankMandate'), require('./model/TssV2TransactionsGet200ResponsePaymentInformationCard'), require('./model/TssV2TransactionsGet200ResponsePaymentInformationInvoice'), require('./model/TssV2TransactionsGet200ResponsePaymentInformationPaymentType'), require('./model/TssV2TransactionsGet200ResponsePointOfSaleInformation'), require('./model/TssV2TransactionsGet200ResponseProcessingInformation'), require('./model/TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions'), require('./model/TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions'), require('./model/TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions'), require('./model/TssV2TransactionsGet200ResponseProcessorInformation'), require('./model/TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults'), require('./model/TssV2TransactionsGet200ResponseProcessorInformationProcessor'), require('./model/TssV2TransactionsGet200ResponseRiskInformation'), require('./model/TssV2TransactionsGet200ResponseRiskInformationProfile'), require('./model/TssV2TransactionsGet200ResponseRiskInformationRules'), require('./model/TssV2TransactionsGet200ResponseRiskInformationScore'), require('./model/TssV2TransactionsGet200ResponseSenderInformation'), require('./model/TssV2TransactionsPost201Response'), require('./model/TssV2TransactionsPost201ResponseEmbedded'), require('./model/TssV2TransactionsPost201ResponseEmbeddedApplicationInformation'), require('./model/TssV2TransactionsPost201ResponseEmbeddedBuyerInformation'), require('./model/TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformation'), require('./model/TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation'), require('./model/TssV2TransactionsPost201ResponseEmbeddedDeviceInformation'), require('./model/TssV2TransactionsPost201ResponseEmbeddedLinks'), require('./model/TssV2TransactionsPost201ResponseEmbeddedMerchantInformation'), require('./model/TssV2TransactionsPost201ResponseEmbeddedOrderInformation'), require('./model/TssV2TransactionsPost201ResponseEmbeddedOrderInformationBillTo'), require('./model/TssV2TransactionsPost201ResponseEmbeddedOrderInformationShipTo'), require('./model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformation'), require('./model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationCard'), require('./model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType'), require('./model/TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation'), require('./model/TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner'), require('./model/TssV2TransactionsPost201ResponseEmbeddedProcessingInformation'), require('./model/TssV2TransactionsPost201ResponseEmbeddedProcessorInformation'), require('./model/TssV2TransactionsPost201ResponseEmbeddedRiskInformation'), require('./model/TssV2TransactionsPost201ResponseEmbeddedRiskInformationProviders'), require('./model/TssV2TransactionsPost201ResponseEmbeddedRiskInformationProvidersFingerprint'), require('./model/TssV2TransactionsPost201ResponseEmbeddedTransactionSummaries'), require('./model/TssV2TransactionsPost400Response'), require('./model/UmsV1UsersGet200Response'), require('./model/UmsV1UsersGet200ResponseAccountInformation'), require('./model/UmsV1UsersGet200ResponseContactInformation'), require('./model/UmsV1UsersGet200ResponseOrganizationInformation'), require('./model/UmsV1UsersGet200ResponseUsers'), require('./model/UpdateInstrumentIdentifierRequest'), require('./model/UpdateInvoiceRequest'), require('./model/UpdatePaymentInstrumentRequest'), require('./model/V1FileDetailsGet200Response'), require('./model/V1FileDetailsGet200ResponseFileDetails'), require('./model/V1FileDetailsGet200ResponseLinks'), require('./model/V1FileDetailsGet200ResponseLinksFiles'), require('./model/V1FileDetailsGet200ResponseLinksSelf'), require('./model/ValidateExportComplianceRequest'), require('./model/ValidateRequest'), require('./model/VerifyCustomerAddressRequest'), require('./model/VoidCaptureRequest'), require('./model/VoidCreditRequest'), require('./model/VoidPaymentRequest'), require('./model/VoidRefundRequest'), require('./api/CaptureApi'), require('./api/ConversionDetailsApi'), require('./api/CreditApi'), require('./api/DecisionManagerApi'), require('./api/DownloadDTDApi'), require('./api/DownloadXSDApi'), require('./api/InstrumentIdentifierApi'), require('./api/InvoiceSettingsApi'), require('./api/InvoicesApi'), require('./api/KeyGenerationApi'), require('./api/NetFundingsApi'), require('./api/NotificationOfChangesApi'), require('./api/PayerAuthenticationApi'), require('./api/PaymentBatchSummariesApi'), require('./api/PaymentInstrumentApi'), require('./api/PaymentsApi'), require('./api/PayoutsApi'), require('./api/PurchaseAndRefundDetailsApi'), require('./api/RefundApi'), require('./api/ReportDefinitionsApi'), require('./api/ReportDownloadsApi'), require('./api/ReportSubscriptionsApi'), require('./api/ReportsApi'), require('./api/ReversalApi'), require('./api/SearchTransactionsApi'), require('./api/SecureFileShareApi'), require('./api/TokenizationApi'), require('./api/TransactionBatchesApi'), require('./api/TransactionDetailsApi'), require('./api/UserManagementApi'), require('./api/VerificationApi'), require('./api/VoidApi'));
  }
}(function(ApiClient, AddNegativeListRequest, AuthReversalRequest, AuthorizationOptions, BillTo, BuyerInformation, CapturePaymentRequest, CardInfo, CheckPayerAuthEnrollmentRequest, CreateAdhocReportRequest, CreateCreditRequest, CreateDecisionManagerCaseRequest, CreateInstrumentIdentifierRequest, CreateInvoiceRequest, CreatePaymentInstrumentRequest, CreatePaymentRequest, CreateReportSubscriptionRequest, CreateSearchRequest, DerPublicKey, Detail, EmbeddedInstrumentIdentifierRequest, EmbeddedInstrumentIdentifierResponse, Error, ErrorBean, ErrorFieldBean, ErrorLinks, ErrorResponse, ErrorResponseWithHAL, ExistingInstrumentIdentifierId, FileBean, FileDetail, FileDetailsResponse, FlexV1KeysPost200Response, FlexV1KeysPost200ResponseDer, FlexV1KeysPost200ResponseJwk, FlexV1TokensPost200Response, Flexv1tokensCardInfo, FraudMarkingActionRequest, GeneratePublicKeyRequest, IncrementAuthRequest, Initiator, InlineResponse400, InlineResponse4001, InlineResponse4001Fields, InlineResponseDefault, InlineResponseDefaultLinks, InlineResponseDefaultLinksNext, InlineResponseDefaultResponseStatus, InlineResponseDefaultResponseStatusDetails, InstrumentIdentifierBankAccount, InstrumentIdentifierCard, InstrumentIdentifierEnrollableCard, InstrumentIdentifierPaymentInstrumentsLink, InstrumentIdentifierProcessingInformation, InstrumentIdentifierResponse, InstrumentIdentifierTokenizedCard, InstrumentIdentifierUpdate, InvoiceSettingsRequest, InvoicingV2InvoiceSettingsGet200Response, InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformation, InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformationHeaderStyle, InvoicingV2InvoicesAllGet200Response, InvoicingV2InvoicesAllGet200ResponseCustomerInformation, InvoicingV2InvoicesAllGet200ResponseInvoiceInformation, InvoicingV2InvoicesAllGet200ResponseInvoices, InvoicingV2InvoicesAllGet200ResponseLinks, InvoicingV2InvoicesAllGet200ResponseLinks1, InvoicingV2InvoicesAllGet200ResponseOrderInformation, InvoicingV2InvoicesAllGet200ResponseOrderInformationAmountDetails, InvoicingV2InvoicesAllGet400Response, InvoicingV2InvoicesAllGet404Response, InvoicingV2InvoicesAllGet502Response, InvoicingV2InvoicesGet200Response, InvoicingV2InvoicesGet200ResponseInvoiceHistory, InvoicingV2InvoicesGet200ResponseTransactionDetails, InvoicingV2InvoicesPost201Response, InvoicingV2InvoicesPost201ResponseInvoiceInformation, InvoicingV2InvoicesPost201ResponseOrderInformation, InvoicingV2InvoicesPost201ResponseOrderInformationAmountDetails, InvoicingV2InvoicesPost202Response, Invoicingv2invoicesCustomerInformation, Invoicingv2invoicesInvoiceInformation, Invoicingv2invoicesOrderInformation, Invoicingv2invoicesOrderInformationAmountDetails, Invoicingv2invoicesOrderInformationAmountDetailsFreight, Invoicingv2invoicesOrderInformationAmountDetailsTaxDetails, Invoicingv2invoicesOrderInformationLineItems, Invoicingv2invoicesidInvoiceInformation, Issuer, JsonWebKey, KeyParameters, KeyResult, Link, Links, MerchantInformation, MerchantInitiatedTransaction, Metadata, MitReversalRequest, MitVoidRequest, Model409Link, Model409Links, OctCreatePaymentRequest, PIForIILinkFirst, PIForIILinkLast, PIForIILinkNext, PIForIILinkPrev, PIForIILinkSelf, PaymentInstrument, PaymentInstrumentBankAccount, PaymentInstrumentCard, PaymentInstrumentForInstrumentIdentifierLinks, PaymentInstrumentInstrumentIdentifierRequest, PaymentInstrumentSelfLink, PaymentInstrumentsArray, PaymentInstrumentsForInstrumentIdentifier, PaymentInstrumentsLinks, PersonalIdentification, PersonalIdentificationArray, PredefinedSubscriptionRequestBean, ProcessingInformation, PtsV1TransactionBatchesGet200Response, PtsV1TransactionBatchesGet200ResponseLinks, PtsV1TransactionBatchesGet200ResponseLinksSelf, PtsV1TransactionBatchesGet200ResponseTransactionBatches, PtsV1TransactionBatchesGet400Response, PtsV1TransactionBatchesGet400ResponseErrorInformation, PtsV1TransactionBatchesGet400ResponseErrorInformationDetails, PtsV1TransactionBatchesGet500Response, PtsV1TransactionBatchesGet500ResponseErrorInformation, PtsV1TransactionBatchesIdGet200Response, PtsV1TransactionBatchesIdGet200ResponseLinks, PtsV1TransactionBatchesIdGet200ResponseLinksTransactions, PtsV2CreditsPost201Response, PtsV2CreditsPost201ResponseCreditAmountDetails, PtsV2CreditsPost201ResponsePaymentInformation, PtsV2CreditsPost201ResponseProcessingInformation, PtsV2CreditsPost201ResponseProcessingInformationBankTransferOptions, PtsV2IncrementalAuthorizationPatch201Response, PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation, PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation, PtsV2IncrementalAuthorizationPatch201ResponseLinks, PtsV2IncrementalAuthorizationPatch201ResponseOrderInformation, PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformation, PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformationAccountFeatures, PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation, PtsV2IncrementalAuthorizationPatch400Response, PtsV2PaymentsCapturesPost201Response, PtsV2PaymentsCapturesPost201ResponseLinks, PtsV2PaymentsCapturesPost201ResponseOrderInformation, PtsV2PaymentsCapturesPost201ResponseOrderInformationAmountDetails, PtsV2PaymentsCapturesPost201ResponseOrderInformationInvoiceDetails, PtsV2PaymentsCapturesPost201ResponsePointOfSaleInformation, PtsV2PaymentsCapturesPost201ResponseProcessingInformation, PtsV2PaymentsCapturesPost201ResponseProcessorInformation, PtsV2PaymentsCapturesPost400Response, PtsV2PaymentsPost201Response, PtsV2PaymentsPost201ResponseClientReferenceInformation, PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation, PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationIvr, PtsV2PaymentsPost201ResponseErrorInformation, PtsV2PaymentsPost201ResponseErrorInformationDetails, PtsV2PaymentsPost201ResponseInstallmentInformation, PtsV2PaymentsPost201ResponseIssuerInformation, PtsV2PaymentsPost201ResponseLinks, PtsV2PaymentsPost201ResponseLinksSelf, PtsV2PaymentsPost201ResponseOrderInformation, PtsV2PaymentsPost201ResponseOrderInformationAmountDetails, PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails, PtsV2PaymentsPost201ResponsePaymentInformation, PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures, PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances, PtsV2PaymentsPost201ResponsePaymentInformationBank, PtsV2PaymentsPost201ResponsePaymentInformationBankAccount, PtsV2PaymentsPost201ResponsePaymentInformationCard, PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard, PtsV2PaymentsPost201ResponsePointOfSaleInformation, PtsV2PaymentsPost201ResponsePointOfSaleInformationEmv, PtsV2PaymentsPost201ResponseProcessingInformation, PtsV2PaymentsPost201ResponseProcessingInformationBankTransferOptions, PtsV2PaymentsPost201ResponseProcessorInformation, PtsV2PaymentsPost201ResponseProcessorInformationAchVerification, PtsV2PaymentsPost201ResponseProcessorInformationAvs, PtsV2PaymentsPost201ResponseProcessorInformationCardVerification, PtsV2PaymentsPost201ResponseProcessorInformationConsumerAuthenticationResponse, PtsV2PaymentsPost201ResponseProcessorInformationCustomer, PtsV2PaymentsPost201ResponseProcessorInformationElectronicVerificationResults, PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice, PtsV2PaymentsPost201ResponseProcessorInformationRouting, PtsV2PaymentsPost201ResponseRiskInformation, PtsV2PaymentsPost201ResponseRiskInformationInfoCodes, PtsV2PaymentsPost201ResponseRiskInformationIpAddress, PtsV2PaymentsPost201ResponseRiskInformationProfile, PtsV2PaymentsPost201ResponseRiskInformationProviders, PtsV2PaymentsPost201ResponseRiskInformationProvidersProviderName, PtsV2PaymentsPost201ResponseRiskInformationRules, PtsV2PaymentsPost201ResponseRiskInformationScore, PtsV2PaymentsPost201ResponseRiskInformationTravel, PtsV2PaymentsPost201ResponseRiskInformationTravelActualFinalDestination, PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDeparture, PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDestination, PtsV2PaymentsPost201ResponseRiskInformationTravelLastDestination, PtsV2PaymentsPost201ResponseRiskInformationVelocity, PtsV2PaymentsPost201ResponseRiskInformationVelocityMorphing, PtsV2PaymentsPost400Response, PtsV2PaymentsPost502Response, PtsV2PaymentsRefundPost201Response, PtsV2PaymentsRefundPost201ResponseLinks, PtsV2PaymentsRefundPost201ResponseOrderInformation, PtsV2PaymentsRefundPost201ResponseProcessorInformation, PtsV2PaymentsRefundPost201ResponseRefundAmountDetails, PtsV2PaymentsRefundPost400Response, PtsV2PaymentsReversalsPost201Response, PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation, PtsV2PaymentsReversalsPost201ResponseIssuerInformation, PtsV2PaymentsReversalsPost201ResponseProcessorInformation, PtsV2PaymentsReversalsPost201ResponseReversalAmountDetails, PtsV2PaymentsReversalsPost400Response, PtsV2PaymentsVoidsPost201Response, PtsV2PaymentsVoidsPost201ResponseProcessorInformation, PtsV2PaymentsVoidsPost201ResponseVoidAmountDetails, PtsV2PaymentsVoidsPost400Response, PtsV2PayoutsPost201Response, PtsV2PayoutsPost201ResponseErrorInformation, PtsV2PayoutsPost201ResponseMerchantInformation, PtsV2PayoutsPost201ResponseMerchantInformationMerchantDescriptor, PtsV2PayoutsPost201ResponseOrderInformation, PtsV2PayoutsPost201ResponseOrderInformationAmountDetails, PtsV2PayoutsPost201ResponseProcessorInformation, PtsV2PayoutsPost201ResponseRecipientInformation, PtsV2PayoutsPost201ResponseRecipientInformationCard, PtsV2PayoutsPost400Response, Ptsv2creditsInstallmentInformation, Ptsv2creditsProcessingInformation, Ptsv2creditsProcessingInformationBankTransferOptions, Ptsv2creditsProcessingInformationElectronicBenefitsTransfer, Ptsv2creditsProcessingInformationJapanPaymentOptions, Ptsv2creditsProcessingInformationPurchaseOptions, Ptsv2paymentsAcquirerInformation, Ptsv2paymentsAggregatorInformation, Ptsv2paymentsAggregatorInformationSubMerchant, Ptsv2paymentsBuyerInformation, Ptsv2paymentsBuyerInformationPersonalIdentification, Ptsv2paymentsClientReferenceInformation, Ptsv2paymentsClientReferenceInformationPartner, Ptsv2paymentsConsumerAuthenticationInformation, Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication, Ptsv2paymentsDeviceInformation, Ptsv2paymentsDeviceInformationRawData, Ptsv2paymentsInstallmentInformation, Ptsv2paymentsIssuerInformation, Ptsv2paymentsMerchantDefinedInformation, Ptsv2paymentsMerchantInformation, Ptsv2paymentsMerchantInformationMerchantDescriptor, Ptsv2paymentsMerchantInformationServiceFeeDescriptor, Ptsv2paymentsOrderInformation, Ptsv2paymentsOrderInformationAmountDetails, Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts, Ptsv2paymentsOrderInformationAmountDetailsCurrencyConversion, Ptsv2paymentsOrderInformationAmountDetailsSurcharge, Ptsv2paymentsOrderInformationAmountDetailsTaxDetails, Ptsv2paymentsOrderInformationBillTo, Ptsv2paymentsOrderInformationBillToCompany, Ptsv2paymentsOrderInformationInvoiceDetails, Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum, Ptsv2paymentsOrderInformationLineItems, Ptsv2paymentsOrderInformationPassenger, Ptsv2paymentsOrderInformationShipTo, Ptsv2paymentsOrderInformationShippingDetails, Ptsv2paymentsPaymentInformation, Ptsv2paymentsPaymentInformationBank, Ptsv2paymentsPaymentInformationBankAccount, Ptsv2paymentsPaymentInformationCard, Ptsv2paymentsPaymentInformationCustomer, Ptsv2paymentsPaymentInformationFluidData, Ptsv2paymentsPaymentInformationTokenizedCard, Ptsv2paymentsPointOfSaleInformation, Ptsv2paymentsPointOfSaleInformationEmv, Ptsv2paymentsProcessingInformation, Ptsv2paymentsProcessingInformationAuthorizationOptions, Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiator, Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction, Ptsv2paymentsProcessingInformationBankTransferOptions, Ptsv2paymentsProcessingInformationCaptureOptions, Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer, Ptsv2paymentsProcessingInformationJapanPaymentOptions, Ptsv2paymentsProcessingInformationLoanOptions, Ptsv2paymentsProcessingInformationPurchaseOptions, Ptsv2paymentsProcessingInformationRecurringOptions, Ptsv2paymentsPromotionInformation, Ptsv2paymentsRecipientInformation, Ptsv2paymentsRecurringPaymentInformation, Ptsv2paymentsRiskInformation, Ptsv2paymentsRiskInformationBuyerHistory, Ptsv2paymentsRiskInformationBuyerHistoryAccountHistory, Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount, Ptsv2paymentsRiskInformationProfile, Ptsv2paymentsTokenInformation, Ptsv2paymentsTravelInformation, Ptsv2paymentsTravelInformationAgency, Ptsv2paymentsTravelInformationLodging, Ptsv2paymentsTravelInformationLodgingRoom, Ptsv2paymentsTravelInformationTransit, Ptsv2paymentsTravelInformationTransitAirline, Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation, Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService, Ptsv2paymentsTravelInformationTransitAirlineLegs, Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer, Ptsv2paymentsidClientReferenceInformation, Ptsv2paymentsidClientReferenceInformationPartner, Ptsv2paymentsidMerchantInformation, Ptsv2paymentsidOrderInformation, Ptsv2paymentsidOrderInformationAmountDetails, Ptsv2paymentsidProcessingInformation, Ptsv2paymentsidProcessingInformationAuthorizationOptions, Ptsv2paymentsidProcessingInformationAuthorizationOptionsInitiator, Ptsv2paymentsidTravelInformation, Ptsv2paymentsidcapturesAggregatorInformation, Ptsv2paymentsidcapturesAggregatorInformationSubMerchant, Ptsv2paymentsidcapturesBuyerInformation, Ptsv2paymentsidcapturesDeviceInformation, Ptsv2paymentsidcapturesInstallmentInformation, Ptsv2paymentsidcapturesMerchantInformation, Ptsv2paymentsidcapturesOrderInformation, Ptsv2paymentsidcapturesOrderInformationAmountDetails, Ptsv2paymentsidcapturesOrderInformationBillTo, Ptsv2paymentsidcapturesOrderInformationInvoiceDetails, Ptsv2paymentsidcapturesOrderInformationShipTo, Ptsv2paymentsidcapturesOrderInformationShippingDetails, Ptsv2paymentsidcapturesPaymentInformation, Ptsv2paymentsidcapturesPaymentInformationCard, Ptsv2paymentsidcapturesPointOfSaleInformation, Ptsv2paymentsidcapturesPointOfSaleInformationEmv, Ptsv2paymentsidcapturesProcessingInformation, Ptsv2paymentsidcapturesProcessingInformationAuthorizationOptions, Ptsv2paymentsidcapturesProcessingInformationCaptureOptions, Ptsv2paymentsidcapturesTravelInformation, Ptsv2paymentsidrefundsMerchantInformation, Ptsv2paymentsidrefundsOrderInformation, Ptsv2paymentsidrefundsOrderInformationLineItems, Ptsv2paymentsidrefundsPaymentInformation, Ptsv2paymentsidrefundsPaymentInformationCard, Ptsv2paymentsidrefundsPaymentInformationPaymentType, Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod, Ptsv2paymentsidrefundsPointOfSaleInformation, Ptsv2paymentsidrefundsProcessingInformation, Ptsv2paymentsidrefundsProcessingInformationRecurringOptions, Ptsv2paymentsidreversalsClientReferenceInformation, Ptsv2paymentsidreversalsClientReferenceInformationPartner, Ptsv2paymentsidreversalsOrderInformation, Ptsv2paymentsidreversalsOrderInformationAmountDetails, Ptsv2paymentsidreversalsOrderInformationLineItems, Ptsv2paymentsidreversalsPointOfSaleInformation, Ptsv2paymentsidreversalsPointOfSaleInformationEmv, Ptsv2paymentsidreversalsProcessingInformation, Ptsv2paymentsidreversalsReversalInformation, Ptsv2paymentsidreversalsReversalInformationAmountDetails, Ptsv2paymentsidvoidsPaymentInformation, Ptsv2payoutsClientReferenceInformation, Ptsv2payoutsMerchantInformation, Ptsv2payoutsMerchantInformationMerchantDescriptor, Ptsv2payoutsOrderInformation, Ptsv2payoutsOrderInformationAmountDetails, Ptsv2payoutsOrderInformationAmountDetailsSurcharge, Ptsv2payoutsOrderInformationBillTo, Ptsv2payoutsPaymentInformation, Ptsv2payoutsPaymentInformationCard, Ptsv2payoutsProcessingInformation, Ptsv2payoutsProcessingInformationPayoutsOptions, Ptsv2payoutsRecipientInformation, Ptsv2payoutsSenderInformation, Ptsv2payoutsSenderInformationAccount, RefundCaptureRequest, RefundPaymentRequest, ReportingV3ConversionDetailsGet200Response, ReportingV3ConversionDetailsGet200ResponseConversionDetails, ReportingV3ConversionDetailsGet200ResponseNotes, ReportingV3NetFundingsGet200Response, ReportingV3NetFundingsGet200ResponseNetFundingSummaries, ReportingV3NetFundingsGet200ResponseTotalPurchases, ReportingV3NotificationofChangesGet200Response, ReportingV3NotificationofChangesGet200ResponseNotificationOfChanges, ReportingV3PaymentBatchSummariesGet200Response, ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries, ReportingV3PurchaseRefundDetailsGet200Response, ReportingV3PurchaseRefundDetailsGet200ResponseAuthorizations, ReportingV3PurchaseRefundDetailsGet200ResponseFeeAndFundingDetails, ReportingV3PurchaseRefundDetailsGet200ResponseOthers, ReportingV3PurchaseRefundDetailsGet200ResponseRequestDetails, ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses, ReportingV3PurchaseRefundDetailsGet200ResponseSettlements, ReportingV3ReportDefinitionsGet200Response, ReportingV3ReportDefinitionsGet200ResponseReportDefinitions, ReportingV3ReportDefinitionsNameGet200Response, ReportingV3ReportDefinitionsNameGet200ResponseAttributes, ReportingV3ReportDefinitionsNameGet200ResponseDefaultSettings, ReportingV3ReportSubscriptionsGet200Response, ReportingV3ReportSubscriptionsGet200ResponseSubscriptions, ReportingV3ReportsGet200Response, ReportingV3ReportsGet200ResponseLink, ReportingV3ReportsGet200ResponseLinkReportDownload, ReportingV3ReportsGet200ResponseReportSearchResults, ReportingV3ReportsIdGet200Response, Reportingv3ReportDownloadsGet400Response, Reportingv3ReportDownloadsGet400ResponseDetails, Reportingv3reportsReportPreferences, ResponseStatus, ResponseStatusDetails, RiskV1AddressVerificationsPost201Response, RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation, RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationBarCode, RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddress, RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddressAddress1, RiskV1AuthenticationResultsPost201Response, RiskV1AuthenticationResultsPost201ResponseConsumerAuthenticationInformation, RiskV1AuthenticationsPost201Response, RiskV1AuthenticationsPost201ResponseConsumerAuthenticationInformation, RiskV1AuthenticationsPost201ResponseOrderInformation, RiskV1AuthenticationsPost201ResponseOrderInformationAmountDetails, RiskV1AuthenticationsPost400Response, RiskV1DecisionsPost201Response, RiskV1DecisionsPost201ResponsePaymentInformation, RiskV1DecisionsPost400Response, RiskV1ExportComplianceInquiriesPost201Response, RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformation, RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformationWatchList, RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformationWatchListMatches, RiskV1UpdatePost201Response, Riskv1addressverificationsBuyerInformation, Riskv1addressverificationsClientReferenceInformation, Riskv1addressverificationsOrderInformation, Riskv1addressverificationsOrderInformationBillTo, Riskv1addressverificationsOrderInformationLineItems, Riskv1addressverificationsOrderInformationShipTo, Riskv1authenticationresultsConsumerAuthenticationInformation, Riskv1authenticationresultsOrderInformation, Riskv1authenticationresultsOrderInformationLineItems, Riskv1authenticationresultsPaymentInformation, Riskv1authenticationresultsPaymentInformationCard, Riskv1authenticationresultsPaymentInformationTokenizedCard, Riskv1authenticationsBuyerInformation, Riskv1authenticationsClientReferenceInformation, Riskv1authenticationsConsumerAuthenticationInformation, Riskv1authenticationsConsumerAuthenticationInformationStrongAuthentication, Riskv1authenticationsDeviceInformation, Riskv1authenticationsMerchantInformation, Riskv1authenticationsMerchantInformationMerchantDescriptor, Riskv1authenticationsOrderInformation, Riskv1authenticationsOrderInformationAmountDetails, Riskv1authenticationsOrderInformationBillTo, Riskv1authenticationsOrderInformationLineItems, Riskv1authenticationsOrderInformationShipTo, Riskv1authenticationsPaymentInformation, Riskv1authenticationsPaymentInformationCard, Riskv1authenticationsPaymentInformationFluidData, Riskv1authenticationsPaymentInformationTokenizedCard, Riskv1authenticationsProcessingInformation, Riskv1authenticationsRiskInformation, Riskv1authenticationsTravelInformation, Riskv1authenticationsTravelInformationLegs, Riskv1authenticationsTravelInformationPassengers, Riskv1decisionsBuyerInformation, Riskv1decisionsCardVerification, Riskv1decisionsClientReferenceInformation, Riskv1decisionsDeviceInformation, Riskv1decisionsMerchantDefinedInformation, Riskv1decisionsOrderInformation, Riskv1decisionsOrderInformationAmountDetails, Riskv1decisionsOrderInformationBillTo, Riskv1decisionsOrderInformationLineItems, Riskv1decisionsOrderInformationShipTo, Riskv1decisionsOrderInformationShippingDetails, Riskv1decisionsPaymentInformation, Riskv1decisionsPaymentInformationCard, Riskv1decisionsPaymentInformationTokenizedCard, Riskv1decisionsProcessorInformation, Riskv1decisionsProcessorInformationAvs, Riskv1decisionsRiskInformation, Riskv1decisionsTravelInformation, Riskv1decisionsTravelInformationLegs, Riskv1decisionsidmarkingRiskInformation, Riskv1decisionsidmarkingRiskInformationMarkingDetails, Riskv1exportcomplianceinquiriesDeviceInformation, Riskv1exportcomplianceinquiriesExportComplianceInformation, Riskv1exportcomplianceinquiriesExportComplianceInformationWeights, Riskv1exportcomplianceinquiriesOrderInformation, Riskv1exportcomplianceinquiriesOrderInformationBillTo, Riskv1exportcomplianceinquiriesOrderInformationBillToCompany, Riskv1exportcomplianceinquiriesOrderInformationLineItems, Riskv1exportcomplianceinquiriesOrderInformationShipTo, Riskv1liststypeentriesBuyerInformation, Riskv1liststypeentriesDeviceInformation, Riskv1liststypeentriesOrderInformation, Riskv1liststypeentriesOrderInformationAddress, Riskv1liststypeentriesOrderInformationBillTo, Riskv1liststypeentriesOrderInformationLineItems, Riskv1liststypeentriesOrderInformationShipTo, Riskv1liststypeentriesPaymentInformation, Riskv1liststypeentriesPaymentInformationBank, Riskv1liststypeentriesPaymentInformationCard, Riskv1liststypeentriesRiskInformation, Riskv1liststypeentriesRiskInformationMarkingDetails, SelfLinkBean, TmsV1InstrumentIdentifiersDelete409Response, TmsV1InstrumentIdentifiersDelete409ResponseLinks, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbedded, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBankAccount, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBillTo, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformation, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationIssuedBy, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationPersonalIdentification, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedCard, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedEmbedded, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedEmbeddedInstrumentIdentifier, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedLinks, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedLinksSelf, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedMerchantInformation, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedMerchantInformationMerchantDescriptor, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedPaymentInstruments, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedProcessingInformation, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedProcessingInformationBankTransferOptions, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinks, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksFirst, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksLast, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksNext, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksPrev, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksSelf, TmsV1InstrumentIdentifiersPost200Response, TmsV1InstrumentIdentifiersPost200ResponseCard, TmsV1InstrumentIdentifiersPost200ResponseIssuer, TmsV1InstrumentIdentifiersPost200ResponseLinks, TmsV1InstrumentIdentifiersPost200ResponseLinksPaymentInstruments, TmsV1InstrumentIdentifiersPost200ResponseLinksSelf, TmsV1InstrumentIdentifiersPost200ResponseMetadata, TmsV1InstrumentIdentifiersPost200ResponseProcessingInformation, TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptions, TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptionsInitiator, TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction, TmsV1InstrumentIdentifiersPost200ResponseTokenizedCard, TmsV1InstrumentIdentifiersPost200ResponseTokenizedCardCard, Tmsv1instrumentidentifiersBankAccount, Tmsv1instrumentidentifiersBillTo, Tmsv1instrumentidentifiersCard, Tmsv1instrumentidentifiersDetails, Tmsv1paymentinstrumentsInstrumentIdentifier, TokenizeParameters, TokenizeRequest, TokenizeResult, TssV2TransactionsGet200Response, TssV2TransactionsGet200ResponseApplicationInformation, TssV2TransactionsGet200ResponseApplicationInformationApplications, TssV2TransactionsGet200ResponseBuyerInformation, TssV2TransactionsGet200ResponseClientReferenceInformation, TssV2TransactionsGet200ResponseConsumerAuthenticationInformation, TssV2TransactionsGet200ResponseDeviceInformation, TssV2TransactionsGet200ResponseErrorInformation, TssV2TransactionsGet200ResponseFraudMarkingInformation, TssV2TransactionsGet200ResponseInstallmentInformation, TssV2TransactionsGet200ResponseLinks, TssV2TransactionsGet200ResponseMerchantInformation, TssV2TransactionsGet200ResponseMerchantInformationMerchantDescriptor, TssV2TransactionsGet200ResponseOrderInformation, TssV2TransactionsGet200ResponseOrderInformationAmountDetails, TssV2TransactionsGet200ResponseOrderInformationBillTo, TssV2TransactionsGet200ResponseOrderInformationInvoiceDetails, TssV2TransactionsGet200ResponseOrderInformationLineItems, TssV2TransactionsGet200ResponseOrderInformationShipTo, TssV2TransactionsGet200ResponseOrderInformationShippingDetails, TssV2TransactionsGet200ResponsePaymentInformation, TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures, TssV2TransactionsGet200ResponsePaymentInformationBank, TssV2TransactionsGet200ResponsePaymentInformationBankAccount, TssV2TransactionsGet200ResponsePaymentInformationBankMandate, TssV2TransactionsGet200ResponsePaymentInformationCard, TssV2TransactionsGet200ResponsePaymentInformationInvoice, TssV2TransactionsGet200ResponsePaymentInformationPaymentType, TssV2TransactionsGet200ResponsePointOfSaleInformation, TssV2TransactionsGet200ResponseProcessingInformation, TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions, TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions, TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions, TssV2TransactionsGet200ResponseProcessorInformation, TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults, TssV2TransactionsGet200ResponseProcessorInformationProcessor, TssV2TransactionsGet200ResponseRiskInformation, TssV2TransactionsGet200ResponseRiskInformationProfile, TssV2TransactionsGet200ResponseRiskInformationRules, TssV2TransactionsGet200ResponseRiskInformationScore, TssV2TransactionsGet200ResponseSenderInformation, TssV2TransactionsPost201Response, TssV2TransactionsPost201ResponseEmbedded, TssV2TransactionsPost201ResponseEmbeddedApplicationInformation, TssV2TransactionsPost201ResponseEmbeddedBuyerInformation, TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformation, TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation, TssV2TransactionsPost201ResponseEmbeddedDeviceInformation, TssV2TransactionsPost201ResponseEmbeddedLinks, TssV2TransactionsPost201ResponseEmbeddedMerchantInformation, TssV2TransactionsPost201ResponseEmbeddedOrderInformation, TssV2TransactionsPost201ResponseEmbeddedOrderInformationBillTo, TssV2TransactionsPost201ResponseEmbeddedOrderInformationShipTo, TssV2TransactionsPost201ResponseEmbeddedPaymentInformation, TssV2TransactionsPost201ResponseEmbeddedPaymentInformationCard, TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType, TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation, TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner, TssV2TransactionsPost201ResponseEmbeddedProcessingInformation, TssV2TransactionsPost201ResponseEmbeddedProcessorInformation, TssV2TransactionsPost201ResponseEmbeddedRiskInformation, TssV2TransactionsPost201ResponseEmbeddedRiskInformationProviders, TssV2TransactionsPost201ResponseEmbeddedRiskInformationProvidersFingerprint, TssV2TransactionsPost201ResponseEmbeddedTransactionSummaries, TssV2TransactionsPost400Response, UmsV1UsersGet200Response, UmsV1UsersGet200ResponseAccountInformation, UmsV1UsersGet200ResponseContactInformation, UmsV1UsersGet200ResponseOrganizationInformation, UmsV1UsersGet200ResponseUsers, UpdateInstrumentIdentifierRequest, UpdateInvoiceRequest, UpdatePaymentInstrumentRequest, V1FileDetailsGet200Response, V1FileDetailsGet200ResponseFileDetails, V1FileDetailsGet200ResponseLinks, V1FileDetailsGet200ResponseLinksFiles, V1FileDetailsGet200ResponseLinksSelf, ValidateExportComplianceRequest, ValidateRequest, VerifyCustomerAddressRequest, VoidCaptureRequest, VoidCreditRequest, VoidPaymentRequest, VoidRefundRequest, CaptureApi, ConversionDetailsApi, CreditApi, DecisionManagerApi, DownloadDTDApi, DownloadXSDApi, InstrumentIdentifierApi, InvoiceSettingsApi, InvoicesApi, KeyGenerationApi, NetFundingsApi, NotificationOfChangesApi, PayerAuthenticationApi, PaymentBatchSummariesApi, PaymentInstrumentApi, PaymentsApi, PayoutsApi, PurchaseAndRefundDetailsApi, RefundApi, ReportDefinitionsApi, ReportDownloadsApi, ReportSubscriptionsApi, ReportsApi, ReversalApi, SearchTransactionsApi, SecureFileShareApi, TokenizationApi, TransactionBatchesApi, TransactionDetailsApi, UserManagementApi, VerificationApi, VoidApi) {

  /**
   * All_CyberSource_API_specs_merged_together__These_are_available_at_httpsdeveloper_cybersource_comapireferenceapi_reference_html.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CyberSource = require('index'); // See note below*.
   * var xxxSvc = new CyberSource.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CyberSource.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CyberSource.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CyberSource.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AddNegativeListRequest model constructor.
     * @property {module:model/AddNegativeListRequest}
     */
    AddNegativeListRequest: AddNegativeListRequest,
    /**
     * The AuthReversalRequest model constructor.
     * @property {module:model/AuthReversalRequest}
     */
    AuthReversalRequest: AuthReversalRequest,
    /**
     * The AuthorizationOptions model constructor.
     * @property {module:model/AuthorizationOptions}
     */
    AuthorizationOptions: AuthorizationOptions,
    /**
     * The BillTo model constructor.
     * @property {module:model/BillTo}
     */
    BillTo: BillTo,
    /**
     * The BuyerInformation model constructor.
     * @property {module:model/BuyerInformation}
     */
    BuyerInformation: BuyerInformation,
    /**
     * The CapturePaymentRequest model constructor.
     * @property {module:model/CapturePaymentRequest}
     */
    CapturePaymentRequest: CapturePaymentRequest,
    /**
     * The CardInfo model constructor.
     * @property {module:model/CardInfo}
     */
    CardInfo: CardInfo,
    /**
     * The CheckPayerAuthEnrollmentRequest model constructor.
     * @property {module:model/CheckPayerAuthEnrollmentRequest}
     */
    CheckPayerAuthEnrollmentRequest: CheckPayerAuthEnrollmentRequest,
    /**
     * The CreateAdhocReportRequest model constructor.
     * @property {module:model/CreateAdhocReportRequest}
     */
    CreateAdhocReportRequest: CreateAdhocReportRequest,
    /**
     * The CreateCreditRequest model constructor.
     * @property {module:model/CreateCreditRequest}
     */
    CreateCreditRequest: CreateCreditRequest,
    /**
     * The CreateDecisionManagerCaseRequest model constructor.
     * @property {module:model/CreateDecisionManagerCaseRequest}
     */
    CreateDecisionManagerCaseRequest: CreateDecisionManagerCaseRequest,
    /**
     * The CreateInstrumentIdentifierRequest model constructor.
     * @property {module:model/CreateInstrumentIdentifierRequest}
     */
    CreateInstrumentIdentifierRequest: CreateInstrumentIdentifierRequest,
    /**
     * The CreateInvoiceRequest model constructor.
     * @property {module:model/CreateInvoiceRequest}
     */
    CreateInvoiceRequest: CreateInvoiceRequest,
    /**
     * The CreatePaymentInstrumentRequest model constructor.
     * @property {module:model/CreatePaymentInstrumentRequest}
     */
    CreatePaymentInstrumentRequest: CreatePaymentInstrumentRequest,
    /**
     * The CreatePaymentRequest model constructor.
     * @property {module:model/CreatePaymentRequest}
     */
    CreatePaymentRequest: CreatePaymentRequest,
    /**
     * The CreateReportSubscriptionRequest model constructor.
     * @property {module:model/CreateReportSubscriptionRequest}
     */
    CreateReportSubscriptionRequest: CreateReportSubscriptionRequest,
    /**
     * The CreateSearchRequest model constructor.
     * @property {module:model/CreateSearchRequest}
     */
    CreateSearchRequest: CreateSearchRequest,
    /**
     * The DerPublicKey model constructor.
     * @property {module:model/DerPublicKey}
     */
    DerPublicKey: DerPublicKey,
    /**
     * The Detail model constructor.
     * @property {module:model/Detail}
     */
    Detail: Detail,
    /**
     * The EmbeddedInstrumentIdentifierRequest model constructor.
     * @property {module:model/EmbeddedInstrumentIdentifierRequest}
     */
    EmbeddedInstrumentIdentifierRequest: EmbeddedInstrumentIdentifierRequest,
    /**
     * The EmbeddedInstrumentIdentifierResponse model constructor.
     * @property {module:model/EmbeddedInstrumentIdentifierResponse}
     */
    EmbeddedInstrumentIdentifierResponse: EmbeddedInstrumentIdentifierResponse,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ErrorBean model constructor.
     * @property {module:model/ErrorBean}
     */
    ErrorBean: ErrorBean,
    /**
     * The ErrorFieldBean model constructor.
     * @property {module:model/ErrorFieldBean}
     */
    ErrorFieldBean: ErrorFieldBean,
    /**
     * The ErrorLinks model constructor.
     * @property {module:model/ErrorLinks}
     */
    ErrorLinks: ErrorLinks,
    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse: ErrorResponse,
    /**
     * The ErrorResponseWithHAL model constructor.
     * @property {module:model/ErrorResponseWithHAL}
     */
    ErrorResponseWithHAL: ErrorResponseWithHAL,
    /**
     * The ExistingInstrumentIdentifierId model constructor.
     * @property {module:model/ExistingInstrumentIdentifierId}
     */
    ExistingInstrumentIdentifierId: ExistingInstrumentIdentifierId,
    /**
     * The FileBean model constructor.
     * @property {module:model/FileBean}
     */
    FileBean: FileBean,
    /**
     * The FileDetail model constructor.
     * @property {module:model/FileDetail}
     */
    FileDetail: FileDetail,
    /**
     * The FileDetailsResponse model constructor.
     * @property {module:model/FileDetailsResponse}
     */
    FileDetailsResponse: FileDetailsResponse,
    /**
     * The FlexV1KeysPost200Response model constructor.
     * @property {module:model/FlexV1KeysPost200Response}
     */
    FlexV1KeysPost200Response: FlexV1KeysPost200Response,
    /**
     * The FlexV1KeysPost200ResponseDer model constructor.
     * @property {module:model/FlexV1KeysPost200ResponseDer}
     */
    FlexV1KeysPost200ResponseDer: FlexV1KeysPost200ResponseDer,
    /**
     * The FlexV1KeysPost200ResponseJwk model constructor.
     * @property {module:model/FlexV1KeysPost200ResponseJwk}
     */
    FlexV1KeysPost200ResponseJwk: FlexV1KeysPost200ResponseJwk,
    /**
     * The FlexV1TokensPost200Response model constructor.
     * @property {module:model/FlexV1TokensPost200Response}
     */
    FlexV1TokensPost200Response: FlexV1TokensPost200Response,
    /**
     * The Flexv1tokensCardInfo model constructor.
     * @property {module:model/Flexv1tokensCardInfo}
     */
    Flexv1tokensCardInfo: Flexv1tokensCardInfo,
    /**
     * The FraudMarkingActionRequest model constructor.
     * @property {module:model/FraudMarkingActionRequest}
     */
    FraudMarkingActionRequest: FraudMarkingActionRequest,
    /**
     * The GeneratePublicKeyRequest model constructor.
     * @property {module:model/GeneratePublicKeyRequest}
     */
    GeneratePublicKeyRequest: GeneratePublicKeyRequest,
    /**
     * The IncrementAuthRequest model constructor.
     * @property {module:model/IncrementAuthRequest}
     */
    IncrementAuthRequest: IncrementAuthRequest,
    /**
     * The Initiator model constructor.
     * @property {module:model/Initiator}
     */
    Initiator: Initiator,
    /**
     * The InlineResponse400 model constructor.
     * @property {module:model/InlineResponse400}
     */
    InlineResponse400: InlineResponse400,
    /**
     * The InlineResponse4001 model constructor.
     * @property {module:model/InlineResponse4001}
     */
    InlineResponse4001: InlineResponse4001,
    /**
     * The InlineResponse4001Fields model constructor.
     * @property {module:model/InlineResponse4001Fields}
     */
    InlineResponse4001Fields: InlineResponse4001Fields,
    /**
     * The InlineResponseDefault model constructor.
     * @property {module:model/InlineResponseDefault}
     */
    InlineResponseDefault: InlineResponseDefault,
    /**
     * The InlineResponseDefaultLinks model constructor.
     * @property {module:model/InlineResponseDefaultLinks}
     */
    InlineResponseDefaultLinks: InlineResponseDefaultLinks,
    /**
     * The InlineResponseDefaultLinksNext model constructor.
     * @property {module:model/InlineResponseDefaultLinksNext}
     */
    InlineResponseDefaultLinksNext: InlineResponseDefaultLinksNext,
    /**
     * The InlineResponseDefaultResponseStatus model constructor.
     * @property {module:model/InlineResponseDefaultResponseStatus}
     */
    InlineResponseDefaultResponseStatus: InlineResponseDefaultResponseStatus,
    /**
     * The InlineResponseDefaultResponseStatusDetails model constructor.
     * @property {module:model/InlineResponseDefaultResponseStatusDetails}
     */
    InlineResponseDefaultResponseStatusDetails: InlineResponseDefaultResponseStatusDetails,
    /**
     * The InstrumentIdentifierBankAccount model constructor.
     * @property {module:model/InstrumentIdentifierBankAccount}
     */
    InstrumentIdentifierBankAccount: InstrumentIdentifierBankAccount,
    /**
     * The InstrumentIdentifierCard model constructor.
     * @property {module:model/InstrumentIdentifierCard}
     */
    InstrumentIdentifierCard: InstrumentIdentifierCard,
    /**
     * The InstrumentIdentifierEnrollableCard model constructor.
     * @property {module:model/InstrumentIdentifierEnrollableCard}
     */
    InstrumentIdentifierEnrollableCard: InstrumentIdentifierEnrollableCard,
    /**
     * The InstrumentIdentifierPaymentInstrumentsLink model constructor.
     * @property {module:model/InstrumentIdentifierPaymentInstrumentsLink}
     */
    InstrumentIdentifierPaymentInstrumentsLink: InstrumentIdentifierPaymentInstrumentsLink,
    /**
     * The InstrumentIdentifierProcessingInformation model constructor.
     * @property {module:model/InstrumentIdentifierProcessingInformation}
     */
    InstrumentIdentifierProcessingInformation: InstrumentIdentifierProcessingInformation,
    /**
     * The InstrumentIdentifierResponse model constructor.
     * @property {module:model/InstrumentIdentifierResponse}
     */
    InstrumentIdentifierResponse: InstrumentIdentifierResponse,
    /**
     * The InstrumentIdentifierTokenizedCard model constructor.
     * @property {module:model/InstrumentIdentifierTokenizedCard}
     */
    InstrumentIdentifierTokenizedCard: InstrumentIdentifierTokenizedCard,
    /**
     * The InstrumentIdentifierUpdate model constructor.
     * @property {module:model/InstrumentIdentifierUpdate}
     */
    InstrumentIdentifierUpdate: InstrumentIdentifierUpdate,
    /**
     * The InvoiceSettingsRequest model constructor.
     * @property {module:model/InvoiceSettingsRequest}
     */
    InvoiceSettingsRequest: InvoiceSettingsRequest,
    /**
     * The InvoicingV2InvoiceSettingsGet200Response model constructor.
     * @property {module:model/InvoicingV2InvoiceSettingsGet200Response}
     */
    InvoicingV2InvoiceSettingsGet200Response: InvoicingV2InvoiceSettingsGet200Response,
    /**
     * The InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformation model constructor.
     * @property {module:model/InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformation}
     */
    InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformation: InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformation,
    /**
     * The InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformationHeaderStyle model constructor.
     * @property {module:model/InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformationHeaderStyle}
     */
    InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformationHeaderStyle: InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformationHeaderStyle,
    /**
     * The InvoicingV2InvoicesAllGet200Response model constructor.
     * @property {module:model/InvoicingV2InvoicesAllGet200Response}
     */
    InvoicingV2InvoicesAllGet200Response: InvoicingV2InvoicesAllGet200Response,
    /**
     * The InvoicingV2InvoicesAllGet200ResponseCustomerInformation model constructor.
     * @property {module:model/InvoicingV2InvoicesAllGet200ResponseCustomerInformation}
     */
    InvoicingV2InvoicesAllGet200ResponseCustomerInformation: InvoicingV2InvoicesAllGet200ResponseCustomerInformation,
    /**
     * The InvoicingV2InvoicesAllGet200ResponseInvoiceInformation model constructor.
     * @property {module:model/InvoicingV2InvoicesAllGet200ResponseInvoiceInformation}
     */
    InvoicingV2InvoicesAllGet200ResponseInvoiceInformation: InvoicingV2InvoicesAllGet200ResponseInvoiceInformation,
    /**
     * The InvoicingV2InvoicesAllGet200ResponseInvoices model constructor.
     * @property {module:model/InvoicingV2InvoicesAllGet200ResponseInvoices}
     */
    InvoicingV2InvoicesAllGet200ResponseInvoices: InvoicingV2InvoicesAllGet200ResponseInvoices,
    /**
     * The InvoicingV2InvoicesAllGet200ResponseLinks model constructor.
     * @property {module:model/InvoicingV2InvoicesAllGet200ResponseLinks}
     */
    InvoicingV2InvoicesAllGet200ResponseLinks: InvoicingV2InvoicesAllGet200ResponseLinks,
    /**
     * The InvoicingV2InvoicesAllGet200ResponseLinks1 model constructor.
     * @property {module:model/InvoicingV2InvoicesAllGet200ResponseLinks1}
     */
    InvoicingV2InvoicesAllGet200ResponseLinks1: InvoicingV2InvoicesAllGet200ResponseLinks1,
    /**
     * The InvoicingV2InvoicesAllGet200ResponseOrderInformation model constructor.
     * @property {module:model/InvoicingV2InvoicesAllGet200ResponseOrderInformation}
     */
    InvoicingV2InvoicesAllGet200ResponseOrderInformation: InvoicingV2InvoicesAllGet200ResponseOrderInformation,
    /**
     * The InvoicingV2InvoicesAllGet200ResponseOrderInformationAmountDetails model constructor.
     * @property {module:model/InvoicingV2InvoicesAllGet200ResponseOrderInformationAmountDetails}
     */
    InvoicingV2InvoicesAllGet200ResponseOrderInformationAmountDetails: InvoicingV2InvoicesAllGet200ResponseOrderInformationAmountDetails,
    /**
     * The InvoicingV2InvoicesAllGet400Response model constructor.
     * @property {module:model/InvoicingV2InvoicesAllGet400Response}
     */
    InvoicingV2InvoicesAllGet400Response: InvoicingV2InvoicesAllGet400Response,
    /**
     * The InvoicingV2InvoicesAllGet404Response model constructor.
     * @property {module:model/InvoicingV2InvoicesAllGet404Response}
     */
    InvoicingV2InvoicesAllGet404Response: InvoicingV2InvoicesAllGet404Response,
    /**
     * The InvoicingV2InvoicesAllGet502Response model constructor.
     * @property {module:model/InvoicingV2InvoicesAllGet502Response}
     */
    InvoicingV2InvoicesAllGet502Response: InvoicingV2InvoicesAllGet502Response,
    /**
     * The InvoicingV2InvoicesGet200Response model constructor.
     * @property {module:model/InvoicingV2InvoicesGet200Response}
     */
    InvoicingV2InvoicesGet200Response: InvoicingV2InvoicesGet200Response,
    /**
     * The InvoicingV2InvoicesGet200ResponseInvoiceHistory model constructor.
     * @property {module:model/InvoicingV2InvoicesGet200ResponseInvoiceHistory}
     */
    InvoicingV2InvoicesGet200ResponseInvoiceHistory: InvoicingV2InvoicesGet200ResponseInvoiceHistory,
    /**
     * The InvoicingV2InvoicesGet200ResponseTransactionDetails model constructor.
     * @property {module:model/InvoicingV2InvoicesGet200ResponseTransactionDetails}
     */
    InvoicingV2InvoicesGet200ResponseTransactionDetails: InvoicingV2InvoicesGet200ResponseTransactionDetails,
    /**
     * The InvoicingV2InvoicesPost201Response model constructor.
     * @property {module:model/InvoicingV2InvoicesPost201Response}
     */
    InvoicingV2InvoicesPost201Response: InvoicingV2InvoicesPost201Response,
    /**
     * The InvoicingV2InvoicesPost201ResponseInvoiceInformation model constructor.
     * @property {module:model/InvoicingV2InvoicesPost201ResponseInvoiceInformation}
     */
    InvoicingV2InvoicesPost201ResponseInvoiceInformation: InvoicingV2InvoicesPost201ResponseInvoiceInformation,
    /**
     * The InvoicingV2InvoicesPost201ResponseOrderInformation model constructor.
     * @property {module:model/InvoicingV2InvoicesPost201ResponseOrderInformation}
     */
    InvoicingV2InvoicesPost201ResponseOrderInformation: InvoicingV2InvoicesPost201ResponseOrderInformation,
    /**
     * The InvoicingV2InvoicesPost201ResponseOrderInformationAmountDetails model constructor.
     * @property {module:model/InvoicingV2InvoicesPost201ResponseOrderInformationAmountDetails}
     */
    InvoicingV2InvoicesPost201ResponseOrderInformationAmountDetails: InvoicingV2InvoicesPost201ResponseOrderInformationAmountDetails,
    /**
     * The InvoicingV2InvoicesPost202Response model constructor.
     * @property {module:model/InvoicingV2InvoicesPost202Response}
     */
    InvoicingV2InvoicesPost202Response: InvoicingV2InvoicesPost202Response,
    /**
     * The Invoicingv2invoicesCustomerInformation model constructor.
     * @property {module:model/Invoicingv2invoicesCustomerInformation}
     */
    Invoicingv2invoicesCustomerInformation: Invoicingv2invoicesCustomerInformation,
    /**
     * The Invoicingv2invoicesInvoiceInformation model constructor.
     * @property {module:model/Invoicingv2invoicesInvoiceInformation}
     */
    Invoicingv2invoicesInvoiceInformation: Invoicingv2invoicesInvoiceInformation,
    /**
     * The Invoicingv2invoicesOrderInformation model constructor.
     * @property {module:model/Invoicingv2invoicesOrderInformation}
     */
    Invoicingv2invoicesOrderInformation: Invoicingv2invoicesOrderInformation,
    /**
     * The Invoicingv2invoicesOrderInformationAmountDetails model constructor.
     * @property {module:model/Invoicingv2invoicesOrderInformationAmountDetails}
     */
    Invoicingv2invoicesOrderInformationAmountDetails: Invoicingv2invoicesOrderInformationAmountDetails,
    /**
     * The Invoicingv2invoicesOrderInformationAmountDetailsFreight model constructor.
     * @property {module:model/Invoicingv2invoicesOrderInformationAmountDetailsFreight}
     */
    Invoicingv2invoicesOrderInformationAmountDetailsFreight: Invoicingv2invoicesOrderInformationAmountDetailsFreight,
    /**
     * The Invoicingv2invoicesOrderInformationAmountDetailsTaxDetails model constructor.
     * @property {module:model/Invoicingv2invoicesOrderInformationAmountDetailsTaxDetails}
     */
    Invoicingv2invoicesOrderInformationAmountDetailsTaxDetails: Invoicingv2invoicesOrderInformationAmountDetailsTaxDetails,
    /**
     * The Invoicingv2invoicesOrderInformationLineItems model constructor.
     * @property {module:model/Invoicingv2invoicesOrderInformationLineItems}
     */
    Invoicingv2invoicesOrderInformationLineItems: Invoicingv2invoicesOrderInformationLineItems,
    /**
     * The Invoicingv2invoicesidInvoiceInformation model constructor.
     * @property {module:model/Invoicingv2invoicesidInvoiceInformation}
     */
    Invoicingv2invoicesidInvoiceInformation: Invoicingv2invoicesidInvoiceInformation,
    /**
     * The Issuer model constructor.
     * @property {module:model/Issuer}
     */
    Issuer: Issuer,
    /**
     * The JsonWebKey model constructor.
     * @property {module:model/JsonWebKey}
     */
    JsonWebKey: JsonWebKey,
    /**
     * The KeyParameters model constructor.
     * @property {module:model/KeyParameters}
     */
    KeyParameters: KeyParameters,
    /**
     * The KeyResult model constructor.
     * @property {module:model/KeyResult}
     */
    KeyResult: KeyResult,
    /**
     * The Link model constructor.
     * @property {module:model/Link}
     */
    Link: Link,
    /**
     * The Links model constructor.
     * @property {module:model/Links}
     */
    Links: Links,
    /**
     * The MerchantInformation model constructor.
     * @property {module:model/MerchantInformation}
     */
    MerchantInformation: MerchantInformation,
    /**
     * The MerchantInitiatedTransaction model constructor.
     * @property {module:model/MerchantInitiatedTransaction}
     */
    MerchantInitiatedTransaction: MerchantInitiatedTransaction,
    /**
     * The Metadata model constructor.
     * @property {module:model/Metadata}
     */
    Metadata: Metadata,
    /**
     * The MitReversalRequest model constructor.
     * @property {module:model/MitReversalRequest}
     */
    MitReversalRequest: MitReversalRequest,
    /**
     * The MitVoidRequest model constructor.
     * @property {module:model/MitVoidRequest}
     */
    MitVoidRequest: MitVoidRequest,
    /**
     * The Model409Link model constructor.
     * @property {module:model/Model409Link}
     */
    Model409Link: Model409Link,
    /**
     * The Model409Links model constructor.
     * @property {module:model/Model409Links}
     */
    Model409Links: Model409Links,
    /**
     * The OctCreatePaymentRequest model constructor.
     * @property {module:model/OctCreatePaymentRequest}
     */
    OctCreatePaymentRequest: OctCreatePaymentRequest,
    /**
     * The PIForIILinkFirst model constructor.
     * @property {module:model/PIForIILinkFirst}
     */
    PIForIILinkFirst: PIForIILinkFirst,
    /**
     * The PIForIILinkLast model constructor.
     * @property {module:model/PIForIILinkLast}
     */
    PIForIILinkLast: PIForIILinkLast,
    /**
     * The PIForIILinkNext model constructor.
     * @property {module:model/PIForIILinkNext}
     */
    PIForIILinkNext: PIForIILinkNext,
    /**
     * The PIForIILinkPrev model constructor.
     * @property {module:model/PIForIILinkPrev}
     */
    PIForIILinkPrev: PIForIILinkPrev,
    /**
     * The PIForIILinkSelf model constructor.
     * @property {module:model/PIForIILinkSelf}
     */
    PIForIILinkSelf: PIForIILinkSelf,
    /**
     * The PaymentInstrument model constructor.
     * @property {module:model/PaymentInstrument}
     */
    PaymentInstrument: PaymentInstrument,
    /**
     * The PaymentInstrumentBankAccount model constructor.
     * @property {module:model/PaymentInstrumentBankAccount}
     */
    PaymentInstrumentBankAccount: PaymentInstrumentBankAccount,
    /**
     * The PaymentInstrumentCard model constructor.
     * @property {module:model/PaymentInstrumentCard}
     */
    PaymentInstrumentCard: PaymentInstrumentCard,
    /**
     * The PaymentInstrumentForInstrumentIdentifierLinks model constructor.
     * @property {module:model/PaymentInstrumentForInstrumentIdentifierLinks}
     */
    PaymentInstrumentForInstrumentIdentifierLinks: PaymentInstrumentForInstrumentIdentifierLinks,
    /**
     * The PaymentInstrumentInstrumentIdentifierRequest model constructor.
     * @property {module:model/PaymentInstrumentInstrumentIdentifierRequest}
     */
    PaymentInstrumentInstrumentIdentifierRequest: PaymentInstrumentInstrumentIdentifierRequest,
    /**
     * The PaymentInstrumentSelfLink model constructor.
     * @property {module:model/PaymentInstrumentSelfLink}
     */
    PaymentInstrumentSelfLink: PaymentInstrumentSelfLink,
    /**
     * The PaymentInstrumentsArray model constructor.
     * @property {module:model/PaymentInstrumentsArray}
     */
    PaymentInstrumentsArray: PaymentInstrumentsArray,
    /**
     * The PaymentInstrumentsForInstrumentIdentifier model constructor.
     * @property {module:model/PaymentInstrumentsForInstrumentIdentifier}
     */
    PaymentInstrumentsForInstrumentIdentifier: PaymentInstrumentsForInstrumentIdentifier,
    /**
     * The PaymentInstrumentsLinks model constructor.
     * @property {module:model/PaymentInstrumentsLinks}
     */
    PaymentInstrumentsLinks: PaymentInstrumentsLinks,
    /**
     * The PersonalIdentification model constructor.
     * @property {module:model/PersonalIdentification}
     */
    PersonalIdentification: PersonalIdentification,
    /**
     * The PersonalIdentificationArray model constructor.
     * @property {module:model/PersonalIdentificationArray}
     */
    PersonalIdentificationArray: PersonalIdentificationArray,
    /**
     * The PredefinedSubscriptionRequestBean model constructor.
     * @property {module:model/PredefinedSubscriptionRequestBean}
     */
    PredefinedSubscriptionRequestBean: PredefinedSubscriptionRequestBean,
    /**
     * The ProcessingInformation model constructor.
     * @property {module:model/ProcessingInformation}
     */
    ProcessingInformation: ProcessingInformation,
    /**
     * The PtsV1TransactionBatchesGet200Response model constructor.
     * @property {module:model/PtsV1TransactionBatchesGet200Response}
     */
    PtsV1TransactionBatchesGet200Response: PtsV1TransactionBatchesGet200Response,
    /**
     * The PtsV1TransactionBatchesGet200ResponseLinks model constructor.
     * @property {module:model/PtsV1TransactionBatchesGet200ResponseLinks}
     */
    PtsV1TransactionBatchesGet200ResponseLinks: PtsV1TransactionBatchesGet200ResponseLinks,
    /**
     * The PtsV1TransactionBatchesGet200ResponseLinksSelf model constructor.
     * @property {module:model/PtsV1TransactionBatchesGet200ResponseLinksSelf}
     */
    PtsV1TransactionBatchesGet200ResponseLinksSelf: PtsV1TransactionBatchesGet200ResponseLinksSelf,
    /**
     * The PtsV1TransactionBatchesGet200ResponseTransactionBatches model constructor.
     * @property {module:model/PtsV1TransactionBatchesGet200ResponseTransactionBatches}
     */
    PtsV1TransactionBatchesGet200ResponseTransactionBatches: PtsV1TransactionBatchesGet200ResponseTransactionBatches,
    /**
     * The PtsV1TransactionBatchesGet400Response model constructor.
     * @property {module:model/PtsV1TransactionBatchesGet400Response}
     */
    PtsV1TransactionBatchesGet400Response: PtsV1TransactionBatchesGet400Response,
    /**
     * The PtsV1TransactionBatchesGet400ResponseErrorInformation model constructor.
     * @property {module:model/PtsV1TransactionBatchesGet400ResponseErrorInformation}
     */
    PtsV1TransactionBatchesGet400ResponseErrorInformation: PtsV1TransactionBatchesGet400ResponseErrorInformation,
    /**
     * The PtsV1TransactionBatchesGet400ResponseErrorInformationDetails model constructor.
     * @property {module:model/PtsV1TransactionBatchesGet400ResponseErrorInformationDetails}
     */
    PtsV1TransactionBatchesGet400ResponseErrorInformationDetails: PtsV1TransactionBatchesGet400ResponseErrorInformationDetails,
    /**
     * The PtsV1TransactionBatchesGet500Response model constructor.
     * @property {module:model/PtsV1TransactionBatchesGet500Response}
     */
    PtsV1TransactionBatchesGet500Response: PtsV1TransactionBatchesGet500Response,
    /**
     * The PtsV1TransactionBatchesGet500ResponseErrorInformation model constructor.
     * @property {module:model/PtsV1TransactionBatchesGet500ResponseErrorInformation}
     */
    PtsV1TransactionBatchesGet500ResponseErrorInformation: PtsV1TransactionBatchesGet500ResponseErrorInformation,
    /**
     * The PtsV1TransactionBatchesIdGet200Response model constructor.
     * @property {module:model/PtsV1TransactionBatchesIdGet200Response}
     */
    PtsV1TransactionBatchesIdGet200Response: PtsV1TransactionBatchesIdGet200Response,
    /**
     * The PtsV1TransactionBatchesIdGet200ResponseLinks model constructor.
     * @property {module:model/PtsV1TransactionBatchesIdGet200ResponseLinks}
     */
    PtsV1TransactionBatchesIdGet200ResponseLinks: PtsV1TransactionBatchesIdGet200ResponseLinks,
    /**
     * The PtsV1TransactionBatchesIdGet200ResponseLinksTransactions model constructor.
     * @property {module:model/PtsV1TransactionBatchesIdGet200ResponseLinksTransactions}
     */
    PtsV1TransactionBatchesIdGet200ResponseLinksTransactions: PtsV1TransactionBatchesIdGet200ResponseLinksTransactions,
    /**
     * The PtsV2CreditsPost201Response model constructor.
     * @property {module:model/PtsV2CreditsPost201Response}
     */
    PtsV2CreditsPost201Response: PtsV2CreditsPost201Response,
    /**
     * The PtsV2CreditsPost201ResponseCreditAmountDetails model constructor.
     * @property {module:model/PtsV2CreditsPost201ResponseCreditAmountDetails}
     */
    PtsV2CreditsPost201ResponseCreditAmountDetails: PtsV2CreditsPost201ResponseCreditAmountDetails,
    /**
     * The PtsV2CreditsPost201ResponsePaymentInformation model constructor.
     * @property {module:model/PtsV2CreditsPost201ResponsePaymentInformation}
     */
    PtsV2CreditsPost201ResponsePaymentInformation: PtsV2CreditsPost201ResponsePaymentInformation,
    /**
     * The PtsV2CreditsPost201ResponseProcessingInformation model constructor.
     * @property {module:model/PtsV2CreditsPost201ResponseProcessingInformation}
     */
    PtsV2CreditsPost201ResponseProcessingInformation: PtsV2CreditsPost201ResponseProcessingInformation,
    /**
     * The PtsV2CreditsPost201ResponseProcessingInformationBankTransferOptions model constructor.
     * @property {module:model/PtsV2CreditsPost201ResponseProcessingInformationBankTransferOptions}
     */
    PtsV2CreditsPost201ResponseProcessingInformationBankTransferOptions: PtsV2CreditsPost201ResponseProcessingInformationBankTransferOptions,
    /**
     * The PtsV2IncrementalAuthorizationPatch201Response model constructor.
     * @property {module:model/PtsV2IncrementalAuthorizationPatch201Response}
     */
    PtsV2IncrementalAuthorizationPatch201Response: PtsV2IncrementalAuthorizationPatch201Response,
    /**
     * The PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation model constructor.
     * @property {module:model/PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation}
     */
    PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation: PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation,
    /**
     * The PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation model constructor.
     * @property {module:model/PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation}
     */
    PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation: PtsV2IncrementalAuthorizationPatch201ResponseErrorInformation,
    /**
     * The PtsV2IncrementalAuthorizationPatch201ResponseLinks model constructor.
     * @property {module:model/PtsV2IncrementalAuthorizationPatch201ResponseLinks}
     */
    PtsV2IncrementalAuthorizationPatch201ResponseLinks: PtsV2IncrementalAuthorizationPatch201ResponseLinks,
    /**
     * The PtsV2IncrementalAuthorizationPatch201ResponseOrderInformation model constructor.
     * @property {module:model/PtsV2IncrementalAuthorizationPatch201ResponseOrderInformation}
     */
    PtsV2IncrementalAuthorizationPatch201ResponseOrderInformation: PtsV2IncrementalAuthorizationPatch201ResponseOrderInformation,
    /**
     * The PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformation model constructor.
     * @property {module:model/PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformation}
     */
    PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformation: PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformation,
    /**
     * The PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformationAccountFeatures model constructor.
     * @property {module:model/PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformationAccountFeatures}
     */
    PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformationAccountFeatures: PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformationAccountFeatures,
    /**
     * The PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation model constructor.
     * @property {module:model/PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation}
     */
    PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation: PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation,
    /**
     * The PtsV2IncrementalAuthorizationPatch400Response model constructor.
     * @property {module:model/PtsV2IncrementalAuthorizationPatch400Response}
     */
    PtsV2IncrementalAuthorizationPatch400Response: PtsV2IncrementalAuthorizationPatch400Response,
    /**
     * The PtsV2PaymentsCapturesPost201Response model constructor.
     * @property {module:model/PtsV2PaymentsCapturesPost201Response}
     */
    PtsV2PaymentsCapturesPost201Response: PtsV2PaymentsCapturesPost201Response,
    /**
     * The PtsV2PaymentsCapturesPost201ResponseLinks model constructor.
     * @property {module:model/PtsV2PaymentsCapturesPost201ResponseLinks}
     */
    PtsV2PaymentsCapturesPost201ResponseLinks: PtsV2PaymentsCapturesPost201ResponseLinks,
    /**
     * The PtsV2PaymentsCapturesPost201ResponseOrderInformation model constructor.
     * @property {module:model/PtsV2PaymentsCapturesPost201ResponseOrderInformation}
     */
    PtsV2PaymentsCapturesPost201ResponseOrderInformation: PtsV2PaymentsCapturesPost201ResponseOrderInformation,
    /**
     * The PtsV2PaymentsCapturesPost201ResponseOrderInformationAmountDetails model constructor.
     * @property {module:model/PtsV2PaymentsCapturesPost201ResponseOrderInformationAmountDetails}
     */
    PtsV2PaymentsCapturesPost201ResponseOrderInformationAmountDetails: PtsV2PaymentsCapturesPost201ResponseOrderInformationAmountDetails,
    /**
     * The PtsV2PaymentsCapturesPost201ResponseOrderInformationInvoiceDetails model constructor.
     * @property {module:model/PtsV2PaymentsCapturesPost201ResponseOrderInformationInvoiceDetails}
     */
    PtsV2PaymentsCapturesPost201ResponseOrderInformationInvoiceDetails: PtsV2PaymentsCapturesPost201ResponseOrderInformationInvoiceDetails,
    /**
     * The PtsV2PaymentsCapturesPost201ResponsePointOfSaleInformation model constructor.
     * @property {module:model/PtsV2PaymentsCapturesPost201ResponsePointOfSaleInformation}
     */
    PtsV2PaymentsCapturesPost201ResponsePointOfSaleInformation: PtsV2PaymentsCapturesPost201ResponsePointOfSaleInformation,
    /**
     * The PtsV2PaymentsCapturesPost201ResponseProcessingInformation model constructor.
     * @property {module:model/PtsV2PaymentsCapturesPost201ResponseProcessingInformation}
     */
    PtsV2PaymentsCapturesPost201ResponseProcessingInformation: PtsV2PaymentsCapturesPost201ResponseProcessingInformation,
    /**
     * The PtsV2PaymentsCapturesPost201ResponseProcessorInformation model constructor.
     * @property {module:model/PtsV2PaymentsCapturesPost201ResponseProcessorInformation}
     */
    PtsV2PaymentsCapturesPost201ResponseProcessorInformation: PtsV2PaymentsCapturesPost201ResponseProcessorInformation,
    /**
     * The PtsV2PaymentsCapturesPost400Response model constructor.
     * @property {module:model/PtsV2PaymentsCapturesPost400Response}
     */
    PtsV2PaymentsCapturesPost400Response: PtsV2PaymentsCapturesPost400Response,
    /**
     * The PtsV2PaymentsPost201Response model constructor.
     * @property {module:model/PtsV2PaymentsPost201Response}
     */
    PtsV2PaymentsPost201Response: PtsV2PaymentsPost201Response,
    /**
     * The PtsV2PaymentsPost201ResponseClientReferenceInformation model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseClientReferenceInformation}
     */
    PtsV2PaymentsPost201ResponseClientReferenceInformation: PtsV2PaymentsPost201ResponseClientReferenceInformation,
    /**
     * The PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation}
     */
    PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation: PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation,
    /**
     * The PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationIvr model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationIvr}
     */
    PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationIvr: PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationIvr,
    /**
     * The PtsV2PaymentsPost201ResponseErrorInformation model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseErrorInformation}
     */
    PtsV2PaymentsPost201ResponseErrorInformation: PtsV2PaymentsPost201ResponseErrorInformation,
    /**
     * The PtsV2PaymentsPost201ResponseErrorInformationDetails model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseErrorInformationDetails}
     */
    PtsV2PaymentsPost201ResponseErrorInformationDetails: PtsV2PaymentsPost201ResponseErrorInformationDetails,
    /**
     * The PtsV2PaymentsPost201ResponseInstallmentInformation model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseInstallmentInformation}
     */
    PtsV2PaymentsPost201ResponseInstallmentInformation: PtsV2PaymentsPost201ResponseInstallmentInformation,
    /**
     * The PtsV2PaymentsPost201ResponseIssuerInformation model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseIssuerInformation}
     */
    PtsV2PaymentsPost201ResponseIssuerInformation: PtsV2PaymentsPost201ResponseIssuerInformation,
    /**
     * The PtsV2PaymentsPost201ResponseLinks model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseLinks}
     */
    PtsV2PaymentsPost201ResponseLinks: PtsV2PaymentsPost201ResponseLinks,
    /**
     * The PtsV2PaymentsPost201ResponseLinksSelf model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseLinksSelf}
     */
    PtsV2PaymentsPost201ResponseLinksSelf: PtsV2PaymentsPost201ResponseLinksSelf,
    /**
     * The PtsV2PaymentsPost201ResponseOrderInformation model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseOrderInformation}
     */
    PtsV2PaymentsPost201ResponseOrderInformation: PtsV2PaymentsPost201ResponseOrderInformation,
    /**
     * The PtsV2PaymentsPost201ResponseOrderInformationAmountDetails model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseOrderInformationAmountDetails}
     */
    PtsV2PaymentsPost201ResponseOrderInformationAmountDetails: PtsV2PaymentsPost201ResponseOrderInformationAmountDetails,
    /**
     * The PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails}
     */
    PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails: PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails,
    /**
     * The PtsV2PaymentsPost201ResponsePaymentInformation model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponsePaymentInformation}
     */
    PtsV2PaymentsPost201ResponsePaymentInformation: PtsV2PaymentsPost201ResponsePaymentInformation,
    /**
     * The PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures}
     */
    PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures: PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures,
    /**
     * The PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances}
     */
    PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances: PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances,
    /**
     * The PtsV2PaymentsPost201ResponsePaymentInformationBank model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponsePaymentInformationBank}
     */
    PtsV2PaymentsPost201ResponsePaymentInformationBank: PtsV2PaymentsPost201ResponsePaymentInformationBank,
    /**
     * The PtsV2PaymentsPost201ResponsePaymentInformationBankAccount model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponsePaymentInformationBankAccount}
     */
    PtsV2PaymentsPost201ResponsePaymentInformationBankAccount: PtsV2PaymentsPost201ResponsePaymentInformationBankAccount,
    /**
     * The PtsV2PaymentsPost201ResponsePaymentInformationCard model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponsePaymentInformationCard}
     */
    PtsV2PaymentsPost201ResponsePaymentInformationCard: PtsV2PaymentsPost201ResponsePaymentInformationCard,
    /**
     * The PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard}
     */
    PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard: PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard,
    /**
     * The PtsV2PaymentsPost201ResponsePointOfSaleInformation model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponsePointOfSaleInformation}
     */
    PtsV2PaymentsPost201ResponsePointOfSaleInformation: PtsV2PaymentsPost201ResponsePointOfSaleInformation,
    /**
     * The PtsV2PaymentsPost201ResponsePointOfSaleInformationEmv model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponsePointOfSaleInformationEmv}
     */
    PtsV2PaymentsPost201ResponsePointOfSaleInformationEmv: PtsV2PaymentsPost201ResponsePointOfSaleInformationEmv,
    /**
     * The PtsV2PaymentsPost201ResponseProcessingInformation model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseProcessingInformation}
     */
    PtsV2PaymentsPost201ResponseProcessingInformation: PtsV2PaymentsPost201ResponseProcessingInformation,
    /**
     * The PtsV2PaymentsPost201ResponseProcessingInformationBankTransferOptions model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseProcessingInformationBankTransferOptions}
     */
    PtsV2PaymentsPost201ResponseProcessingInformationBankTransferOptions: PtsV2PaymentsPost201ResponseProcessingInformationBankTransferOptions,
    /**
     * The PtsV2PaymentsPost201ResponseProcessorInformation model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseProcessorInformation}
     */
    PtsV2PaymentsPost201ResponseProcessorInformation: PtsV2PaymentsPost201ResponseProcessorInformation,
    /**
     * The PtsV2PaymentsPost201ResponseProcessorInformationAchVerification model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseProcessorInformationAchVerification}
     */
    PtsV2PaymentsPost201ResponseProcessorInformationAchVerification: PtsV2PaymentsPost201ResponseProcessorInformationAchVerification,
    /**
     * The PtsV2PaymentsPost201ResponseProcessorInformationAvs model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseProcessorInformationAvs}
     */
    PtsV2PaymentsPost201ResponseProcessorInformationAvs: PtsV2PaymentsPost201ResponseProcessorInformationAvs,
    /**
     * The PtsV2PaymentsPost201ResponseProcessorInformationCardVerification model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseProcessorInformationCardVerification}
     */
    PtsV2PaymentsPost201ResponseProcessorInformationCardVerification: PtsV2PaymentsPost201ResponseProcessorInformationCardVerification,
    /**
     * The PtsV2PaymentsPost201ResponseProcessorInformationConsumerAuthenticationResponse model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseProcessorInformationConsumerAuthenticationResponse}
     */
    PtsV2PaymentsPost201ResponseProcessorInformationConsumerAuthenticationResponse: PtsV2PaymentsPost201ResponseProcessorInformationConsumerAuthenticationResponse,
    /**
     * The PtsV2PaymentsPost201ResponseProcessorInformationCustomer model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseProcessorInformationCustomer}
     */
    PtsV2PaymentsPost201ResponseProcessorInformationCustomer: PtsV2PaymentsPost201ResponseProcessorInformationCustomer,
    /**
     * The PtsV2PaymentsPost201ResponseProcessorInformationElectronicVerificationResults model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseProcessorInformationElectronicVerificationResults}
     */
    PtsV2PaymentsPost201ResponseProcessorInformationElectronicVerificationResults: PtsV2PaymentsPost201ResponseProcessorInformationElectronicVerificationResults,
    /**
     * The PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice}
     */
    PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice: PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice,
    /**
     * The PtsV2PaymentsPost201ResponseProcessorInformationRouting model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseProcessorInformationRouting}
     */
    PtsV2PaymentsPost201ResponseProcessorInformationRouting: PtsV2PaymentsPost201ResponseProcessorInformationRouting,
    /**
     * The PtsV2PaymentsPost201ResponseRiskInformation model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseRiskInformation}
     */
    PtsV2PaymentsPost201ResponseRiskInformation: PtsV2PaymentsPost201ResponseRiskInformation,
    /**
     * The PtsV2PaymentsPost201ResponseRiskInformationInfoCodes model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseRiskInformationInfoCodes}
     */
    PtsV2PaymentsPost201ResponseRiskInformationInfoCodes: PtsV2PaymentsPost201ResponseRiskInformationInfoCodes,
    /**
     * The PtsV2PaymentsPost201ResponseRiskInformationIpAddress model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseRiskInformationIpAddress}
     */
    PtsV2PaymentsPost201ResponseRiskInformationIpAddress: PtsV2PaymentsPost201ResponseRiskInformationIpAddress,
    /**
     * The PtsV2PaymentsPost201ResponseRiskInformationProfile model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseRiskInformationProfile}
     */
    PtsV2PaymentsPost201ResponseRiskInformationProfile: PtsV2PaymentsPost201ResponseRiskInformationProfile,
    /**
     * The PtsV2PaymentsPost201ResponseRiskInformationProviders model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseRiskInformationProviders}
     */
    PtsV2PaymentsPost201ResponseRiskInformationProviders: PtsV2PaymentsPost201ResponseRiskInformationProviders,
    /**
     * The PtsV2PaymentsPost201ResponseRiskInformationProvidersProviderName model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseRiskInformationProvidersProviderName}
     */
    PtsV2PaymentsPost201ResponseRiskInformationProvidersProviderName: PtsV2PaymentsPost201ResponseRiskInformationProvidersProviderName,
    /**
     * The PtsV2PaymentsPost201ResponseRiskInformationRules model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseRiskInformationRules}
     */
    PtsV2PaymentsPost201ResponseRiskInformationRules: PtsV2PaymentsPost201ResponseRiskInformationRules,
    /**
     * The PtsV2PaymentsPost201ResponseRiskInformationScore model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseRiskInformationScore}
     */
    PtsV2PaymentsPost201ResponseRiskInformationScore: PtsV2PaymentsPost201ResponseRiskInformationScore,
    /**
     * The PtsV2PaymentsPost201ResponseRiskInformationTravel model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseRiskInformationTravel}
     */
    PtsV2PaymentsPost201ResponseRiskInformationTravel: PtsV2PaymentsPost201ResponseRiskInformationTravel,
    /**
     * The PtsV2PaymentsPost201ResponseRiskInformationTravelActualFinalDestination model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseRiskInformationTravelActualFinalDestination}
     */
    PtsV2PaymentsPost201ResponseRiskInformationTravelActualFinalDestination: PtsV2PaymentsPost201ResponseRiskInformationTravelActualFinalDestination,
    /**
     * The PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDeparture model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDeparture}
     */
    PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDeparture: PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDeparture,
    /**
     * The PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDestination model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDestination}
     */
    PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDestination: PtsV2PaymentsPost201ResponseRiskInformationTravelFirstDestination,
    /**
     * The PtsV2PaymentsPost201ResponseRiskInformationTravelLastDestination model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseRiskInformationTravelLastDestination}
     */
    PtsV2PaymentsPost201ResponseRiskInformationTravelLastDestination: PtsV2PaymentsPost201ResponseRiskInformationTravelLastDestination,
    /**
     * The PtsV2PaymentsPost201ResponseRiskInformationVelocity model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseRiskInformationVelocity}
     */
    PtsV2PaymentsPost201ResponseRiskInformationVelocity: PtsV2PaymentsPost201ResponseRiskInformationVelocity,
    /**
     * The PtsV2PaymentsPost201ResponseRiskInformationVelocityMorphing model constructor.
     * @property {module:model/PtsV2PaymentsPost201ResponseRiskInformationVelocityMorphing}
     */
    PtsV2PaymentsPost201ResponseRiskInformationVelocityMorphing: PtsV2PaymentsPost201ResponseRiskInformationVelocityMorphing,
    /**
     * The PtsV2PaymentsPost400Response model constructor.
     * @property {module:model/PtsV2PaymentsPost400Response}
     */
    PtsV2PaymentsPost400Response: PtsV2PaymentsPost400Response,
    /**
     * The PtsV2PaymentsPost502Response model constructor.
     * @property {module:model/PtsV2PaymentsPost502Response}
     */
    PtsV2PaymentsPost502Response: PtsV2PaymentsPost502Response,
    /**
     * The PtsV2PaymentsRefundPost201Response model constructor.
     * @property {module:model/PtsV2PaymentsRefundPost201Response}
     */
    PtsV2PaymentsRefundPost201Response: PtsV2PaymentsRefundPost201Response,
    /**
     * The PtsV2PaymentsRefundPost201ResponseLinks model constructor.
     * @property {module:model/PtsV2PaymentsRefundPost201ResponseLinks}
     */
    PtsV2PaymentsRefundPost201ResponseLinks: PtsV2PaymentsRefundPost201ResponseLinks,
    /**
     * The PtsV2PaymentsRefundPost201ResponseOrderInformation model constructor.
     * @property {module:model/PtsV2PaymentsRefundPost201ResponseOrderInformation}
     */
    PtsV2PaymentsRefundPost201ResponseOrderInformation: PtsV2PaymentsRefundPost201ResponseOrderInformation,
    /**
     * The PtsV2PaymentsRefundPost201ResponseProcessorInformation model constructor.
     * @property {module:model/PtsV2PaymentsRefundPost201ResponseProcessorInformation}
     */
    PtsV2PaymentsRefundPost201ResponseProcessorInformation: PtsV2PaymentsRefundPost201ResponseProcessorInformation,
    /**
     * The PtsV2PaymentsRefundPost201ResponseRefundAmountDetails model constructor.
     * @property {module:model/PtsV2PaymentsRefundPost201ResponseRefundAmountDetails}
     */
    PtsV2PaymentsRefundPost201ResponseRefundAmountDetails: PtsV2PaymentsRefundPost201ResponseRefundAmountDetails,
    /**
     * The PtsV2PaymentsRefundPost400Response model constructor.
     * @property {module:model/PtsV2PaymentsRefundPost400Response}
     */
    PtsV2PaymentsRefundPost400Response: PtsV2PaymentsRefundPost400Response,
    /**
     * The PtsV2PaymentsReversalsPost201Response model constructor.
     * @property {module:model/PtsV2PaymentsReversalsPost201Response}
     */
    PtsV2PaymentsReversalsPost201Response: PtsV2PaymentsReversalsPost201Response,
    /**
     * The PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation model constructor.
     * @property {module:model/PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation}
     */
    PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation: PtsV2PaymentsReversalsPost201ResponseAuthorizationInformation,
    /**
     * The PtsV2PaymentsReversalsPost201ResponseIssuerInformation model constructor.
     * @property {module:model/PtsV2PaymentsReversalsPost201ResponseIssuerInformation}
     */
    PtsV2PaymentsReversalsPost201ResponseIssuerInformation: PtsV2PaymentsReversalsPost201ResponseIssuerInformation,
    /**
     * The PtsV2PaymentsReversalsPost201ResponseProcessorInformation model constructor.
     * @property {module:model/PtsV2PaymentsReversalsPost201ResponseProcessorInformation}
     */
    PtsV2PaymentsReversalsPost201ResponseProcessorInformation: PtsV2PaymentsReversalsPost201ResponseProcessorInformation,
    /**
     * The PtsV2PaymentsReversalsPost201ResponseReversalAmountDetails model constructor.
     * @property {module:model/PtsV2PaymentsReversalsPost201ResponseReversalAmountDetails}
     */
    PtsV2PaymentsReversalsPost201ResponseReversalAmountDetails: PtsV2PaymentsReversalsPost201ResponseReversalAmountDetails,
    /**
     * The PtsV2PaymentsReversalsPost400Response model constructor.
     * @property {module:model/PtsV2PaymentsReversalsPost400Response}
     */
    PtsV2PaymentsReversalsPost400Response: PtsV2PaymentsReversalsPost400Response,
    /**
     * The PtsV2PaymentsVoidsPost201Response model constructor.
     * @property {module:model/PtsV2PaymentsVoidsPost201Response}
     */
    PtsV2PaymentsVoidsPost201Response: PtsV2PaymentsVoidsPost201Response,
    /**
     * The PtsV2PaymentsVoidsPost201ResponseProcessorInformation model constructor.
     * @property {module:model/PtsV2PaymentsVoidsPost201ResponseProcessorInformation}
     */
    PtsV2PaymentsVoidsPost201ResponseProcessorInformation: PtsV2PaymentsVoidsPost201ResponseProcessorInformation,
    /**
     * The PtsV2PaymentsVoidsPost201ResponseVoidAmountDetails model constructor.
     * @property {module:model/PtsV2PaymentsVoidsPost201ResponseVoidAmountDetails}
     */
    PtsV2PaymentsVoidsPost201ResponseVoidAmountDetails: PtsV2PaymentsVoidsPost201ResponseVoidAmountDetails,
    /**
     * The PtsV2PaymentsVoidsPost400Response model constructor.
     * @property {module:model/PtsV2PaymentsVoidsPost400Response}
     */
    PtsV2PaymentsVoidsPost400Response: PtsV2PaymentsVoidsPost400Response,
    /**
     * The PtsV2PayoutsPost201Response model constructor.
     * @property {module:model/PtsV2PayoutsPost201Response}
     */
    PtsV2PayoutsPost201Response: PtsV2PayoutsPost201Response,
    /**
     * The PtsV2PayoutsPost201ResponseErrorInformation model constructor.
     * @property {module:model/PtsV2PayoutsPost201ResponseErrorInformation}
     */
    PtsV2PayoutsPost201ResponseErrorInformation: PtsV2PayoutsPost201ResponseErrorInformation,
    /**
     * The PtsV2PayoutsPost201ResponseMerchantInformation model constructor.
     * @property {module:model/PtsV2PayoutsPost201ResponseMerchantInformation}
     */
    PtsV2PayoutsPost201ResponseMerchantInformation: PtsV2PayoutsPost201ResponseMerchantInformation,
    /**
     * The PtsV2PayoutsPost201ResponseMerchantInformationMerchantDescriptor model constructor.
     * @property {module:model/PtsV2PayoutsPost201ResponseMerchantInformationMerchantDescriptor}
     */
    PtsV2PayoutsPost201ResponseMerchantInformationMerchantDescriptor: PtsV2PayoutsPost201ResponseMerchantInformationMerchantDescriptor,
    /**
     * The PtsV2PayoutsPost201ResponseOrderInformation model constructor.
     * @property {module:model/PtsV2PayoutsPost201ResponseOrderInformation}
     */
    PtsV2PayoutsPost201ResponseOrderInformation: PtsV2PayoutsPost201ResponseOrderInformation,
    /**
     * The PtsV2PayoutsPost201ResponseOrderInformationAmountDetails model constructor.
     * @property {module:model/PtsV2PayoutsPost201ResponseOrderInformationAmountDetails}
     */
    PtsV2PayoutsPost201ResponseOrderInformationAmountDetails: PtsV2PayoutsPost201ResponseOrderInformationAmountDetails,
    /**
     * The PtsV2PayoutsPost201ResponseProcessorInformation model constructor.
     * @property {module:model/PtsV2PayoutsPost201ResponseProcessorInformation}
     */
    PtsV2PayoutsPost201ResponseProcessorInformation: PtsV2PayoutsPost201ResponseProcessorInformation,
    /**
     * The PtsV2PayoutsPost201ResponseRecipientInformation model constructor.
     * @property {module:model/PtsV2PayoutsPost201ResponseRecipientInformation}
     */
    PtsV2PayoutsPost201ResponseRecipientInformation: PtsV2PayoutsPost201ResponseRecipientInformation,
    /**
     * The PtsV2PayoutsPost201ResponseRecipientInformationCard model constructor.
     * @property {module:model/PtsV2PayoutsPost201ResponseRecipientInformationCard}
     */
    PtsV2PayoutsPost201ResponseRecipientInformationCard: PtsV2PayoutsPost201ResponseRecipientInformationCard,
    /**
     * The PtsV2PayoutsPost400Response model constructor.
     * @property {module:model/PtsV2PayoutsPost400Response}
     */
    PtsV2PayoutsPost400Response: PtsV2PayoutsPost400Response,
    /**
     * The Ptsv2creditsInstallmentInformation model constructor.
     * @property {module:model/Ptsv2creditsInstallmentInformation}
     */
    Ptsv2creditsInstallmentInformation: Ptsv2creditsInstallmentInformation,
    /**
     * The Ptsv2creditsProcessingInformation model constructor.
     * @property {module:model/Ptsv2creditsProcessingInformation}
     */
    Ptsv2creditsProcessingInformation: Ptsv2creditsProcessingInformation,
    /**
     * The Ptsv2creditsProcessingInformationBankTransferOptions model constructor.
     * @property {module:model/Ptsv2creditsProcessingInformationBankTransferOptions}
     */
    Ptsv2creditsProcessingInformationBankTransferOptions: Ptsv2creditsProcessingInformationBankTransferOptions,
    /**
     * The Ptsv2creditsProcessingInformationElectronicBenefitsTransfer model constructor.
     * @property {module:model/Ptsv2creditsProcessingInformationElectronicBenefitsTransfer}
     */
    Ptsv2creditsProcessingInformationElectronicBenefitsTransfer: Ptsv2creditsProcessingInformationElectronicBenefitsTransfer,
    /**
     * The Ptsv2creditsProcessingInformationJapanPaymentOptions model constructor.
     * @property {module:model/Ptsv2creditsProcessingInformationJapanPaymentOptions}
     */
    Ptsv2creditsProcessingInformationJapanPaymentOptions: Ptsv2creditsProcessingInformationJapanPaymentOptions,
    /**
     * The Ptsv2creditsProcessingInformationPurchaseOptions model constructor.
     * @property {module:model/Ptsv2creditsProcessingInformationPurchaseOptions}
     */
    Ptsv2creditsProcessingInformationPurchaseOptions: Ptsv2creditsProcessingInformationPurchaseOptions,
    /**
     * The Ptsv2paymentsAcquirerInformation model constructor.
     * @property {module:model/Ptsv2paymentsAcquirerInformation}
     */
    Ptsv2paymentsAcquirerInformation: Ptsv2paymentsAcquirerInformation,
    /**
     * The Ptsv2paymentsAggregatorInformation model constructor.
     * @property {module:model/Ptsv2paymentsAggregatorInformation}
     */
    Ptsv2paymentsAggregatorInformation: Ptsv2paymentsAggregatorInformation,
    /**
     * The Ptsv2paymentsAggregatorInformationSubMerchant model constructor.
     * @property {module:model/Ptsv2paymentsAggregatorInformationSubMerchant}
     */
    Ptsv2paymentsAggregatorInformationSubMerchant: Ptsv2paymentsAggregatorInformationSubMerchant,
    /**
     * The Ptsv2paymentsBuyerInformation model constructor.
     * @property {module:model/Ptsv2paymentsBuyerInformation}
     */
    Ptsv2paymentsBuyerInformation: Ptsv2paymentsBuyerInformation,
    /**
     * The Ptsv2paymentsBuyerInformationPersonalIdentification model constructor.
     * @property {module:model/Ptsv2paymentsBuyerInformationPersonalIdentification}
     */
    Ptsv2paymentsBuyerInformationPersonalIdentification: Ptsv2paymentsBuyerInformationPersonalIdentification,
    /**
     * The Ptsv2paymentsClientReferenceInformation model constructor.
     * @property {module:model/Ptsv2paymentsClientReferenceInformation}
     */
    Ptsv2paymentsClientReferenceInformation: Ptsv2paymentsClientReferenceInformation,
    /**
     * The Ptsv2paymentsClientReferenceInformationPartner model constructor.
     * @property {module:model/Ptsv2paymentsClientReferenceInformationPartner}
     */
    Ptsv2paymentsClientReferenceInformationPartner: Ptsv2paymentsClientReferenceInformationPartner,
    /**
     * The Ptsv2paymentsConsumerAuthenticationInformation model constructor.
     * @property {module:model/Ptsv2paymentsConsumerAuthenticationInformation}
     */
    Ptsv2paymentsConsumerAuthenticationInformation: Ptsv2paymentsConsumerAuthenticationInformation,
    /**
     * The Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication model constructor.
     * @property {module:model/Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication}
     */
    Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication: Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication,
    /**
     * The Ptsv2paymentsDeviceInformation model constructor.
     * @property {module:model/Ptsv2paymentsDeviceInformation}
     */
    Ptsv2paymentsDeviceInformation: Ptsv2paymentsDeviceInformation,
    /**
     * The Ptsv2paymentsDeviceInformationRawData model constructor.
     * @property {module:model/Ptsv2paymentsDeviceInformationRawData}
     */
    Ptsv2paymentsDeviceInformationRawData: Ptsv2paymentsDeviceInformationRawData,
    /**
     * The Ptsv2paymentsInstallmentInformation model constructor.
     * @property {module:model/Ptsv2paymentsInstallmentInformation}
     */
    Ptsv2paymentsInstallmentInformation: Ptsv2paymentsInstallmentInformation,
    /**
     * The Ptsv2paymentsIssuerInformation model constructor.
     * @property {module:model/Ptsv2paymentsIssuerInformation}
     */
    Ptsv2paymentsIssuerInformation: Ptsv2paymentsIssuerInformation,
    /**
     * The Ptsv2paymentsMerchantDefinedInformation model constructor.
     * @property {module:model/Ptsv2paymentsMerchantDefinedInformation}
     */
    Ptsv2paymentsMerchantDefinedInformation: Ptsv2paymentsMerchantDefinedInformation,
    /**
     * The Ptsv2paymentsMerchantInformation model constructor.
     * @property {module:model/Ptsv2paymentsMerchantInformation}
     */
    Ptsv2paymentsMerchantInformation: Ptsv2paymentsMerchantInformation,
    /**
     * The Ptsv2paymentsMerchantInformationMerchantDescriptor model constructor.
     * @property {module:model/Ptsv2paymentsMerchantInformationMerchantDescriptor}
     */
    Ptsv2paymentsMerchantInformationMerchantDescriptor: Ptsv2paymentsMerchantInformationMerchantDescriptor,
    /**
     * The Ptsv2paymentsMerchantInformationServiceFeeDescriptor model constructor.
     * @property {module:model/Ptsv2paymentsMerchantInformationServiceFeeDescriptor}
     */
    Ptsv2paymentsMerchantInformationServiceFeeDescriptor: Ptsv2paymentsMerchantInformationServiceFeeDescriptor,
    /**
     * The Ptsv2paymentsOrderInformation model constructor.
     * @property {module:model/Ptsv2paymentsOrderInformation}
     */
    Ptsv2paymentsOrderInformation: Ptsv2paymentsOrderInformation,
    /**
     * The Ptsv2paymentsOrderInformationAmountDetails model constructor.
     * @property {module:model/Ptsv2paymentsOrderInformationAmountDetails}
     */
    Ptsv2paymentsOrderInformationAmountDetails: Ptsv2paymentsOrderInformationAmountDetails,
    /**
     * The Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts model constructor.
     * @property {module:model/Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts}
     */
    Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts: Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts,
    /**
     * The Ptsv2paymentsOrderInformationAmountDetailsCurrencyConversion model constructor.
     * @property {module:model/Ptsv2paymentsOrderInformationAmountDetailsCurrencyConversion}
     */
    Ptsv2paymentsOrderInformationAmountDetailsCurrencyConversion: Ptsv2paymentsOrderInformationAmountDetailsCurrencyConversion,
    /**
     * The Ptsv2paymentsOrderInformationAmountDetailsSurcharge model constructor.
     * @property {module:model/Ptsv2paymentsOrderInformationAmountDetailsSurcharge}
     */
    Ptsv2paymentsOrderInformationAmountDetailsSurcharge: Ptsv2paymentsOrderInformationAmountDetailsSurcharge,
    /**
     * The Ptsv2paymentsOrderInformationAmountDetailsTaxDetails model constructor.
     * @property {module:model/Ptsv2paymentsOrderInformationAmountDetailsTaxDetails}
     */
    Ptsv2paymentsOrderInformationAmountDetailsTaxDetails: Ptsv2paymentsOrderInformationAmountDetailsTaxDetails,
    /**
     * The Ptsv2paymentsOrderInformationBillTo model constructor.
     * @property {module:model/Ptsv2paymentsOrderInformationBillTo}
     */
    Ptsv2paymentsOrderInformationBillTo: Ptsv2paymentsOrderInformationBillTo,
    /**
     * The Ptsv2paymentsOrderInformationBillToCompany model constructor.
     * @property {module:model/Ptsv2paymentsOrderInformationBillToCompany}
     */
    Ptsv2paymentsOrderInformationBillToCompany: Ptsv2paymentsOrderInformationBillToCompany,
    /**
     * The Ptsv2paymentsOrderInformationInvoiceDetails model constructor.
     * @property {module:model/Ptsv2paymentsOrderInformationInvoiceDetails}
     */
    Ptsv2paymentsOrderInformationInvoiceDetails: Ptsv2paymentsOrderInformationInvoiceDetails,
    /**
     * The Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum model constructor.
     * @property {module:model/Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum}
     */
    Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum: Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum,
    /**
     * The Ptsv2paymentsOrderInformationLineItems model constructor.
     * @property {module:model/Ptsv2paymentsOrderInformationLineItems}
     */
    Ptsv2paymentsOrderInformationLineItems: Ptsv2paymentsOrderInformationLineItems,
    /**
     * The Ptsv2paymentsOrderInformationPassenger model constructor.
     * @property {module:model/Ptsv2paymentsOrderInformationPassenger}
     */
    Ptsv2paymentsOrderInformationPassenger: Ptsv2paymentsOrderInformationPassenger,
    /**
     * The Ptsv2paymentsOrderInformationShipTo model constructor.
     * @property {module:model/Ptsv2paymentsOrderInformationShipTo}
     */
    Ptsv2paymentsOrderInformationShipTo: Ptsv2paymentsOrderInformationShipTo,
    /**
     * The Ptsv2paymentsOrderInformationShippingDetails model constructor.
     * @property {module:model/Ptsv2paymentsOrderInformationShippingDetails}
     */
    Ptsv2paymentsOrderInformationShippingDetails: Ptsv2paymentsOrderInformationShippingDetails,
    /**
     * The Ptsv2paymentsPaymentInformation model constructor.
     * @property {module:model/Ptsv2paymentsPaymentInformation}
     */
    Ptsv2paymentsPaymentInformation: Ptsv2paymentsPaymentInformation,
    /**
     * The Ptsv2paymentsPaymentInformationBank model constructor.
     * @property {module:model/Ptsv2paymentsPaymentInformationBank}
     */
    Ptsv2paymentsPaymentInformationBank: Ptsv2paymentsPaymentInformationBank,
    /**
     * The Ptsv2paymentsPaymentInformationBankAccount model constructor.
     * @property {module:model/Ptsv2paymentsPaymentInformationBankAccount}
     */
    Ptsv2paymentsPaymentInformationBankAccount: Ptsv2paymentsPaymentInformationBankAccount,
    /**
     * The Ptsv2paymentsPaymentInformationCard model constructor.
     * @property {module:model/Ptsv2paymentsPaymentInformationCard}
     */
    Ptsv2paymentsPaymentInformationCard: Ptsv2paymentsPaymentInformationCard,
    /**
     * The Ptsv2paymentsPaymentInformationCustomer model constructor.
     * @property {module:model/Ptsv2paymentsPaymentInformationCustomer}
     */
    Ptsv2paymentsPaymentInformationCustomer: Ptsv2paymentsPaymentInformationCustomer,
    /**
     * The Ptsv2paymentsPaymentInformationFluidData model constructor.
     * @property {module:model/Ptsv2paymentsPaymentInformationFluidData}
     */
    Ptsv2paymentsPaymentInformationFluidData: Ptsv2paymentsPaymentInformationFluidData,
    /**
     * The Ptsv2paymentsPaymentInformationTokenizedCard model constructor.
     * @property {module:model/Ptsv2paymentsPaymentInformationTokenizedCard}
     */
    Ptsv2paymentsPaymentInformationTokenizedCard: Ptsv2paymentsPaymentInformationTokenizedCard,
    /**
     * The Ptsv2paymentsPointOfSaleInformation model constructor.
     * @property {module:model/Ptsv2paymentsPointOfSaleInformation}
     */
    Ptsv2paymentsPointOfSaleInformation: Ptsv2paymentsPointOfSaleInformation,
    /**
     * The Ptsv2paymentsPointOfSaleInformationEmv model constructor.
     * @property {module:model/Ptsv2paymentsPointOfSaleInformationEmv}
     */
    Ptsv2paymentsPointOfSaleInformationEmv: Ptsv2paymentsPointOfSaleInformationEmv,
    /**
     * The Ptsv2paymentsProcessingInformation model constructor.
     * @property {module:model/Ptsv2paymentsProcessingInformation}
     */
    Ptsv2paymentsProcessingInformation: Ptsv2paymentsProcessingInformation,
    /**
     * The Ptsv2paymentsProcessingInformationAuthorizationOptions model constructor.
     * @property {module:model/Ptsv2paymentsProcessingInformationAuthorizationOptions}
     */
    Ptsv2paymentsProcessingInformationAuthorizationOptions: Ptsv2paymentsProcessingInformationAuthorizationOptions,
    /**
     * The Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiator model constructor.
     * @property {module:model/Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiator}
     */
    Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiator: Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiator,
    /**
     * The Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction model constructor.
     * @property {module:model/Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction}
     */
    Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction: Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction,
    /**
     * The Ptsv2paymentsProcessingInformationBankTransferOptions model constructor.
     * @property {module:model/Ptsv2paymentsProcessingInformationBankTransferOptions}
     */
    Ptsv2paymentsProcessingInformationBankTransferOptions: Ptsv2paymentsProcessingInformationBankTransferOptions,
    /**
     * The Ptsv2paymentsProcessingInformationCaptureOptions model constructor.
     * @property {module:model/Ptsv2paymentsProcessingInformationCaptureOptions}
     */
    Ptsv2paymentsProcessingInformationCaptureOptions: Ptsv2paymentsProcessingInformationCaptureOptions,
    /**
     * The Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer model constructor.
     * @property {module:model/Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer}
     */
    Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer: Ptsv2paymentsProcessingInformationElectronicBenefitsTransfer,
    /**
     * The Ptsv2paymentsProcessingInformationJapanPaymentOptions model constructor.
     * @property {module:model/Ptsv2paymentsProcessingInformationJapanPaymentOptions}
     */
    Ptsv2paymentsProcessingInformationJapanPaymentOptions: Ptsv2paymentsProcessingInformationJapanPaymentOptions,
    /**
     * The Ptsv2paymentsProcessingInformationLoanOptions model constructor.
     * @property {module:model/Ptsv2paymentsProcessingInformationLoanOptions}
     */
    Ptsv2paymentsProcessingInformationLoanOptions: Ptsv2paymentsProcessingInformationLoanOptions,
    /**
     * The Ptsv2paymentsProcessingInformationPurchaseOptions model constructor.
     * @property {module:model/Ptsv2paymentsProcessingInformationPurchaseOptions}
     */
    Ptsv2paymentsProcessingInformationPurchaseOptions: Ptsv2paymentsProcessingInformationPurchaseOptions,
    /**
     * The Ptsv2paymentsProcessingInformationRecurringOptions model constructor.
     * @property {module:model/Ptsv2paymentsProcessingInformationRecurringOptions}
     */
    Ptsv2paymentsProcessingInformationRecurringOptions: Ptsv2paymentsProcessingInformationRecurringOptions,
    /**
     * The Ptsv2paymentsPromotionInformation model constructor.
     * @property {module:model/Ptsv2paymentsPromotionInformation}
     */
    Ptsv2paymentsPromotionInformation: Ptsv2paymentsPromotionInformation,
    /**
     * The Ptsv2paymentsRecipientInformation model constructor.
     * @property {module:model/Ptsv2paymentsRecipientInformation}
     */
    Ptsv2paymentsRecipientInformation: Ptsv2paymentsRecipientInformation,
    /**
     * The Ptsv2paymentsRecurringPaymentInformation model constructor.
     * @property {module:model/Ptsv2paymentsRecurringPaymentInformation}
     */
    Ptsv2paymentsRecurringPaymentInformation: Ptsv2paymentsRecurringPaymentInformation,
    /**
     * The Ptsv2paymentsRiskInformation model constructor.
     * @property {module:model/Ptsv2paymentsRiskInformation}
     */
    Ptsv2paymentsRiskInformation: Ptsv2paymentsRiskInformation,
    /**
     * The Ptsv2paymentsRiskInformationBuyerHistory model constructor.
     * @property {module:model/Ptsv2paymentsRiskInformationBuyerHistory}
     */
    Ptsv2paymentsRiskInformationBuyerHistory: Ptsv2paymentsRiskInformationBuyerHistory,
    /**
     * The Ptsv2paymentsRiskInformationBuyerHistoryAccountHistory model constructor.
     * @property {module:model/Ptsv2paymentsRiskInformationBuyerHistoryAccountHistory}
     */
    Ptsv2paymentsRiskInformationBuyerHistoryAccountHistory: Ptsv2paymentsRiskInformationBuyerHistoryAccountHistory,
    /**
     * The Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount model constructor.
     * @property {module:model/Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount}
     */
    Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount: Ptsv2paymentsRiskInformationBuyerHistoryCustomerAccount,
    /**
     * The Ptsv2paymentsRiskInformationProfile model constructor.
     * @property {module:model/Ptsv2paymentsRiskInformationProfile}
     */
    Ptsv2paymentsRiskInformationProfile: Ptsv2paymentsRiskInformationProfile,
    /**
     * The Ptsv2paymentsTokenInformation model constructor.
     * @property {module:model/Ptsv2paymentsTokenInformation}
     */
    Ptsv2paymentsTokenInformation: Ptsv2paymentsTokenInformation,
    /**
     * The Ptsv2paymentsTravelInformation model constructor.
     * @property {module:model/Ptsv2paymentsTravelInformation}
     */
    Ptsv2paymentsTravelInformation: Ptsv2paymentsTravelInformation,
    /**
     * The Ptsv2paymentsTravelInformationAgency model constructor.
     * @property {module:model/Ptsv2paymentsTravelInformationAgency}
     */
    Ptsv2paymentsTravelInformationAgency: Ptsv2paymentsTravelInformationAgency,
    /**
     * The Ptsv2paymentsTravelInformationLodging model constructor.
     * @property {module:model/Ptsv2paymentsTravelInformationLodging}
     */
    Ptsv2paymentsTravelInformationLodging: Ptsv2paymentsTravelInformationLodging,
    /**
     * The Ptsv2paymentsTravelInformationLodgingRoom model constructor.
     * @property {module:model/Ptsv2paymentsTravelInformationLodgingRoom}
     */
    Ptsv2paymentsTravelInformationLodgingRoom: Ptsv2paymentsTravelInformationLodgingRoom,
    /**
     * The Ptsv2paymentsTravelInformationTransit model constructor.
     * @property {module:model/Ptsv2paymentsTravelInformationTransit}
     */
    Ptsv2paymentsTravelInformationTransit: Ptsv2paymentsTravelInformationTransit,
    /**
     * The Ptsv2paymentsTravelInformationTransitAirline model constructor.
     * @property {module:model/Ptsv2paymentsTravelInformationTransitAirline}
     */
    Ptsv2paymentsTravelInformationTransitAirline: Ptsv2paymentsTravelInformationTransitAirline,
    /**
     * The Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation model constructor.
     * @property {module:model/Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation}
     */
    Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation: Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformation,
    /**
     * The Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService model constructor.
     * @property {module:model/Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService}
     */
    Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService: Ptsv2paymentsTravelInformationTransitAirlineAncillaryInformationService,
    /**
     * The Ptsv2paymentsTravelInformationTransitAirlineLegs model constructor.
     * @property {module:model/Ptsv2paymentsTravelInformationTransitAirlineLegs}
     */
    Ptsv2paymentsTravelInformationTransitAirlineLegs: Ptsv2paymentsTravelInformationTransitAirlineLegs,
    /**
     * The Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer model constructor.
     * @property {module:model/Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer}
     */
    Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer: Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer,
    /**
     * The Ptsv2paymentsidClientReferenceInformation model constructor.
     * @property {module:model/Ptsv2paymentsidClientReferenceInformation}
     */
    Ptsv2paymentsidClientReferenceInformation: Ptsv2paymentsidClientReferenceInformation,
    /**
     * The Ptsv2paymentsidClientReferenceInformationPartner model constructor.
     * @property {module:model/Ptsv2paymentsidClientReferenceInformationPartner}
     */
    Ptsv2paymentsidClientReferenceInformationPartner: Ptsv2paymentsidClientReferenceInformationPartner,
    /**
     * The Ptsv2paymentsidMerchantInformation model constructor.
     * @property {module:model/Ptsv2paymentsidMerchantInformation}
     */
    Ptsv2paymentsidMerchantInformation: Ptsv2paymentsidMerchantInformation,
    /**
     * The Ptsv2paymentsidOrderInformation model constructor.
     * @property {module:model/Ptsv2paymentsidOrderInformation}
     */
    Ptsv2paymentsidOrderInformation: Ptsv2paymentsidOrderInformation,
    /**
     * The Ptsv2paymentsidOrderInformationAmountDetails model constructor.
     * @property {module:model/Ptsv2paymentsidOrderInformationAmountDetails}
     */
    Ptsv2paymentsidOrderInformationAmountDetails: Ptsv2paymentsidOrderInformationAmountDetails,
    /**
     * The Ptsv2paymentsidProcessingInformation model constructor.
     * @property {module:model/Ptsv2paymentsidProcessingInformation}
     */
    Ptsv2paymentsidProcessingInformation: Ptsv2paymentsidProcessingInformation,
    /**
     * The Ptsv2paymentsidProcessingInformationAuthorizationOptions model constructor.
     * @property {module:model/Ptsv2paymentsidProcessingInformationAuthorizationOptions}
     */
    Ptsv2paymentsidProcessingInformationAuthorizationOptions: Ptsv2paymentsidProcessingInformationAuthorizationOptions,
    /**
     * The Ptsv2paymentsidProcessingInformationAuthorizationOptionsInitiator model constructor.
     * @property {module:model/Ptsv2paymentsidProcessingInformationAuthorizationOptionsInitiator}
     */
    Ptsv2paymentsidProcessingInformationAuthorizationOptionsInitiator: Ptsv2paymentsidProcessingInformationAuthorizationOptionsInitiator,
    /**
     * The Ptsv2paymentsidTravelInformation model constructor.
     * @property {module:model/Ptsv2paymentsidTravelInformation}
     */
    Ptsv2paymentsidTravelInformation: Ptsv2paymentsidTravelInformation,
    /**
     * The Ptsv2paymentsidcapturesAggregatorInformation model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesAggregatorInformation}
     */
    Ptsv2paymentsidcapturesAggregatorInformation: Ptsv2paymentsidcapturesAggregatorInformation,
    /**
     * The Ptsv2paymentsidcapturesAggregatorInformationSubMerchant model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesAggregatorInformationSubMerchant}
     */
    Ptsv2paymentsidcapturesAggregatorInformationSubMerchant: Ptsv2paymentsidcapturesAggregatorInformationSubMerchant,
    /**
     * The Ptsv2paymentsidcapturesBuyerInformation model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesBuyerInformation}
     */
    Ptsv2paymentsidcapturesBuyerInformation: Ptsv2paymentsidcapturesBuyerInformation,
    /**
     * The Ptsv2paymentsidcapturesDeviceInformation model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesDeviceInformation}
     */
    Ptsv2paymentsidcapturesDeviceInformation: Ptsv2paymentsidcapturesDeviceInformation,
    /**
     * The Ptsv2paymentsidcapturesInstallmentInformation model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesInstallmentInformation}
     */
    Ptsv2paymentsidcapturesInstallmentInformation: Ptsv2paymentsidcapturesInstallmentInformation,
    /**
     * The Ptsv2paymentsidcapturesMerchantInformation model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesMerchantInformation}
     */
    Ptsv2paymentsidcapturesMerchantInformation: Ptsv2paymentsidcapturesMerchantInformation,
    /**
     * The Ptsv2paymentsidcapturesOrderInformation model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesOrderInformation}
     */
    Ptsv2paymentsidcapturesOrderInformation: Ptsv2paymentsidcapturesOrderInformation,
    /**
     * The Ptsv2paymentsidcapturesOrderInformationAmountDetails model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesOrderInformationAmountDetails}
     */
    Ptsv2paymentsidcapturesOrderInformationAmountDetails: Ptsv2paymentsidcapturesOrderInformationAmountDetails,
    /**
     * The Ptsv2paymentsidcapturesOrderInformationBillTo model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesOrderInformationBillTo}
     */
    Ptsv2paymentsidcapturesOrderInformationBillTo: Ptsv2paymentsidcapturesOrderInformationBillTo,
    /**
     * The Ptsv2paymentsidcapturesOrderInformationInvoiceDetails model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesOrderInformationInvoiceDetails}
     */
    Ptsv2paymentsidcapturesOrderInformationInvoiceDetails: Ptsv2paymentsidcapturesOrderInformationInvoiceDetails,
    /**
     * The Ptsv2paymentsidcapturesOrderInformationShipTo model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesOrderInformationShipTo}
     */
    Ptsv2paymentsidcapturesOrderInformationShipTo: Ptsv2paymentsidcapturesOrderInformationShipTo,
    /**
     * The Ptsv2paymentsidcapturesOrderInformationShippingDetails model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesOrderInformationShippingDetails}
     */
    Ptsv2paymentsidcapturesOrderInformationShippingDetails: Ptsv2paymentsidcapturesOrderInformationShippingDetails,
    /**
     * The Ptsv2paymentsidcapturesPaymentInformation model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesPaymentInformation}
     */
    Ptsv2paymentsidcapturesPaymentInformation: Ptsv2paymentsidcapturesPaymentInformation,
    /**
     * The Ptsv2paymentsidcapturesPaymentInformationCard model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesPaymentInformationCard}
     */
    Ptsv2paymentsidcapturesPaymentInformationCard: Ptsv2paymentsidcapturesPaymentInformationCard,
    /**
     * The Ptsv2paymentsidcapturesPointOfSaleInformation model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesPointOfSaleInformation}
     */
    Ptsv2paymentsidcapturesPointOfSaleInformation: Ptsv2paymentsidcapturesPointOfSaleInformation,
    /**
     * The Ptsv2paymentsidcapturesPointOfSaleInformationEmv model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesPointOfSaleInformationEmv}
     */
    Ptsv2paymentsidcapturesPointOfSaleInformationEmv: Ptsv2paymentsidcapturesPointOfSaleInformationEmv,
    /**
     * The Ptsv2paymentsidcapturesProcessingInformation model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesProcessingInformation}
     */
    Ptsv2paymentsidcapturesProcessingInformation: Ptsv2paymentsidcapturesProcessingInformation,
    /**
     * The Ptsv2paymentsidcapturesProcessingInformationAuthorizationOptions model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesProcessingInformationAuthorizationOptions}
     */
    Ptsv2paymentsidcapturesProcessingInformationAuthorizationOptions: Ptsv2paymentsidcapturesProcessingInformationAuthorizationOptions,
    /**
     * The Ptsv2paymentsidcapturesProcessingInformationCaptureOptions model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesProcessingInformationCaptureOptions}
     */
    Ptsv2paymentsidcapturesProcessingInformationCaptureOptions: Ptsv2paymentsidcapturesProcessingInformationCaptureOptions,
    /**
     * The Ptsv2paymentsidcapturesTravelInformation model constructor.
     * @property {module:model/Ptsv2paymentsidcapturesTravelInformation}
     */
    Ptsv2paymentsidcapturesTravelInformation: Ptsv2paymentsidcapturesTravelInformation,
    /**
     * The Ptsv2paymentsidrefundsMerchantInformation model constructor.
     * @property {module:model/Ptsv2paymentsidrefundsMerchantInformation}
     */
    Ptsv2paymentsidrefundsMerchantInformation: Ptsv2paymentsidrefundsMerchantInformation,
    /**
     * The Ptsv2paymentsidrefundsOrderInformation model constructor.
     * @property {module:model/Ptsv2paymentsidrefundsOrderInformation}
     */
    Ptsv2paymentsidrefundsOrderInformation: Ptsv2paymentsidrefundsOrderInformation,
    /**
     * The Ptsv2paymentsidrefundsOrderInformationLineItems model constructor.
     * @property {module:model/Ptsv2paymentsidrefundsOrderInformationLineItems}
     */
    Ptsv2paymentsidrefundsOrderInformationLineItems: Ptsv2paymentsidrefundsOrderInformationLineItems,
    /**
     * The Ptsv2paymentsidrefundsPaymentInformation model constructor.
     * @property {module:model/Ptsv2paymentsidrefundsPaymentInformation}
     */
    Ptsv2paymentsidrefundsPaymentInformation: Ptsv2paymentsidrefundsPaymentInformation,
    /**
     * The Ptsv2paymentsidrefundsPaymentInformationCard model constructor.
     * @property {module:model/Ptsv2paymentsidrefundsPaymentInformationCard}
     */
    Ptsv2paymentsidrefundsPaymentInformationCard: Ptsv2paymentsidrefundsPaymentInformationCard,
    /**
     * The Ptsv2paymentsidrefundsPaymentInformationPaymentType model constructor.
     * @property {module:model/Ptsv2paymentsidrefundsPaymentInformationPaymentType}
     */
    Ptsv2paymentsidrefundsPaymentInformationPaymentType: Ptsv2paymentsidrefundsPaymentInformationPaymentType,
    /**
     * The Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod model constructor.
     * @property {module:model/Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod}
     */
    Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod: Ptsv2paymentsidrefundsPaymentInformationPaymentTypeMethod,
    /**
     * The Ptsv2paymentsidrefundsPointOfSaleInformation model constructor.
     * @property {module:model/Ptsv2paymentsidrefundsPointOfSaleInformation}
     */
    Ptsv2paymentsidrefundsPointOfSaleInformation: Ptsv2paymentsidrefundsPointOfSaleInformation,
    /**
     * The Ptsv2paymentsidrefundsProcessingInformation model constructor.
     * @property {module:model/Ptsv2paymentsidrefundsProcessingInformation}
     */
    Ptsv2paymentsidrefundsProcessingInformation: Ptsv2paymentsidrefundsProcessingInformation,
    /**
     * The Ptsv2paymentsidrefundsProcessingInformationRecurringOptions model constructor.
     * @property {module:model/Ptsv2paymentsidrefundsProcessingInformationRecurringOptions}
     */
    Ptsv2paymentsidrefundsProcessingInformationRecurringOptions: Ptsv2paymentsidrefundsProcessingInformationRecurringOptions,
    /**
     * The Ptsv2paymentsidreversalsClientReferenceInformation model constructor.
     * @property {module:model/Ptsv2paymentsidreversalsClientReferenceInformation}
     */
    Ptsv2paymentsidreversalsClientReferenceInformation: Ptsv2paymentsidreversalsClientReferenceInformation,
    /**
     * The Ptsv2paymentsidreversalsClientReferenceInformationPartner model constructor.
     * @property {module:model/Ptsv2paymentsidreversalsClientReferenceInformationPartner}
     */
    Ptsv2paymentsidreversalsClientReferenceInformationPartner: Ptsv2paymentsidreversalsClientReferenceInformationPartner,
    /**
     * The Ptsv2paymentsidreversalsOrderInformation model constructor.
     * @property {module:model/Ptsv2paymentsidreversalsOrderInformation}
     */
    Ptsv2paymentsidreversalsOrderInformation: Ptsv2paymentsidreversalsOrderInformation,
    /**
     * The Ptsv2paymentsidreversalsOrderInformationAmountDetails model constructor.
     * @property {module:model/Ptsv2paymentsidreversalsOrderInformationAmountDetails}
     */
    Ptsv2paymentsidreversalsOrderInformationAmountDetails: Ptsv2paymentsidreversalsOrderInformationAmountDetails,
    /**
     * The Ptsv2paymentsidreversalsOrderInformationLineItems model constructor.
     * @property {module:model/Ptsv2paymentsidreversalsOrderInformationLineItems}
     */
    Ptsv2paymentsidreversalsOrderInformationLineItems: Ptsv2paymentsidreversalsOrderInformationLineItems,
    /**
     * The Ptsv2paymentsidreversalsPointOfSaleInformation model constructor.
     * @property {module:model/Ptsv2paymentsidreversalsPointOfSaleInformation}
     */
    Ptsv2paymentsidreversalsPointOfSaleInformation: Ptsv2paymentsidreversalsPointOfSaleInformation,
    /**
     * The Ptsv2paymentsidreversalsPointOfSaleInformationEmv model constructor.
     * @property {module:model/Ptsv2paymentsidreversalsPointOfSaleInformationEmv}
     */
    Ptsv2paymentsidreversalsPointOfSaleInformationEmv: Ptsv2paymentsidreversalsPointOfSaleInformationEmv,
    /**
     * The Ptsv2paymentsidreversalsProcessingInformation model constructor.
     * @property {module:model/Ptsv2paymentsidreversalsProcessingInformation}
     */
    Ptsv2paymentsidreversalsProcessingInformation: Ptsv2paymentsidreversalsProcessingInformation,
    /**
     * The Ptsv2paymentsidreversalsReversalInformation model constructor.
     * @property {module:model/Ptsv2paymentsidreversalsReversalInformation}
     */
    Ptsv2paymentsidreversalsReversalInformation: Ptsv2paymentsidreversalsReversalInformation,
    /**
     * The Ptsv2paymentsidreversalsReversalInformationAmountDetails model constructor.
     * @property {module:model/Ptsv2paymentsidreversalsReversalInformationAmountDetails}
     */
    Ptsv2paymentsidreversalsReversalInformationAmountDetails: Ptsv2paymentsidreversalsReversalInformationAmountDetails,
    /**
     * The Ptsv2paymentsidvoidsPaymentInformation model constructor.
     * @property {module:model/Ptsv2paymentsidvoidsPaymentInformation}
     */
    Ptsv2paymentsidvoidsPaymentInformation: Ptsv2paymentsidvoidsPaymentInformation,
    /**
     * The Ptsv2payoutsClientReferenceInformation model constructor.
     * @property {module:model/Ptsv2payoutsClientReferenceInformation}
     */
    Ptsv2payoutsClientReferenceInformation: Ptsv2payoutsClientReferenceInformation,
    /**
     * The Ptsv2payoutsMerchantInformation model constructor.
     * @property {module:model/Ptsv2payoutsMerchantInformation}
     */
    Ptsv2payoutsMerchantInformation: Ptsv2payoutsMerchantInformation,
    /**
     * The Ptsv2payoutsMerchantInformationMerchantDescriptor model constructor.
     * @property {module:model/Ptsv2payoutsMerchantInformationMerchantDescriptor}
     */
    Ptsv2payoutsMerchantInformationMerchantDescriptor: Ptsv2payoutsMerchantInformationMerchantDescriptor,
    /**
     * The Ptsv2payoutsOrderInformation model constructor.
     * @property {module:model/Ptsv2payoutsOrderInformation}
     */
    Ptsv2payoutsOrderInformation: Ptsv2payoutsOrderInformation,
    /**
     * The Ptsv2payoutsOrderInformationAmountDetails model constructor.
     * @property {module:model/Ptsv2payoutsOrderInformationAmountDetails}
     */
    Ptsv2payoutsOrderInformationAmountDetails: Ptsv2payoutsOrderInformationAmountDetails,
    /**
     * The Ptsv2payoutsOrderInformationAmountDetailsSurcharge model constructor.
     * @property {module:model/Ptsv2payoutsOrderInformationAmountDetailsSurcharge}
     */
    Ptsv2payoutsOrderInformationAmountDetailsSurcharge: Ptsv2payoutsOrderInformationAmountDetailsSurcharge,
    /**
     * The Ptsv2payoutsOrderInformationBillTo model constructor.
     * @property {module:model/Ptsv2payoutsOrderInformationBillTo}
     */
    Ptsv2payoutsOrderInformationBillTo: Ptsv2payoutsOrderInformationBillTo,
    /**
     * The Ptsv2payoutsPaymentInformation model constructor.
     * @property {module:model/Ptsv2payoutsPaymentInformation}
     */
    Ptsv2payoutsPaymentInformation: Ptsv2payoutsPaymentInformation,
    /**
     * The Ptsv2payoutsPaymentInformationCard model constructor.
     * @property {module:model/Ptsv2payoutsPaymentInformationCard}
     */
    Ptsv2payoutsPaymentInformationCard: Ptsv2payoutsPaymentInformationCard,
    /**
     * The Ptsv2payoutsProcessingInformation model constructor.
     * @property {module:model/Ptsv2payoutsProcessingInformation}
     */
    Ptsv2payoutsProcessingInformation: Ptsv2payoutsProcessingInformation,
    /**
     * The Ptsv2payoutsProcessingInformationPayoutsOptions model constructor.
     * @property {module:model/Ptsv2payoutsProcessingInformationPayoutsOptions}
     */
    Ptsv2payoutsProcessingInformationPayoutsOptions: Ptsv2payoutsProcessingInformationPayoutsOptions,
    /**
     * The Ptsv2payoutsRecipientInformation model constructor.
     * @property {module:model/Ptsv2payoutsRecipientInformation}
     */
    Ptsv2payoutsRecipientInformation: Ptsv2payoutsRecipientInformation,
    /**
     * The Ptsv2payoutsSenderInformation model constructor.
     * @property {module:model/Ptsv2payoutsSenderInformation}
     */
    Ptsv2payoutsSenderInformation: Ptsv2payoutsSenderInformation,
    /**
     * The Ptsv2payoutsSenderInformationAccount model constructor.
     * @property {module:model/Ptsv2payoutsSenderInformationAccount}
     */
    Ptsv2payoutsSenderInformationAccount: Ptsv2payoutsSenderInformationAccount,
    /**
     * The RefundCaptureRequest model constructor.
     * @property {module:model/RefundCaptureRequest}
     */
    RefundCaptureRequest: RefundCaptureRequest,
    /**
     * The RefundPaymentRequest model constructor.
     * @property {module:model/RefundPaymentRequest}
     */
    RefundPaymentRequest: RefundPaymentRequest,
    /**
     * The ReportingV3ConversionDetailsGet200Response model constructor.
     * @property {module:model/ReportingV3ConversionDetailsGet200Response}
     */
    ReportingV3ConversionDetailsGet200Response: ReportingV3ConversionDetailsGet200Response,
    /**
     * The ReportingV3ConversionDetailsGet200ResponseConversionDetails model constructor.
     * @property {module:model/ReportingV3ConversionDetailsGet200ResponseConversionDetails}
     */
    ReportingV3ConversionDetailsGet200ResponseConversionDetails: ReportingV3ConversionDetailsGet200ResponseConversionDetails,
    /**
     * The ReportingV3ConversionDetailsGet200ResponseNotes model constructor.
     * @property {module:model/ReportingV3ConversionDetailsGet200ResponseNotes}
     */
    ReportingV3ConversionDetailsGet200ResponseNotes: ReportingV3ConversionDetailsGet200ResponseNotes,
    /**
     * The ReportingV3NetFundingsGet200Response model constructor.
     * @property {module:model/ReportingV3NetFundingsGet200Response}
     */
    ReportingV3NetFundingsGet200Response: ReportingV3NetFundingsGet200Response,
    /**
     * The ReportingV3NetFundingsGet200ResponseNetFundingSummaries model constructor.
     * @property {module:model/ReportingV3NetFundingsGet200ResponseNetFundingSummaries}
     */
    ReportingV3NetFundingsGet200ResponseNetFundingSummaries: ReportingV3NetFundingsGet200ResponseNetFundingSummaries,
    /**
     * The ReportingV3NetFundingsGet200ResponseTotalPurchases model constructor.
     * @property {module:model/ReportingV3NetFundingsGet200ResponseTotalPurchases}
     */
    ReportingV3NetFundingsGet200ResponseTotalPurchases: ReportingV3NetFundingsGet200ResponseTotalPurchases,
    /**
     * The ReportingV3NotificationofChangesGet200Response model constructor.
     * @property {module:model/ReportingV3NotificationofChangesGet200Response}
     */
    ReportingV3NotificationofChangesGet200Response: ReportingV3NotificationofChangesGet200Response,
    /**
     * The ReportingV3NotificationofChangesGet200ResponseNotificationOfChanges model constructor.
     * @property {module:model/ReportingV3NotificationofChangesGet200ResponseNotificationOfChanges}
     */
    ReportingV3NotificationofChangesGet200ResponseNotificationOfChanges: ReportingV3NotificationofChangesGet200ResponseNotificationOfChanges,
    /**
     * The ReportingV3PaymentBatchSummariesGet200Response model constructor.
     * @property {module:model/ReportingV3PaymentBatchSummariesGet200Response}
     */
    ReportingV3PaymentBatchSummariesGet200Response: ReportingV3PaymentBatchSummariesGet200Response,
    /**
     * The ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries model constructor.
     * @property {module:model/ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries}
     */
    ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries: ReportingV3PaymentBatchSummariesGet200ResponsePaymentBatchSummaries,
    /**
     * The ReportingV3PurchaseRefundDetailsGet200Response model constructor.
     * @property {module:model/ReportingV3PurchaseRefundDetailsGet200Response}
     */
    ReportingV3PurchaseRefundDetailsGet200Response: ReportingV3PurchaseRefundDetailsGet200Response,
    /**
     * The ReportingV3PurchaseRefundDetailsGet200ResponseAuthorizations model constructor.
     * @property {module:model/ReportingV3PurchaseRefundDetailsGet200ResponseAuthorizations}
     */
    ReportingV3PurchaseRefundDetailsGet200ResponseAuthorizations: ReportingV3PurchaseRefundDetailsGet200ResponseAuthorizations,
    /**
     * The ReportingV3PurchaseRefundDetailsGet200ResponseFeeAndFundingDetails model constructor.
     * @property {module:model/ReportingV3PurchaseRefundDetailsGet200ResponseFeeAndFundingDetails}
     */
    ReportingV3PurchaseRefundDetailsGet200ResponseFeeAndFundingDetails: ReportingV3PurchaseRefundDetailsGet200ResponseFeeAndFundingDetails,
    /**
     * The ReportingV3PurchaseRefundDetailsGet200ResponseOthers model constructor.
     * @property {module:model/ReportingV3PurchaseRefundDetailsGet200ResponseOthers}
     */
    ReportingV3PurchaseRefundDetailsGet200ResponseOthers: ReportingV3PurchaseRefundDetailsGet200ResponseOthers,
    /**
     * The ReportingV3PurchaseRefundDetailsGet200ResponseRequestDetails model constructor.
     * @property {module:model/ReportingV3PurchaseRefundDetailsGet200ResponseRequestDetails}
     */
    ReportingV3PurchaseRefundDetailsGet200ResponseRequestDetails: ReportingV3PurchaseRefundDetailsGet200ResponseRequestDetails,
    /**
     * The ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses model constructor.
     * @property {module:model/ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses}
     */
    ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses: ReportingV3PurchaseRefundDetailsGet200ResponseSettlementStatuses,
    /**
     * The ReportingV3PurchaseRefundDetailsGet200ResponseSettlements model constructor.
     * @property {module:model/ReportingV3PurchaseRefundDetailsGet200ResponseSettlements}
     */
    ReportingV3PurchaseRefundDetailsGet200ResponseSettlements: ReportingV3PurchaseRefundDetailsGet200ResponseSettlements,
    /**
     * The ReportingV3ReportDefinitionsGet200Response model constructor.
     * @property {module:model/ReportingV3ReportDefinitionsGet200Response}
     */
    ReportingV3ReportDefinitionsGet200Response: ReportingV3ReportDefinitionsGet200Response,
    /**
     * The ReportingV3ReportDefinitionsGet200ResponseReportDefinitions model constructor.
     * @property {module:model/ReportingV3ReportDefinitionsGet200ResponseReportDefinitions}
     */
    ReportingV3ReportDefinitionsGet200ResponseReportDefinitions: ReportingV3ReportDefinitionsGet200ResponseReportDefinitions,
    /**
     * The ReportingV3ReportDefinitionsNameGet200Response model constructor.
     * @property {module:model/ReportingV3ReportDefinitionsNameGet200Response}
     */
    ReportingV3ReportDefinitionsNameGet200Response: ReportingV3ReportDefinitionsNameGet200Response,
    /**
     * The ReportingV3ReportDefinitionsNameGet200ResponseAttributes model constructor.
     * @property {module:model/ReportingV3ReportDefinitionsNameGet200ResponseAttributes}
     */
    ReportingV3ReportDefinitionsNameGet200ResponseAttributes: ReportingV3ReportDefinitionsNameGet200ResponseAttributes,
    /**
     * The ReportingV3ReportDefinitionsNameGet200ResponseDefaultSettings model constructor.
     * @property {module:model/ReportingV3ReportDefinitionsNameGet200ResponseDefaultSettings}
     */
    ReportingV3ReportDefinitionsNameGet200ResponseDefaultSettings: ReportingV3ReportDefinitionsNameGet200ResponseDefaultSettings,
    /**
     * The ReportingV3ReportSubscriptionsGet200Response model constructor.
     * @property {module:model/ReportingV3ReportSubscriptionsGet200Response}
     */
    ReportingV3ReportSubscriptionsGet200Response: ReportingV3ReportSubscriptionsGet200Response,
    /**
     * The ReportingV3ReportSubscriptionsGet200ResponseSubscriptions model constructor.
     * @property {module:model/ReportingV3ReportSubscriptionsGet200ResponseSubscriptions}
     */
    ReportingV3ReportSubscriptionsGet200ResponseSubscriptions: ReportingV3ReportSubscriptionsGet200ResponseSubscriptions,
    /**
     * The ReportingV3ReportsGet200Response model constructor.
     * @property {module:model/ReportingV3ReportsGet200Response}
     */
    ReportingV3ReportsGet200Response: ReportingV3ReportsGet200Response,
    /**
     * The ReportingV3ReportsGet200ResponseLink model constructor.
     * @property {module:model/ReportingV3ReportsGet200ResponseLink}
     */
    ReportingV3ReportsGet200ResponseLink: ReportingV3ReportsGet200ResponseLink,
    /**
     * The ReportingV3ReportsGet200ResponseLinkReportDownload model constructor.
     * @property {module:model/ReportingV3ReportsGet200ResponseLinkReportDownload}
     */
    ReportingV3ReportsGet200ResponseLinkReportDownload: ReportingV3ReportsGet200ResponseLinkReportDownload,
    /**
     * The ReportingV3ReportsGet200ResponseReportSearchResults model constructor.
     * @property {module:model/ReportingV3ReportsGet200ResponseReportSearchResults}
     */
    ReportingV3ReportsGet200ResponseReportSearchResults: ReportingV3ReportsGet200ResponseReportSearchResults,
    /**
     * The ReportingV3ReportsIdGet200Response model constructor.
     * @property {module:model/ReportingV3ReportsIdGet200Response}
     */
    ReportingV3ReportsIdGet200Response: ReportingV3ReportsIdGet200Response,
    /**
     * The Reportingv3ReportDownloadsGet400Response model constructor.
     * @property {module:model/Reportingv3ReportDownloadsGet400Response}
     */
    Reportingv3ReportDownloadsGet400Response: Reportingv3ReportDownloadsGet400Response,
    /**
     * The Reportingv3ReportDownloadsGet400ResponseDetails model constructor.
     * @property {module:model/Reportingv3ReportDownloadsGet400ResponseDetails}
     */
    Reportingv3ReportDownloadsGet400ResponseDetails: Reportingv3ReportDownloadsGet400ResponseDetails,
    /**
     * The Reportingv3reportsReportPreferences model constructor.
     * @property {module:model/Reportingv3reportsReportPreferences}
     */
    Reportingv3reportsReportPreferences: Reportingv3reportsReportPreferences,
    /**
     * The ResponseStatus model constructor.
     * @property {module:model/ResponseStatus}
     */
    ResponseStatus: ResponseStatus,
    /**
     * The ResponseStatusDetails model constructor.
     * @property {module:model/ResponseStatusDetails}
     */
    ResponseStatusDetails: ResponseStatusDetails,
    /**
     * The RiskV1AddressVerificationsPost201Response model constructor.
     * @property {module:model/RiskV1AddressVerificationsPost201Response}
     */
    RiskV1AddressVerificationsPost201Response: RiskV1AddressVerificationsPost201Response,
    /**
     * The RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation model constructor.
     * @property {module:model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation}
     */
    RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation: RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation,
    /**
     * The RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationBarCode model constructor.
     * @property {module:model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationBarCode}
     */
    RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationBarCode: RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationBarCode,
    /**
     * The RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddress model constructor.
     * @property {module:model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddress}
     */
    RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddress: RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddress,
    /**
     * The RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddressAddress1 model constructor.
     * @property {module:model/RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddressAddress1}
     */
    RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddressAddress1: RiskV1AddressVerificationsPost201ResponseAddressVerificationInformationStandardAddressAddress1,
    /**
     * The RiskV1AuthenticationResultsPost201Response model constructor.
     * @property {module:model/RiskV1AuthenticationResultsPost201Response}
     */
    RiskV1AuthenticationResultsPost201Response: RiskV1AuthenticationResultsPost201Response,
    /**
     * The RiskV1AuthenticationResultsPost201ResponseConsumerAuthenticationInformation model constructor.
     * @property {module:model/RiskV1AuthenticationResultsPost201ResponseConsumerAuthenticationInformation}
     */
    RiskV1AuthenticationResultsPost201ResponseConsumerAuthenticationInformation: RiskV1AuthenticationResultsPost201ResponseConsumerAuthenticationInformation,
    /**
     * The RiskV1AuthenticationsPost201Response model constructor.
     * @property {module:model/RiskV1AuthenticationsPost201Response}
     */
    RiskV1AuthenticationsPost201Response: RiskV1AuthenticationsPost201Response,
    /**
     * The RiskV1AuthenticationsPost201ResponseConsumerAuthenticationInformation model constructor.
     * @property {module:model/RiskV1AuthenticationsPost201ResponseConsumerAuthenticationInformation}
     */
    RiskV1AuthenticationsPost201ResponseConsumerAuthenticationInformation: RiskV1AuthenticationsPost201ResponseConsumerAuthenticationInformation,
    /**
     * The RiskV1AuthenticationsPost201ResponseOrderInformation model constructor.
     * @property {module:model/RiskV1AuthenticationsPost201ResponseOrderInformation}
     */
    RiskV1AuthenticationsPost201ResponseOrderInformation: RiskV1AuthenticationsPost201ResponseOrderInformation,
    /**
     * The RiskV1AuthenticationsPost201ResponseOrderInformationAmountDetails model constructor.
     * @property {module:model/RiskV1AuthenticationsPost201ResponseOrderInformationAmountDetails}
     */
    RiskV1AuthenticationsPost201ResponseOrderInformationAmountDetails: RiskV1AuthenticationsPost201ResponseOrderInformationAmountDetails,
    /**
     * The RiskV1AuthenticationsPost400Response model constructor.
     * @property {module:model/RiskV1AuthenticationsPost400Response}
     */
    RiskV1AuthenticationsPost400Response: RiskV1AuthenticationsPost400Response,
    /**
     * The RiskV1DecisionsPost201Response model constructor.
     * @property {module:model/RiskV1DecisionsPost201Response}
     */
    RiskV1DecisionsPost201Response: RiskV1DecisionsPost201Response,
    /**
     * The RiskV1DecisionsPost201ResponsePaymentInformation model constructor.
     * @property {module:model/RiskV1DecisionsPost201ResponsePaymentInformation}
     */
    RiskV1DecisionsPost201ResponsePaymentInformation: RiskV1DecisionsPost201ResponsePaymentInformation,
    /**
     * The RiskV1DecisionsPost400Response model constructor.
     * @property {module:model/RiskV1DecisionsPost400Response}
     */
    RiskV1DecisionsPost400Response: RiskV1DecisionsPost400Response,
    /**
     * The RiskV1ExportComplianceInquiriesPost201Response model constructor.
     * @property {module:model/RiskV1ExportComplianceInquiriesPost201Response}
     */
    RiskV1ExportComplianceInquiriesPost201Response: RiskV1ExportComplianceInquiriesPost201Response,
    /**
     * The RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformation model constructor.
     * @property {module:model/RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformation}
     */
    RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformation: RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformation,
    /**
     * The RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformationWatchList model constructor.
     * @property {module:model/RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformationWatchList}
     */
    RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformationWatchList: RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformationWatchList,
    /**
     * The RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformationWatchListMatches model constructor.
     * @property {module:model/RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformationWatchListMatches}
     */
    RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformationWatchListMatches: RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformationWatchListMatches,
    /**
     * The RiskV1UpdatePost201Response model constructor.
     * @property {module:model/RiskV1UpdatePost201Response}
     */
    RiskV1UpdatePost201Response: RiskV1UpdatePost201Response,
    /**
     * The Riskv1addressverificationsBuyerInformation model constructor.
     * @property {module:model/Riskv1addressverificationsBuyerInformation}
     */
    Riskv1addressverificationsBuyerInformation: Riskv1addressverificationsBuyerInformation,
    /**
     * The Riskv1addressverificationsClientReferenceInformation model constructor.
     * @property {module:model/Riskv1addressverificationsClientReferenceInformation}
     */
    Riskv1addressverificationsClientReferenceInformation: Riskv1addressverificationsClientReferenceInformation,
    /**
     * The Riskv1addressverificationsOrderInformation model constructor.
     * @property {module:model/Riskv1addressverificationsOrderInformation}
     */
    Riskv1addressverificationsOrderInformation: Riskv1addressverificationsOrderInformation,
    /**
     * The Riskv1addressverificationsOrderInformationBillTo model constructor.
     * @property {module:model/Riskv1addressverificationsOrderInformationBillTo}
     */
    Riskv1addressverificationsOrderInformationBillTo: Riskv1addressverificationsOrderInformationBillTo,
    /**
     * The Riskv1addressverificationsOrderInformationLineItems model constructor.
     * @property {module:model/Riskv1addressverificationsOrderInformationLineItems}
     */
    Riskv1addressverificationsOrderInformationLineItems: Riskv1addressverificationsOrderInformationLineItems,
    /**
     * The Riskv1addressverificationsOrderInformationShipTo model constructor.
     * @property {module:model/Riskv1addressverificationsOrderInformationShipTo}
     */
    Riskv1addressverificationsOrderInformationShipTo: Riskv1addressverificationsOrderInformationShipTo,
    /**
     * The Riskv1authenticationresultsConsumerAuthenticationInformation model constructor.
     * @property {module:model/Riskv1authenticationresultsConsumerAuthenticationInformation}
     */
    Riskv1authenticationresultsConsumerAuthenticationInformation: Riskv1authenticationresultsConsumerAuthenticationInformation,
    /**
     * The Riskv1authenticationresultsOrderInformation model constructor.
     * @property {module:model/Riskv1authenticationresultsOrderInformation}
     */
    Riskv1authenticationresultsOrderInformation: Riskv1authenticationresultsOrderInformation,
    /**
     * The Riskv1authenticationresultsOrderInformationLineItems model constructor.
     * @property {module:model/Riskv1authenticationresultsOrderInformationLineItems}
     */
    Riskv1authenticationresultsOrderInformationLineItems: Riskv1authenticationresultsOrderInformationLineItems,
    /**
     * The Riskv1authenticationresultsPaymentInformation model constructor.
     * @property {module:model/Riskv1authenticationresultsPaymentInformation}
     */
    Riskv1authenticationresultsPaymentInformation: Riskv1authenticationresultsPaymentInformation,
    /**
     * The Riskv1authenticationresultsPaymentInformationCard model constructor.
     * @property {module:model/Riskv1authenticationresultsPaymentInformationCard}
     */
    Riskv1authenticationresultsPaymentInformationCard: Riskv1authenticationresultsPaymentInformationCard,
    /**
     * The Riskv1authenticationresultsPaymentInformationTokenizedCard model constructor.
     * @property {module:model/Riskv1authenticationresultsPaymentInformationTokenizedCard}
     */
    Riskv1authenticationresultsPaymentInformationTokenizedCard: Riskv1authenticationresultsPaymentInformationTokenizedCard,
    /**
     * The Riskv1authenticationsBuyerInformation model constructor.
     * @property {module:model/Riskv1authenticationsBuyerInformation}
     */
    Riskv1authenticationsBuyerInformation: Riskv1authenticationsBuyerInformation,
    /**
     * The Riskv1authenticationsClientReferenceInformation model constructor.
     * @property {module:model/Riskv1authenticationsClientReferenceInformation}
     */
    Riskv1authenticationsClientReferenceInformation: Riskv1authenticationsClientReferenceInformation,
    /**
     * The Riskv1authenticationsConsumerAuthenticationInformation model constructor.
     * @property {module:model/Riskv1authenticationsConsumerAuthenticationInformation}
     */
    Riskv1authenticationsConsumerAuthenticationInformation: Riskv1authenticationsConsumerAuthenticationInformation,
    /**
     * The Riskv1authenticationsConsumerAuthenticationInformationStrongAuthentication model constructor.
     * @property {module:model/Riskv1authenticationsConsumerAuthenticationInformationStrongAuthentication}
     */
    Riskv1authenticationsConsumerAuthenticationInformationStrongAuthentication: Riskv1authenticationsConsumerAuthenticationInformationStrongAuthentication,
    /**
     * The Riskv1authenticationsDeviceInformation model constructor.
     * @property {module:model/Riskv1authenticationsDeviceInformation}
     */
    Riskv1authenticationsDeviceInformation: Riskv1authenticationsDeviceInformation,
    /**
     * The Riskv1authenticationsMerchantInformation model constructor.
     * @property {module:model/Riskv1authenticationsMerchantInformation}
     */
    Riskv1authenticationsMerchantInformation: Riskv1authenticationsMerchantInformation,
    /**
     * The Riskv1authenticationsMerchantInformationMerchantDescriptor model constructor.
     * @property {module:model/Riskv1authenticationsMerchantInformationMerchantDescriptor}
     */
    Riskv1authenticationsMerchantInformationMerchantDescriptor: Riskv1authenticationsMerchantInformationMerchantDescriptor,
    /**
     * The Riskv1authenticationsOrderInformation model constructor.
     * @property {module:model/Riskv1authenticationsOrderInformation}
     */
    Riskv1authenticationsOrderInformation: Riskv1authenticationsOrderInformation,
    /**
     * The Riskv1authenticationsOrderInformationAmountDetails model constructor.
     * @property {module:model/Riskv1authenticationsOrderInformationAmountDetails}
     */
    Riskv1authenticationsOrderInformationAmountDetails: Riskv1authenticationsOrderInformationAmountDetails,
    /**
     * The Riskv1authenticationsOrderInformationBillTo model constructor.
     * @property {module:model/Riskv1authenticationsOrderInformationBillTo}
     */
    Riskv1authenticationsOrderInformationBillTo: Riskv1authenticationsOrderInformationBillTo,
    /**
     * The Riskv1authenticationsOrderInformationLineItems model constructor.
     * @property {module:model/Riskv1authenticationsOrderInformationLineItems}
     */
    Riskv1authenticationsOrderInformationLineItems: Riskv1authenticationsOrderInformationLineItems,
    /**
     * The Riskv1authenticationsOrderInformationShipTo model constructor.
     * @property {module:model/Riskv1authenticationsOrderInformationShipTo}
     */
    Riskv1authenticationsOrderInformationShipTo: Riskv1authenticationsOrderInformationShipTo,
    /**
     * The Riskv1authenticationsPaymentInformation model constructor.
     * @property {module:model/Riskv1authenticationsPaymentInformation}
     */
    Riskv1authenticationsPaymentInformation: Riskv1authenticationsPaymentInformation,
    /**
     * The Riskv1authenticationsPaymentInformationCard model constructor.
     * @property {module:model/Riskv1authenticationsPaymentInformationCard}
     */
    Riskv1authenticationsPaymentInformationCard: Riskv1authenticationsPaymentInformationCard,
    /**
     * The Riskv1authenticationsPaymentInformationFluidData model constructor.
     * @property {module:model/Riskv1authenticationsPaymentInformationFluidData}
     */
    Riskv1authenticationsPaymentInformationFluidData: Riskv1authenticationsPaymentInformationFluidData,
    /**
     * The Riskv1authenticationsPaymentInformationTokenizedCard model constructor.
     * @property {module:model/Riskv1authenticationsPaymentInformationTokenizedCard}
     */
    Riskv1authenticationsPaymentInformationTokenizedCard: Riskv1authenticationsPaymentInformationTokenizedCard,
    /**
     * The Riskv1authenticationsProcessingInformation model constructor.
     * @property {module:model/Riskv1authenticationsProcessingInformation}
     */
    Riskv1authenticationsProcessingInformation: Riskv1authenticationsProcessingInformation,
    /**
     * The Riskv1authenticationsRiskInformation model constructor.
     * @property {module:model/Riskv1authenticationsRiskInformation}
     */
    Riskv1authenticationsRiskInformation: Riskv1authenticationsRiskInformation,
    /**
     * The Riskv1authenticationsTravelInformation model constructor.
     * @property {module:model/Riskv1authenticationsTravelInformation}
     */
    Riskv1authenticationsTravelInformation: Riskv1authenticationsTravelInformation,
    /**
     * The Riskv1authenticationsTravelInformationLegs model constructor.
     * @property {module:model/Riskv1authenticationsTravelInformationLegs}
     */
    Riskv1authenticationsTravelInformationLegs: Riskv1authenticationsTravelInformationLegs,
    /**
     * The Riskv1authenticationsTravelInformationPassengers model constructor.
     * @property {module:model/Riskv1authenticationsTravelInformationPassengers}
     */
    Riskv1authenticationsTravelInformationPassengers: Riskv1authenticationsTravelInformationPassengers,
    /**
     * The Riskv1decisionsBuyerInformation model constructor.
     * @property {module:model/Riskv1decisionsBuyerInformation}
     */
    Riskv1decisionsBuyerInformation: Riskv1decisionsBuyerInformation,
    /**
     * The Riskv1decisionsCardVerification model constructor.
     * @property {module:model/Riskv1decisionsCardVerification}
     */
    Riskv1decisionsCardVerification: Riskv1decisionsCardVerification,
    /**
     * The Riskv1decisionsClientReferenceInformation model constructor.
     * @property {module:model/Riskv1decisionsClientReferenceInformation}
     */
    Riskv1decisionsClientReferenceInformation: Riskv1decisionsClientReferenceInformation,
    /**
     * The Riskv1decisionsDeviceInformation model constructor.
     * @property {module:model/Riskv1decisionsDeviceInformation}
     */
    Riskv1decisionsDeviceInformation: Riskv1decisionsDeviceInformation,
    /**
     * The Riskv1decisionsMerchantDefinedInformation model constructor.
     * @property {module:model/Riskv1decisionsMerchantDefinedInformation}
     */
    Riskv1decisionsMerchantDefinedInformation: Riskv1decisionsMerchantDefinedInformation,
    /**
     * The Riskv1decisionsOrderInformation model constructor.
     * @property {module:model/Riskv1decisionsOrderInformation}
     */
    Riskv1decisionsOrderInformation: Riskv1decisionsOrderInformation,
    /**
     * The Riskv1decisionsOrderInformationAmountDetails model constructor.
     * @property {module:model/Riskv1decisionsOrderInformationAmountDetails}
     */
    Riskv1decisionsOrderInformationAmountDetails: Riskv1decisionsOrderInformationAmountDetails,
    /**
     * The Riskv1decisionsOrderInformationBillTo model constructor.
     * @property {module:model/Riskv1decisionsOrderInformationBillTo}
     */
    Riskv1decisionsOrderInformationBillTo: Riskv1decisionsOrderInformationBillTo,
    /**
     * The Riskv1decisionsOrderInformationLineItems model constructor.
     * @property {module:model/Riskv1decisionsOrderInformationLineItems}
     */
    Riskv1decisionsOrderInformationLineItems: Riskv1decisionsOrderInformationLineItems,
    /**
     * The Riskv1decisionsOrderInformationShipTo model constructor.
     * @property {module:model/Riskv1decisionsOrderInformationShipTo}
     */
    Riskv1decisionsOrderInformationShipTo: Riskv1decisionsOrderInformationShipTo,
    /**
     * The Riskv1decisionsOrderInformationShippingDetails model constructor.
     * @property {module:model/Riskv1decisionsOrderInformationShippingDetails}
     */
    Riskv1decisionsOrderInformationShippingDetails: Riskv1decisionsOrderInformationShippingDetails,
    /**
     * The Riskv1decisionsPaymentInformation model constructor.
     * @property {module:model/Riskv1decisionsPaymentInformation}
     */
    Riskv1decisionsPaymentInformation: Riskv1decisionsPaymentInformation,
    /**
     * The Riskv1decisionsPaymentInformationCard model constructor.
     * @property {module:model/Riskv1decisionsPaymentInformationCard}
     */
    Riskv1decisionsPaymentInformationCard: Riskv1decisionsPaymentInformationCard,
    /**
     * The Riskv1decisionsPaymentInformationTokenizedCard model constructor.
     * @property {module:model/Riskv1decisionsPaymentInformationTokenizedCard}
     */
    Riskv1decisionsPaymentInformationTokenizedCard: Riskv1decisionsPaymentInformationTokenizedCard,
    /**
     * The Riskv1decisionsProcessorInformation model constructor.
     * @property {module:model/Riskv1decisionsProcessorInformation}
     */
    Riskv1decisionsProcessorInformation: Riskv1decisionsProcessorInformation,
    /**
     * The Riskv1decisionsProcessorInformationAvs model constructor.
     * @property {module:model/Riskv1decisionsProcessorInformationAvs}
     */
    Riskv1decisionsProcessorInformationAvs: Riskv1decisionsProcessorInformationAvs,
    /**
     * The Riskv1decisionsRiskInformation model constructor.
     * @property {module:model/Riskv1decisionsRiskInformation}
     */
    Riskv1decisionsRiskInformation: Riskv1decisionsRiskInformation,
    /**
     * The Riskv1decisionsTravelInformation model constructor.
     * @property {module:model/Riskv1decisionsTravelInformation}
     */
    Riskv1decisionsTravelInformation: Riskv1decisionsTravelInformation,
    /**
     * The Riskv1decisionsTravelInformationLegs model constructor.
     * @property {module:model/Riskv1decisionsTravelInformationLegs}
     */
    Riskv1decisionsTravelInformationLegs: Riskv1decisionsTravelInformationLegs,
    /**
     * The Riskv1decisionsidmarkingRiskInformation model constructor.
     * @property {module:model/Riskv1decisionsidmarkingRiskInformation}
     */
    Riskv1decisionsidmarkingRiskInformation: Riskv1decisionsidmarkingRiskInformation,
    /**
     * The Riskv1decisionsidmarkingRiskInformationMarkingDetails model constructor.
     * @property {module:model/Riskv1decisionsidmarkingRiskInformationMarkingDetails}
     */
    Riskv1decisionsidmarkingRiskInformationMarkingDetails: Riskv1decisionsidmarkingRiskInformationMarkingDetails,
    /**
     * The Riskv1exportcomplianceinquiriesDeviceInformation model constructor.
     * @property {module:model/Riskv1exportcomplianceinquiriesDeviceInformation}
     */
    Riskv1exportcomplianceinquiriesDeviceInformation: Riskv1exportcomplianceinquiriesDeviceInformation,
    /**
     * The Riskv1exportcomplianceinquiriesExportComplianceInformation model constructor.
     * @property {module:model/Riskv1exportcomplianceinquiriesExportComplianceInformation}
     */
    Riskv1exportcomplianceinquiriesExportComplianceInformation: Riskv1exportcomplianceinquiriesExportComplianceInformation,
    /**
     * The Riskv1exportcomplianceinquiriesExportComplianceInformationWeights model constructor.
     * @property {module:model/Riskv1exportcomplianceinquiriesExportComplianceInformationWeights}
     */
    Riskv1exportcomplianceinquiriesExportComplianceInformationWeights: Riskv1exportcomplianceinquiriesExportComplianceInformationWeights,
    /**
     * The Riskv1exportcomplianceinquiriesOrderInformation model constructor.
     * @property {module:model/Riskv1exportcomplianceinquiriesOrderInformation}
     */
    Riskv1exportcomplianceinquiriesOrderInformation: Riskv1exportcomplianceinquiriesOrderInformation,
    /**
     * The Riskv1exportcomplianceinquiriesOrderInformationBillTo model constructor.
     * @property {module:model/Riskv1exportcomplianceinquiriesOrderInformationBillTo}
     */
    Riskv1exportcomplianceinquiriesOrderInformationBillTo: Riskv1exportcomplianceinquiriesOrderInformationBillTo,
    /**
     * The Riskv1exportcomplianceinquiriesOrderInformationBillToCompany model constructor.
     * @property {module:model/Riskv1exportcomplianceinquiriesOrderInformationBillToCompany}
     */
    Riskv1exportcomplianceinquiriesOrderInformationBillToCompany: Riskv1exportcomplianceinquiriesOrderInformationBillToCompany,
    /**
     * The Riskv1exportcomplianceinquiriesOrderInformationLineItems model constructor.
     * @property {module:model/Riskv1exportcomplianceinquiriesOrderInformationLineItems}
     */
    Riskv1exportcomplianceinquiriesOrderInformationLineItems: Riskv1exportcomplianceinquiriesOrderInformationLineItems,
    /**
     * The Riskv1exportcomplianceinquiriesOrderInformationShipTo model constructor.
     * @property {module:model/Riskv1exportcomplianceinquiriesOrderInformationShipTo}
     */
    Riskv1exportcomplianceinquiriesOrderInformationShipTo: Riskv1exportcomplianceinquiriesOrderInformationShipTo,
    /**
     * The Riskv1liststypeentriesBuyerInformation model constructor.
     * @property {module:model/Riskv1liststypeentriesBuyerInformation}
     */
    Riskv1liststypeentriesBuyerInformation: Riskv1liststypeentriesBuyerInformation,
    /**
     * The Riskv1liststypeentriesDeviceInformation model constructor.
     * @property {module:model/Riskv1liststypeentriesDeviceInformation}
     */
    Riskv1liststypeentriesDeviceInformation: Riskv1liststypeentriesDeviceInformation,
    /**
     * The Riskv1liststypeentriesOrderInformation model constructor.
     * @property {module:model/Riskv1liststypeentriesOrderInformation}
     */
    Riskv1liststypeentriesOrderInformation: Riskv1liststypeentriesOrderInformation,
    /**
     * The Riskv1liststypeentriesOrderInformationAddress model constructor.
     * @property {module:model/Riskv1liststypeentriesOrderInformationAddress}
     */
    Riskv1liststypeentriesOrderInformationAddress: Riskv1liststypeentriesOrderInformationAddress,
    /**
     * The Riskv1liststypeentriesOrderInformationBillTo model constructor.
     * @property {module:model/Riskv1liststypeentriesOrderInformationBillTo}
     */
    Riskv1liststypeentriesOrderInformationBillTo: Riskv1liststypeentriesOrderInformationBillTo,
    /**
     * The Riskv1liststypeentriesOrderInformationLineItems model constructor.
     * @property {module:model/Riskv1liststypeentriesOrderInformationLineItems}
     */
    Riskv1liststypeentriesOrderInformationLineItems: Riskv1liststypeentriesOrderInformationLineItems,
    /**
     * The Riskv1liststypeentriesOrderInformationShipTo model constructor.
     * @property {module:model/Riskv1liststypeentriesOrderInformationShipTo}
     */
    Riskv1liststypeentriesOrderInformationShipTo: Riskv1liststypeentriesOrderInformationShipTo,
    /**
     * The Riskv1liststypeentriesPaymentInformation model constructor.
     * @property {module:model/Riskv1liststypeentriesPaymentInformation}
     */
    Riskv1liststypeentriesPaymentInformation: Riskv1liststypeentriesPaymentInformation,
    /**
     * The Riskv1liststypeentriesPaymentInformationBank model constructor.
     * @property {module:model/Riskv1liststypeentriesPaymentInformationBank}
     */
    Riskv1liststypeentriesPaymentInformationBank: Riskv1liststypeentriesPaymentInformationBank,
    /**
     * The Riskv1liststypeentriesPaymentInformationCard model constructor.
     * @property {module:model/Riskv1liststypeentriesPaymentInformationCard}
     */
    Riskv1liststypeentriesPaymentInformationCard: Riskv1liststypeentriesPaymentInformationCard,
    /**
     * The Riskv1liststypeentriesRiskInformation model constructor.
     * @property {module:model/Riskv1liststypeentriesRiskInformation}
     */
    Riskv1liststypeentriesRiskInformation: Riskv1liststypeentriesRiskInformation,
    /**
     * The Riskv1liststypeentriesRiskInformationMarkingDetails model constructor.
     * @property {module:model/Riskv1liststypeentriesRiskInformationMarkingDetails}
     */
    Riskv1liststypeentriesRiskInformationMarkingDetails: Riskv1liststypeentriesRiskInformationMarkingDetails,
    /**
     * The SelfLinkBean model constructor.
     * @property {module:model/SelfLinkBean}
     */
    SelfLinkBean: SelfLinkBean,
    /**
     * The TmsV1InstrumentIdentifiersDelete409Response model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersDelete409Response}
     */
    TmsV1InstrumentIdentifiersDelete409Response: TmsV1InstrumentIdentifiersDelete409Response,
    /**
     * The TmsV1InstrumentIdentifiersDelete409ResponseLinks model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersDelete409ResponseLinks}
     */
    TmsV1InstrumentIdentifiersDelete409ResponseLinks: TmsV1InstrumentIdentifiersDelete409ResponseLinks,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbedded model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbedded}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbedded: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbedded,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBankAccount model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBankAccount}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBankAccount: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBankAccount,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBillTo model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBillTo}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBillTo: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBillTo,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformation model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformation}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformation: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformation,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationIssuedBy model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationIssuedBy}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationIssuedBy: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationIssuedBy,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationPersonalIdentification model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationPersonalIdentification}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationPersonalIdentification: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationPersonalIdentification,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedCard model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedCard}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedCard: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedCard,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedEmbedded model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedEmbedded}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedEmbedded: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedEmbedded,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedEmbeddedInstrumentIdentifier model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedEmbeddedInstrumentIdentifier}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedEmbeddedInstrumentIdentifier: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedEmbeddedInstrumentIdentifier,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedLinks model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedLinks}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedLinks: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedLinks,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedLinksSelf model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedLinksSelf}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedLinksSelf: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedLinksSelf,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedMerchantInformation model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedMerchantInformation}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedMerchantInformation: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedMerchantInformation,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedMerchantInformationMerchantDescriptor model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedMerchantInformationMerchantDescriptor}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedMerchantInformationMerchantDescriptor: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedMerchantInformationMerchantDescriptor,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedPaymentInstruments model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedPaymentInstruments}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedPaymentInstruments: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedPaymentInstruments,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedProcessingInformation model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedProcessingInformation}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedProcessingInformation: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedProcessingInformation,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedProcessingInformationBankTransferOptions model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedProcessingInformationBankTransferOptions}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedProcessingInformationBankTransferOptions: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedProcessingInformationBankTransferOptions,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinks model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinks}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinks: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinks,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksFirst model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksFirst}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksFirst: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksFirst,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksLast model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksLast}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksLast: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksLast,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksNext model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksNext}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksNext: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksNext,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksPrev model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksPrev}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksPrev: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksPrev,
    /**
     * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksSelf model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksSelf}
     */
    TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksSelf: TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseLinksSelf,
    /**
     * The TmsV1InstrumentIdentifiersPost200Response model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPost200Response}
     */
    TmsV1InstrumentIdentifiersPost200Response: TmsV1InstrumentIdentifiersPost200Response,
    /**
     * The TmsV1InstrumentIdentifiersPost200ResponseCard model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPost200ResponseCard}
     */
    TmsV1InstrumentIdentifiersPost200ResponseCard: TmsV1InstrumentIdentifiersPost200ResponseCard,
    /**
     * The TmsV1InstrumentIdentifiersPost200ResponseIssuer model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPost200ResponseIssuer}
     */
    TmsV1InstrumentIdentifiersPost200ResponseIssuer: TmsV1InstrumentIdentifiersPost200ResponseIssuer,
    /**
     * The TmsV1InstrumentIdentifiersPost200ResponseLinks model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPost200ResponseLinks}
     */
    TmsV1InstrumentIdentifiersPost200ResponseLinks: TmsV1InstrumentIdentifiersPost200ResponseLinks,
    /**
     * The TmsV1InstrumentIdentifiersPost200ResponseLinksPaymentInstruments model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPost200ResponseLinksPaymentInstruments}
     */
    TmsV1InstrumentIdentifiersPost200ResponseLinksPaymentInstruments: TmsV1InstrumentIdentifiersPost200ResponseLinksPaymentInstruments,
    /**
     * The TmsV1InstrumentIdentifiersPost200ResponseLinksSelf model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPost200ResponseLinksSelf}
     */
    TmsV1InstrumentIdentifiersPost200ResponseLinksSelf: TmsV1InstrumentIdentifiersPost200ResponseLinksSelf,
    /**
     * The TmsV1InstrumentIdentifiersPost200ResponseMetadata model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPost200ResponseMetadata}
     */
    TmsV1InstrumentIdentifiersPost200ResponseMetadata: TmsV1InstrumentIdentifiersPost200ResponseMetadata,
    /**
     * The TmsV1InstrumentIdentifiersPost200ResponseProcessingInformation model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPost200ResponseProcessingInformation}
     */
    TmsV1InstrumentIdentifiersPost200ResponseProcessingInformation: TmsV1InstrumentIdentifiersPost200ResponseProcessingInformation,
    /**
     * The TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptions model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptions}
     */
    TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptions: TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptions,
    /**
     * The TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptionsInitiator model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptionsInitiator}
     */
    TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptionsInitiator: TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptionsInitiator,
    /**
     * The TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction}
     */
    TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction: TmsV1InstrumentIdentifiersPost200ResponseProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction,
    /**
     * The TmsV1InstrumentIdentifiersPost200ResponseTokenizedCard model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPost200ResponseTokenizedCard}
     */
    TmsV1InstrumentIdentifiersPost200ResponseTokenizedCard: TmsV1InstrumentIdentifiersPost200ResponseTokenizedCard,
    /**
     * The TmsV1InstrumentIdentifiersPost200ResponseTokenizedCardCard model constructor.
     * @property {module:model/TmsV1InstrumentIdentifiersPost200ResponseTokenizedCardCard}
     */
    TmsV1InstrumentIdentifiersPost200ResponseTokenizedCardCard: TmsV1InstrumentIdentifiersPost200ResponseTokenizedCardCard,
    /**
     * The Tmsv1instrumentidentifiersBankAccount model constructor.
     * @property {module:model/Tmsv1instrumentidentifiersBankAccount}
     */
    Tmsv1instrumentidentifiersBankAccount: Tmsv1instrumentidentifiersBankAccount,
    /**
     * The Tmsv1instrumentidentifiersBillTo model constructor.
     * @property {module:model/Tmsv1instrumentidentifiersBillTo}
     */
    Tmsv1instrumentidentifiersBillTo: Tmsv1instrumentidentifiersBillTo,
    /**
     * The Tmsv1instrumentidentifiersCard model constructor.
     * @property {module:model/Tmsv1instrumentidentifiersCard}
     */
    Tmsv1instrumentidentifiersCard: Tmsv1instrumentidentifiersCard,
    /**
     * The Tmsv1instrumentidentifiersDetails model constructor.
     * @property {module:model/Tmsv1instrumentidentifiersDetails}
     */
    Tmsv1instrumentidentifiersDetails: Tmsv1instrumentidentifiersDetails,
    /**
     * The Tmsv1paymentinstrumentsInstrumentIdentifier model constructor.
     * @property {module:model/Tmsv1paymentinstrumentsInstrumentIdentifier}
     */
    Tmsv1paymentinstrumentsInstrumentIdentifier: Tmsv1paymentinstrumentsInstrumentIdentifier,
    /**
     * The TokenizeParameters model constructor.
     * @property {module:model/TokenizeParameters}
     */
    TokenizeParameters: TokenizeParameters,
    /**
     * The TokenizeRequest model constructor.
     * @property {module:model/TokenizeRequest}
     */
    TokenizeRequest: TokenizeRequest,
    /**
     * The TokenizeResult model constructor.
     * @property {module:model/TokenizeResult}
     */
    TokenizeResult: TokenizeResult,
    /**
     * The TssV2TransactionsGet200Response model constructor.
     * @property {module:model/TssV2TransactionsGet200Response}
     */
    TssV2TransactionsGet200Response: TssV2TransactionsGet200Response,
    /**
     * The TssV2TransactionsGet200ResponseApplicationInformation model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseApplicationInformation}
     */
    TssV2TransactionsGet200ResponseApplicationInformation: TssV2TransactionsGet200ResponseApplicationInformation,
    /**
     * The TssV2TransactionsGet200ResponseApplicationInformationApplications model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseApplicationInformationApplications}
     */
    TssV2TransactionsGet200ResponseApplicationInformationApplications: TssV2TransactionsGet200ResponseApplicationInformationApplications,
    /**
     * The TssV2TransactionsGet200ResponseBuyerInformation model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseBuyerInformation}
     */
    TssV2TransactionsGet200ResponseBuyerInformation: TssV2TransactionsGet200ResponseBuyerInformation,
    /**
     * The TssV2TransactionsGet200ResponseClientReferenceInformation model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseClientReferenceInformation}
     */
    TssV2TransactionsGet200ResponseClientReferenceInformation: TssV2TransactionsGet200ResponseClientReferenceInformation,
    /**
     * The TssV2TransactionsGet200ResponseConsumerAuthenticationInformation model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseConsumerAuthenticationInformation}
     */
    TssV2TransactionsGet200ResponseConsumerAuthenticationInformation: TssV2TransactionsGet200ResponseConsumerAuthenticationInformation,
    /**
     * The TssV2TransactionsGet200ResponseDeviceInformation model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseDeviceInformation}
     */
    TssV2TransactionsGet200ResponseDeviceInformation: TssV2TransactionsGet200ResponseDeviceInformation,
    /**
     * The TssV2TransactionsGet200ResponseErrorInformation model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseErrorInformation}
     */
    TssV2TransactionsGet200ResponseErrorInformation: TssV2TransactionsGet200ResponseErrorInformation,
    /**
     * The TssV2TransactionsGet200ResponseFraudMarkingInformation model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseFraudMarkingInformation}
     */
    TssV2TransactionsGet200ResponseFraudMarkingInformation: TssV2TransactionsGet200ResponseFraudMarkingInformation,
    /**
     * The TssV2TransactionsGet200ResponseInstallmentInformation model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseInstallmentInformation}
     */
    TssV2TransactionsGet200ResponseInstallmentInformation: TssV2TransactionsGet200ResponseInstallmentInformation,
    /**
     * The TssV2TransactionsGet200ResponseLinks model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseLinks}
     */
    TssV2TransactionsGet200ResponseLinks: TssV2TransactionsGet200ResponseLinks,
    /**
     * The TssV2TransactionsGet200ResponseMerchantInformation model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseMerchantInformation}
     */
    TssV2TransactionsGet200ResponseMerchantInformation: TssV2TransactionsGet200ResponseMerchantInformation,
    /**
     * The TssV2TransactionsGet200ResponseMerchantInformationMerchantDescriptor model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseMerchantInformationMerchantDescriptor}
     */
    TssV2TransactionsGet200ResponseMerchantInformationMerchantDescriptor: TssV2TransactionsGet200ResponseMerchantInformationMerchantDescriptor,
    /**
     * The TssV2TransactionsGet200ResponseOrderInformation model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseOrderInformation}
     */
    TssV2TransactionsGet200ResponseOrderInformation: TssV2TransactionsGet200ResponseOrderInformation,
    /**
     * The TssV2TransactionsGet200ResponseOrderInformationAmountDetails model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseOrderInformationAmountDetails}
     */
    TssV2TransactionsGet200ResponseOrderInformationAmountDetails: TssV2TransactionsGet200ResponseOrderInformationAmountDetails,
    /**
     * The TssV2TransactionsGet200ResponseOrderInformationBillTo model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseOrderInformationBillTo}
     */
    TssV2TransactionsGet200ResponseOrderInformationBillTo: TssV2TransactionsGet200ResponseOrderInformationBillTo,
    /**
     * The TssV2TransactionsGet200ResponseOrderInformationInvoiceDetails model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseOrderInformationInvoiceDetails}
     */
    TssV2TransactionsGet200ResponseOrderInformationInvoiceDetails: TssV2TransactionsGet200ResponseOrderInformationInvoiceDetails,
    /**
     * The TssV2TransactionsGet200ResponseOrderInformationLineItems model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseOrderInformationLineItems}
     */
    TssV2TransactionsGet200ResponseOrderInformationLineItems: TssV2TransactionsGet200ResponseOrderInformationLineItems,
    /**
     * The TssV2TransactionsGet200ResponseOrderInformationShipTo model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseOrderInformationShipTo}
     */
    TssV2TransactionsGet200ResponseOrderInformationShipTo: TssV2TransactionsGet200ResponseOrderInformationShipTo,
    /**
     * The TssV2TransactionsGet200ResponseOrderInformationShippingDetails model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseOrderInformationShippingDetails}
     */
    TssV2TransactionsGet200ResponseOrderInformationShippingDetails: TssV2TransactionsGet200ResponseOrderInformationShippingDetails,
    /**
     * The TssV2TransactionsGet200ResponsePaymentInformation model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponsePaymentInformation}
     */
    TssV2TransactionsGet200ResponsePaymentInformation: TssV2TransactionsGet200ResponsePaymentInformation,
    /**
     * The TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures}
     */
    TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures: TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures,
    /**
     * The TssV2TransactionsGet200ResponsePaymentInformationBank model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponsePaymentInformationBank}
     */
    TssV2TransactionsGet200ResponsePaymentInformationBank: TssV2TransactionsGet200ResponsePaymentInformationBank,
    /**
     * The TssV2TransactionsGet200ResponsePaymentInformationBankAccount model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponsePaymentInformationBankAccount}
     */
    TssV2TransactionsGet200ResponsePaymentInformationBankAccount: TssV2TransactionsGet200ResponsePaymentInformationBankAccount,
    /**
     * The TssV2TransactionsGet200ResponsePaymentInformationBankMandate model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponsePaymentInformationBankMandate}
     */
    TssV2TransactionsGet200ResponsePaymentInformationBankMandate: TssV2TransactionsGet200ResponsePaymentInformationBankMandate,
    /**
     * The TssV2TransactionsGet200ResponsePaymentInformationCard model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponsePaymentInformationCard}
     */
    TssV2TransactionsGet200ResponsePaymentInformationCard: TssV2TransactionsGet200ResponsePaymentInformationCard,
    /**
     * The TssV2TransactionsGet200ResponsePaymentInformationInvoice model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponsePaymentInformationInvoice}
     */
    TssV2TransactionsGet200ResponsePaymentInformationInvoice: TssV2TransactionsGet200ResponsePaymentInformationInvoice,
    /**
     * The TssV2TransactionsGet200ResponsePaymentInformationPaymentType model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponsePaymentInformationPaymentType}
     */
    TssV2TransactionsGet200ResponsePaymentInformationPaymentType: TssV2TransactionsGet200ResponsePaymentInformationPaymentType,
    /**
     * The TssV2TransactionsGet200ResponsePointOfSaleInformation model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponsePointOfSaleInformation}
     */
    TssV2TransactionsGet200ResponsePointOfSaleInformation: TssV2TransactionsGet200ResponsePointOfSaleInformation,
    /**
     * The TssV2TransactionsGet200ResponseProcessingInformation model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseProcessingInformation}
     */
    TssV2TransactionsGet200ResponseProcessingInformation: TssV2TransactionsGet200ResponseProcessingInformation,
    /**
     * The TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions}
     */
    TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions: TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions,
    /**
     * The TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions}
     */
    TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions: TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions,
    /**
     * The TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions}
     */
    TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions: TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions,
    /**
     * The TssV2TransactionsGet200ResponseProcessorInformation model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseProcessorInformation}
     */
    TssV2TransactionsGet200ResponseProcessorInformation: TssV2TransactionsGet200ResponseProcessorInformation,
    /**
     * The TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults}
     */
    TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults: TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults,
    /**
     * The TssV2TransactionsGet200ResponseProcessorInformationProcessor model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseProcessorInformationProcessor}
     */
    TssV2TransactionsGet200ResponseProcessorInformationProcessor: TssV2TransactionsGet200ResponseProcessorInformationProcessor,
    /**
     * The TssV2TransactionsGet200ResponseRiskInformation model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseRiskInformation}
     */
    TssV2TransactionsGet200ResponseRiskInformation: TssV2TransactionsGet200ResponseRiskInformation,
    /**
     * The TssV2TransactionsGet200ResponseRiskInformationProfile model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseRiskInformationProfile}
     */
    TssV2TransactionsGet200ResponseRiskInformationProfile: TssV2TransactionsGet200ResponseRiskInformationProfile,
    /**
     * The TssV2TransactionsGet200ResponseRiskInformationRules model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseRiskInformationRules}
     */
    TssV2TransactionsGet200ResponseRiskInformationRules: TssV2TransactionsGet200ResponseRiskInformationRules,
    /**
     * The TssV2TransactionsGet200ResponseRiskInformationScore model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseRiskInformationScore}
     */
    TssV2TransactionsGet200ResponseRiskInformationScore: TssV2TransactionsGet200ResponseRiskInformationScore,
    /**
     * The TssV2TransactionsGet200ResponseSenderInformation model constructor.
     * @property {module:model/TssV2TransactionsGet200ResponseSenderInformation}
     */
    TssV2TransactionsGet200ResponseSenderInformation: TssV2TransactionsGet200ResponseSenderInformation,
    /**
     * The TssV2TransactionsPost201Response model constructor.
     * @property {module:model/TssV2TransactionsPost201Response}
     */
    TssV2TransactionsPost201Response: TssV2TransactionsPost201Response,
    /**
     * The TssV2TransactionsPost201ResponseEmbedded model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbedded}
     */
    TssV2TransactionsPost201ResponseEmbedded: TssV2TransactionsPost201ResponseEmbedded,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedApplicationInformation model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedApplicationInformation}
     */
    TssV2TransactionsPost201ResponseEmbeddedApplicationInformation: TssV2TransactionsPost201ResponseEmbeddedApplicationInformation,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedBuyerInformation model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedBuyerInformation}
     */
    TssV2TransactionsPost201ResponseEmbeddedBuyerInformation: TssV2TransactionsPost201ResponseEmbeddedBuyerInformation,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformation model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformation}
     */
    TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformation: TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformation,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation}
     */
    TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation: TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedDeviceInformation model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedDeviceInformation}
     */
    TssV2TransactionsPost201ResponseEmbeddedDeviceInformation: TssV2TransactionsPost201ResponseEmbeddedDeviceInformation,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedLinks model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedLinks}
     */
    TssV2TransactionsPost201ResponseEmbeddedLinks: TssV2TransactionsPost201ResponseEmbeddedLinks,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedMerchantInformation model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedMerchantInformation}
     */
    TssV2TransactionsPost201ResponseEmbeddedMerchantInformation: TssV2TransactionsPost201ResponseEmbeddedMerchantInformation,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedOrderInformation model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedOrderInformation}
     */
    TssV2TransactionsPost201ResponseEmbeddedOrderInformation: TssV2TransactionsPost201ResponseEmbeddedOrderInformation,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedOrderInformationBillTo model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedOrderInformationBillTo}
     */
    TssV2TransactionsPost201ResponseEmbeddedOrderInformationBillTo: TssV2TransactionsPost201ResponseEmbeddedOrderInformationBillTo,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedOrderInformationShipTo model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedOrderInformationShipTo}
     */
    TssV2TransactionsPost201ResponseEmbeddedOrderInformationShipTo: TssV2TransactionsPost201ResponseEmbeddedOrderInformationShipTo,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedPaymentInformation model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformation}
     */
    TssV2TransactionsPost201ResponseEmbeddedPaymentInformation: TssV2TransactionsPost201ResponseEmbeddedPaymentInformation,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedPaymentInformationCard model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationCard}
     */
    TssV2TransactionsPost201ResponseEmbeddedPaymentInformationCard: TssV2TransactionsPost201ResponseEmbeddedPaymentInformationCard,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType}
     */
    TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType: TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation}
     */
    TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation: TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner}
     */
    TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner: TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedProcessingInformation model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedProcessingInformation}
     */
    TssV2TransactionsPost201ResponseEmbeddedProcessingInformation: TssV2TransactionsPost201ResponseEmbeddedProcessingInformation,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedProcessorInformation model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedProcessorInformation}
     */
    TssV2TransactionsPost201ResponseEmbeddedProcessorInformation: TssV2TransactionsPost201ResponseEmbeddedProcessorInformation,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedRiskInformation model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedRiskInformation}
     */
    TssV2TransactionsPost201ResponseEmbeddedRiskInformation: TssV2TransactionsPost201ResponseEmbeddedRiskInformation,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedRiskInformationProviders model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedRiskInformationProviders}
     */
    TssV2TransactionsPost201ResponseEmbeddedRiskInformationProviders: TssV2TransactionsPost201ResponseEmbeddedRiskInformationProviders,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedRiskInformationProvidersFingerprint model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedRiskInformationProvidersFingerprint}
     */
    TssV2TransactionsPost201ResponseEmbeddedRiskInformationProvidersFingerprint: TssV2TransactionsPost201ResponseEmbeddedRiskInformationProvidersFingerprint,
    /**
     * The TssV2TransactionsPost201ResponseEmbeddedTransactionSummaries model constructor.
     * @property {module:model/TssV2TransactionsPost201ResponseEmbeddedTransactionSummaries}
     */
    TssV2TransactionsPost201ResponseEmbeddedTransactionSummaries: TssV2TransactionsPost201ResponseEmbeddedTransactionSummaries,
    /**
     * The TssV2TransactionsPost400Response model constructor.
     * @property {module:model/TssV2TransactionsPost400Response}
     */
    TssV2TransactionsPost400Response: TssV2TransactionsPost400Response,
    /**
     * The UmsV1UsersGet200Response model constructor.
     * @property {module:model/UmsV1UsersGet200Response}
     */
    UmsV1UsersGet200Response: UmsV1UsersGet200Response,
    /**
     * The UmsV1UsersGet200ResponseAccountInformation model constructor.
     * @property {module:model/UmsV1UsersGet200ResponseAccountInformation}
     */
    UmsV1UsersGet200ResponseAccountInformation: UmsV1UsersGet200ResponseAccountInformation,
    /**
     * The UmsV1UsersGet200ResponseContactInformation model constructor.
     * @property {module:model/UmsV1UsersGet200ResponseContactInformation}
     */
    UmsV1UsersGet200ResponseContactInformation: UmsV1UsersGet200ResponseContactInformation,
    /**
     * The UmsV1UsersGet200ResponseOrganizationInformation model constructor.
     * @property {module:model/UmsV1UsersGet200ResponseOrganizationInformation}
     */
    UmsV1UsersGet200ResponseOrganizationInformation: UmsV1UsersGet200ResponseOrganizationInformation,
    /**
     * The UmsV1UsersGet200ResponseUsers model constructor.
     * @property {module:model/UmsV1UsersGet200ResponseUsers}
     */
    UmsV1UsersGet200ResponseUsers: UmsV1UsersGet200ResponseUsers,
    /**
     * The UpdateInstrumentIdentifierRequest model constructor.
     * @property {module:model/UpdateInstrumentIdentifierRequest}
     */
    UpdateInstrumentIdentifierRequest: UpdateInstrumentIdentifierRequest,
    /**
     * The UpdateInvoiceRequest model constructor.
     * @property {module:model/UpdateInvoiceRequest}
     */
    UpdateInvoiceRequest: UpdateInvoiceRequest,
    /**
     * The UpdatePaymentInstrumentRequest model constructor.
     * @property {module:model/UpdatePaymentInstrumentRequest}
     */
    UpdatePaymentInstrumentRequest: UpdatePaymentInstrumentRequest,
    /**
     * The V1FileDetailsGet200Response model constructor.
     * @property {module:model/V1FileDetailsGet200Response}
     */
    V1FileDetailsGet200Response: V1FileDetailsGet200Response,
    /**
     * The V1FileDetailsGet200ResponseFileDetails model constructor.
     * @property {module:model/V1FileDetailsGet200ResponseFileDetails}
     */
    V1FileDetailsGet200ResponseFileDetails: V1FileDetailsGet200ResponseFileDetails,
    /**
     * The V1FileDetailsGet200ResponseLinks model constructor.
     * @property {module:model/V1FileDetailsGet200ResponseLinks}
     */
    V1FileDetailsGet200ResponseLinks: V1FileDetailsGet200ResponseLinks,
    /**
     * The V1FileDetailsGet200ResponseLinksFiles model constructor.
     * @property {module:model/V1FileDetailsGet200ResponseLinksFiles}
     */
    V1FileDetailsGet200ResponseLinksFiles: V1FileDetailsGet200ResponseLinksFiles,
    /**
     * The V1FileDetailsGet200ResponseLinksSelf model constructor.
     * @property {module:model/V1FileDetailsGet200ResponseLinksSelf}
     */
    V1FileDetailsGet200ResponseLinksSelf: V1FileDetailsGet200ResponseLinksSelf,
    /**
     * The ValidateExportComplianceRequest model constructor.
     * @property {module:model/ValidateExportComplianceRequest}
     */
    ValidateExportComplianceRequest: ValidateExportComplianceRequest,
    /**
     * The ValidateRequest model constructor.
     * @property {module:model/ValidateRequest}
     */
    ValidateRequest: ValidateRequest,
    /**
     * The VerifyCustomerAddressRequest model constructor.
     * @property {module:model/VerifyCustomerAddressRequest}
     */
    VerifyCustomerAddressRequest: VerifyCustomerAddressRequest,
    /**
     * The VoidCaptureRequest model constructor.
     * @property {module:model/VoidCaptureRequest}
     */
    VoidCaptureRequest: VoidCaptureRequest,
    /**
     * The VoidCreditRequest model constructor.
     * @property {module:model/VoidCreditRequest}
     */
    VoidCreditRequest: VoidCreditRequest,
    /**
     * The VoidPaymentRequest model constructor.
     * @property {module:model/VoidPaymentRequest}
     */
    VoidPaymentRequest: VoidPaymentRequest,
    /**
     * The VoidRefundRequest model constructor.
     * @property {module:model/VoidRefundRequest}
     */
    VoidRefundRequest: VoidRefundRequest,
    /**
     * The CaptureApi service constructor.
     * @property {module:api/CaptureApi}
     */
    CaptureApi: CaptureApi,
    /**
     * The ConversionDetailsApi service constructor.
     * @property {module:api/ConversionDetailsApi}
     */
    ConversionDetailsApi: ConversionDetailsApi,
    /**
     * The CreditApi service constructor.
     * @property {module:api/CreditApi}
     */
    CreditApi: CreditApi,
    /**
     * The DecisionManagerApi service constructor.
     * @property {module:api/DecisionManagerApi}
     */
    DecisionManagerApi: DecisionManagerApi,
    /**
     * The DownloadDTDApi service constructor.
     * @property {module:api/DownloadDTDApi}
     */
    DownloadDTDApi: DownloadDTDApi,
    /**
     * The DownloadXSDApi service constructor.
     * @property {module:api/DownloadXSDApi}
     */
    DownloadXSDApi: DownloadXSDApi,
    /**
     * The InstrumentIdentifierApi service constructor.
     * @property {module:api/InstrumentIdentifierApi}
     */
    InstrumentIdentifierApi: InstrumentIdentifierApi,
    /**
     * The InvoiceSettingsApi service constructor.
     * @property {module:api/InvoiceSettingsApi}
     */
    InvoiceSettingsApi: InvoiceSettingsApi,
    /**
     * The InvoicesApi service constructor.
     * @property {module:api/InvoicesApi}
     */
    InvoicesApi: InvoicesApi,
    /**
     * The KeyGenerationApi service constructor.
     * @property {module:api/KeyGenerationApi}
     */
    KeyGenerationApi: KeyGenerationApi,
    /**
     * The NetFundingsApi service constructor.
     * @property {module:api/NetFundingsApi}
     */
    NetFundingsApi: NetFundingsApi,
    /**
     * The NotificationOfChangesApi service constructor.
     * @property {module:api/NotificationOfChangesApi}
     */
    NotificationOfChangesApi: NotificationOfChangesApi,
    /**
     * The PayerAuthenticationApi service constructor.
     * @property {module:api/PayerAuthenticationApi}
     */
    PayerAuthenticationApi: PayerAuthenticationApi,
    /**
     * The PaymentBatchSummariesApi service constructor.
     * @property {module:api/PaymentBatchSummariesApi}
     */
    PaymentBatchSummariesApi: PaymentBatchSummariesApi,
    /**
     * The PaymentInstrumentApi service constructor.
     * @property {module:api/PaymentInstrumentApi}
     */
    PaymentInstrumentApi: PaymentInstrumentApi,
    /**
     * The PaymentsApi service constructor.
     * @property {module:api/PaymentsApi}
     */
    PaymentsApi: PaymentsApi,
    /**
     * The PayoutsApi service constructor.
     * @property {module:api/PayoutsApi}
     */
    PayoutsApi: PayoutsApi,
    /**
     * The PurchaseAndRefundDetailsApi service constructor.
     * @property {module:api/PurchaseAndRefundDetailsApi}
     */
    PurchaseAndRefundDetailsApi: PurchaseAndRefundDetailsApi,
    /**
     * The RefundApi service constructor.
     * @property {module:api/RefundApi}
     */
    RefundApi: RefundApi,
    /**
     * The ReportDefinitionsApi service constructor.
     * @property {module:api/ReportDefinitionsApi}
     */
    ReportDefinitionsApi: ReportDefinitionsApi,
    /**
     * The ReportDownloadsApi service constructor.
     * @property {module:api/ReportDownloadsApi}
     */
    ReportDownloadsApi: ReportDownloadsApi,
    /**
     * The ReportSubscriptionsApi service constructor.
     * @property {module:api/ReportSubscriptionsApi}
     */
    ReportSubscriptionsApi: ReportSubscriptionsApi,
    /**
     * The ReportsApi service constructor.
     * @property {module:api/ReportsApi}
     */
    ReportsApi: ReportsApi,
    /**
     * The ReversalApi service constructor.
     * @property {module:api/ReversalApi}
     */
    ReversalApi: ReversalApi,
    /**
     * The SearchTransactionsApi service constructor.
     * @property {module:api/SearchTransactionsApi}
     */
    SearchTransactionsApi: SearchTransactionsApi,
    /**
     * The SecureFileShareApi service constructor.
     * @property {module:api/SecureFileShareApi}
     */
    SecureFileShareApi: SecureFileShareApi,
    /**
     * The TokenizationApi service constructor.
     * @property {module:api/TokenizationApi}
     */
    TokenizationApi: TokenizationApi,
    /**
     * The TransactionBatchesApi service constructor.
     * @property {module:api/TransactionBatchesApi}
     */
    TransactionBatchesApi: TransactionBatchesApi,
    /**
     * The TransactionDetailsApi service constructor.
     * @property {module:api/TransactionDetailsApi}
     */
    TransactionDetailsApi: TransactionDetailsApi,
    /**
     * The UserManagementApi service constructor.
     * @property {module:api/UserManagementApi}
     */
    UserManagementApi: UserManagementApi,
    /**
     * The VerificationApi service constructor.
     * @property {module:api/VerificationApi}
     */
    VerificationApi: VerificationApi,
    /**
     * The VoidApi service constructor.
     * @property {module:api/VoidApi}
     */
    VoidApi: VoidApi
  };

  exports.TokenVerification = require('./utilities/flex/TokenVerification.js');

  return exports;
}));
