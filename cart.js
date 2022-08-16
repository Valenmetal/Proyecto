const cartContainer = document.querySelector(".cart_container");
/* const cart = JSON.parse(localStorage.getItem('carrito')) || [];
 */
const addCartBtn = document.getElementsByClassName("addCart");
console.log(addCartBtn)

for (let btn of addCartBtn) {
    btn.addEventListener("click", collectBtnData);
}

function collectBtnData(e) {
    let btn = e.target
    let prod = btn.parentElement;
    let name = prod.querySelector("#name").innerText;
    let img = prod.querySelector(".img-product").src;
    let price = prod.querySelector("#price").innerText;
    console.log(name, img, price)
    addToCart(name, img, price)
}

function addToCart(name, img, price){
    
}