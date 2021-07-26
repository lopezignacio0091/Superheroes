import {
    SET_ERROR,
    SET_LOADING,
    SET_NEW_USER,
    LOADING_SUPER,
    SEARCH_HEROE,
    HEROE_NOT_FOUND
} from './types';
import UserDTO from './DTO/SuperHeroeDTO';
import axios from 'axios';
import _ from "lodash";


export const setLoading = () => {
    return {
        type: LOADING_SUPER
    }
}

export const createUser = (data) => async dispatch => {
    try {

        dispatch({
            type: SET_NEW_USER,
            payload: UserDTO.postSuperHeroe(data)
        })

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}


export const buscarHeroeApi = (heroe, setFieldValue, superHeroes) => async dispatch => {

    const { data } = await axios.get('https://www.superheroapi.com/api.php/10225679446236377/search/' + heroe);
    let capacidad = false;

    if (data.response === 'error')
        dispatch({
            type: HEROE_NOT_FOUND,
            payload: "El superheroe no existe por favor ingrese otro"
        });

    if (data.response === "success" && validarSuper(superHeroes, data))
        dispatch({
            type: HEROE_NOT_FOUND,
            payload: "El superheroe ya existe por favor ingrese otro"
        })
    if (data.response === "success" && validarAlignment(superHeroes, data) >= 3) {
        capacidad = true;
        dispatch({
            type: HEROE_NOT_FOUND,
            payload: "El Superheroe no se puede agregar, ya cuenta con la capacidad maxima por equipo"
        })
    }
    if (data.response === "success" && !validarSuper(superHeroes, data) && validarAlignment(superHeroes, data) < 3) {
        setFieldValue('nombre', data.results[0].name);
        setFieldValue('id', data.results[0].id);
        setFieldValue('alineacion', data.results[0].biography.alignment);
        setFieldValue('imagen', data.results[0].image.url);
        setFieldValue('powers', data.results[0].powerstats);
        setFieldValue('weight', data.results[0].appearance.weight);
        setFieldValue('height', data.results[0].appearance.height);
        dispatch({
            type: SEARCH_HEROE,
        });
    }
}


const validarSuper = (superheroes, data) => {

    let x = _.findLastIndex(superheroes, function (o) {
        return o.id == data.results[0].id
    })

    return (x <= 0) ? false : true;
}

const validarAlignment = (superheroes, data) => {
    let x = _.sumBy(superheroes, function (o) {
        return (o["aligment"] === data.results[0].biography.alignment) ? 1 : 0
    });
    return x;
}