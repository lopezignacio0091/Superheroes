import {
    SET_MODAL_CHART,
    GET_CHART,
    SET_LOADING_CHART,
    GET_PROMEDIO,
    SET_MODAL_PROMEDIO
} from '../actions/types';

const initialState = {
    openChart: false,
    openChartPromedio: false,
    charData: [],
    chartLabels: [],
    loading: false,
    chartPromedioData: [],
    chartPromedioLabel: []
}
const ChartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHART:
            return {
                ...state,
                charData: action.payload.powerstats,
                chartLabels: action.payload.labels,
                loading: false
            };
        case SET_LOADING_CHART:
            return {
                ...state,
                loading: true
            };

        case GET_PROMEDIO:
            return {
                ...state,
                chartPromedioData: action.payload.prom,
                chartPromedioLabel: action.payload.label,
                loading: false
            };
        case SET_MODAL_CHART:
            return {
                ...state,
                openChart: action.payload,
            };
            case SET_MODAL_PROMEDIO:
                return {
                    ...state,
                    openChartPromedio: action.payload,
                };
        default:
            return state;
    }
}

export default ChartReducer;