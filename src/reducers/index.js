import {combineReducers} from 'redux';
import FormularioUsuarioReducer from './FormularioUsuarioReducer';
import SuperheroeReducer from './SuperheroeReducer';
import LoginReducer from './LoginReducer';
import ChartReducer from './ChartReducer';


const rootReducer =  combineReducers({
     FormularioUsuarioReducer,
     SuperheroeReducer,
     LoginReducer,
     ChartReducer
});

export default rootReducer;