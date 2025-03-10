import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import '../data/cart-class.js';
import '../data/backend-practice.js'
import { loadProducts } from "../data/products.js";
import {loadCart} from '../data/cart.js'



new Promise((resolve) => {
   loadProducts(() => {
    resolve('value1');
   });

}).then((value) => {
    
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});

// loadProducts(() => {
//     loadCart(() => {
//     });
// });