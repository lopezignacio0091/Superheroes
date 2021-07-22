import { Grid } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react';
import { MuiThemeProvider, createMuiTheme, IconButton, Avatar } from '@material-ui/core';
import HeaderPage from '../../utils/header/HeaderPage';
import NuevoUsuario from './nuevo/NuevoUsuario';
import TablaUtil from '../../utils/tabla/TablaUtil';
import { useDispatch, useSelector } from 'react-redux';
import { getSuperheroes, setDeleteSuperheroe, deleteUser, viewSuperHeroe, setLoading } from '../../../../actions/SuperheroeActions';
import EdicionPopUp from '../../utils/popup/EdicionPopUp';
import ConfirmarPopUp from '../../utils/popup/ConfirmarPopUp';
import Progress from '../../progress/Progress';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChipUtils from '../../utils/chip/ChipUtils';
import Botonera from '../../utils/botonera/Botonera';
import Chart from './chartButton/Chart';
import ChartPromedio from './chartButton/ChartButtonPromedio';


const TablaSuperheroes = () => {
  const [abrir, setabrir] = useState(false);
  const { superheroes, usuarioEliminar, labelBoton, textoMensaje, tituloDialogo, loading } = useSelector(state => state.SuperheroeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getSuperheroes());
  }, []);

  if (loading) {
    return (
      <Progress />
    );
  }

  const columns = [
    {
      name: "Imagen",
      options: {
        display: false,
        filter: false,
        sort: false,
      }
    },
    {
      name: "Imagen",
      options: {
        filter: false,
        sort: true,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {

          return (

            <Avatar src={tableMeta.rowData[0]} alt="Smiley face" height="80" width="80" />
          );
        }
      }
    },
    { name: "Nombre", options: { display: true, viewColumns: false, filter: true } },
    {
      name: "Alineacion",
      options: {
        display: false,
        filter: true,
        sort: false,
      }
    },
    {
      name: "Alineacion",
      options: {
        filter: false,
        sort: true,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {

          return (
            <ChipUtils label={tableMeta.rowData[3]} class={tableMeta.rowData[3]} />
          );
        }
      }
    },
    {
      name: " ",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (nada, row, rowIndex) => {
          const dataOfRow = superheroes.filter(e => e.name === row.rowData[2])[0]
          return (
            <IconButton color="primary" aria-label="view more" component="span" onClick={() => dispatch(viewSuperHeroe(dataOfRow))} >
              <VisibilityIcon />
            </IconButton>
          );
        }
      }
    },
    {
      name: " ",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (nada, row, rowIndex) => {
          const dataOfRow = superheroes.filter(e => e.name === row.rowData[2])[0]
          return (
            <EdicionPopUp accionEliminar={() => { dispatch(setDeleteSuperheroe(dataOfRow)); setabrir(true); }} />
          );
        }
      }
    }
  ];

  const attr = ["image", "name", "aligment", "id"];

  const options = {
    selectableRows: 'none',
    download: true,
    print: false,
    filter: true,
    confirmFilters: false,
    search: true,
    viewColumns: false,
    customToolbar: () => {
      return (
        <NuevoUsuario />
      );
    }

  };

  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableToolbar: {
          actions: {
              display: 'flex',
              flexDirection: 'row',
              flex: 'initial',
          },
      },
        MUIDataTableHeadCell: {
          data: {
            color: "#002563",
            fontFamily: 'Titillium Web',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '16px'
          }
        },
      },
    });

  return (
    <Fragment>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        {/* <HeaderPage titulo={'SuperHeroes'} boton={<NuevoUsuario />}  /> */}
        <HeaderPage titulo={'SuperHeroes'} boton={<Botonera NuevaCompra={ChartPromedio} NuevaVenta={Chart}/>} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <MuiThemeProvider theme={getMuiTheme()}>
          <TablaUtil rows={superheroes} columns={columns} title={'Listado Total'} attr={attr} options={options} />
        </MuiThemeProvider>
      </Grid>
      <Grid>
        <ConfirmarPopUp status={abrir} cerrar={setabrir} labelBoton={labelBoton} titulo={tituloDialogo} mensaje={textoMensaje} accionBoton={() => dispatch(deleteUser(usuarioEliminar.id))} />
      </Grid>
    </Fragment>
  );
}

export default TablaSuperheroes;
