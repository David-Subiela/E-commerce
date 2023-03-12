import productos from "./productos.json" assert { type: "json" };

const flechaArriba = document.querySelector(".flecha-arriba");
const newsLetter = document.querySelector(".suscribete");
const esconderMenu = document.querySelector(".nav-icon-button");
const esconderIconos = document.querySelector(".nav-icons");
const reducirNombre = document.querySelector(".nombre-tienda");
var header = document.querySelector("header");

/* CUANDO CLICAS flechaArriba, VUELVES AL INICIO */
flechaArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* NO APARECE BOTÓN FLECHA, CUANDO ESTÁS EN EL INICIO */
window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    flechaArriba.style.display = "none";
  } else {
    flechaArriba.style.display = "block";
  }
  flechaArriba.hidden = this.scrollY < document.documentElement.clientHeight;
});

/* MISMO QUE ANTERIOR, PERO PARA SUSCRIBETE/MENU E ICONOS, 
SI ENCABEZADO PERSISTENTE, SINO NO*/
window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    newsLetter.style.display = "block";
    esconderMenu.style.display = "block";
    esconderIconos.style.display = "block";
    reducirNombre.style.fontSize = "45px";
  } else {
    newsLetter.style.display = "none";
    esconderMenu.style.display = "none";
    esconderIconos.style.display = "none";
    reducirNombre.style.fontSize = "20px";
  }
  newsLetter.hidden = this.scrollY < document.documentElement.clientHeight;
});

/* HACER QUE SE MANTENGA MENU AL HACER SCROLL*/
/* const apareceMenu = document.getElementById("icon-button-appear");
window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    console.log(apareceMenu.style.display);
    apareceMenu.style.display = "none";
  } else {
    apareceMenu.style.display = "block";
  }
  newsLetter.hidden = this.scrollY < document.documentElement.clientHeight;
}); */

/* ENCABEZADO PERSISTENTE CON SCROLL*/
window.addEventListener("scroll", function () {
  header.classList.toggle("abajo", window.scrollY > 0);
});

/* HACER QUE APAREZCAN IMAGENES AL CLICAR EN BOTÓN */
var ImageShow = document.getElementById("mostrarImagen");
function showHide() {
  ImageShow.style.display =
    ImageShow.style.display == "none" ? "inline" : "none";
}

/* BANNER COOKIES */
/* const botonAceptarCookies = document.getElementById("btn-aceptar-cookies");
const avisoCookies = document.getElementById("aviso-cookies");
const fondoAvisoCookies = document.getElementById("fondo-aviso-cookies");

dataLayer = [];

if (!localStorage.getItem("cookies-aceptadas")) {
  avisoCookies.classList.add("activo");
  fondoAvisoCookies.classList.add("activo");
} else {
  dataLayer.push({ event: "cookies-aceptadas" });
}

botonAceptarCookies.addEventListener("click", () => {
  avisoCookies.classList.remove("activo");
  fondoAvisoCookies.classList.remove("activo");

  localStorage.setItem("cookies-aceptadas", true);

  dataLayer.push({ event: "cookies-aceptadas" });
}); */

/* CAMBIAR DE COLOR AL HACER CLICK ICONO CORAZON: */
/* const cambioColor = document.querySelector("#heart-color");
const colorNo = document.querySelector(".corazon");

cambioColor.forEach((color) => {
  color.addEventListener("click", () => {
    colorNo.classList.toggle("red-heart");
  });
});

colorNo.addEventListener("click", () => {
  colorNo.classList.toggle("red-heart");
}); */

/*
let cambioColor = document.querySelector(".corazon");
let colorNo = document.querySelector("#heart-color");
cambioColor.forEach((e) => {
  e.addEventListener("click", () => {
    colorNo.classList.toggle("heart-color.red");
   e.style.backgroundColor = "red";
  });
});
*/

/* CONTENEDOR PRODUCTOS (IMAGENES)*/
const contenedorProductos = document.querySelector(".contenedor-uno");

productos.complementos.forEach((product) => {
  contenedorProductos.innerHTML += ` 
  <div class="contenedor-ampliar" id="${product.id}">
    <img src="${product.imagenes[0]}" alt="Bolsos" class="img-inicial" />
      <div>
        <span class="products"> ${product.name}</span><br />
        $${product.price}
      </div>
  </div>
  `;
});

const productosClick = document.querySelectorAll(".contenedor-ampliar");
function funcionalidadProductos() {
  productosClick.forEach((product) => {
    product.addEventListener("click", () => {
      contenedorProductos.innerHTML += `
      <div class="container-img">
        <a href="">&#60;</a>
        <img
          src="${productos.complementos[product.id - 1].imagenes[0]}"
          alt="${productos.complementos[product.id - 1].name}"
          class="img-show"
          id="imagens"
        />
        <a href=""> > </a>
        <div class="contenedor-x">
          <i class="fa-solid fa-x"></i>
        </div>
        <p class="copy"></p>
      </div>
      `;
      const cerrarImagen = document.querySelector(".contenedor-x");
      const modal = document.querySelector(".container-img");

      cerrarImagen.addEventListener("click", () => {
        /* console.log(modal); */
        modal.style.display = "none";
        funcionalidadProductos();
      });
    });
  });
}

funcionalidadProductos();

/* PENDIENTE REVISAR */
/* let productoSeleccionado = productos.complementos.filter((item) => {
  item.id == "1";
  console.log(item.id);
});
console.log(productoSeleccionado); */
