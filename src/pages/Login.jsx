import LoginForm from "../components/LoginForm";
import "../styles/login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Unidad Habitacional</h1>

        <p>
          Para mi mejor Hermano.!
        </p>
      </div>

      <div className="login-right">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;