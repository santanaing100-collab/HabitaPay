import { useEffect, useState } from "react";

import {
  totalResidentes,
  totalPagos,
  totalAdeudos,
  montoTotalPagos,
  montoTotalAdeudos,
  obtenerPagosRecientes
} from "../firebase/firestore";

function Dashboard() {

  const [residentes, setResidentes] = useState(0);
  const [pagos, setPagos] = useState(0);
  const [adeudos, setAdeudos] = useState(0);
  const [totalCobrado, setTotalCobrado] = useState(0);
  const [totalAdeudado, setTotalAdeudado] = useState(0);
  const [pagosRecientes, setPagosRecientes] = useState([]);

  useEffect(() => {

    cargarDatos();

  }, []);

  const cargarDatos = async () => {

    const totalRes = await totalResidentes();
    const totalPag = await totalPagos();
    const totalAde = await totalAdeudos();
    const monto = await montoTotalPagos();
    const adeudado = await montoTotalAdeudos();
    const recientes = await obtenerPagosRecientes();



    setTotalAdeudado(adeudado);
    setTotalCobrado(monto); setResidentes(totalRes);
    setPagos(totalPag);
    setAdeudos(totalAde);
    setPagosRecientes(recientes.slice(-5).reverse()
    );

  };

  return (

    <div className="container mt-4">

      <h1>Dashboard</h1>

      <div className="row mt-4">

        <div className="col-md-4 mb-3">
          <div className="card p-3 shadow">
            <h6>Residentes</h6>
            <h2>{residentes}</h2>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card p-3 shadow">
            <h6>Pagos</h6>
            <h2>{pagos}</h2>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card p-3 shadow">
            <h6>Adeudos</h6>
            <h2>{adeudos}</h2>
          </div>
        </div>

      </div>

      <div className="row mt-4">

        <div className="col-md-4 mb-2">
          <a
            href="/residentes"
            className="btn btn-primary w-100"
          >
            Residentes
          </a>
        </div>

        <div className="col-md-4 mb-2">
          <a
            href="/pagos"
            className="btn btn-success w-100"
          >
            Pagos
          </a>
        </div>

        <div className="col-md-4 mb-2">
          <a
            href="/adeudos"
            className="btn btn-danger w-100"
          >
            Adeudos
          </a>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card p-3 shadow">

            <h6>Total Cobrado</h6>

            <h2>
              ${totalCobrado}
            </h2>

          </div>
        </div>

        <div className="card p-3 shadow">

          <h6>Total Adeudado</h6>

          <h2>
            ${totalAdeudado}
          </h2>

        </div>

        <div className="card mt-4 p-3">

          <h4>Últimos Pagos</h4>

          <table className="table">

            <thead>
              <tr>
                <th>Residente</th>
                <th>Monto</th>
                <th>Fecha</th>
              </tr>
            </thead>

            <tbody>

              {pagosRecientes.map((pago) => (

                <tr key={pago.id}>

                  <td>{pago.residente}</td>

                  <td>${pago.monto}</td>

                  <td>{pago.fecha}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        <div className="col-md-4 mb-2">

          <a
            href="/estado-cuenta"
            className="btn btn-dark w-100"
          >
            Estado de Cuenta
          </a>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;