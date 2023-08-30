let menu = document.getElementById("encabezado-completo");
let altura = menu.offsetTop;

window.addEventListener("scroll", function () {
  if (window.scrollY > altura) {
    menu.classList.add("fixed");
  } else {
    menu.classList.remove("fixed");
  }
});

/* ------------------------------------------------------------------------ */
/*                              NOTA
/* ------------------------------------------------------------------------ */
/* SABER/CALCULAR LA DISTANCIA DES DEL TOP DE LA PÁGINA HASTA DONDE ESTá SITUADA 
   LA VARIABLE MENU, en este caso:
                        alert(menu.offsetTop); */
/* SABER/CALCULAR LA DISTANCIA DE SCROLL QUE HAS HECHO EN LA PÁGINA
                        alert(window.scrollY); */

/* ------------------------------------------------------------------------ */
/*       DESAPARECE MENU E ICONOS, SI ENCABEZADO PERSISTENTE, SINO NO
/* ------------------------------------------------------------------------ */

const esconderIconos = document.querySelector(".nav-icons");
const esconderMenu = document.querySelector(".menu-encab");
const esconderLogo = document.querySelector(".kamile-logo");
const apareceMenu = document.querySelector(".button-tooltip");
const apareceCarro = document.querySelector(".carro-compra-oculto");
const apareceEscritoMenu = document.querySelector(".button-tooltip-menu");

window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    esconderIconos.style.display = "block";
    esconderMenu.style.display = "flex";
    esconderLogo.style.width = "150px";
    apareceMenu.style.display = "none";
    apareceCarro.style.display = "none";
    apareceEscritoMenu.style.display = "none";
  } else {
    esconderIconos.style.display = "none";
    esconderMenu.style.display = "none";
    esconderLogo.style.width = "100px";
    apareceMenu.style.display = "flex";
    apareceCarro.style.display = "flex";
    apareceEscritoMenu.style.display = "block";
  }
});
