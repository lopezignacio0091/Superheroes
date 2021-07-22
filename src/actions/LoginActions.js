import axios from 'axios';
import {
    SET_ERROR,
    SET_LOADING,
    GET_USER_LOGIN,
    LOGOUT,
    SET_ERROR_LOGIN

} from './types';

import JWT from '../Service/JWT'
import axiosInstance from '../helpers/axiosInstance';

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}


export const getLoginUser = (values) => async dispatch => {
    try {
        dispatch(setLoading());
        const { data } = await axios.post('http://challenge-react.alkemy.org/',
            {
                "email": values.email,
                "password": values.password
            });

        if (data) {
            sessionStorage.setItem("USER_ALKEMY", JSON.stringify(data.token));
            JWT.Init(data.token);
            dispatch({
                type: GET_USER_LOGIN,
                payload: data
            });
        }

    } catch (error) {
        dispatch({
            type: SET_ERROR_LOGIN,
            payload: error
        });

    }
}

    export const logout = () => dispatch => {
        dispatch({
            type: LOGOUT,
        });
    }
