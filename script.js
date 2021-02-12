// Importing Module: Imports are not copy's from export, importing create a live connection between export and import (pointer) - import point to variable that was export.

//import { addToCart, totalPrice, tq } from './shoppingCart.js'; // exporting code are executed first

// console.log('importing module ');
// addToCart('computer', 2);

// // Exporting multiple varibles
// console.log(`Total Price: ${totalPrice}`);
// console.log(`Total Quantity: ${tq}`);

// Importing everything
// import * as shoppingCart from './shoppingCart.js';
// shoppingCart.addToCart('bread', 5);

// Importing something that was declared by export default
// import addCart, { cart } from './shoppingCart.js';
// addCart('Samsung Galaxy S10', 1);
// console.log(cart); // OBs: Live connection

// Module Pattern (before ES6)
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (item, qtd) {
    console.log(`${qtd} ${item} ordered from cart 🛒`);
    cart.push({ item, qtd });
  };

  const orderStock = function (item, qtd) {
    console.log(`${qtd} ${item} ordered from supplier`);
  };

  // Public API
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('pizza', 3);
console.log(shoppingCart2.shippingCost); //undefined, private

//CommumJSModules - * Have been used in NodeJs (Running JS on a web server outside of a browser) ****

// Modulos que são gerados pelo npm estão neste formato, npm foi criado para o node, entretanto passou-se a utiliza-lo em todas as aplicações usando js

// One filed is one module
// export.addToCart3 = function (item, qtd) {
//     console.log(`${qtd} ${item} ordered from cart 🛒`);
//     cart.push({ item, qtd });
//   };

// // Import
// const { addToCart3 } = require("./shoppingCart.js")

// Importando função do modulo loadash-es que faz um clone de um objeto
import cloneObj from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { item: 'apple', qtd: 5 },
    { item: 'pizza', qtd: 2 },
  ],
  user: { loggedIn: true },
};
console.log(state);

const stateClone = cloneObj(state);
stateClone.user.loggedIn = false;
console.log(stateClone);
console.log(state);
