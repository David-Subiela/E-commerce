// CAMBIAR IMAGENES CUANDO SE PRESIONEN LAS FLECHA
/* ----------------------------------------------------------------------------------------------*/
const imageContainer = document.querySelector(".gallery__image-container");
const previOusGalleryBtn = document.querySelector(".gallery__previus");
const nextGalleryBtn = document.querySelector(".gallery__next");
let imgIndex = 0;

// CAMBIAR IMAGEN AL PRESIONAR FLECHA DERECHA
nextGalleryBtn.addEventListener("click", () => {
  changeNextImage(imageContainer);
});

function changeNextImage(imgContainer) {
  if (imgIndex === 3) {
    imgIndex = 1;
  } else {
    imgIndex++;
  }
  imgContainer.style.backgroundImage = `url('/assets/img/fotos/cartera/Bolsos${imgIndex}.png')`;
}

// CAMBIAR IMAGEN AL PRESIONAR FLECHA IZQUIERDA
previOusGalleryBtn.addEventListener("click", () => {
  changePreviusImage(imageContainer);
});

function changePreviusImage(imgContainer) {
  if (imgIndex === 1) {
    imgIndex = 3;
  } else {
    imgIndex--;
  }
  imgContainer.style.backgroundImage = `url('/assets/img/fotos/cartera/Bolsos${imgIndex}.png')`;
}

//CAMBIAR IMAGENES CUANDO SE PRESIONEN LAS PROPIAS IMAGENES
/* ----------------------------------------------------------------------------------------------*/
let thumbnails = document.querySelectorAll(".gallery-thumnail");
thumbnails = [...thumbnails];

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (event) => {
    /* console.log(event.target.id); */
    imageContainer.style.backgroundImage = `url('/assets/img/fotos/cartera/Bolsos${event.target.id}.png')`;
  });
});

// CONTADOR ARTICULOS:
/* ----------------------------------------------------------------------------------------------*/
const minusContador = document.querySelector(".input__minus");
const contadorSuma = document.querySelector(".input__number");
const plusContador = document.querySelector(".input__plus");
let count = sessionStorage.getItem("contador") || 0;

/* OTRO EJEMPLO: QUE EL CONTADOR SUME POSITIVAMENTE
plusContador.addEventListener("click", () => {
  count++;
  contadorSuma.value = count;
});
QUE EL CONTADOR RESTE HASTA LLEGAR A 0
minusContador.addEventListener("click", () => {
  if (count > 0) {
    count--;
    contadorSuma.value = count;
  } else {
    contadorSuma.value = 0;
  }
}); */

// Actualiza el valor del contador en la página
const actualizarContador = () => {
  contadorSuma.value = count;
};

// Guarda el valor del contador en sessionStorage
const guardarContador = () => {
  sessionStorage.setItem("contador", count);
};

// Incrementa el contador cuando se hace clic en el botón "+"
plusContador.addEventListener("click", () => {
  count++;
  actualizarContador();
  guardarContador();
});

// Decrementa el contador cuando se hace clic en el botón "-"
minusContador.addEventListener("click", () => {
  if (count > 0) {
    count--;
    actualizarContador();
    guardarContador();
  } else {
    contadorSuma.value = 0;
  }
});

// Actualiza el valor del contador al cargar la página
actualizarContador();
