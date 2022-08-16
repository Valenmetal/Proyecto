

class Producto {
    constructor(id, name, description, src, category, price, quantity) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.src = src;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
    }
}


let productList = [];

const shoppingCart = JSON.parse(localStorage.getItem('products')) || [];

const productMaker = () => {
    fetch('products.json')
        .then(products => products.json())
        .then(result => {

            productList = result;
            
            productList.forEach(e => {
                let div = document.createElement("div");
                div.className = "product";
                div.setAttribute("id", e.id);
                div.innerHTML = `<p class="epigrafe" id="name">${e.name}</p>
                        <img alt="${e.description}" src="${e.src}" class="img-product"><button id="button${e.id}" class="addCart">Agregar al carrito</button>
                        <p class="epigrafe" id="price">$${e.price}</p>
                        `;
                document.querySelector(".products").appendChild(div);


                const button = document.getElementById(`button${e.id}`)
                button.addEventListener("click", () => {
                    agregandoAlCarrito(e.id)
                })

            });
        })
}

productMaker();

const agregandoAlCarrito = (productId) => {
    let buscarProducto = productList.find(elemento => elemento.id === productId)
    if (buscarProducto) {
        let productoAgregado = shoppingCart.find(elemento => elemento.id == buscarProducto.id)
        if (productoAgregado) {
            productoAgregado.quantity += 1
        } else {
            shoppingCart.push(new Producto(buscarProducto.id, buscarProducto.name, buscarProducto.description, buscarProducto.src, buscarProducto.category, buscarProducto.price, buscarProducto.quantity))
        }
    }
    localStorage.setItem('products', JSON.stringify(shoppingCart))
    cartQuantity()

};


let quantitySpan = document.querySelector(".cart_quantity");


function cartQuantity() {

    let total = shoppingCart.reduce((acc, e) => acc + e.quantity, 0)
    quantitySpan.innerHTML = `${total}`;
    localStorage.setItem('products', JSON.stringify(shoppingCart))
}


cartQuantity()

let formulario = document.querySelector(".contact")
let sendBtn = document.querySelector("#submit-btn")

formulario.addEventListener("submit", e => {
    e.preventDefault();
    Swal.fire({ icon: 'success', background: 'rgb(11, 4, 15)', confirmButtonColor: 'rgb(60, 38, 70)', color: '#eeeeed', title: 'Enviado' })
}
);
