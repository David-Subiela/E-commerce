/* 
1. SE CAMBIA EL COLOR DEL BACKGROUND DEL TOGGLE SWITCH CON LA CLASE toggle-btn-active
2. CAMBIAMOS EL FORMULARIO DE RESPUESTA A REGISTRATE O INICIAR SESIÓN AL HACER CLICK EN EL BOTON
*/
document.addEventListener("DOMContentLoaded", function () {
  const registerBtn = document.querySelector(".toggle-btn-register");
  const sessionBtn = document.querySelector(".toggle-btn-session");
  const registerForm = document.querySelector(".ini-register");
  const sessionForm = document.querySelector(".ini-session");
  const sessionPassword = document.querySelector(".ini-session-contra");
  const passwordRemain = document.querySelector(".pass-remain");
  const toggleBtn = document.getElementById("btn");

  registerBtn.classList.add("toggle-btn-active");
  registerBtn.style.background = "#ffffff";

  registerBtn.addEventListener("click", function () {
    if (!registerBtn.classList.contains("toggle-btn-active")) {
      registerForm.style.display = "block";
      sessionForm.style.display = "none";
      toggleBtn.style.transform = "translate(0%)";
      sessionBtn.classList.remove("toggle-btn-active");
      sessionBtn.style.background = "";
      registerBtn.classList.add("toggle-btn-active");
      registerBtn.style.background = "#ffffff";
      sessionPassword.style.display = "none";
    }
  });

  sessionBtn.addEventListener("click", function () {
    if (!sessionBtn.classList.contains("toggle-btn-active")) {
      registerForm.style.display = "none";
      sessionForm.style.display = "block";
      toggleBtn.style.transform = "translate(96%)";
      registerBtn.classList.remove("toggle-btn-active");
      registerBtn.style.background = "";
      sessionBtn.classList.add("toggle-btn-active");
      sessionBtn.style.background = "#ffffff";
      sessionPassword.style.display = "none";
      /*  sessionForm.classList.add("toggle-btn-transi"); */
    }
  });

  passwordRemain.addEventListener("click", () => {
    registerForm.style.display = "none";
    sessionForm.style.display = "none";
    sessionPassword.style.display = "block";
  });
});
