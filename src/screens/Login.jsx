import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="home-wrapper">
      <div className="card-container">
        <div className="home-left">
          <div className="login-box">
            <h1 className='title'>¡Bienvenido!</h1>

            <p>Ingresa tu correo y contraseña para continuar.</p>

            <TextField
              label="Correo electrónico"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
            <TextField
              label="Contraseña"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={() => navigate('/dashboard')}
              sx={{ fontWeight: 'bold', marginTop: '1.5rem', backgroundColor: '#000'}}
            >
              Iniciar sesión
            </Button>
          </div>
        </div>

        <div className="home-right">
          <div className="brand-box">

            <div className="brand-logo-editable">
              <img src="./Logo.png" alt="Logo Azomalli" />
            </div>

            <p className="frase">Tu espacio para el bienestar emocional</p>
            <p className="frase__p">Plataforma administrativa de Azomalli para gestionar usuarios, emociones y recomendaciones de bienestar.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
