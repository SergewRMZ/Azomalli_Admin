import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
      <h2 className="text-xl text-gray-600">Hola, Administrador 👋</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-700">Consejos publicados</h3>
          <p className="text-3xl font-bold text-blue-600">12</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-700">Actividades registradas</h3>
          <p className="text-3xl font-bold text-green-600">8</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-700">Alimentos añadidos</h3>
          <p className="text-3xl font-bold text-yellow-600">15</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <button onClick={() => navigate('/consejos')} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Ir a Consejos</button>
        <button onClick={() => navigate('/actividades')} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">Ir a Actividades</button>
        <button onClick={() => navigate('/alimentos')} className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">Ir a Alimentos</button>
      </div>

      <div className="mt-10 bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-gray-700">Actividad reciente</h3>
        <ul className="mt-2 list-disc list-inside text-gray-600">
          <li>Nuevo consejo añadido</li>
          <li>Se registró una nueva actividad</li>
          <li>Alimento saludable agregado</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
