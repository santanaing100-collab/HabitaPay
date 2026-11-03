import { useEffect, useState } from "react";

import {
  agregarAdeudo,
  obtenerAdeudos
} from "../firebase/firestore";

function Adeudos() {

  const [residente, setResidente] = useState("");
  const [monto, setMonto] = useState("");
  const [fechaLimite, setFechaLimite] = useState("");
  const [concepto, setConcepto] = useState("");

  const [adeudos, setAdeudos] = useState([]);

  useEffect(() => {

    cargarAdeudos();

  }, []);

  const cargarAdeudos = async () => {

    const datos = await obtenerAdeudos();

    setAdeudos(datos);

  };

  const guardarAdeudo = async () => {

    await agregarAdeudo({
      residente,
      monto,
      fechaLimite,
      concepto,
      estatus: "Pendiente"
    });

    await cargarAdeudos();

    setResidente("");
    setMonto("");
    setFechaLimite("");
    setConcepto("");

  };

  return (

    <div className="container mt-4">

      <h1>Adeudos</h1>

      <div className="card p-4">

        <h4>Registrar Adeudo</h4>

        <input
          className="form-control mb-2"
          placeholder="Residente"
          value={residente}
          onChange={(e) => setResidente(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />

        <input
          type="date"
          className="form-control mb-2"
          value={fechaLimite}
          onChange={(e) => setFechaLimite(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Concepto"
          value={concepto}
          onChange={(e) => setConcepto(e.target.value)}
        />

        <button
          className="btn btn-danger"
          onClick={guardarAdeudo}
        >
          Registrar Adeudo
        </button>

      </div>

      <table className="table table-striped mt-4">

        <thead>
          <tr>
            <th>Residente</th>
            <th>Monto</th>
            <th>Fecha Límite</th>
            <th>Concepto</th>
            <th>Estatus</th>
          </tr>
        </thead>

        <tbody>

          {adeudos.map((adeudo) => (

            <tr key={adeudo.id}>

              <td>{adeudo.residente}</td>
              <td>${adeudo.monto}</td>
              <td>{adeudo.fechaLimite}</td>
              <td>{adeudo.concepto}</td>
              <td>{adeudo.estatus}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default Adeudos;