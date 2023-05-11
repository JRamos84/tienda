/**
 *  This function calculates total price of new order
 * @param {Array} products cartProduct: Array of Object 
 * @returns {number} Total price
 */

export const totalPrice = (products)=>{
    let sum = 0
    products.forEach(product => sum += product.price);
    return sum
}

export function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }