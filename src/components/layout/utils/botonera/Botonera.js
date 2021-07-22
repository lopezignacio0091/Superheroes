import React from 'react';
import { Grid } from '@material-ui/core';

const Botonera = ({NuevaCompra, NuevaVenta}) => {
    return (
        <Grid container>
            <Grid item xs={6}><NuevaCompra/></Grid>
            <Grid item xs={6}><NuevaVenta /></Grid>
        </Grid>
    );
}

export default Botonera;
