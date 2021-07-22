import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    titulo: {
        fontFamily: 'Titillium Web',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '34px',
        lineHeight: '36px',
        color: '#5974FB',
        marginTop:'53px'
    }
}));

const HeaderPage = ({titulo, boton}) => {
    const classes = useStyles();

    return (
        <Fragment>
            <Grid item xs={8} sm={8} md={8} lg={8}>
                <span className={classes.titulo}>{titulo}</span>
            </Grid>
            <Grid container item xs={4} sm={4} md={4} lg={4} justify="flex-end">
                {boton}
            </Grid>
        </Fragment>
    );
}

export default HeaderPage;
