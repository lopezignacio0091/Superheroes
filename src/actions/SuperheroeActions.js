import {
    DELETE_USER,
    GET_USERS,
    SET_ERROR,
    STATUS_FORMULARIO,
    CERRAR_MENSAJE,
    SET_USER_ELIMINAR,
    VIEW_SUPERHEROE,
    VIEW_DETAIL_MODAL,
    SET_LOADING,
    GET_TOKEN,
} from './types';

import axiosInstance from '../helpers/axiosInstance';
import JWT from '../Service/JWT';
import axios from 'axios';
import SuperHeroeDTO from './DTO/SuperHeroeDTO';


export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export const getSuperheroes = () => async dispatch => {
    try {
        const array = [];
       
        for(let i=0 ;i<6;i++) {
            const { data } = await axiosInstance.get(`${GET_TOKEN}/`+parseInt(Math.random() * (730 - 1) + 1));
                array.push(SuperHeroeDTO.getSuperHeroe(data));
            }

            dispatch({
                type: GET_USERS,
                payload: array
            });
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}




export const setDeleteSuperheroe = (elem) => async dispatch => {
    dispatch({
        type: SET_USER_ELIMINAR,
        payload: elem
    });
}


export const viewSuperHeroe = (elem) => async dispatch => {
    try {
        const { id } = elem;
        const { data } = await  axiosInstance.get(`${GET_TOKEN}/`+ id);

        dispatch({
            type: VIEW_SUPERHEROE,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}


export const deleteUser = (Id) => async dispatch => {
    try {
        dispatch({
            type: DELETE_USER,
            payload: Id
        });

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const abrirFormularioSuperheroe = (status) => dispatch => {
  dispatch({
        type: STATUS_FORMULARIO,
        payload: status
    });

}


export const abrirViewDetail = (status) => dispatch => {

    dispatch({
        type: VIEW_DETAIL_MODAL,
        payload: status
    });

}


export const cerrarMensajeSuperheroe = () => dispatch => {

    dispatch({
        type: CERRAR_MENSAJE,
    });
}


