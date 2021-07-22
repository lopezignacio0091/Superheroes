
import React, { Fragment, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Powerstart from './powerstart/Powerstart';
import Biography from './biography/Biography';


const useStyles = makeStyles((theme) => ({
  img: {
    borderRadius: '50%'
  },
  title: {
    borderRadius: 'nullpx',
    fontFamily: 'Titillium Web',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '38px',
    color: '#5974FB',
 },
}))

const TablaUsuarios = () => {
  const [abrir, setabrir] = useState(false);
  const { viewSuperHeroe, loading } = useSelector(state => state.SuperheroeReducer);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <img src={viewSuperHeroe.image.url} className={classes.img} height="200" width="200" />
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} alignItems="center">
          <h1 className={classes.title}>{viewSuperHeroe.name}</h1>
          <Biography data={viewSuperHeroe.biography} work={viewSuperHeroe.work}/>
        </Grid>
        <Grid item xs={12} md={12}>
           <h5 className={classes.title}>{"Powerstats"}</h5>
          <Powerstart data={viewSuperHeroe.powerstats} />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default TablaUsuarios;
