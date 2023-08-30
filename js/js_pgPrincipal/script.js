const flechaArriba = document.querySelector(".flecha-arriba");
const seccionesDestino = document.querySelectorAll(".seccion-destino");

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

  // CAMBIA EL COLOR DE LA FLECHA SI ALCANZA LA SECCION DE DESTINO (ADAPTANDOSE A LA PANTALLA)
  seccionesDestino.forEach((seccion) => {
    const seccionPosicion = seccion.getBoundingClientRect().top;
    const ventanaAltura = window.innerHeight;
    if (
      (seccionPosicion < ventanaAltura && seccionPosicion > 0) ||
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
    ) {
      flechaArriba.style.backgroundColor = "var(--dark-rose)";
    } else {
      flechaArriba.style.backgroundColor = ""; // VUELVE AL COLOR ORIGINAL
    }
    if (window.scrollY > 1571) {
      // CAMBIA EL COLOR DE LA FLECHA SI ALCANZA ESE SCROLL EN PANTALLA
      flechaArriba.style.backgroundColor = "var(--dark-rose)";
    } else {
      flechaArriba.style.backgroundColor = "";
    }
  });
});

/* ----------------------------------------------------------------------------------------------*/
/*                                       
MODAL */
/* ----------------------------------------------------------------------------------------------*/
// Botón que abre el modal:
const resultadoBtn = document.getElementById("cancelar-suscri");
// Cuando el usuario hace click en el botón, se abre la ventana:
resultadoBtn.addEventListener("click", () => {
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

// Hace referencia al botón OK, el cual cierra la ventana:
const btnOK = document.querySelector(".btn-ok");
// Si el usuario hace click en el botón OK, la ventana se cierra
btnOK.addEventListener("click", () => {
  modal.style.display = "none";
});

/* ----------------------------------------------------------------------------------------------*/
/* ----------------------------------------------------------------------------------------------*/

/* ABRIR ELEMENTOS ITEM EN NUEVA PESTAÑA */

// -------------------------------------------------------------
/*
const btnsDetails = document.querySelectorAll(".btn-details");

// AÑADIR UN EVENTO CLICK AL BOTÓN (VER MÁS)
btnsDetails.forEach((btn) => {
  btn.addEventListener("click", function () {
    // OBTENER EL DIV QUE CONTIENE LA INFORMACIÓN ADICIONAL
    const detailsDiv = this.parentNode.querySelector(".card-details");
    // ALTERNAR SU VISIBILIDAD AL HACER CLICK EN EL BOTÓN
    detailsDiv.classList.toggle("show-details");
  });
});
*/
