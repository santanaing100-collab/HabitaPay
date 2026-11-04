function Incidencias() {

  return (

    <div className="container mt-4">

      <h1>Incidencias</h1>

      <div className="card p-4">

        <h4>Registrar Incidencia</h4>

        <input
          className="form-control mb-2"
          placeholder="Título"
        />

        <textarea
          className="form-control mb-2"
          placeholder="Descripción"
        />

        <button className="btn btn-warning">

          Registrar Incidencia

        </button>

      </div>

    </div>

  );

}

export default Incidencias;