import   React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../actions/LoginActions'
import { Drawer, AppBar, Toolbar, List, ListItemIcon, Grid, Divider, CssBaseline, ListItem, ListItemText, Button } from '@material-ui/core'
import clsx from 'clsx';
import { BrowserRouter as Router, useRouteMatch, Switch, Route, Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import styles from './styles';
import AppRoute from '../../route/AppRoute';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import '../../../css/NavTransacciones.css';

const AppContainerPage = () => {

  const classes = styles();
  let histories = useHistory();
  const dispatch = useDispatch();
  const { usuario } = useSelector(state => state.LoginReducer);

  const [open, setOpen] = React.useState(true);
  let { url } = useRouteMatch();

  const logOut = () => {
    sessionStorage.removeItem('USER_ALKEMY');
    dispatch(logout());
    histories.push("/Login");
  }

  return (
    <div className={classes.root + ' App'}>
      <CssBaseline />
      <AppBar className={clsx(classes.appBar, { [classes.appBarShift]: open, })}>
        <Toolbar className='NavBarTransaccion'>
          <Grid justify="space-between" container>
            <Grid item>
            </Grid>
            <Grid item>
              <Button
                onClick={logOut}
                startIcon={<AccountBoxIcon />}
              >
                {"Hola " + usuario}
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" className={clsx(classes.drawer, { [classes.drawerOpen]: open, })} classes={{ paper: clsx({ [classes.drawerOpen]: open, }), }}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <h5 className={classes.titleSistema}>
              Sistema <br></br>de Superheroes
            </h5>
          </Grid>
          <Grid item xs={12} md={12} className={classes.gridReporte}>
            <List>
              <ListItem button component={Link} to={`${url}/Superheroes`}  >
                <ListItemIcon ><HomeIcon className={classes.icono} /></ListItemIcon>
                <ListItemText className={classes.titleLink}>Home</ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Divider className={classes.divider} />
        </Grid>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container>
          <AppRoute />
        </Grid>
      </main>

    </div>
  );
}

export default AppContainerPage;