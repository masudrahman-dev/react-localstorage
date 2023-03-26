// //manage storage
// const adToDB = (id) => {
//   const quantity = localStorage.getItem(id);
//   if (quantity) {
//     const newQuantity = parseInt(quantity) + 1;
//     localStorage.setItem(id, newQuantity);
//   } else {
//     localStorage.setItem(id, 1);
//   }
// };
// export { adToDB };
const adToDB = (id) => {
  // console.log(id);
  let shoppingCart;
  // let shoppingCart = {};
  const storedCart = localStorage.getItem('shopping-cart');
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }
  const quantity = shoppingCart[id];
  console.log(quantity);
  if (quantity) {
    const newQuantity = parseInt(quantity) + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};
export { adToDB };

// let shoppingCart = {};
// const id = "product1";
// const quantity = 3;
// shoppingCart[id] = quantity;
