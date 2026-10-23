function Dashboard() {
  return (
    <div className="row mt-4">

      <div className="col-md-3 mb-3">
        <div className="card p-3 shadow">
          <h6>Residentes</h6>
          <h2>0</h2>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div className="card p-3 shadow">
          <h6>Pagos</h6>
          <h2>0</h2>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div className="card p-3 shadow">
          <h6>Adeudos</h6>
          <h2>0</h2>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div className="card p-3 shadow">
          <h6>Incidencias</h6>
          <h2>0</h2>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;