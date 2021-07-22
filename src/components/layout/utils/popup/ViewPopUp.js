import { IconButton, List, ListItem, ListItemText, Popover } from '@material-ui/core';
import React, { Fragment } from 'react';
import './popupestilo.css';
import VisibilityIcon from '@material-ui/icons/Visibility';

const ViewPopUp = ({accionView}) => {

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
                <VisibilityIcon />
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
                <h5>hola esta es mi info</h5>
               
            </Popover>
        </Fragment>
    );
}

export default ViewPopUp;
