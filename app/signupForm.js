import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./firebase.js";

const signupForm = document.querySelector("#ini-register");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  const name = signupForm["signup-name"].value;
  const surname = signupForm["signup-apellido"].value;

  /* const privacity = signupForm["signup-password"].value; */

  /* PARA CONSIDERAR LOS ERRORES: */
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      name,
      surname
    );
    console.log(userCredentials);
  } catch (error) {
    console.log(error);
  }
});
