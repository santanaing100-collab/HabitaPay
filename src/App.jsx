import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Residentes from "./pages/Residentes";

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

      </Routes>

    </BrowserRouter>
  );
}

export default App;