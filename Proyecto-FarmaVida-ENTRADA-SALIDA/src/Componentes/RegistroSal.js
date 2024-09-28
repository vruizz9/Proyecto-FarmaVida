import React from 'react';
import Salida from './data/Salida.json'

const RegistroSal = ({
    id_venta, setIdventa,
    id_emp, setIdemp,
    id_cli, setIdcli,
    f_venta, setFventa,
    observaciones, setObservaciones,
    id_estado, setIdestado,
    operation, validar
}) => {
    return (
        <div className="modal fade" id="modalProducts" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{operation === 1 ? 'Registrar Venta' : 'Editar Venta'}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="id_venta" className="form-label">ID Venta</label>
                            <input type="number" className="form-control" id="id_venta" value={id_venta} onChange={(e) => setIdventa(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="id_empleado" className="form-label">ID Empleado</label>
                            <input type="number" className="form-control" id="id_empleado" value={id_emp} onChange={(e) => setIdemp(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="id_cliente" className="form-label">ID Cliente</label>
                            <input type="number" className="form-control" id="id_cliente" value={id_cli} onChange={(e) => setIdcli(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fecha_venta" className="form-label">Fecha de Venta</label>
                            <input type="date" className="form-control" id="fecha_venta" value={f_venta} onChange={(e) => setFventa(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="observaciones" className="form-label">Observaciones</label>
                            <input type="text" className="form-control" id="observaciones" value={observaciones} onChange={(e) => setObservaciones(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="id_estado" className="form-label">ID Estado</label>
                            <input type="number" className="form-control" id="id_estado" value={id_estado} onChange={(e) => setIdestado(e.target.value)} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary" onClick={validar}>Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistroSal;