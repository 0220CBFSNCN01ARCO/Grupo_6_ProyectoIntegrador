window.addEventListener("load", function () {
  console.log("soy mostrarcarrito.js");

  cargarEventListeners();
});

//SE DEFINEN CUALES SON LOS ELEMENTOS CAPTURADOS PARA TRABAJAR.

const carrito = document.getElementById("carrito");
const listaProducto = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
const checkOutCarritoBtn = document.getElementById("check-out");

//SE DEFINE UNA FUNCION QUE CONTIENEN TODOS LOS EVENTOS DE ESOS ELEMENTOS CAPTURADOS ANTERIORMENTE.
function cargarEventListeners() {
  leerLocalStorage();
  carrito.addEventListener("click", eliminarProducto);
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
  checkOutCarritoBtn.addEventListener("click", redireccionCheckOut);
}

//SE DEFINENE TODAS LAS FUNCIONES.

function eliminarProducto(e) {
  e.preventDefault();

  let producto, productoId;
  if (e.target.classList.contains("borrar-producto")) {
    e.target.parentElement.parentElement.remove();
    producto = e.target.parentElement.parentElement;
    productoId = producto.querySelector("a").getAttribute("data-id");
  }
  eliminarProductoLocalStorage(productoId);
}

function vaciarCarrito(e) {
  //esta forma es menos performante
  //listaProducto.innerHTML="";

  while (listaProducto.firstChild) {
    listaProducto.removeChild(listaProducto.firstChild);
  }

  vaciarLocalStorage();
}

function guardaProductoLocalStorage(producto) {
  let productos;

  productos = obtenerProductoLocalStorage();

  productos.push(producto);

  localStorage.setItem("productos", JSON.stringify(productos));
}

//comprueba que hay elementos en local storage

function obtenerProductoLocalStorage() {
  let productosLS;

  if (localStorage.getItem("productos") === null) {
    productosLS = [];
  } else {
    productosLS = JSON.parse(localStorage.getItem("productos"));
  }
  return productosLS;
}

function leerLocalStorage() {
  console.log("dentro de leerLocalStorage");
  let productosLS;

  productosLS = obtenerProductoLocalStorage();

  productosLS.forEach((producto) => {
    const itemCarro = document.querySelector(".itemCarro a");
    console.log(itemCarro);
    productosLS = JSON.parse(localStorage.getItem("productos"));
    itemCarro.innerHTML = `CART (${productosLS.length})`;
    const row = document.createElement("tr");
    row.innerHTML = `
                        <td> 
                            <img src="${producto.imagen}" width = 100%>
                        </td>
                        <td> 
                            ${producto.nombre}
                        </td>
                        <td> 
                            ${producto.precio}
                        </td>
                        <td> 
                        <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
                        </td>
                        
                       `;
    listaProducto.appendChild(row);
  });
}

function eliminarProductoLocalStorage(producto) {
  let productoLS;

  productoLS = obtenerProductoLocalStorage();

  productoLS.forEach(function (productoLS1, index) {
    if (productoLS1.id === producto) {
      productoLS.splice(index, 1);
    }
  });

  localStorage.setItem("productos", JSON.stringify(productoLS));
}

function vaciarLocalStorage() {
  localStorage.clear();
  console.log("se vacio el carro");
}

function redireccionCheckOut() {
  console.log("redeccion");
  window.location = "/product/cart";
}
