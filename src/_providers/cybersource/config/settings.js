'use strict';

/*
* Merchant configuration properties are taken from Configuration module
*/

// common parameters
const AuthenticationType = 'http_signature';
const RunEnvironment = 'apitest.cybersource.com';
const MerchantId = 'belcorp';

// http_signature parameters
const MerchantKeyId = '9275c458-e784-4fba-828f-a70cfc735966';
const MerchantSecretKey = 'kc3e1cjqPVRKe2RhCB1aTZiTTaHpCBe70UKHmsv3n00=';

// logging parameters
const EnableLog = true;
const LogFileName = 'cybs';
const LogDirectory = '../log';
const LogfileMaxSize = '5242880'; //10 MB In Bytes

// Constructor for Configuration
export default function Configuration() {

	var configObj = {
		'authenticationType': AuthenticationType,
		'runEnvironment': RunEnvironment,

		'merchantID': MerchantId,
		'merchantKeyId': MerchantKeyId,
		'merchantsecretKey': MerchantSecretKey,

		'enableLog': EnableLog,
		'logFilename': LogFileName,
		'logDirectory': LogDirectory,
		'logFileMaxSize': LogfileMaxSize
	};
	return configObj;

}
