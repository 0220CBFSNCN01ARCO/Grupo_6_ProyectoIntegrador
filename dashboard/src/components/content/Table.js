import React from "react";
import Filas from "./Filas";

export default function Table() {
  return (
    <div>
      <h1 class="h3 mb-2 text-gray-800">Ultimos Productos</h1>
      <div class="card shadow mb-4">
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="80%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Precio</th>
                  <th>Categoria</th>
                  <th>Color</th>
                  <th>Stock</th>
                </tr>
              </thead>
              
              <tbody>
                <Filas
                  nombre="Galaxy S20"
                  descripcion="CPU Alta"
                  precio="$50000"
                  stock="20"
                  color="Blanco"
                  categoria="Destacados"
                ></Filas>
                <Filas
                  nombre="Motorola L30"
                  descripcion="Cámara dual"
                  precio="$120000"
                  stock="34"
                  color="Negro"
                  categoria="Oferta"
                ></Filas>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
