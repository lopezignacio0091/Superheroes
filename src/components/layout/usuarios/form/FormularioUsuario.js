import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, buscarHeroeApi, setLoading } from '../../../../actions/FormularioUsuarioActions';
import { abrirFormularioSuperheroe } from '../../../../actions/SuperheroeActions';
import { Formik, Form } from 'formik';
import { Button, LinearProgress, Grid, Divider, Avatar } from '@material-ui/core';
import MyTextField from './textField/MyTextField';
import * as Yup from "yup";
import { makeStyles } from '@material-ui/core/styles';
import './estiloForm.css';
import BotonNuevo from '../../utils/botonNuevo/BotonNuevo';
import AlertUtils from '../../utils/alert/AlertUtils';
import { Fragment } from 'react';


const useStyles = makeStyles((theme) => ({
    grid: {
        marginTop: '18px',
    },
    gridBuscar: {
        marginTop: '48px',
    },
    buttonStyle: {
        background: '#5974FB',
        borderRadius: '4px',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        color: '#FFFFFF',
        width: '50%',
        height: '40px',
        textTransform: 'none',
        fontFamily: "Titillium Web",
        marginLeft: '31px',
        '&:hover': {
            backgroundColor: '#5974FB',
            color: '#FFFFFF',
        }
    },
    headerInput: {
        paddingLeft: '20px'
    },
    textField: {
        width: '100%',
        marginTop: '5px',
    },
    inputText: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '18px',
        letterSpacing: ' 0.5px',
        color: '#002563'
    },
    botones: {
        marginLeft: '366px',
        marginTop: '35px',
    },
    label: {
        marginLeft: '20px',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '0.4px',
        color: 'rgba(0, 37, 99, 0.6)',
        fontFamily: 'Titillium Web'

    },
    labelCV: {
        marginLeft: '20px',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '18px',
        letterSpacing: '0.5px',
        color: '#414141',
        fontFamily: 'Titillium Web'

    },
    titulo: {
        fontStyle: 'normal',
        fontWeight: 'bolder',
        fontSize: '22px',
        lineHeight: '24px',
        letterSpacing: '0.18px',
        color: '#002563',
        fontFamily: 'Titillium Web'
    },
    divider: {
        width: '97%',
        marginTop: '23px',
        marginBottom: '32px',
        marginLeft: '12px'
    },
    tipo: {
        alignSelf: 'center'
    },
    botonCancelar: {
        color: '#5974FB',
        width: '52px',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        textTransform: 'none',
        fontFamily: 'Titillium Web',
        marginRigth: '31px'

    },
    large: {
        width: '100px',
        height: '100px',
    },
    botonGuardar: {
        background: '#5974FB',
        borderRadius: '4px',
        width: '215px',
        height: '40px',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        color: '#FFFFFF',
        marginLeft: '31px',
        textTransform: 'none',
        fontFamily: 'Titillium Web'

    },
    gridCompraVenta: {
        marginTop: '1px'
    }
}));

const FormularioSuperheroe = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const { superheroes,usuarioEdit, editStatus, loadingHeroe, errorSuperHeroe,mensajeWarning} = useSelector(state => state.SuperheroeReducer);

    const SignupSchema = Yup.object().shape({
        nombre: Yup.string().min(1, 'Too Short!').max(170, 'Too Long!').required('Required'),
    });

    const buscarHeroe = (values, setFieldValue) => {
        dispatch(setLoading());
        dispatch(buscarHeroeApi(values.buscador, setFieldValue,superheroes))
    }

    return (
        <Formik
            initialValues={{
                nombre: '',
                imagen: '',
                buscador: '',
                alineacion: '',
                id: "",
                powers: {},
                weight:'',
                height:''

            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    dispatch(createUser(values));
                    setSubmitting(false);
                    dispatch(abrirFormularioSuperheroe(false));
                    resetForm();
                }, 500);
            }}
        >
            {({ submitForm, isSubmitting, errors, touched, initialValues, setFieldValue, values }) => (
                <Form >
                    <span className={classes.titulo}>{"Nuevo Superheroe"}</span>
                    <Grid container spacing={2}>

                        <Grid item xs={8} md={8} lg={8} className={classes.grid}>
                            <label className={classes.label}>Nombre Superheroe *</label>
                            <MyTextField variant="outlined" className={classes.textField} name="buscador" type="text" />
                        </Grid>

                        <Grid item xs={4} md={4} lg={4} className={classes.gridBuscar} >
                            <Button disabled={!values.buscador} className={classes.buttonStyle} onClick={() => buscarHeroe(values, setFieldValue)}>{"Buscar"}</Button>
                        </Grid>

                        <Divider variant="middle" className={classes.divider} />

                        <Grid item xs={12} md={12} lg={12}>
                            {loadingHeroe && <LinearProgress />}
                        </Grid>
                        {(errorSuperHeroe) ?
                            <Grid item xs={12} md={12} lg={12}>
                                <AlertUtils TYPE={"warning"} CLASS={"errorSuper"} LABEL={mensajeWarning} />
                            </Grid> :
                            <Fragment>
                                <Grid item xs={8} md={8} lg={8}>
                                    <label className={classes.label}>Nombre *</label>
                                    <MyTextField variant="outlined" className={classes.textField} name="nombre" type="text" disabled />
                                </Grid>
                                <Grid item xs={4} md={4} lg={4}>
                                    <label className={classes.label}>Imagen *</label>
                                    <Avatar src={values.imagen} alt="Smiley face" className={classes.large} />
                                </Grid>
                            </Fragment>

                        }
                        <Grid item xs={12} md={12} lg={12}>
                            {isSubmitting && <LinearProgress />}
                        </Grid>

                        <Grid item xs={12} md={12} lg={12} container justify="flex-end" spacing={1}>
                            <Button size="small" className={classes.botonCancelar} disabled={isSubmitting}
                                onClick={() => { dispatch(abrirFormularioSuperheroe(false)); }}
                            >
                                Cancelar
                                </Button>

                            <BotonNuevo classButton={"buttonStyle"} accion={submitForm} label={'Crear'} />

                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
}

export default FormularioSuperheroe;