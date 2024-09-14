import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import "bootstrap/dist/css/bootstrap.min.css";

const usuarios = [
  { usuario: "Ana Gomez", contraseña: "Ana2024!", rol: "Administrador" },
  { usuario: "Luis Fernandez", contraseña: "LuisF@2024", rol: "Empleado" },
];

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isAdminButtonEnabled, setAdminButtonEnabled] = useState(true);
  const [isEmployeeButtonEnabled, setEmployeeButtonEnabled] = useState(true);

  const handleAdminClick = () => {
    console.log("Botón Administrador clickeado");
  };

  const handleEmployeeClick = () => {
    console.log("Botón Empleado clickeado");
  };

  const toggleButtons = () => {
    setAdminButtonEnabled(!isAdminButtonEnabled);
    setEmployeeButtonEnabled(!isEmployeeButtonEnabled);
  };

  const handleChange = ({ target: { id, value } }) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = usuarios.find(
      (u) =>
        u.usuario === formData.username && u.contraseña === formData.password
    );

    if (user) {
      login(user);
      navigate("/home");
    } else {
      setMessage("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <main className="container">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          <div className="col-md-6 rounded-4 d-flex justify-content-around align-items-center flex-column left-box">
            <div className="featured-image mb-3">
              <img
                src="/Assets/Logo_FarmaVida.png"
                className="img-fluid1 width-style1"
                alt="Logo de la farmacia"
              />
            </div>
            <div className="featured-image mb-3">
              <img
                src="/Assets/img1.png"
                className="img-fluid2 width-style1"
                alt="Farmacéutica sonriendo"
              />
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
                  disabled={!isAdminButtonEnabled}
                >
                  Soy Administrador
                </button>
                <button
                  className="boton btn btn-primary btn-lg fs-6"
                  onClick={handleEmployeeClick}
                  disabled={!isEmployeeButtonEnabled}
                >
                  Soy Empleado
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="username">Usuario</label>
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light fs-6"
                    id="username"
                    placeholder="Usuario"
                    autoComplete="on"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    className="form-control form-control-lg bg-light fs-6"
                    id="password"
                    placeholder="Contraseña"
                    autoComplete="on"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group mb-5 d-flex justify-content-between">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="formCheck"
                    />
                    <label
                      htmlFor="formCheck"
                      className="form-check-label text-secondary"
                    >
                      <small>Recordar inicio de sesión</small>
                    </label>
                  </div>
                  <div className="forgot">
                    <small>
                      <a href="./recuperar_contrasena.html">
                        ¿Olvidó la contraseña?
                      </a>
                    </small>
                  </div>
                </div>
                <Link
                  to="/home"
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Iniciar
                </Link>
                {message && <div className="mt-3 text-center">{message}</div>}
              </form>
              <div className="row">
                <small>
                  ¿No tiene una cuenta? <Link to="/registro">Registrarse</Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button onClick={toggleButtons} className="btn btn-secondary">
          {isAdminButtonEnabled && isEmployeeButtonEnabled
            ? "Desactivar Botones"
            : "Activar Botones"}
        </button>
      </div>
    </main>
  );
}

export default Login;
