import React, { Component } from "react";
import Widget from "./Widget";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidadProductos: "0",
      cantidadUsuarios: "0",
      nombreUsuario: "",
      ultimoProducto: "",
      ultimoNombre: "",
    };
  }

  apiCall(url, consecuencia) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => consecuencia(data))
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.apiCall("http://localhost:3030/api/product/", this.mostrarProductos);
    this.apiCall("http://localhost:3030/api/user", this.mostrarUsuarios);
    this.apiCall(
      "http://localhost:3030/api/product/11",
      this.mostrarUltimoProducto
    );
  }

  mostrarProductos = (data) => {
    console.log(data);
    console.log(data.data.length);
    this.setState({
      cantidadProductos: data.data.length,
    });
  };

  mostrarUsuarios = (data) => {
    console.log(data);
    console.log(data.length);
    console.log(data.apellido);
    this.setState({
      cantidadUsuarios: data.length,
      nombreUsuario: data.apellido,
    });
  };

  mostrarUltimoProducto = (data) => {
    console.log(data);
    console.log(data.data.nombre);
    this.setState({
      ultimoNombre: data.data.nombre,
      ultimoProducto: data.data.descripcion,
    });
  };

  render() {
    let contenido;

    if (this.state.cantidadProductos == "0") {
      contenido = <p>NO HAY PRODUCTOS</p>;
    } else {
      contenido = <p> {this.state.cantidadProductos}</p>;
    }

    let contenidoUsuarios;
    let contenidoNombre;
    let contenidoUltimoProducto;
    let contenidoUltimoProductoNombre;

    if (this.state.cantidadUsuarios == "0") {
      contenidoUsuarios = <p>NO HAY USUARIOS</p>;
    } else {
      contenidoUsuarios = <p> {this.state.cantidadUsuarios}</p>;
      contenidoNombre = <p>{this.state.nombreUsuario}</p>;
    }

    if (this.state.ultimoProducto == "") {
      contenido = <p>NO ULTIMO PRODUCTOS</p>;
    } else {
      contenidoUltimoProducto = <p> {this.state.ultimoProducto}</p>;
      contenidoUltimoProductoNombre = <p> {this.state.ultimoNombre}</p>;
    }
    return (
      <div id="content">
        {/* Topbar */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          {/* Sidebar Toggle (Topbar) */}
          <button
            id="sidebarToggleTop"
            className="btn btn-link d-md-none rounded-circle mr-3"
          >
            <i className="fa fa-bars" />
          </button>
          {/* Topbar Navbar */}
          <ul className="navbar-nav ml-auto">
            {/* Nav Item - Alerts */}
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="alertsDropdown"
              >
                <i className="fas fa-bell fa-fw" />
                {/* Counter - Alerts */}
                <span className="badge badge-danger badge-counter">3+</span>
              </a>
            </li>
            {/* Nav Item - Messages */}
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="messagesDropdown"
              >
                <i className="fas fa-envelope fa-fw" />
                {/* Counter - Messages */}
                <span className="badge badge-danger badge-counter">7</span>
              </a>
            </li>
            <div className="topbar-divider d-none d-sm-block" />
            {/* Nav Item - User Information */}
            <li className="nav-item dropdown no-arrow">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="userDropdown"
              >
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  ADMNISTRADOR
                </span>
                <img
                  className="img-profile rounded-circle"
                  src={"assets/images/dummy-avatar.jpg"}
                  width={60}
                />
              </a>
            </li>
          </ul>
        </nav>
        {/* End of Topbar */}
        {/* Begin Page Content */}
        <div className="container-fluid">
          {/* Page Heading */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>
          {/* Content Row */}
          <div className="row">
            {/* Amount of Products in DB */}
            <Widget
              titulo="CANTIDAD DE PRODUCTOS"
              numero={contenido}
              color="green"
            ></Widget>
            {/* $$$ of all products in DB */}
            <Widget
              titulo="CANTIDAD DE USUARIOS"
              numero={contenidoUsuarios}
              color="yellow"
            ></Widget>
            {/* Amount of users in DB */}

            {/* Content Row */}
            <div className="row">
              {/* Last Product in DB */}
              <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Last product in Data Base
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                        style={{ width: "25rem" }}
                        src="assets/images/product_dummy.svg"
                        alt="image dummy"
                      />
                    </div>
                    <div>{contenidoUltimoProductoNombre}</div>

                    {contenidoUltimoProducto}
                    <a target="_blank" rel="nofollow" href="/">
                      View product detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Categories in DB */}
            <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Categories in Data Base
                  </h6>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-info text-white shadow">
                        <div className="card-body">OFERTAS</div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-info text-white shadow">
                        <div className="card-body">DESTACADOS</div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-info text-white shadow">
                        <div className="card-body">NUEVOS</div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-info text-white shadow">
                        <div className="card-body">BAJAS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </div>
    );
  }
}
