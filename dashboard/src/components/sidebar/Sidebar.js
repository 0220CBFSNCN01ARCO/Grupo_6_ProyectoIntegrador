import React from "react";

export default function Sidebar(props) {
  return (
    <ul
      className="navbar-nav bg-dark sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-text mx-2">Administrador</div>
      </a>

      <hr className="sidebar-divider my-0" />

      {props.items.map((item, index) => {
        return (
          <li className="nav-item active" key={index}>
            <a className="nav-link" href="/">
              <i className="fas fa-poll"></i>
              <span>{item}</span>
            </a>
          </li>
        );
      })}

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}
