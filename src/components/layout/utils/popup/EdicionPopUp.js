import { IconButton, List, ListItem, ListItemText, Popover } from '@material-ui/core';
import React, { Fragment } from 'react';
import './popupestilo.css';
import DeleteIcon from '@material-ui/icons/Delete';

const EdicionPopUp = ({accionEdicion, accionEliminar}) => {

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
                <DeleteIcon />
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
                <List component="nav" className='popup'>
                    <ListItem button onClick={() => {accionEliminar(); handleClose();}}>
                        <ListItemText primary="Eliminar" />
                    </ListItem>
                </List>
            </Popover>
        </Fragment>
    );
}

export default EdicionPopUp;
