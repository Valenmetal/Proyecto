/* let salir = "N";

const calcPrecio = () => {
    while (salir == "N" || salir == "n") {

        let opcion = prompt("Precio en Dolares o Pesos?")

        if (opcion == "Pesos" || opcion == "pesos") {
            let precioProd = prompt("Precio de producto en USD");

            let dolar = prompt("Precio del dolar");

            precioProd *= dolar;
            precioProd *= 1.2;

        }else if (opcion == "Dolares" || opcion == "dolares"){

            let precioProd = prompt("Precio de producto");
            
            precioProd *= 1.2;

        }
        
    }
    alert(`Precio: $${precioProd}`)
    salir = prompt("Desea salir? S/N");
}

calcPrecio();
 */

/* const products = [
    { name: "mouse", price: 15 },
    { name: "keyboard", price: 35 },
    { name: "monitor", price: 100 }
]

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = parseInt(price);
    }

}

const newProduct = (n, p) => {
    newProd = new Product(n, p);
    products.push(newProd);
}


let salir = "N";

const calcPrecio = () => {
    while (salir == "N" || salir == "n") {

        let opcion = prompt("Que desea hacer? 'VER': para ver precio de un producto / 'NUEVO': para agregar un nuevo producto")

        if (opcion == "ver" || opcion == "Ver" || opcion == "VER") {
            let prodName = prompt("Nombre del producto");

            let nameSearch = products.find(p => p.name == prodName)
            if (nameSearch) {
                alert(`Precio de ${prodName}: $${nameSearch.price}`);

            } else {
                alert("Producto no encontrado");
            }

        } else if (opcion == "nuevo" || opcion == "Nuevo" || opcion == "NUEVO") {
            let prodName = prompt("Nombre del producto");
            let prodPrice = prompt("Precio del producto");

            let dolar = 280;

            prodPrice *= dolar;
            prodPrice *= 1.2;

            newProduct(prodName, prodPrice);

            alert("Agregado!")
        } else {
            alert("Introduzca un valor valido")
        }
        salir = prompt("Desea salir? ✔️S/N❌");
    }

}

calcPrecio(); */

class Producto {
  constructor(id, name, description, src, category, price) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.description = description;
    this.src = src;
    this.price = price;
  }
}

let prod1 = new Producto("1", "Nike Air Max", "Nike Air Max blancas", "assets/img/Air-Max1.png", "male", 9000);
let prod2 = new Producto("2", "Nike Air Jordan", "Nike Air Jordan rojas", "assets/img/Air-Jordan2.png", "male", 9000);
let prod3 = new Producto("3", "Nike Air Jordan", "Nike Air Jordan cromadas", "assets/img/Air-Jordan3.png", "male", 6000);
let prod4 = new Producto("4", "Nike Air Max", "Nike Air Max Negras", "assets/img/Air-Max2.png", "female", 5000);
let prod5 = new Producto("5", "Nike Air Max", "Nike Air Max gris", "assets/img/Air-Max3.png", "male", 8000);
let prod6 = new Producto("6", "Nike Air Zoom", "Nike Air Zoom Blancas", "assets/img/Air-Zoom1.png", "female", 6000);
let prod7 = new Producto("7", "Nike Venture", "Nike Air Venture azules", "assets/img/Venture1.png", "male", 8000);
let prod8 = new Producto("8", "Nike Next", "Nike Next Nature", "assets/img/Next-Nature1.png", "female", 8000);

let productList = [];
productList.push(prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8);

const productMaker = () => {
  productList.forEach((e) => {
    let div = document.createElement("div");
    div.className = "product";
    div.setAttribute("id", e.id);
    div.innerHTML = `<p class="epigrafe" id="name">${e.name}</p>
                        <img alt="${e.description}" src="${e.src}" class="img-product"><button class="addCart">Agregar al carrito</button>
                        <p class="epigrafe" id="price">$${e.price}</p>
                        `;
    document.querySelector(".products").appendChild(div);
  });
};

productMaker();
