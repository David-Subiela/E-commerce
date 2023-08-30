const flechaArribaProducts = document.querySelector(".flecha-arriba-products");
const seccionesDestino = document.querySelectorAll(".seccion-destino-footer");

/* CUANDO CLICAS flechaArribaProducts, VUELVES AL INICIO */
flechaArribaProducts.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* NO APARECE BOTÓN FLECHA, CUANDO ESTÁS EN EL INICIO */
window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    flechaArribaProducts.style.display = "none";
  } else {
    flechaArribaProducts.style.display = "block";
  }
  flechaArribaProducts.hidden =
    this.scrollY < document.documentElement.clientHeight;

  // CAMBIA EL COLOR DE LA FLECHA SI ALCANZA LA SECCION DE DESTINO (ADAPTANDOSE A LA PANTALLA)
  seccionesDestino.forEach((seccion) => {
    const seccionPosicion = seccion.getBoundingClientRect().top;
    const ventanaAltura = window.innerHeight;
    if (
      (seccionPosicion < ventanaAltura && seccionPosicion > 0) ||
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
    ) {
      flechaArribaProducts.style.backgroundColor = "var(--dark-rose)";
    } else {
      flechaArribaProducts.style.backgroundColor = ""; // VUELVE AL COLOR ORIGINAL
    }
    if (window.scrollY > 129) {
      // CAMBIA EL COLOR DE LA FLECHA SI ALCANZA ESE SCROLL EN PANTALLA
      flechaArribaProducts.style.backgroundColor = "var(--dark-rose)";
    } else {
      flechaArribaProducts.style.backgroundColor = "";
    }
  });
});

// MODAL COMPOSICIÓN
/* ----------------------------------------------------------------------------------------------*/
// Botón que abre el modal:
const nextCompoBtn = document.getElementById("composition-items-compo");
// Cuando el usuario hace click en el botón, se abre la ventana:
nextCompoBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Ventana del modal:
const modal = document.getElementById("ventana-modal");
// Hace referencia al elemento <span> que tiene la X, el cual cierra la ventana:
const span = document.getElementsByClassName("close")[0];
// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click", function () {
  modal.style.display = "none";
});
// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// MODAL ENVIO
/* ----------------------------------------------------------------------------------------------*/
// Botón que abre el modal:
const nextEnvioBtn = document.getElementById("composition-items-envi");
// Cuando el usuario hace click en el botón, se abre la ventana:
nextEnvioBtn.addEventListener("click", () => {
  modalEnvi.style.display = "block";
});
// Ventana del modal:
const modalEnvi = document.getElementById("ventana-modal-envi");
// Hace referencia al elemento <span> que tiene la X, el cual cierra la ventana:
const spanEnvi = document.getElementsByClassName("close-envi")[0];
// Si el usuario hace click en la x, la ventana se cierra
spanEnvi.addEventListener("click", function () {
  modalEnvi.style.display = "none";
});
// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click", function (event) {
  if (event.target == modalEnvi) {
    modalEnvi.style.display = "none";
  }
});

// MODAL DEVOLUCIONES
/* ----------------------------------------------------------------------------------------------*/
// Botón que abre el modal:
const nextdDevolBtn = document.getElementById("composition-items-devol");
// Cuando el usuario hace click en el botón, se abre la ventana:
nextdDevolBtn.addEventListener("click", () => {
  modalDevol.style.display = "block";
});
// Ventana del modal:
const modalDevol = document.getElementById("ventana-modal-devol");
// Hace referencia al elemento <span> que tiene la X, el cual cierra la ventana:
const spanDevol = document.getElementsByClassName("close-devol")[0];
// Si el usuario hace click en la x, la ventana se cierra
spanDevol.addEventListener("click", function () {
  modalDevol.style.display = "none";
});
// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click", function (event) {
  if (event.target == modalDevol) {
    modalDevol.style.display = "none";
  }
});

// MODAL IMÁGENES AL HACER CLICK EN LA PRINCIPAL
/* ----------------------------------------------------------------------------------------------*/

//MOSTRAR MODAL AL HACER CLICK EN IMAGEN PRINCIPAL
const imagesModal = document.querySelector(".modal-gallery__background");
const closeModalBtn = document.querySelector(".modal-gallery__close");

imageContainer.addEventListener("click", () => {
  /* if (window.innerWidth >= 1115) { */
  imagesModal.style.display = "grid";
  /* } */
});

closeModalBtn.addEventListener("click", () => {
  imagesModal.style.display = "none";
});

//CAMBIAR IMAGENES PRINCIPALES DES DE SUBIMAGENES EN EL MODAL
let modalthumbnails = document.querySelectorAll(".modal-gallery-thumnail");
const modalImageContainer = document.querySelector(
  ".modal-gallery__image-container"
);
modalthumbnails = [...modalthumbnails];

modalthumbnails.forEach((modalthumbnail) => {
  modalthumbnail.addEventListener("click", (event) => {
    console.log(event.target.id.slice(-1));
    modalImageContainer.style.backgroundImage = `url('/assets/img/fotos/cartera/Bolsos${event.target.id.slice(
      -1
    )}.png')`;
  });
});

// CAMBIAR IMAGEN PRINCIPAL DESDE LAS FLECHAS DEL MODAL
const previusModalBtn = document.querySelector(".modal-gallery__previus");
const nextModalBtn = document.querySelector(".modal-gallery__next");

nextModalBtn.addEventListener("click", () => {
  changeNextImage(modalImageContainer);
});

previusModalBtn.addEventListener("click", () => {
  changePreviusImage(modalImageContainer);
});
