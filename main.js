import { coffeeData } from "./data.js";

const selectedProducts = [];

selectedProducts.forEach((result) => {

const coffeeCard = document.createElement("div");
coffeeCard.classList = "card-body"

const content = `
 <div class="productCard">
                    
<img src="${result.img}">
                    
<div class="textProductContainer">

<h3>${result.productName}</h3>

<p>${result.productPrice}</p>

</div>
                    
<a href="" class="addButton">Añadir</a>

</div>
`;
selectedProducts.innerHTML += content;
});
// const coffeeImg = document.createElement("img")
// coffeeImg.src = coffeeData[1].img
// document.querySelector("body").appendChild(coffeeImg);

// document.getElementsByClassName("addButton").addEventListener("cli")

// addButton.addEventListener("click", () => {
//     divConteinArraySelectedProducts.innerHTML = "";
//   });

// const cardList = 
//   selectedProducts.map() => {
// coffeeContent.innerHTML += ``
// }

// Componente de carrito 


document.addEventListener('DOMContentLoaded', (event) => {
    const cartDrawerComponent = document.createElement("div");
    cartDrawerComponent.setAttribute("id", "cartDrawer");
    cartDrawerComponent.innerHTML = `
        <h2>Tu Carrito</h2>
        <!-- Aquí puedes agregar el contenido de tu carrito -->
        <p>Producto 1</p>
        <p>Producto 2</p>
        <p>Producto 3</p>
        <button id="closeCart">Cerrar</button>
    `;
    document.body.appendChild(cartDrawerComponent); // Asegúrate de agregar el cartDrawerComponent al documento

    const shoppingBagButtons = document.getElementsByClassName("shoppingBagIcon");

    Array.from(shoppingBagButtons).forEach(button => {
        button.addEventListener('click', () => {
            cartDrawerComponent.classList.add('open'); // Mostrar el carrito
        });
    });

    // Agregar funcionalidad para cerrar el carrito
    const closeCartButton = document.getElementById('closeCart');
    closeCartButton.addEventListener('click', () => {
        cartDrawerComponent.classList.remove('open'); // Ocultar el carrito
    });
});
// función para generar dynamic cards 

// función de salto de modal

 // Obtener el modal
 const modal = document.getElementById("myModal");

 // Obtener el botón de cierre
 const span = document.getElementsByClassName("close")[0];

 // Mostrar el modal después de 5 segundos
 setTimeout(() => {
     modal.style.display = "flex";
 }, 5000);

 // Cuando el usuario hace clic en (x), cerrar el modal
 span.onclick = function() {
     modal.style.display = "none";
 }

 // Cuando el usuario hace clic fuera del modal, cerrarlo
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }
