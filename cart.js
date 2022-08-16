
const shoppingCart = JSON.parse(localStorage.getItem('products')) || [];

const cartContainer = document.querySelector(".cart_container");

function mostrarEnCarrito() {
    cartContainer.innerHTML = ""
    shoppingCart.forEach(p => {

        let div = document.createElement("div")
        div.className = "productInCart"
        div.innerHTML = `<div class="prod_in_cart" id="${p.id}">
                                        <p class="epigrafe" id="name">${p.name}</p>
                                        <img src="../../${p.src}" class="img-product-cart"/>
                                        <div class="epigrafe-container">
                                            <p class="epigrafe" id="price">$${p.price}</p>
                                            <button class="remove_prod_cart">Eliminar</button>
                                            <p class="cantidad">Cantidad: ${p.quantity}</p>
                                        </div>
                                   </div>`

        cartContainer.appendChild(div)

        let botonesEliminar = document.querySelectorAll(".remove_prod_cart")
        for (let boton of botonesEliminar) {
            boton.addEventListener("click", eliminarProducto)
        }

    })
}

mostrarEnCarrito()



function eliminarProducto(e) {
    let btn = e.target
    shoppingCart.splice(shoppingCart.findIndex(producto => producto.id == btn.parentElement.parentElement.id), 1);
    localStorage.setItem('products', JSON.stringify(shoppingCart))
    mostrarEnCarrito()
    cartQuantity()
    finalPrice()
}



let quantitySpan = document.querySelector(".cart_quantity");
let btnComprar = document.querySelector(".btn_comprar")

function cartQuantity() {
    if (shoppingCart.length === 0) {
        cartContainer.innerHTML = `<div class="no-prod"> No hay productos en el carrito 🛒 </div>`

        btnComprar.addEventListener("click", e => {
            e.preventDefault()
            Swal.fire({ icon: 'error', background: 'rgb(11, 4, 15)', confirmButtonColor: 'rgb(60, 38, 70)', color: '#eeeeed', title: 'No hay productos en el carrito!' })
        });
    }

    let total = shoppingCart.reduce((acc, e) => acc + e.quantity, 0)
    quantitySpan.innerHTML = `${total}`;
    localStorage.setItem('products', JSON.stringify(shoppingCart))
}
cartQuantity()

btnComprar.addEventListener("click", e => {
    e.preventDefault()
    if (shoppingCart.length > 0) {
        Swal.fire({ icon: 'success', background: 'rgb(11, 4, 15)', confirmButtonColor: 'rgb(60, 38, 70)', color: '#eeeeed', title: 'Comprado!' })
    } 
    vaciarCarrito()
});

function vaciarCarrito() {
    shoppingCart.splice(0, shoppingCart.length)
    localStorage.setItem('products', JSON.stringify(shoppingCart))

    mostrarEnCarrito()
    cartQuantity()
    finalPrice()
}

let finalPriceDiv = document.querySelector(".final_price");

let totalCostArr = [];

function finalPrice() {
    let totalPrice = shoppingCart.reduce((acc, e) => acc + e.quantity * e.price, 0)
    finalPriceDiv.innerText = `${totalPrice}`;
    localStorage.setItem('products', JSON.stringify(shoppingCart))
}
finalPrice()




