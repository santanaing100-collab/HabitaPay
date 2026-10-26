import { useEffect, useState } from "react";

import {
  agregarPago,
  obtenerPagos,
  obtenerResidentes
} from "../firebase/firestore";

function Pagos() {

  const [residentes, setResidentes] = useState([]);
  const [residente, setResidente] = useState("");

  const [monto, setMonto] = useState("");
  const [fecha, setFecha] = useState("");
  const [concepto, setConcepto] = useState("");

  const [pagos, setPagos] = useState([]);

  useEffect(() => {

    cargarPagos();
    cargarResidentes();

  }, []);

  const cargarResidentes = async () => {

    const datos = await obtenerResidentes();

    setResidentes(datos);

  };

  const cargarPagos = async () => {

    const datos = await obtenerPagos();

    setPagos(datos);

  };

  const guardarPago = async () => {

    await agregarPago({
      residente,
      monto,
      fecha,
      concepto
    });

    await cargarPagos();

    setResidente("");
    setMonto("");
    setFecha("");
    setConcepto("");

  };

  return (

    <div className="container mt-4">

      <h1>Pagos</h1>

      <div className="card p-4">

        <h4>Registrar Pago</h4>

        <select
          className="form-select mb-2"
          value={residente}
          onChange={(e) => setResidente(e.target.value)}
        >

          <option value="">
            Selecciona un residente
          </option>

          {residentes.map((r) => (

            <option
              key={r.id}
              value={r.nombre}
            >
              {r.nombre}
            </option>

          ))}

        </select>

        <input
          className="form-control mb-2"
          placeholder="Monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />

        <input
          type="date"
          className="form-control mb-2"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Concepto"
          value={concepto}
          onChange={(e) => setConcepto(e.target.value)}
        />

        <button
          className="btn btn-success"
          onClick={guardarPago}
        >
          Guardar Pago
        </button>

      </div>

      <table className="table table-striped mt-4">

        <thead>
          <tr>
            <th>Residente</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Concepto</th>
          </tr>
        </thead>

        <tbody>

          {pagos.map((pago) => (

            <tr key={pago.id}>
              <td>{pago.residente}</td>
              <td>${pago.monto}</td>
              <td>{pago.fecha}</td>
              <td>{pago.concepto}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default Pagos;