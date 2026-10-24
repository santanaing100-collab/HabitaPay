import { useEffect, useState } from "react";

import {
  obtenerResidentes,
  eliminarResidente
} from "../firebase/firestore";

import FormularioResidente from "../components/FormularioResidente";



function Residentes() {

  const [residentes, setResidentes] = useState([]);
  const [residenteEditar, setResidenteEditar] = useState(null);

  useEffect(() => {

    cargarResidentes();

  }, []);

  const cargarResidentes = async () => {

    const datos = await obtenerResidentes();

    console.log(datos);

    setResidentes(datos);

  };

  const borrarResidente = async (id) => {

    if (!window.confirm("¿Eliminar residente?")) {
      return;
    }

    await eliminarResidente(id);

    cargarResidentes();

  };

  return (
    <div className="container mt-4">

      <h1>Residentes</h1>
      {residenteEditar && (

  <div className="alert alert-warning">

    Editando:

    <strong>
      {" "}
      {residenteEditar.nombre}
    </strong>

  </div>

)}

      <FormularioResidente
        actualizar={cargarResidentes}
      />

      <table className="table table-striped mt-4">

        <thead>
          <tr>
            <th>Nombre</th>
            <th>Departamento</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Estatus</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>

          {residentes.map((residente) => (

            <tr key={residente.id}>

              <td>{residente.nombre}</td>
              <td>{residente.departamento}</td>
              <td>{residente.telefono}</td>
              <td>{residente.correo}</td>

              <td>

                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => setResidenteEditar(residente)}
                >
                  ✏️
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => borrarResidente(residente.id)}
                >
                  🗑️
                </button>

              </td>

              <td>

                <button
                  className="btn btn-warning btn-sm me-2"
                >
                  ✏️
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => borrarResidente(residente.id)}
                >
                  🗑️
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
export default Residentes;