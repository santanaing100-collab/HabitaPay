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

    doc.setFontSize(18);
    doc.text("HABITAPAY", 20, 20);

    doc.setFontSize(14);
    doc.text("Estado de Cuenta", 20, 35);

    doc.setFontSize(12);

    doc.text(
      `Residente: ${residente}`,
      20,
      50
    );

    doc.text(
      `Total Pagado: $${totalPagado}`,
      20,
      65
    );

    doc.text(
      `Total Adeudado: $${totalAdeudado}`,
      20,
      80
    );

    doc.text(
      `Saldo: $${saldo}`,
      20,
      95
    );

    let y = 120;

    doc.text("PAGOS", 20, y);

    y += 10;

    pagosFiltrados.forEach((pago) => {

      doc.text(
        `${pago.fecha} | $${pago.monto} | ${pago.concepto}`,
        20,
        y
      );

      y += 10;

    });

    y += 10;

    doc.text("ADEUDOS", 20, y);

    y += 10;

    adeudosFiltrados.forEach((adeudo) => {

      doc.text(
        `${adeudo.fechaLimite} | $${adeudo.monto} | ${adeudo.concepto}`,
        20,
        y
      );

      y += 10;

    });

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
              <strong>Total Pagado:</strong>
              {" "}
              ${totalPagado}
            </p>

            <p>
              <strong>Total Adeudado:</strong>
              {" "}
              ${totalAdeudado}
            </p>

            <p>
              <strong>Saldo:</strong>
              {" "}
              ${saldo}
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