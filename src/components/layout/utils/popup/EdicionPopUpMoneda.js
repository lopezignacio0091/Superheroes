import { IconButton, List, ListItem, ListItemText, Popover } from '@material-ui/core';
import React, { Fragment } from 'react';
import './popupestilo.css';
import EditIcon from '@material-ui/icons/Edit';

const EdicionPopUp = ({accionEdicion, accionCanje,accionVisualizar}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Fragment>
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleClick} >
                <EditIcon />
            </IconButton>
            <Popover 
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <List component="nav" className='popupMoneda'>
                    <ListItem button onClick={() => {accionEdicion();handleClose();}}>
                        <ListItemText primary="Editar transacción" />
                    </ListItem>
                    <ListItem button onClick={() => {accionVisualizar(); handleClose();}}>
                        <ListItemText primary="Visualizar transacción" />
                    </ListItem>
                    <ListItem button onClick={() => {accionCanje(); handleClose();}}>
                        <ListItemText primary="Canje de dinero" />
                    </ListItem>
                </List>
            </Popover>
        </Fragment>
    );
}

export default EdicionPopUp;
