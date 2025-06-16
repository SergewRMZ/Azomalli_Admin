import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Por favor, llena todos los campos.');
      return;
    }

    localStorage.setItem('auth', 'true');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="flex w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-lg">
        {/* Izquierda: Login */}
        <div className="w-1/2 p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">¡Bienvenido!</h1>
          <p className="text-sm text-gray-600 mb-4">
            Ingresa tu correo y contraseña para continuar.
          </p>

          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

          <TextField
            label="Correo electrónico"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
          />

          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleLogin}
            sx={{
              fontWeight: 'bold',
              mt: 3,
              backgroundColor: '#8DB986',
              '&:hover': {
                backgroundColor: '#779e70',
              },
            }}
          >
            Iniciar sesión
          </Button>
        </div>

        {/* Información */}
        <div className="w-1/2 bg-[#8DB986] text-white flex justify-center items-center p-8">
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center max-w-sm w-full">
            <div className="mb-4">
              <img src="./Logo.png" alt="Logo Azomalli" className="w-24 h-24 object-contain mx-auto" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Tu espacio para el bienestar emocional</h2>
            <p className="text-sm">
              Plataforma administrativa para gestionar usuarios, emociones y recomendaciones de bienestar.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
