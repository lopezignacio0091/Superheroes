import { Grid } from '@material-ui/core';
import React from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import {abrirFormularioSuperheroe, cerrarMensajeSuperheroe,abrirViewDetail} from '../../actions/SuperheroeActions'; 
import {abrirChart,abrirChartPromedio} from '../../actions/ChartActions';
import FormularioUsuario from '../layout/usuarios/form/FormularioUsuario';
import DialogoGeneral from '../layout/utils/dialogUtil/DialogGeneral';
import Mensaje from '../layout/utils/mensaje/Mensaje';
import TablaSuperheroes from '../layout/usuarios/tablaSuperHeroes/TablaSuperHeroes';
import DetailSuperHeroe from '../layout/usuarios/detail/Detail';
import Chart from '../layout/usuarios/chart/Chart';
import ChartPromedio from '../layout/usuarios/chart/ChartPromedio';

const SuperheroePage = () => {

    const {abrirFormularioStatus,viewModal, mostrarMensaje, textoMensaje} = useSelector(state => state.SuperheroeReducer);
    const {openChart,openChartPromedio} = useSelector(state => state.ChartReducer);
    
    const dispatch = useDispatch();

    return (
        <Grid container direction="row">
            <Grid>
                <Mensaje open={mostrarMensaje} mensaje={textoMensaje} cerrarMsj={() => dispatch(cerrarMensajeSuperheroe())}/>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                <TablaSuperheroes />
            </Grid>

            <Grid container item xs={12} sm={12} md={4} lg={4}>
                <DialogoGeneral open={abrirFormularioStatus} cerrar={() => dispatch(abrirFormularioSuperheroe(false))} contenido={<FormularioUsuario />} />
            </Grid>

            <Grid container item xs={12} sm={12} md={4} lg={4}>
                <DialogoGeneral open={viewModal} cerrar={() => dispatch(abrirViewDetail(false))} contenido={<DetailSuperHeroe />} />
            </Grid>

            <Grid container item xs={12} sm={12} md={4} lg={4}>
                <DialogoGeneral open={openChart} cerrar={() => dispatch(abrirChart(false))} contenido={<Chart/>} />
            </Grid>

            <Grid container item xs={12} sm={12} md={4} lg={4}>
                <DialogoGeneral open={openChartPromedio} cerrar={() => dispatch(abrirChartPromedio(false))} contenido={<ChartPromedio/>} />
            </Grid>
        </Grid>
    );
}

export default SuperheroePage;
