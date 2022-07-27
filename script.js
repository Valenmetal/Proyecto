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

let productList = [
  {
    id: 1,
    name: "Nike Air Max",
    description: "Nike Air Max blancas",
    src: "assets/img/Air-Max1.png",
    category: "male",
    price: 9000,
  },
  {
    id: 2,
    name: "Nike Air Jordan",
    description: "Nike Air Jordan rojas",
    src: "assets/img/Air-Jordan2.png",
    category: "male",
    price: 9000,
  },
  {
    id: 3,
    name: "Nike Air Jordan",
    description: "Nike Air Jordan cromadas",
    src: "assets/img/Air-Jordan3.png",
    category: "male",
    price: 6000,
  },
  {
    id: 4,
    name: "Nike Air Max",
    description: "Nike Air Max Negras",
    src: "assets/img/Air-Max2.png",
    category: "female",
    price: 5000,
  },
  {
    id: 5,
    name: "Nike Air Max",
    description: "Nike Air Max gris",
    src: "assets/img/Air-Max3.png",
    category: "male",
    price: 8000,
  },
  {
    id: 6,
    name: "Nike Air Zoom",
    description: "Nike Air Zoom Blancas",
    src: "assets/img/Air-Zoom1.png",
    category: "female",
    price: 6000,
  },
  {
    id: 7,
    name: "Nike Venture",
    description: "Nike Air Venture azules",
    src: "assets/img/Venture1.png",
    category: "male",
    price: 8000,
  },
  {
    id: 8,
    name: "Nike Next",
    description: "Nike Next Nature",
    src: "assets/img/Next-Nature1.png",
    category: "female",
    price: 8000,
  }
];

const productMaker = () => {
  productList.forEach((e) => {
    let div = document.createElement("div");
    div.className = "product";
    div.setAttribute("id", e.id);
    div.innerHTML = `<p class="epigrafe">${e.name}</p>
                        <img alt="${e.description}" src="${e.src}" class="img-product"><button class="addCart">Agregar al carrito</button>
                        <p class="epigrafe">$${e.price}</p>
                        `;
    document.querySelector(".products").appendChild(div);
  });
};

productMaker();
