import React from 'react'
import Widget from './Widget'

export default function Content() {
    return (
        <div id="content">
        {/* Topbar */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          {/* Sidebar Toggle (Topbar) */}
          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars" />
          </button>
          {/* Topbar Navbar */}
          <ul className="navbar-nav ml-auto">
            {/* Nav Item - Alerts */}
            <li className="nav-item dropdown no-arrow mx-1">
              <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                <i className="fas fa-bell fa-fw" />
                {/* Contador Alertas */}
                <span className="badge badge-danger badge-counter">3+</span>
              </a>
            </li>
            <div className="topbar-divider d-none d-sm-block" />
            {/* Nav Item - User Information */}
            <li className="nav-item dropdown no-arrow">
              <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Administrador</span>
                <img className="img-profile rounded-circle" src="assets/images/avatar.jpg" width={60} />
              </a>
            </li>
          </ul>
        </nav>
        {/* End of Topbar */}
        {/* Contenido accesos a paneles*/}
        <div className="container-fluid">
          {/* Page Heading */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          </div>
          {/* Content Row */}
          <div className="row">
            {/* Total de productos */}
            <Widget title ="Total de Productos" number="233" color ="green"  ></Widget>
            <Widget title ="Productos Vendidos" number="13" color ="yellow"  ></Widget>
            <Widget title ="Total Usuarios" number="23" color ="blue"  ></Widget>
            
          </div>
          {/* Content Row */}
          <div className="row">
            {/* Ultimo producto cargado */}
            <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Ultimo Producto Registrado</h6>
                </div>
                <div className="card-body">
                  <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src="assets/images/product_dummy.svg" alt="image dummy" />
                  </div>
                  <p>Descripcion Telefono</p>
                </div>
              </div>
            </div>
            {/* Categorias de productos */}
            <div className="col-lg-6 mb-4">						
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Categorias de Productos</h6>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-info text-white shadow">
                        <div className="card-body">
                          Celulares
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-info text-white shadow">
                        <div className="card-body">
                          Categoria 2
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-info text-white shadow">
                        <div className="card-body">
                          Categoria 3
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-info text-white shadow">
                        <div className="card-body">
                          Categoria 4
                        </div>
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
    )
}
