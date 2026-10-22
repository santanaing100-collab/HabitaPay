import { FaUser, FaLock, FaBuilding } from "react-icons/fa";

function LoginForm() {
  return (
    <div className="login-card">

      <div className="text-center mb-4">
        <FaBuilding size={50} color="#2563eb" />
        <h2 className="mt-3">Acceso</h2>
      </div>

      <div className="mb-3">
        <select className="form-select">
          <option>Administrador</option>
          <option>Socio</option>
        </select>
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="👤 Usuario"
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="🔒 Contraseña"
        />
      </div>

      <button className="btn btn-primary w-100">
        Iniciar Sesión
      </button>

      <div className="text-center mt-3 text-muted">
      <small>Versión 1.0.0</small>
      </div>
      © 2026 Vecinos de Ferrocarriles Nacionales 830
    </div>
  );
}

export default LoginForm;
