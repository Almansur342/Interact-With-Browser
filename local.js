const addProduct = () =>{
  const productName = document.getElementById('product-name');
  const productQuantity = document.getElementById('product-quantity');
  const product = productName.value;
  const quantity = productQuantity.value;
  productName.value = '';
  productQuantity.value = '';
  // console.log(product, quantity)
  displayProduct(product,quantity)
  saveProductToLocalStoraeg(product,quantity)
}

const displayProduct = (product,quantity) =>{
 const productContainer = document.getElementById('product-container');
 const li  = document.createElement('li');
 li.innerText =`${product}: ${quantity}`
 productContainer.appendChild(li);
}

const getStoredShoppingCart = () =>{
  let cart = {};
  const storedCart = localStorage.getItem('cart')
  if(storedCart){
    cart = JSON.parse(storedCart);
  }
  return cart;
}

const saveProductToLocalStoraeg = (product,quantity) =>{
  const cart = getStoredShoppingCart();
   cart[product] = quantity;
   console.log(cart);
   const cartStringified = JSON.stringify(cart);
   console.log(cartStringified);
   localStorage.setItem('cart',cartStringified);
}

const showProductFromLocalStorage = () =>{
  const saveCart = getStoredShoppingCart();
  for(const product in saveCart){
  const quantity = saveCart[product]
  displayProduct(product,quantity);
}
}
showProductFromLocalStorage()