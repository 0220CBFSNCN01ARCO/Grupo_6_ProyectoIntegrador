import React from "react";
import Filas from "./Filas";

export default function Table() {
  return (
    <div>
      <h1 class="h3 mb-2 text-gray-800">All the products in the Database</h1>
      <div class="card shadow mb-4">
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Categories</th>
                  <th>Colors</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Categories</th>
                  <th>Colors</th>
                  <th>Stock</th>
                </tr>
              </tfoot>
              <tbody>
                <Filas
                  nombre="Tiger Nixon"
                  descripcion="System Architect"
                  precio="$320,800"
                  stock="245"
                  color="blue"
                  categoria="categoria 01"
                ></Filas>
                <Filas
                  nombre="FACUNDO MAGRA"
                  descripcion="FULL STACK"
                  precio="$5000,800"
                  stock="300"
                  color="green"
                  categoria="categoria 02"
                ></Filas>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
