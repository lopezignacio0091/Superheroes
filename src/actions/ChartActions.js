import {
    SET_MODAL_CHART,
    GET_CHART,
    SET_LOADING_CHART,
    GET_PROMEDIO,
    SET_MODAL_PROMEDIO
} from './types';
import _ from "lodash";

export const abrirChart = (status) => dispatch => {

    dispatch({
        type: SET_MODAL_CHART,
        payload: status
    });

}

export const setLoading = () => {
    return {
        type: SET_LOADING_CHART
    }
}

export const getChart =(data)=> async dispatch=>{
    
    let labels=["Intelligence","Strength","Speed","Durability","Power","Combat"];
    let powerstats = [sum(data,"intelligence"),sum(data,"strength"),sum(data,"speed"),sum(data,"durability"),sum(data,"power"),sum(data,"combat")];
    dispatch({
        type: GET_CHART,
        payload: {powerstats,labels}
    });

}


export const getChartPromedio=(data)=>async dispatch=>{
    let label = ["Altura","Peso"];
    let prom=[promedio(data,"height"),promedio(data,"weight")];

    dispatch({
        type: GET_PROMEDIO,
        payload: {prom,label}
    });
}

const sum =(data,label)=>{let x =_.sumBy(data, function(o) {return  (o.powerstats[label] != 'null') ? Number(o.powerstats[label]):0 });
    return x;    
}

const promedio =(data,label)=>{let x =_.sumBy(data, function(o) {
    return  (o[label] != 'null') ? Number(o[label]):0 });
    return x  / data.length;    
}



export const abrirChartPromedio = (status) => dispatch => {

    dispatch({
        type: SET_MODAL_PROMEDIO,
        payload: status
    });

}

