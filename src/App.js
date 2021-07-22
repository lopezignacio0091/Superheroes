import React from 'react';
import { Provider } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles'
import store from './store';
import './css/App.css';
import WebFont from 'webfontloader';
import MainRoute from './components/route/MainRoute';
import {  BrowserRouter as Router} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

const App = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <div className={classes.root}>
        <Router>
          <MainRoute />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
