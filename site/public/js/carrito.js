window.addEventListener("load", function () {
  console.log("hola soy carrito");
  cargarEventListeners();
});

const carrito = document.getElementById("carrito");
const producto = document.querySelector(".cuadroProducto");
const listaProducto = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
const checkOutCarritoBtn = document.getElementById("check-out");

function cargarEventListeners() {
  producto.addEventListener("click", comprarProducto);

  carrito.addEventListener("click", eliminarProducto);

  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

  leerLocalStorage();

  checkOutCarritoBtn.addEventListener("click", redireccionCheckOut);
}

function comprarProducto(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const producto = e.target.parentElement.parentElement;

    leerDatosProducto(producto);
  }
}

function leerDatosProducto(producto) {
  const infoProducto = {
    imagen: producto.querySelector("img").src,
    nombre: producto.querySelector("h1").textContent,
    precio: producto.querySelector("h3").textContent,
    id: producto.querySelector("h1").getAttribute("data-id"),
  };

  insertarCarrito(infoProducto);
}

function insertarCarrito(producto) {
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
  guardaProductoLocalStorage(producto);
}

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

function leerLocalStorageCompra() {
  console.log("dentro de leerLocalStorage");
  let productosLS;

  productosLS = obtenerProductoLocalStorage();

  productosLS.forEach((producto) => {
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
                            <input type="number" class= "form-control cantidad" min="1" value= ${producto.cantidad}
                        </td>
                        <td>
                            ${producto.precio} * ${producto.cantidad}
                        </td>

                        <td> 
                        <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
                        </td>
                        
                       `;
    listaCompra.appendChild(row);
  });
}
