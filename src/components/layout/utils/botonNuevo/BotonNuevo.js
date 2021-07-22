import { Button } from '@material-ui/core';
import React from 'react';
import Styles from './styles';

const BotonNuevo = ({ accion, label, classButton}) => {
  const classes = Styles();

  return (
    <Button
      variant="contained"
      className={classes[classButton]}
      onClick={accion}
    >
      {label}
    </Button>
  );
}

export default BotonNuevo;
