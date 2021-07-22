import {abrirChartPromedio} from '../../../../../actions/ChartActions';
import { useDispatch, useSelector } from 'react-redux';
import React, { Fragment } from 'react';
import BotonNuevo from '../../../utils/botonNuevo/BotonNuevo';

const ChartPromedio = () => {
    const dispatch = useDispatch();

    return (
            <BotonNuevo classButton={'buttonStyleMoneda'} accion={() => dispatch(abrirChartPromedio(true))} label={'Promedio'} />
    );
}
export default ChartPromedio;
