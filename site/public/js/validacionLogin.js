console.log("hola soy validacion");

window.onload = () => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let formulario = document.querySelector(".formLogin");

  let errores = document.querySelector(".validacionLogin");

  formulario.addEventListener("submit", (e) => {
    console.log("dentro del evento");
    //e.preventDefault();
    let expReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let warning = "";
    let entrar = false;
    errores.innerHTML = "";

    if (!expReg.test(email.value)) {
      warning += `El email no es valido <br>`;
      entrar = true;
    }

    if (password.value.length < 3) {
      warning += `Contraseña debe ser mayor a 4 <br>`;
      entrar = true;
    }

    if (entrar) {
      errores.innerHTML = warning;
    } else {
      errores.innerHTML = "enviado";
    }
  });
};
