window.addEventListener("load", function () {
  console.log("hola soy comprar");
  cargarEventos();
});

const listaCompra = document.querySelector("#lista-compra");
const carrito1 = document.querySelector("#carrito1");

function cargarEventos() {
  document.addEventListener("DOMContentLoaded", leerLocalStorageCompra());
  carrito1.addEventListener("click", eliminarProducto);
  calcularTotal();
}

function leerLocalStorageCompra() {
  console.log("dentro de leerLocalStorage");
  let productosLS;

  productosLS = obtenerProductoLocalStorage();

  productosLS.forEach((producto) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                        <td> 
                            <img src="${producto.imagen}" width = 100>
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
    listaCompra.appendChild(row);
  });
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

function calcularTotal() {
  let precio = 0;

  let subTotal = 0;

  productosLS = this.obtenerProductoLocalStorage();
  for (let index = 0; index < productosLS.length; index++) {
    precio = Number(productosLS[index].precio);
    subTotal = subTotal + precio;
  }

  document.getElementById("subtotal").innerHTML += subTotal;

  document.getElementById("total").innerHTML += subTotal;
}
