import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { getLoginUser } from '../../../actions/LoginActions'
import { Grid, Button, InputLabel, LinearProgress, Hidden, Typography, TextField } from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Styles from './styles'

const Login = () => {
    const classes = Styles();
    const dispatch = useDispatch();
    const { loading, errorLogin, mensajeErrorLogin } = useSelector(state => state.LoginReducer);

    const SignupSchema = Yup.object().shape({
        email: Yup.string().email(),
        password: Yup.string().min(5, 'Password has to be longer than 6 characters!').required('Password is required!')
    });

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                showPassword: false,

            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    dispatch(getLoginUser(values));
                    //resetForm();
                    setSubmitting(false);
                }, 500);
            }}
        >
            {({ submitForm, isSubmitting, values, setFieldValue, errors,touched }) => (
                <Form onKeyDown={(e) => { if (e.key === 'Enter') { submitForm(); } }}>
                    <Grid className={classes.body} container alignItems="center">
                        <Hidden only={['sm', 'xs']}>
                            <Grid item xs={12} md={4}></Grid>
                        </Hidden>
                        <Grid item xs={12} md={4}>
                            <Grid item xs={12} md={12} className={classes.gridBienvenido}>
                                <Typography variant="h5" className={classes.bienvenido}>¡Bienvenido!</Typography>
                            </Grid>
                            <Grid item xs={12} md={12} className={classes.grid}>
                                <Typography className={classes.financiera}>Sistema<br></br>de Superheroes</Typography>
                            </Grid>
                            <Grid item xs={12} md={12} className={classes.grid}>
                                <InputLabel className={(!errors.email) ? classes.label : classes.error}>Email</InputLabel>
                                <TextField type="text" error={!errors.email ? false : true} name="email" onChange={(e) => { setFieldValue("email", e.target.value); }} errors={errors.email} variant="outlined" className={classes.inputUsuario} />
                                {errors.email ? (
                                    <label className={classes.error}>{errors.email}</label>) : null}
                            </Grid>
                            <Grid item xs={12} md={12} className={classes.gridPass}>
                                <InputLabel className={(!errors.password) ? classes.label : classes.error}>Password</InputLabel>
                                <TextField error={!errors.password? false : true} variant="outlined" className={classes.inputUsuario} onChange={(e) => { setFieldValue("password", e.target.value); }} name="password" type={values.showPassword ? 'text' : 'password'} InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <IconButton onClick={() => { setFieldValue('showPassword', !values.showPassword) }} >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }} />
                                {errors.password && touched.password ? (
                                    <label className={classes.error}>{errors.password}</label>) : null}
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                {loading && <LinearProgress />}
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                {errorLogin && <label className={classes.error}>{mensajeErrorLogin}</label>}
                            </Grid>
                            <Grid item container sm={12} md={12} className={classes.gridButtom} alignItems="center">
                                <Grid item xs={3} md={3}></Grid>
                                <Grid item xs={6} md={6}>
                                    <Button className={classes.button} disabled={isSubmitting} onClick={submitForm}>
                                        <label className={classes.labelButton}>Ingresar</label>
                                    </Button>
                                </Grid>
                                <Grid item xs={3} md={3}></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Hidden only={['sm', 'xs']}>
                        <Grid item xs={12} md={4}></Grid>
                    </Hidden>
                </Form>
            )}
        </Formik>
    )
}
export default Login;