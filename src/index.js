const url = 'https://apitest.cybersource.com/flex/v1/keys?';
const method = 'POST';
const sharedKey = '42615f71-6e82-4096-b64b-330907bcbea0';
const secretKey = 'qn3Z9w59is/CqmoUpNXQavve0lS48kSiJF5IsYMjpu0=';
const merchantId = 'luenmuvel';
// const data = JSON.stringify({ encryptionType: "None", targetOrigin: 'https://2bd330b6.ngrok.io' });
const data = JSON.stringify({ encryptionType: "RsaOaep256", targetOrigin: 'http://localhost:1234' });
const date = new Date(Date.now()).toUTCString();
const signature = `keyid="${sharedKey}", algorithm="HmacSHA256", headers="host date (request-target) v-c-merchant-id", signature="${secretKey}"`

const headers = {
  method: `${method}`,
  body: data,
  digest: 'SHA-256=8o0XvaAYsW3AHSJXDDlliu7+sWSDrJoq5m8EzOwcG/M=',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json;',
    'v-c-merchant-id': `${merchantId}`,
    'Date': date,
    'profile-id': '6ECC1FD9-D7E4-415E-B27C-49216396BB27',
    'signature': signature
  }
};

fetch(url, headers)
  .then(data => {
    console.log(data.json());
  })
  .catch(err => console.log)
