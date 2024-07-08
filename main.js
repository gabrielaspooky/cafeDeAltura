import { coffeeData } from "./data.js";

let coffeeItemsArrayHome = [];
let coffeeItemsArrayShop = [];

// función para generar dynamic cards 

const container = document.getElementsByClassName("sectionNovedadesWrapper")[0]; 

    coffeeData.forEach((product) => {
        const coffeeCard = document.createElement("div");
        coffeeCard.classList.add("productCard");

        const content = `
            <img src="${product.img}" alt="Imagen de ${product.productName}">
            <div class="textProductContainer">
                <h3>${product.productName}</h3>
                <p>${product.coffeePrice}€</p>
            </div>
            <a href="" class="addButton">Añadir</a>
        `;

        coffeeCard.innerHTML = content;
        container.appendChild(coffeeCard);
    });

// Componente de carrito 


document.addEventListener('DOMContentLoaded', (event) => {
    const cartDrawerComponent = document.createElement("div");
    cartDrawerComponent.setAttribute("id", "cartDrawer");
    cartDrawerComponent.innerHTML = `
        <h2>Mi cesta</h2>
        <p>Café 1</p>
        <p>Café 2</p>
        <p>Café 3</p>
        <button id="closeCart">Cerrar</button>
        <button  id="goToCheckout">
        <a href="./checkout.html">
        Checkout
        </a>
        <button>
    `;
    document.body.appendChild(cartDrawerComponent); 

    const shoppingBagButtons = document.getElementsByClassName("shoppingBagIcon");

    Array.from(shoppingBagButtons).forEach(button => {
        button.addEventListener('click', () => {
            cartDrawerComponent.classList.add('open'); // Mostrar el carrito
        });
    });

    // funcionalidad para cerrar el carrito
    const closeCartButton = document.getElementById('closeCart');
    closeCartButton.addEventListener('click', () => {
        cartDrawerComponent.classList.remove('open'); // Ocultar el carrito
    });
});

// función de salto de modal


 const modal = document.getElementById("myModal");

 
 const span = document.getElementsByClassName("close")[0];


 setTimeout(() => {
     modal.style.display = "flex";
 }, 5000);


 span.onclick = function() {
     modal.style.display = "none";
 }


 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }


//  Crea dos arrays vacíos.
//  Luego crea el condicional para validar el contenido del localStorage. Una vez con el valor del array, crea el forEach para recorrer el array.
//  Hacer esto en la página principal y en la página de products.
//  You
//  8:12 PM
//  Condicional dentro del forEach con array.lenght






