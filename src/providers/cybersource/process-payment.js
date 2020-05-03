'use strict';

// import Configuration from "./config/settings";

import * as cybersource from 'cybersource-rest-client';

export default class processPayment {
  constructor() {
    console.log(cybersource);
  }
}
// export default class processPayment {

//   enableCapture = false;
//   configuration = {};
//   instance = {};
//   clientReferenceInformation = {};
//   processingInformation = {};
//   subMerchant = {};
//   aggregatorInformation = {};
//   amountDetails = {};
//   billTo = {};
//   orderInformation = {};
//   paymentInformation = {};

//   constructor() {
//     this.configuration = new Configuration();
//     this.instance = new cybersourceRestApi.PaymentsApi(this.configuration);
//     this.setClientReferenceInformation();
//     this.setProcessingInformation();
//     this.setSubMerchant();
//     this.setAggregatorInformation();
//     this.paymentInformation = new cybersourceRestApi.Ptsv2paymentsPaymentInformation();
//     this.setAmountDetails();
//     this.setBillTo();
//     this.setOrderInformation();
//     this.setCard();
//     this.setRequest();
//     this.createPayment();
//   }

//   setClientReferenceInformation() {
//     this.clientReferenceInformation = new cybersourceRestApi.Ptsv2paymentsClientReferenceInformation();
//     this.clientReferenceInformation.code = 'test_payment';
//   }

//   setProcessingInformation() {
//     this.processingInformation = new cybersourceRestApi.Ptsv2paymentsProcessingInformation();
//     this.processingInformation.commerceIndicator = 'internet';
//   }

//   setSubMerchant() {
//     this.subMerchant = new cybersourceRestApi.Ptsv2paymentsAggregatorInformationSubMerchant();
//     this.subMerchant.cardAcceptorId = '1234567890';
//     this.subMerchant.country = 'US';
//     this.subMerchant.phoneNumber = '4158880000';
//     this.subMerchant.address1 = '1 Market St';
//     this.subMerchant.postalCode = '94105';
//     this.subMerchant.locality = 'San Francisco';
//     this.subMerchant.name = 'Visa Inc';
//     this.subMerchant.administrativeArea = 'CA';
//     this.subMerchant.region = 'PEN';
//     this.subMerchant.email = 'test@cybs.com';
//   }

//   setAggregatorInformation() {
//     this.aggregatorInformation = new cybersourceRestApi.Ptsv2paymentsAggregatorInformation();
//     this.aggregatorInformation.subMerchant = subMerchant;
//     this.aggregatorInformation.name = 'V-Internatio';
//     this.aggregatorInformation.aggregatorId = '123456789';
//   }

//   setAmountDetails() {
//     this.amountDetails = new cybersourceRestApi.Ptsv2paymentsOrderInformationAmountDetails();
//     this.amountDetails.totalAmount = '102.21';
//     this.amountDetails.currency = 'USD';
//   }

//   setBillTo() {
//     this.billTo = new cybersourceRestApi.Ptsv2paymentsOrderInformationBillTo();
//     this.billTo.country = 'US';
//     this.billTo.firstName = 'John';
//     this.billTo.lastName = 'Deo';
//     this.billTo.phoneNumber = '4158880000';
//     this.billTo.address1 = 'test';
//     this.billTo.postalCode = '94105';
//     this.billTo.locality = 'San Francisco';
//     this.billTo.administrativeArea = 'MI';
//     this.billTo.email = 'test@cybs.com';
//     this.billTo.address2 = 'Address 2';
//     this.billTo.district = 'MI';
//     this.billTo.buildingNumber = '123';
//   }

//   setOrderInformation() {
//     this.orderInformation = new cybersourceRestApi.Ptsv2paymentsOrderInformation();
//     this.orderInformation.amountDetails = amountDetails;
//     this.orderInformation.billTo = billTo;
//   }

//   setCard() {
//     this.card = new cybersourceRestApi.Ptsv2paymentsPaymentInformationCard();
//     this.card.expirationYear = '2031';
//     this.card.number = '4111111111111111';
//     this.card.expirationMonth = '03';
//     this.card.securityCode = '123';
//     this.card.type = '001';
//     this.paymentInformation.card = card;
//   }

//   setRequest() {
//     this.request = new cybersourceRestApi.CreatePaymentRequest();
//     this.request.clientReferenceInformation = clientReferenceInformation;
//     this.request.processingInformation = processingInformation;
//     this.request.aggregatorInformation = aggregatorInformation;
//     this.request.orderInformation = orderInformation;
//     this.request.paymentInformation = paymentInformation;

//     if (this.enableCapture === true) {
//       request.processingInformation.capture = true;
//     }
//   }

//   createPayment() {
//     this.instance.createPayment(request, function(error, data, response) {
//       if (error) {
//         console.log('\nError in process a payment : ' + JSON.stringify(error));
//       } else if (data) {
//         console.log('\nData of process a payment : ' + JSON.stringify(data));
//       }
//       console.log('\nResponse of process a payment : ' + JSON.stringify(response));
//       console.log('\nResponse Code of process a payment : ' + JSON.stringify(response['status']));
//       callback(error, data);
//     });
//   }
// }
