import React from 'react'
import { Link } from 'react-router-dom';

function registro() {
  return (
    <main className="container">
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row border rounded-5 p-3 bg-white shadow box-area">
                <div className=" col-md-6 rounded-4 d-flex justify-content-around align-items-center flex-column left-box">
                    <div className="featured-image mb-3">
                        <img src="/Assets/Logo_FarmaVida.png" className="img-fluid1 width-style1"
                            alt="Logo de la farmacia"/>
                    </div>
                    <div className="featured-image mb-3">
                        <img src="/Assets/img1.png" className="img-fluid2 width-style1"
                            alt="Farmacéutica sonriendo"/>
                    </div>
                </div>
                <div className="col-md-6 right-box">
                    <div className="row align-items-center">
                        <div className="header-text mb-4">
                            <h2>Registro</h2>
                        </div>
                        <div className="btns">
                            <button className="boton btn btn-primary btn-lg fs-6">Soy Administrador</button>
                            <button className="boton btn btn-primary btn-lg fs-6">Soy Empleado</button>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Nombre"/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control form-control-lg bg-light fs-6"
                                placeholder="Correo electrónico"/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control form-control-lg bg-light fs-6"
                                placeholder="Contraseña"/>
                        </div>
                        <div className="input-group mb-1">
                            <input type="password" className="form-control form-control-lg bg-light fs-6"
                                placeholder="Confirmar contraseña"/>
                        </div>
                        <div className="input-group mb-3 d-flex justify-content-between">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="formCheck"/>
                                <label for="formCheck" className="form-check-label text-secondary"><small>Acepto los
                                        términos y condiciones de la política de protección de datos. Recibirá
                                        confirmación del registro por correo electrónico.</small></label>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <Link to="/" className="btn btn-lg btn-primary w-100 fs-6">Finalizar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default registro