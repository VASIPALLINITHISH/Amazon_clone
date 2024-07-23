import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadproducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadpage() {

  await loadProductsFetch();
  await new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

  renderOrderSummary();
  renderPaymentSummary();

}
loadpage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/


/*
new Promise((resolve) => {
  loadproducts(() => {
    resolve();
  });

}).then(() => {
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadproducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary(); 
  });
});
*/



