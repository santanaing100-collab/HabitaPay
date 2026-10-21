function LoginForm() {
  return (
    <div className="login-card">

      <h2>Iniciar Sesión</h2>

      <input
        type="text"
        placeholder="Usuario"
        className="form-control mb-3"
      />

      <input
        type="password"
        placeholder="Contraseña"
        className="form-control mb-3"
      />

      <button className="btn btn-primary w-100">
        Entrar
      </button>

    </div>
  );
}

export default LoginForm;