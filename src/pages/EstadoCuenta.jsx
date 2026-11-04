import { useEffect, useState } from "react";
import { jsPDF } from "jspdf";

import {
  obtenerResidentes,
  obtenerPagos,
  obtenerAdeudos
} from "../firebase/firestore";

function EstadoCuenta() {

  const [residentes, setResidentes] = useState([]);
  const [residente, setResidente] = useState("");

  const [pagos, setPagos] = useState([]);
  const [adeudos, setAdeudos] = useState([]);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {

    const listaResidentes = await obtenerResidentes();
    const listaPagos = await obtenerPagos();
    const listaAdeudos = await obtenerAdeudos();

    setResidentes(listaResidentes);
    setPagos(listaPagos);
    setAdeudos(listaAdeudos);

  };

  const pagosFiltrados = pagos.filter(
    (p) => p.residente === residente
  );

  const adeudosFiltrados = adeudos.filter(
    (a) => a.residente === residente
  );

  const totalPagado = pagosFiltrados.reduce(
    (total, pago) => total + Number(pago.monto || 0),
    0
  );

  const totalAdeudado = adeudosFiltrados.reduce(
    (total, adeudo) => total + Number(adeudo.monto || 0),
    0
  );

  const saldo = totalPagado - totalAdeudado;

  const generarPDF = () => {

    const doc = new jsPDF();

    const fechaActual = new Date().toLocaleDateString();

    doc.setFillColor(41, 128, 185);
    doc.rect(0, 0, 210, 30, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text("HABITAPAY", 20, 20);

    doc.setTextColor(0, 0, 0);

    doc.setFontSize(16);
    doc.text("Estado de Cuenta", 20, 45);

    doc.setFontSize(10);
    doc.text(
      `Fecha de emision: ${fechaActual}`,
      20,
      55
    );

    doc.line(20, 60, 190, 60);

    doc.setFontSize(12);

    doc.text(
      `Residente: ${residente}`,
      20,
      75
    );

    doc.text(
      `Total Pagado: $${totalPagado}`,
      20,
      85
    );

    doc.text(
      `Total Adeudado: $${totalAdeudado}`,
      20,
      95
    );

    doc.text(
      `Saldo Actual: $${saldo}`,
      20,
      105
    );

    doc.save(
      `EstadoCuenta-${residente}.pdf`
    );

  };

  return (

    <div className="container mt-4">

      <h1>Estado de Cuenta</h1>

      <select
        className="form-select mb-4"
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

      {residente && (

        <>
          <div className="card p-4 mb-4">

            <h3>{residente}</h3>

            <hr />

            <h5>Resumen Financiero</h5>

            <p>
              <strong>Total Pagado:</strong> ${totalPagado}
            </p>

            <p>
              <strong>Total Adeudado:</strong> ${totalAdeudado}
            </p>

            <p>
              <strong>Saldo:</strong> ${saldo}
            </p>

            <div
              className={
                saldo >= 0
                  ? "alert alert-success"
                  : "alert alert-danger"
              }
            >
              {saldo >= 0
                ? "✅ Residente al corriente"
                : "❌ Residente con adeudos"}
            </div>

            <button
              className="btn btn-primary"
              onClick={generarPDF}
            >
              📄 Generar PDF
            </button>

          </div>

          <div className="card p-3 mb-4">

            <h4>Pagos</h4>

            <table className="table">

              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Monto</th>
                  <th>Concepto</th>
                </tr>
              </thead>

              <tbody>

                {pagosFiltrados.map((pago) => (

                  <tr key={pago.id}>
                    <td>{pago.fecha}</td>
                    <td>${pago.monto}</td>
                    <td>{pago.concepto}</td>
                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          <div className="card p-3">

            <h4>Adeudos</h4>

            <table className="table">

              <thead>
                <tr>
                  <th>Fecha Límite</th>
                  <th>Monto</th>
                  <th>Concepto</th>
                  <th>Estatus</th>
                </tr>
              </thead>

              <tbody>

                {adeudosFiltrados.map((adeudo) => (

                  <tr key={adeudo.id}>
                    <td>{adeudo.fechaLimite}</td>
                    <td>${adeudo.monto}</td>
                    <td>{adeudo.concepto}</td>
                    <td>{adeudo.estatus}</td>
                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </>

      )}

    </div>

  );

}

export default EstadoCuenta;