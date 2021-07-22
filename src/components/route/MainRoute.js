import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import Login from '../layout/login/Login';
import AppContainerPage from '../pages/containerPage/AppContainerPage';
import NotFound from '../pages/NotFound';
import ProtectedRoute from './ProtectedRoute';

const MainRoute = () => {

    const { autorizado } = useSelector(state => state.LoginReducer);
    const isAuth = autorizado;
    const history = useHistory();

    useEffect(() => {
        if (autorizado) {
            history.push('/App/Common/');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [autorizado]);

    return (
        <Switch>
            <Route exact={true} path='/' component={Login} />
            <Route path='/Login' component={Login} />
            <ProtectedRoute path='/App/Common/' component={AppContainerPage} isAuth={isAuth} />
            <ProtectedRoute path='/App/' component={NotFound} isAuth={isAuth} />
            <ProtectedRoute component={NotFound} isAuth={isAuth} />
        </Switch>
    );
}

export default MainRoute;
