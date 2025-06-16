import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Actividades() {
  const navigate = useNavigate();
  const [actividades, setActividades] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    fecha: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombre && formData.descripcion && formData.fecha) {
      setActividades([...actividades, formData]);
      setFormData({ nombre: "", descripcion: "", fecha: "" });
    }
  };

  const eliminarActividad = (index) => {
    const nuevasActividades = actividades.filter((_, i) => i !== index);
    setActividades(nuevasActividades);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center bg-white p-4 mb-6 shadow rounded-md">
        <h1 className="text-2xl font-bold text-gray-800">📋 Registro de Actividades</h1>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 font-semibold py-2 px-4 rounded"
        >
          Regresar al Dashboard
        </button>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre de la actividad</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ej: Caminata, Yoga, Meditación..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Descripción</label>
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              rows={3}
              placeholder="Describe brevemente la actividad..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Fecha</label>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <button
            style={{ backgroundColor: "#8DB986" }}
            className="w-full text-white p-2 rounded-md hover:brightness-90 transition"
          >
            Guardar actividad
          </button>
        </form>
      </div>

      {actividades.length > 0 && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">📅 Actividades Registradas</h2>
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2 border">Nombre</th>
                <th className="text-left p-2 border">Descripción</th>
                <th className="text-left p-2 border">Fecha</th>
                <th className="text-left p-2 border">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {actividades.map((actividad, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-2 border">{actividad.nombre}</td>
                  <td className="p-2 border">{actividad.descripcion}</td>
                  <td className="p-2 border">{actividad.fecha}</td>
                  <td className="p-2 border">
                    <button
                      onClick={() => eliminarActividad(index)}
                      className="text-red-600 hover:text-red-800 font-semibold"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Actividades;
