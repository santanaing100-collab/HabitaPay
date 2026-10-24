import { useState } from "react";
import { agregarResidente } from "../firebase/firestore";

function FormularioResidente() {

  const [nombre, setNombre] = useState("");
  const [departamento, setDepartamento] = useState("");

  const guardar = async () => {

    await agregarResidente({
      nombre,
      departamento,
      telefono: "",
      correo: "",
      estatus: "Activo",
    });

    alert("Residente agregado");

    setNombre("");
    setDepartamento("");

  };

  return (
    <div className="card p-3 mb-4">

      <h4>Nuevo Residente</h4>

      <input
        className="form-control mb-2"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Departamento"
        value={departamento}
        onChange={(e) => setDepartamento(e.target.value)}
      />

      <button
        className="btn btn-success"
        onClick={guardar}
      >
        Guardar
      </button>

    </div>
  );
}

export default FormularioResidente;