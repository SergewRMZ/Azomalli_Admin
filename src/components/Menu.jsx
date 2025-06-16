import { Link, useNavigate } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();

  return (
    <div className="w-64 h-screen bg-[#EFEAE4] text-white p-6 shadow-md flex flex-col justify-between">
      <div>
        <h2 className="text-green-700 font-bold text-xl mb-8">Administrador</h2>
        <nav className="space-y-4">
          <Link
            to="/consejos"
            style={{ backgroundColor: '#8DB986', color: '#FFFFFF' }}
            className="block font-semibold py-2 px-4 rounded hover:brightness-90 transition"
          >
            Añadir consejos diarios
          </Link>
          <Link
            to="/actividades"
            style={{ backgroundColor: '#8DB986', color: '#FFFFFF' }}
            className="block font-semibold py-2 px-4 rounded hover:brightness-90 transition"
          >
            Añadir actividad
          </Link>
          <Link
            to="/alimentos"
            style={{ backgroundColor: '#8DB986', color: '#FFFFFF' }}
            className="block font-semibold py-2 px-4 rounded hover:brightness-90 transition"
          >
            Añadir alimentos
          </Link>
        </nav>
      </div>

      {/* Botón de Logout */}
      <button
        onClick={() => navigate('/')}
        style={{ backgroundColor: '#999999', color: '#FFFFFF' }}
        className="w-full text-white p-2 rounded-md hover:brightness-90 transition"
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default Menu;
