import { useState, useEffect } from "react";

import {
  agregarResidente,
  actualizarResidente
} from "../firebase/firestore";

function FormularioResidente({
  actualizar,
  residenteEditar
}) {

  const [nombre, setNombre] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [estatus, setEstatus] = useState("Activo");

  useEffect(() => {

    if (residenteEditar) {

      setNombre(residenteEditar.nombre || "");
      setDepartamento(residenteEditar.departamento || "");
      setTelefono(residenteEditar.telefono || "");
      setCorreo(residenteEditar.correo || "");
      setEstatus(residenteEditar.estatus || "Activo");

    }

  }, [residenteEditar]);

  const guardar = async () => {

    const datos = {
      nombre,
      departamento,
      telefono,
      correo,
      estatus
    };

    if (residenteEditar) {

      await actualizarResidente(
        residenteEditar.id,
        datos
      );

    } else {

      await agregarResidente(datos);

    }

    actualizar();

    setNombre("");
    setDepartamento("");
    setTelefono("");
    setCorreo("");
    setEstatus("Activo");

  };

  return (

    <div className="card p-3 mb-4">

      <h4>
        {residenteEditar
          ? "Editar Residente"
          : "Nuevo Residente"}
      </h4>

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
        {residenteEditar
          ? "Actualizar Residente"
          : "Guardar Residente"}
      </button>

    </div>

  );
}

export default FormularioResidente;