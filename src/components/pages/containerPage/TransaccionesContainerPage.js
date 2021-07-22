import React from 'react';
import {useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, Grid, Typography } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import '../../../css/NavTransacciones.css';


export default function TransaccionesContainerPage() {
  const {usuario}  = useSelector(state => state.LoginReducer);
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className='NavBarTransaccion'>
        <Toolbar>
          <Grid justify="space-between" container>
            <Grid item>
              <Typography variant="h5">Sistema de Financiera</Typography>
            </Grid>
            <Grid item>
              <Button
                startIcon={<AccountBoxIcon />}
              >
                {"Hola " + usuario.userCode}
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Grid>
             
      </Grid>
    </React.Fragment>
  );
}