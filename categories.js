let productList = [
  {
    id: 1,
    name: "Nike Air Max",
    description: "Nike Air Max blancas",
    src: "/assets/img/Air-Max1.png",
    category: "male",
    price: 9000,
    numberOfUnits: 1,
  },
  {
    id: 2,
    name: "Nike Air Jordan",
    description: "Nike Air Jordan rojas",
    src: "/assets/img/Air-Jordan2.png",
    category: "male",
    price: 9000,
    numberOfUnits: 1,
  },
  {
    id: 3,
    name: "Nike Air Jordan",
    description: "Nike Air Jordan cromadas",
    src: "/assets/img/Air-Jordan3.png",
    category: "male",
    price: 6000,
    numberOfUnits: 1,
  },
  {
    id: 4,
    name: "Nike Air Max",
    description: "Nike Air Max Negras",
    src: "/assets/img/Air-Max2.png",
    category: "female",
    price: 5000,
    numberOfUnits: 1,
  },
  {
    id: 5,
    name: "Nike Air Max",
    description: "Nike Air Max gris",
    src: "/assets/img/Air-Max3.png",
    category: "male",
    price: 8000,
    numberOfUnits: 1,
  },
  {
    id: 6,
    name: "Nike Air Zoom",
    description: "Nike Air Zoom Blancas",
    src: "/assets/img/Air-Zoom1.png",
    category: "female",
    price: 6000,
    numberOfUnits: 1,
  },
  {
    id: 7,
    name: "Nike Venture",
    description: "Nike Air Venture azules",
    src: "/assets/img/Venture1.png",
    category: "male",
    price: 8000,
    numberOfUnits: 1,
  },
  {
    id: 8,
    name: "Nike Next",
    description: "Nike Next Nature",
    src: "/assets/img/Next-Nature1.png",
    category: "female",
    price: 8000,
    numberOfUnits: 1,
  }
];

let categoryList = [
  {
    id: 1,
    name: "Hombre",
    description: "Categoria de Hombre",
    src: "../assets/img/Air-Max1.png",
    category: "male"
  },
  {
    id: 2,
    name: "Mujer",
    description: "Categoria de Mujer",
    src: "../assets/img/Air-Zoom1.png",
    category: "female"
  }
];

const categoryMaker = () => {
  categoryList.forEach((e) => {
    let div = document.createElement("div");
    div.className = "category";
    div.setAttribute("id", e.id);
    div.innerHTML = `<a href="#" id="${e.id}"><img alt="${e.description}" src="${e.src}" class="img-category"></a>
                          <p class="epigrafe">${e.name}</p>
                          `;

    document.querySelector(".categories").appendChild(div);
  });
};
categoryMaker();



                /* -----Male----- */

let male = productList.filter((e) => e.category == "male");
let mId = document.getElementById("1");

mId.onclick = () => {
  document.querySelector(".categories").className = "products";
  document.querySelector(".products").innerHTML = "";
  male.forEach((e) => {
    let div = document.createElement("div");
    div.className = "product";
    div.setAttribute("id", e.id);
    div.innerHTML += `  <p class="epigrafe">${e.name}</p>
                        <img alt="${e.description}" src="${e.src}" class="img-product">
                        <p class="epigrafe">$${e.price}</p>
                          `;
    document.querySelector(".products").appendChild(div);
  });
};


                /* -----Female----- */

let female = productList.filter((e) => e.category == "female");
let fId = document.getElementById("2");

fId.onclick = () => {
  document.querySelector(".categories").className = "products";
  document.querySelector(".products").innerHTML = "";
  female.forEach((e) => {
    let div = document.createElement("div");
    div.className = "product";
    div.setAttribute("id", e.id);
    div.innerHTML += `<p class="epigrafe">${e.name}</p>
                        <img alt="${e.description}" src="${e.src}" class="img-product">
                          <p class="epigrafe">$${e.price}</p>
                          `;
    document.querySelector(".products").appendChild(div);
  });
};
