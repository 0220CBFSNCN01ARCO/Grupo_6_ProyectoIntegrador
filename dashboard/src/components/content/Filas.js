import React from "react";

export default function Filas(props) {
  let colorText;
  let texto;
  switch (props.color) {
    case "red":
      colorText = "text-danger";
      texto = "rojo";
      break;
    case "blue":
      colorText = "text-primary";
      texto = "azul";
      break;
    case "green":
      colorText = "text-success";
      texto = "verde";
      break;
    default:
      break;
  }

  return (
    <tr>
      <td>{props.nombre}</td>
      <td>{props.descripcion}</td>
      <td>{props.precio}</td>
      <td>
        <ul>
          <li>{props.categoria}</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>
            <span class={`${colorText}`}>{texto}</span>
          </li>
        </ul>
      </td>
      <td>{props.stock}</td>
    </tr>
  );
}
