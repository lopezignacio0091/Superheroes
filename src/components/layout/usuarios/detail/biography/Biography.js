
import React, { Fragment, useEffect, useState } from 'react';
import { Grid, Typography, withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    img: {
        borderRadius: '50%'
    },
    title: {
        fontFamily: 'Titillium Web',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '13px',
        lineHeight: '16px',
        color: '#FFFFFF',
    },
    label: {
        fontFamily: 'Titillium Web',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        lineHeight: '16px',
        color: '#3EBC94',
    },
    root:{
        backgroundColor: '#002563',
        boxShadow: '0px 5px 10px rgba(0, 37, 99, 0.05)',
        borderRadius: '12px',
        width:'85%'
    },

}))

const Byography = ({ data, work }) => {

    const classes = useStyles();
    return (
        <Fragment>
            <Grid container spacing={2} direction="row" className={classes.root}>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                    <Typography className={classes.title} gutterBottom>{"Combat : "}</Typography>
                </Grid>
                <Grid item xs={9} sm={9} md={9} lg={9}>
                    <label className={classes.label}>{data["full-name"]}</label>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                    <Typography className={classes.title} gutterBottom>{"First Appearance:"}</Typography>
                </Grid>
                <Grid item xs={9} sm={9} md={9} lg={9}>
                    <label className={classes.label}>{data["first-appearance"]}</label>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                    <Typography className={classes.title} gutterBottom>{"Publisher:"}</Typography>
                </Grid>
                <Grid item xs={9} sm={9} md={9} lg={9}>
                <label className={classes.label}>{data.publisher}</label>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                    <Typography className={classes.title} gutterBottom>{"Alignment:"}</Typography>
                </Grid>
                <Grid item xs={9} sm={9} md={9} lg={9}>
                <label className={classes.label}>{data.alignment}</label>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                    <Typography className={classes.title} gutterBottom>{"Occupation:"}</Typography>
                </Grid>
                <Grid item xs={9} sm={9} md={9} lg={9}>
                 <label className={classes.label}>{work.occupation}</label>
                </Grid>
            </Grid>
        </Fragment >
    );
}

export default Byography;
