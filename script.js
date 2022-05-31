$(document).ready(function(){
$("#exit-left-products-menu").click(function(){
    $("#left-products-menu").hide();
  });

$("#open-left-products-menu").click(function(){
    $("#left-products-menu").show();
});

$("#shopping-cart-exit").click(function(){
    $("#right-slideout-cart").hide();
  });

$("#mobile-shop-icon").click(function(){
    $("#right-slideout-cart").show();
});

});




window.onload=function(){    
const cartBtn = document.getElementById('open-cart-btn')
      closeCartBtn = document.getElementById('shopping-cart-exit')
      shoppingCart = document.getElementById('right-slideout-cart')

 
cartBtn.addEventListener('click', () => {
    shoppingCart.style.display = "flex"
})

closeCartBtn.addEventListener('click', () => {
    shoppingCart.style.display = "none"
})

const productcartBtn = document.getElementById('open-products-btn')
        closeCartBtn = document.getElementById('exit-left-products-menu')
        productsCart = document.getElementById('left-products-menu')

    
productcartBtn.addEventListener('click', () => {
    productsCart.style.display = "flex"
})

closeCartBtn.addEventListener('click', () => {
    productsCart.style.display = "none"
})
}
