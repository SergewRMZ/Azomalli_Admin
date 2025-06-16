import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Alimentos() {
  const navigate = useNavigate();
  const [alimentos, setAlimentos] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    grupo: "",
    beneficios: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombre && formData.grupo && formData.beneficios) {
      setAlimentos([...alimentos, formData]);
      setFormData({ nombre: "", grupo: "", beneficios: "" });
    }
  };

  const eliminarAlimento = (index) => {
    const nuevosAlimentos = alimentos.filter((_, i) => i !== index);
    setAlimentos(nuevosAlimentos);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Barra superior de navegación */}
      <div className="flex justify-between items-center bg-white p-4 mb-6 shadow rounded-md">
        <h1 className="text-2xl font-bold text-gray-800">🥦 Registro de Alimentos</h1>
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
            <label className="block text-sm font-medium text-gray-700">Nombre del alimento</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Ej: Zanahoria, Avena, Yogurt natural..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Grupo alimenticio</label>
            <select
              name="grupo"
              value={formData.grupo}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">Seleccione uno</option>
              <option value="Verduras">Verduras</option>
              <option value="Frutas">Frutas</option>
              <option value="Cereales">Cereales</option>
              <option value="Proteínas">Proteínas</option>
              <option value="Lácteos">Lácteos</option>
              <option value="Grasas saludables">Grasas saludables</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Beneficios</label>
            <textarea
              name="beneficios"
              value={formData.beneficios}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              rows={3}
              placeholder="Ej: Alto en fibra, rico en antioxidantes..."
              required
            />
          </div>

          <button
            type="submit"
            style={{ backgroundColor: "#8DB986" }}
            className="w-full text-white p-2 rounded-md hover:brightness-90 transition"
          >
            Guardar alimento
          </button>
        </form>
      </div>

      {alimentos.length > 0 && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Alimentos Registrados</h2>
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2 border">Nombre</th>
                <th className="text-left p-2 border">Grupo</th>
                <th className="text-left p-2 border">Beneficios</th>
                <th className="text-left p-2 border">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {alimentos.map((alimento, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-2 border">{alimento.nombre}</td>
                  <td className="p-2 border">{alimento.grupo}</td>
                  <td className="p-2 border">{alimento.beneficios}</td>
                  <td className="p-2 border">
                    <button
                      onClick={() => eliminarAlimento(index)}
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

export default Alimentos;
