import LoginForm from "../components/LoginForm";
import "../styles/login.css";

import Condominio from "../assets/Imagen/Condominio.jpeg";

function Login() {
  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `linear-gradient(
          rgba(15,23,42,.75),
          rgba(15,23,42,.75)
        ), url(${Condominio})`,
      }}
    >
      <div className="login-left">
        <h1>Vecinos de Ferrocarriles Nacionales 830</h1>

        <p>Plataforma para pagos, avisos y gestión comunitaria.</p>
        <div className="copyright">© 2026 Ferrocarriles Nacionales 830</div>
      </div>

      <div className="login-right">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
