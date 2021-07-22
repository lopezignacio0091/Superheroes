import {abrirChart} from '../../../../../actions/ChartActions';
import { useDispatch, useSelector } from 'react-redux';
import React, { Fragment } from 'react';

import BotonNuevo from '../../../utils/botonNuevo/BotonNuevo';

const ChartButton = () => {
    const dispatch = useDispatch();
    return (
            <BotonNuevo classButton={'buttonVentaTableMoneda'} accion={() => dispatch(abrirChart(true))} label={'Chart'} />
    );
}
export default ChartButton;
