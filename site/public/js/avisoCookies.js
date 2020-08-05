document.addEventListener("DOMContentLoaded", () => {
    console.log("cookies")
  let cookies = () => {
      
    //======================================================================
    // COOKIES
    //======================================================================

    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------
    let seccionCookie = document.querySelector(".cookies");
    let cookieSi = document.querySelector(".cookies__boton--si");
    let cookieNo = document.querySelector(".cookies__boton--no");

    //-----------------------------------------------------
    // Funciones
    //-----------------------------------------------------

    /**
     * Método que oculta la sección de Cookie para siempre
     */
    function ocultarCookie() {
      // Borra la sección de cookies en el HTML
      seccionCookie.remove();
    }

    /**
     * Método que marca las cookies como aceptadas
     */
    function aceptarCookies() {
      // Oculta el HTML de cookies
      ocultarCookie();
      // Guarda que ha aceptado
      localStorage.setItem("cookie", true);
      // Tu codigo a ejecutar si aceptan las cookies
      ejecutarSiAcepta();
    }

    /**
     * Método que marca las cookies como denegadas
     */
    function denegarCookies() {
      // Oculta el HTML de cookies
      ocultarCookie();
      // Guarda que ha aceptado
      localStorage.setItem("cookie", false);
    }

    /**
     * Método que ejecuta tu código si aceptan las cookies
     */
    function ejecutarSiAcepta() {
      /////////////////// Tu código ////////////////
      ////////////  ¿Google Analítics? /////////////
    }

    /**
     * Método que inicia la lógica
     */
    function iniciar() {
      // Comprueba si en el pasado el usuario ha marcado una opción
      if (localStorage.getItem("cookie") !== null) {
        if (localStorage.getItem("cookie") === "true") {
          // Aceptó
          aceptarCookies();
        } else {
          // No aceptó
          denegarCookies();
        }
      }
    }

    //-----------------------------------------------------
    // Eventos
    //-----------------------------------------------------
    cookieSi.addEventListener("click", aceptarCookies, false);
    cookieNo.addEventListener("click", denegarCookies, false);

    return {
      iniciar: iniciar,
    };
  };

  // Activa el código. Comenta si quieres desactivarlo.
  cookies().iniciar();
});
