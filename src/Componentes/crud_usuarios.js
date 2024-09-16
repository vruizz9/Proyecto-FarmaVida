import React from "react";
import { useAuth } from "./auth";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function CrudUsu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleDelete = (id) => {
    console.log("Eliminar usuario con id:", id);
  };

  const handleEdit = (id) => {
    console.log("Modificar usuario con id:", id);
    navigate(`/editar_usuario/${id}`);
  };

  const handleAdd = () => {
    console.log("Agregar nuevo usuario");
    navigate('/agregar_usuario');
  };

  return (
    <div>
      <nav>
        <div className="head row">
          <div className="logos col p-3">
            <img
              src="/Assets/Logo_Farmavida.png"
              alt="Logo de la farmacia"
              width="250px"
            />
          </div>
          <div className="rol col">
            <div className="salir p-3">
              <img
                src="/Assets/flecha_salir.png"
                alt="Icono salida de sesión"
                width="50px"
                onClick={handleLogout}
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="op row d-flex">
          <div className="mlat col-2 md-2">
          <ul className="list-unstyled">
              {user.rol === "Administrador" && (
                <>
                  <li className="nav-item">
                    <div className="d-flex flex-column align-items-center mt-4">
                      <a href="./home.js" className="nav-link text-center">
                        <img
                          src="/Assets/proveedor.png"
                          className="img_L"
                          alt="Icono de proveedores"
                          width="70px"
                          title="Proveedores"
                        />
                        <h2>Registro de proveedores</h2>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="d-flex flex-column align-items-center mt-4">
                      <a href="./home.js" className="nav-link text-center">
                        <img
                          src="/Assets/medicamentos.png"
                          className="img_L"
                          alt="Icono de medicamentos"
                          width="70px"
                          title="Medicamentos"
                        />
                        <h2>Registro de medicamentos</h2>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <div className="d-flex flex-column align-items-center mt-4">
                      <a href="./home.js" className="nav-link text-center">
                        <img
                          src="/Assets/flecha_entrada.png"
                          className="img_L"
                          alt="Icono de entradas"
                          width="70px"
                          title="Entradas y Salidas"
                        />
                        <h2>Registro de entradas</h2>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <div className="d-flex flex-column align-items-center mt-4">
                      <a href="./home.js" className="nav-link text-center">
                        <img
                          src="/Assets/flecha_salida.png"
                          className="img_L"
                          alt="Icono de salidas"
                          width="70px"
                          title="Entradas y Salidas"
                        />
                        <h2>Registro de salidas</h2>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <div className="d-flex flex-column align-items-center mt-4">
                      <a href="./home.js" className="nav-link text-center">
                        <img
                          src="/Assets/informes.png"
                          className="img_L"
                          alt="Icono de informes"
                          width="70px"
                          title="Informes"
                        />
                        <h2>Informes</h2>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <div className="d-flex flex-column align-items-center mt-4">
                    <Link to="/gestion_usuarios" className="btn btn-lg btn-primary w-100 fs-6">
                    <img
                          src="/Assets/usuario1.png"
                          className="img_L"
                          alt="Icono de gestión de usuarios"
                          width="70px"
                          title="Gestion de usuarios"
                        />
                        <h2>Gestión de usuario</h2></Link>
                    </div>
                  </li>
                </>
              )}

              {user.rol === "Empleado" && (
                <>
                  <li className="nav-item">
                    <div className="d-flex flex-column align-items-center mt-4">
                      <a href="./home.js" className="nav-link text-center">
                        <img
                          src="/Assets/medicamentos.png"
                          className="img_L"
                          alt="Icono de medicamentos"
                          width="70px"
                          title="Medicamentos"
                        />
                        <h2>Registro de medicamentos</h2>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <div className="d-flex flex-column align-items-center mt-4">
                      <a href="./home.js" className="nav-link text-center">
                        <img
                          src="/Assets/flecha_entrada.png"
                          className="img_L"
                          alt="Icono de entradas"
                          width="70px"
                          title="Entradas y Salidas"
                        />
                        <h2>Registro de entradas</h2>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <div className="d-flex flex-column align-items-center mt-4">
                      <a href="./home.js" className="nav-link text-center">
                        <img
                          src="/Assets/flecha_salida.png"
                          className="img_L"
                          alt="Icono de salidas"
                          width="70px"
                          title="Entradas y Salidas"
                        />
                        <h2>Registro de salidas</h2>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <div className="d-flex flex-column align-items-center mt-4">
                      <a href="./home.js" className="nav-link text-center">
                        <img
                          src="/Assets/informes.png"
                          className="img_L"
                          alt="Icono de informes"
                          width="70px"
                          title="Informes"
                        />
                        <h2>Informes</h2>
                      </a>
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>
          <section className="gestionUsuario col-lg p-0">
            <div className="mainContainer">
              <a href="./gestion_usuario.html" className="boton-atras btn back-button flecha_a">
                <img src="./resources/flecha_atras.png" alt="flecha_a" />
              </a>
              <div className="container">
                <button
                  className="btn btn-success mb-3"
                  onClick={handleAdd}
                >
                  Agregar Usuario
                </button>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Contraseña</th>
                      <th scope="col">Teléfono</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sandra</td>
                      <td>..........</td>
                      <td>3025827546</td>
                      <td>
                        <button
                          className="btn btn-primary me-2"
                          onClick={() => handleEdit(1)}
                        >
                          Modificar
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(1)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Alexander</td>
                      <td>..............</td>
                      <td>3213482146</td>
                      <td>
                        <button
                          className="btn btn-primary me-2"
                          onClick={() => handleEdit(2)}
                        >
                          Modificar
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(2)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Charid</td>
                      <td>........</td>
                      <td>3224848149</td>
                      <td>
                        <button
                          className="btn btn-primary me-2"
                          onClick={() => handleEdit(3)}
                        >
                          Modificar
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(3)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CrudUsu;
