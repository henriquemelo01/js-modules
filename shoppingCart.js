// Exporting Module
console.log('Exporting Module');

// Private vars, não podem ser acessadas fora do modulo
const shippingCost = 10;
export const cart = [];

// Exporting variable
export const addToCart = function (item, qtd) {
  cart.push({ item, qtd });
  console.log(`${qtd} ${item} added to cart 🛒`);
};

const totalPrice = 237;
const totalQuantity = 23;

// Exporting multiple variables - Named Export
export { totalPrice, totalQuantity as tq };

// Default exports -> Export one thing of module
export default function (item, qtd) {
  cart.push({ item, qtd });
  console.log(`${qtd} ${item} added to cart 🛒`);
}

// JSX REACT - Exporting component
/*
export default function ({children}) {
  return (
    <div>
      <h1>
        <p>{children}</p>
      </h1>
    </div>
  );
}
*/
