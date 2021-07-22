
import React, { Fragment} from 'react';
import {Grid,Slider,Typography ,withStyles} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
    title: {
        fontFamily: 'Titillium Web',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '13px',
        lineHeight: '16px',
        color: '#0D0D0D',
    },

}))
const PrettoSlider = withStyles({
    root: {
      color: '#5974FB',
      height: 6,
    },
    thumb: {
      height: 14,
      width: 14,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);
const PowerStart = ({ data }) => {
    const classes = useStyles();

    return (
        <Fragment>
            <Grid container spacing={2}>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Typography gutterBottom className={classes.title}>{"Combat"}</Typography>
                            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={(data.combat === 'null') ? 0 : data.combat} />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Typography gutterBottom className={classes.title}>{"Durability"}</Typography>
                            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={(data.durability === 'null') ? 0 : data.durability} />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Typography gutterBottom className={classes.title}>{"Intelligence"}</Typography>
                            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={(data.intelligence === 'null') ? 0 : data.intelligence} />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Typography gutterBottom className={classes.title}>{"Power"}</Typography>
                            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={(data.power === 'null') ? 0 : data.power} />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Typography gutterBottom className={classes.title}>{"Speed"}</Typography>
                            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={(data.speed === 'null') ? 0 : data.speed} />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Typography gutterBottom className={classes.title}>{"Strength"}</Typography>
                            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={(data.strength === 'null') ? 0 :data.strength} />
                    </Grid>
            </Grid>
        </Fragment >
    );
}

export default PowerStart;
