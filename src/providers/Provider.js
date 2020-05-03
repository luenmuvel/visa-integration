// const processPayment = require("./cybersource/process-payment");
import processPayment from './cybersource/process-payment';

export default class Provider {
  constructor() {
    this.callProvider();
  }

  callProvider() {
    new processPayment();
  }
}
