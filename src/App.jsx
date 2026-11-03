import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Residentes from "./pages/Residentes";
import Pagos from "./pages/Pagos";
import Adeudos from "./pages/Adeudos";
import EstadoCuenta from "./pages/EstadoCuenta";
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/residentes"
          element={<Residentes />}
        />

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/pagos"
          element={<Pagos />}
        />

        <Route
          path="/adeudos"
          element={<Adeudos />}
        />

        <Route
          path="/estado-cuenta"
          element={<EstadoCuenta />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;