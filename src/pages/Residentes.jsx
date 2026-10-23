import { useEffect, useState } from "react";
import { obtenerResidentes } from "../firebase/firestore";

function Residentes() {

  const [residentes, setResidentes] = useState([]);

  useEffect(() => {

    cargarResidentes();

  }, []);

  const cargarResidentes = async () => {

    const datos = await obtenerResidentes();

    console.log(datos);

    setResidentes(datos);

  };

  return (
    <div className="container mt-4">

      <h1>Residentes</h1>

      <table className="table table-striped mt-4">

        <thead>
          <tr>
            <th>Nombre</th>
            <th>Departamento</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Estatus</th>
          </tr>
        </thead>

        <tbody>

          {residentes.map((residentes) => (

            <tr key={residentes.id}>

              <td>{residentes.nombre}</td>
              <td>{residentes.departamento}</td>
              <td>{residentes.telefono}</td>
              <td>{residentes.correo}</td>
              <td>{residentes.estatus}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
export default Residentes;