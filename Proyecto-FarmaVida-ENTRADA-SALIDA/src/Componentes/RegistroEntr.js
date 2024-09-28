import React from 'react';
import Entrada from './data/Entrada.json'

const Registro = ({
    id_producto, setIdproducto,
    id_prov, setIdprov,
    id_cat, setIdcat,
    f_entrada, setFentrada,
    nombre, setNombre,
    v_venta, setVventa,
    stock_actual, setStockactual,
    f_vencimiento, setFvencimiento,
    id_estado, setEstado,
    operation, validar
}) => {
    return (
        <div className="modal fade" id="modalEntrada" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{operation === 1 ? 'Registrar Producto' : 'Editar Producto'}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="id_producto" className="form-label">ID Producto</label>
                            <input type="text" className="form-control" id="id_producto" value={id_producto} onChange={(e) => setIdproducto(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="id_cat" className="form-label">ID Proveedor</label>
                            <input type="text" className="form-control" id="id_prov" value={id_prov} onChange={(e) => setIdprov(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="id_cat" className="form-label">ID Categoría</label>
                            <input type="text" className="form-control" id="id_cat" value={id_cat} onChange={(e) => setIdcat(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="f_entrada" className="form-label">Fecha de Entrada</label>
                            <input type="date" className="form-control" id="f_entrada" value={f_entrada} onChange={(e) => setFentrada(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="v_venta" className="form-label">Valor de Venta</label>
                            <input type="number" className="form-control" id="v_venta" value={v_venta} onChange={(e) => setVventa(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="stock_actual" className="form-label">Stock Actual</label>
                            <input type="number" className="form-control" id="stock_actual" value={stock_actual} onChange={(e) => setStockactual(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="f_vencimiento" className="form-label">Fecha de Vencimiento</label>
                            <input type="date" className="form-control" id="f_vencimiento" value={f_vencimiento} onChange={(e) => setFvencimiento(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="id_estado" className="form-label">ID Estado</label>
                            <input type="text" className="form-control" id="id_estado" value={id_estado} onChange={(e) => setEstado(e.target.value)} />
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

export default Registro;
