import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {
  const [isAdminButtonEnabled, setAdminButtonEnabled] = useState(true);
  const [isEmployeeButtonEnabled, setEmployeeButtonEnabled] = useState(true);

  const handleAdminClick = () => {
    console.log('Botón Administrador clickeado');
  };

  const handleEmployeeClick = () => {
    console.log('Botón Empleado clickeado');
  };

  const toggleButtons = () => {
    setAdminButtonEnabled(!isAdminButtonEnabled);
    setEmployeeButtonEnabled(!isEmployeeButtonEnabled);
  };

  return (
    <main className="container">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          <div className="col-md-6 rounded-4 d-flex justify-content-around align-items-center flex-column left-box">
            <div className="featured-image mb-3">
              <img src="/Assets/Logo_FarmaVida.png" className="img-fluid1 width-style1" alt="Logo de la farmacia" />
            </div>
            <div className="featured-image mb-3">
              <img src="/Assets/img1.png" className="img-fluid2 width-style1" alt="Farmacéutica sonriendo" />
            </div>
          </div>
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Iniciar Sesión</h2>
              </div>
              <div className="btns">
                <button
                  className="boton btn btn-primary btn-lg fs-6"
                  onClick={handleAdminClick}
                  disabled={!isAdminButtonEnabled} // Desactiva el botón si isAdminButtonEnabled es false
                >
                  Soy Administrador
                </button>
                <button
                  className="boton btn btn-primary btn-lg fs-6"
                  onClick={handleEmployeeClick}
                  disabled={!isEmployeeButtonEnabled} // Desactiva el botón si isEmployeeButtonEnabled es false
                >
                  Soy Empleado
                </button>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Correo electrónico" />
              </div>
              <div className="input-group mb-1">
                <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Contraseña" />
              </div>
              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="formCheck" />
                  <label htmlFor="formCheck" className="form-check-label text-secondary">
                    <small>Recordar inicio de sesión</small>
                  </label>
                </div>
                <div className="forgot">
                  <small><a href="./recuperar_contrasena.html">¿Olvidó la contraseña?</a></small>
                </div>
              </div>
              <div className="input-group mb-3">
                <Link to="/home" className="btn btn-lg btn-primary w-100 fs-6">Iniciar sesión</Link>
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-light w-100 fs-6" onClick={() => (window.location.href = './admin.html')}>
                  <img src="/Assets/Logo_Google.png" className="me-2 width-style2" alt="Logo de Google" />
                  <small>Iniciar sesión con Google</small>
                </button>
              </div>
              <div className="row">
                <small>¿No tiene una cuenta? <Link to="/registro">Registrarse</Link></small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button onClick={toggleButtons} className="btn btn-secondary">
          {isAdminButtonEnabled && isEmployeeButtonEnabled ? 'Desactivar Botones' : 'Activar Botones'}
        </button>
      </div>
    </main>
  );
}

export default Login;
