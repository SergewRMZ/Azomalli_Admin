import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="card-container">
        <div className="home-left">
          <div className="login-box">
            <h1>¡Bienvenido!</h1>
            <p>Ingresa tu correo y contraseña para continuar.</p>

            <TextField
              label="Correo electrónico"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              
            />
            <TextField
              label="Contraseña"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={() => navigate('/login')}
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

export default Home;
