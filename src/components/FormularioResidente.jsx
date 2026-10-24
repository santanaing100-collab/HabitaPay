import { useState } from "react";
import { agregarResidente } from "../firebase/firestore";

function FormularioResidente({ actualizar }) {

  const [nombre, setNombre] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [estatus, setEstatus] = useState("Activo");

  const guardar = async () => {

    await agregarResidente({
      nombre,
      departamento,
      telefono,
      correo,
      estatus
    });

    actualizar();

    setNombre("");
    setDepartamento("");
    setTelefono("");
    setCorreo("");
    setEstatus("Activo");

  };

  return (

    <div className="card p-3 mb-4">

      <h4>Nuevo Residente</h4>

      <input
        className="form-control mb-2"
        placeholder="Nombre completo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Departamento"
        value={departamento}
        onChange={(e) => setDepartamento(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Correo electrónico"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />

      <select
        className="form-select mb-3"
        value={estatus}
        onChange={(e) => setEstatus(e.target.value)}
      >
        <option value="Activo">Activo</option>
        <option value="Inactivo">Inactivo</option>
      </select>

      <button
        className="btn btn-success"
        onClick={guardar}
      >
        Guardar Residente
      </button>

    </div>

  );
}

export default FormularioResidente;