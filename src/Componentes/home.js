import React from "react";

function home() {
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
            <div className="adm">
              <a className="nav-link p-4 px-4" href="./admin.html">
                Administrador
              </a>
            </div>
            <div className="emp ms-2 p-2">
              <a className="nav-link p-3 px-4" href="./empleado.html">
                Empleado
              </a>
            </div>
            <div className="salir p-3">
              <img
                src="/Assets/flecha_salir.png"
                alt="Icono salida de sesión"
                width="50px"
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="op row d-flex">
          <div className="mlat col-2 md-2">
            <ul className="list-unstyled">
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
                  <a href="./gestion_usuario.html" className="nav-link text-center">
                    <img
                      src="/Assets/usuario1.png"
                      className="img_L"
                      alt="Icono de gestión de usuarios"
                      width="70px"
                      title="Gestion de usuarios"
                    />
                    <h2>Gestión de usuario</h2>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <section className="bienvenida col-lg p-0">
            <div>
              <div className="text-overlay">
                <h1>
                  ¡Bienvenido al inventario
                  <br />
                  de FarmaVida!
                </h1>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default home;
