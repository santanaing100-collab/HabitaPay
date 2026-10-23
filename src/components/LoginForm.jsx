import { FaUser, FaLock, FaBuilding } from "react-icons/fa";
import { useState } from "react";
import { loginUser } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {

      const userCredential = await loginUser(
        email,
        password
      );

      navigate("/dashboard");

      console.log(userCredential.user);

    } catch (error) {

      alert("Correo o contraseña incorrectos");

      console.log(error);
    }
  };

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

      <input
        type="email"
        className="form-control"
        placeholder="👤 Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />


      <input
        type="password"
        className="form-control"
        placeholder=" 🔒 Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="btn btn-primary w-100"
        onClick={handleLogin}
      >
        Iniciar Sesión
      </button>
      <div className="text-center mt-3">
        <a href="#">
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <div className="text-center mt-3 text-muted">
        <small>Versión 1.0.0</small>
      </div>
      © 2026 Vecinos de Ferrocarriles Nacionales 830
    </div>
  );
}

export default LoginForm;
