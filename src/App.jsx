import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./components/Menu";
import ConsejosDiarios from "./screens/ConsejosDiarios";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Actividades from "./screens/Actividades";
import Alimentos from "./screens/Alimentos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <div className="flex min-h-screen">
            <Menu />
            <div className="flex-1 p-6 bg-gray-100">
              <Dashboard />
            </div>
          </div>
        } />
        <Route path="/consejos" element={
          <div className="flex min-h-screen">
            <Menu />
            <div className="flex-1 p-6 bg-gray-100">
              <ConsejosDiarios />
            </div>
          </div>
        } />
        <Route path="/actividades" element={
          <div className="flex min-h-screen">
            <Menu />
            <div className="flex-1 p-6 bg-gray-100">
              <Actividades />
            </div>
          </div>
        } />
        <Route path="/alimentos" element={
          <div className="flex min-h-screen">
            <Menu />
            <div className="flex-1 p-6 bg-gray-100">
              <Alimentos />
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
