import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, HashRouter, Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import SuperheroePage from '../pages/SuperheroePagina';
import NotFound from '../pages/NotFound';
import ProtectedRoute from './ProtectedRoute';
import { useSelector } from 'react-redux';

const AppRoute = (props) => {

  const { autorizado } = useSelector(state => state.LoginReducer);
  const isAuth = autorizado;

  return (
    <>
      <ProtectedRoute path='/App/Common/Superheroes' component={SuperheroePage} isAuth={isAuth} />
      <ProtectedRoute path='/App/Common/Info' component={NotFound} isAuth={isAuth} />
      <Route path='/App/Common/'>
        <Redirect to="/App/Common/Superheroes" />
      </Route>
    </>
  )
}

export default AppRoute;
