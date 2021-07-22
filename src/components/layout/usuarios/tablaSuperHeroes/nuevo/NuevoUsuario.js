import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { abrirFormularioSuperheroe } from '../../../../../actions/SuperheroeActions';
import BotonNuevo from '../../../utils/botonNuevo/BotonNuevo';

const NuevoUsuario = () => {

    const dispatch = useDispatch();

    return (
        <Fragment >
            <div style={{ order: -1 }}>
                <BotonNuevo  accion={() => dispatch(abrirFormularioSuperheroe(true))} classButton={"buttonStyleMoneda"} label={'Nuevo Superheroe'} />
            </div>
        </Fragment>
    );
};

export default NuevoUsuario;
