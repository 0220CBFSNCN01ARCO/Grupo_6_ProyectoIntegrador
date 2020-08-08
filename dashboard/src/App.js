import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";
import Table from "./components/content/Table";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div id="wrapper">
      <Sidebar items={["Productos", "Usuarios"]} />
      <div id="content-wrapper" className="d-flex flex-column">
        <Content></Content>
        <Table></Table>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
