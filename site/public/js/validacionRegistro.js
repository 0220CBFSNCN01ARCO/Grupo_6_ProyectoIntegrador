console.log("hola soy Registro");

window.onload = () => {
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let repassword = document.getElementById("repassword");
  let form = document.getElementById("formRegistro");
  console.log(form);

  let errores = document.querySelector(".validacionLogin");

  form.addEventListener("submit", (e) => {
    console.log("dentro del evento");
    //e.preventDefault();
    let expReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let warning = "";
    let entrar = false;
    errores.innerHTML = " ";

    if (
      nombre.value == null ||
      nombre.value.length == 0 ||
      /^\s+$/.test(nombre)
    ) {
      warning += `Ingrese un nombre valido <br>`;
      entrar = true;
    }

    if (
      apellido.value == null ||
      apellido.value.length == 0 ||
      /^\s+$/.test(apellido)
    ) {
      warning += `Ingrese un apellido valido <br>`;
      entrar = true;
    }

    if (!expReg.test(email.value)) {
      warning += `El email no es valido <br>`;
      entrar = true;
    }

    if (password.value.length < 5) {
      warning += `Contraseña debe ser mayor a 6 <br>`;
      entrar = true;
    }
    if (repassword.value.length < 5) {
      warning += `Contraseña debe ser mayor a 6 <br>`;
      entrar = true;
    }

    if (password.value != repassword.value) {
      warning += `Contraseña deben ser iguales <br>`;
      entrar = true;
    }

    if (entrar) {
      errores.innerHTML = warning;
    } else {
      errores.innerHTML = "enviado";
    }
  });
};
