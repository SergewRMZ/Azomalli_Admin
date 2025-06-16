import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ConsejosDiarios() {
  const navigate = useNavigate();
  const [consejos, setConsejos] = useState([]);
  const [nuevoConsejo, setNuevoConsejo] = useState({
    descripcion: "",
    emocion: "",
    fecha: "",
    destacado: false,
    imagen: null,
  });
  const [imagenPreview, setImagenPreview] = useState(null);

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("consejos")) || [];
    setConsejos(guardados);
  }, []);

  useEffect(() => {
    localStorage.setItem("consejos", JSON.stringify(consejos));
  }, [consejos]);

  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;
    setNuevoConsejo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const manejarImagen = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNuevoConsejo((prev) => ({ ...prev, imagen: file.name }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagenPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const agregarConsejo = (e) => {
    e.preventDefault();
    if (nuevoConsejo.descripcion.trim()) {
      setConsejos([{ ...nuevoConsejo }, ...consejos]);
      setNuevoConsejo({
        descripcion: "",
        emocion: "",
        fecha: "",
        destacado: false,
        imagen: null,
      });
      setImagenPreview(null);
    }
  };

  const eliminarConsejo = (index) => {
    setConsejos(consejos.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center bg-white p-4 mb-6 shadow rounded-md">
        <h1 className="text-2xl font-bold text-gray-800">💡 Consejos Diarios</h1>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 font-semibold py-2 px-4 rounded"
        >
          Regresar al Dashboard
        </button>
      </div>

      <form onSubmit={agregarConsejo} className="bg-white rounded-lg shadow p-6 space-y-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700">Descripción</label>
          <textarea
            name="descripcion"
            value={nuevoConsejo.descripcion}
            onChange={manejarCambio}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Escribe el consejo..."
            rows={3}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Emoción</label>
            <select
              name="emocion"
              value={nuevoConsejo.emocion}
              onChange={manejarCambio}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Selecciona una emoción</option>
              <option value="felicidad">Felicidad</option>
              <option value="tristeza">Tristeza</option>
              <option value="calma">Calma</option>
              <option value="miedo">Miedo</option>
              <option value="enojo">Enojo</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Fecha</label>
            <input
              type="date"
              name="fecha"
              value={nuevoConsejo.fecha}
              onChange={manejarCambio}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Imagen de portada</label>

          <div className="flex items-center space-x-4">
            <label className="cursor-pointer text-white px-4 py-2 rounded-md text-sm font-medium hover:brightness-90 transition"
            style={{backgroundColor: "#8DB986"}}>
              Seleccionar imagen
              <input
                type="file"
                accept="image/*"
                onChange={manejarImagen}
                className="hidden"
              />
            </label>
            {imagenPreview && (
              <img
                src={imagenPreview}
                alt="Vista previa"
                className="w-24 h-24 object-cover rounded-md border border-gray-300"
              />
            )}
          </div>
        </div>


        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="destacado"
            checked={nuevoConsejo.destacado}
            onChange={manejarCambio}
            className="h-4 w-4 text-blue-600"
          />
          <label className="text-sm text-gray-700">¿El consejo del día está activo?</label>
        </div>

        <button
          style={{ backgroundColor: "#8DB986" }}
          className="w-full text-white p-2 rounded-md hover:brightness-90 transition"
        >
          Guardar consejo
        </button>
      </form>

      {consejos.length > 0 && (
        <div className="space-y-4">
          {consejos.map((consejo, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 space-y-2 relative"
            >
              {consejo.imagen && (
                <img
                  src={imagenPreview}
                  alt="portada"
                  className="w-full max-h-52 object-cover rounded"
                />
              )}
              <h2 className="text-lg font-semibold text-gray-800">
                {consejo.descripcion}
              </h2>
              <p className="text-sm text-gray-600">Emoción: {consejo.emocion}</p>
              <p className="text-sm text-gray-600">Fecha: {consejo.fecha}</p>
              {consejo.destacado && (
                <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded">
                  Consejo del día
                </span>
              )}
              <button
                onClick={() => eliminarConsejo(index)}
                className="absolute top-2 right-4 text-red-600 hover:text-red-800 text-sm font-medium"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ConsejosDiarios;
