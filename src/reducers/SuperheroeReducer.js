import {
    SET_ERROR,
    SET_LOADING,
    SET_NEW_USER,
    GET_USERS,
    DELETE_USER,
    STATUS_FORMULARIO,
    CERRAR_MENSAJE,
    GET_USERS_ROL,
    SET_USER_ELIMINAR,
    VIEW_SUPERHEROE,
    VIEW_DETAIL_MODAL,
    SEARCH_HEROE,
    HEROE_NOT_FOUND,
    LOADING_SUPER,
} from '../actions/types';

const initialState = {
    loading: false,
    error: '',
    superheroes: [],
    usuarioEdit: {},
    editStatus: false,
    abrirFormularioStatus: false,
    tituloFormulario: 'Nuevo Usuario',
    mensajeWarning:'El Superheroe existe por favor ingrese otro',
    mostrarMensaje: false,
    textoMensaje: '',
    roles: [],
    tituloDialogo: '',
    labelBoton: '',
    usuarioEliminar: {},
    sucursales: [],
    viewSuperHeroe: {},
    viewModal: false,
    errorSuperHeroe: false,
    loadingHeroe: false,
};
const UsuarioReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_ELIMINAR:
            return {
                ...state,
                usuarioEliminar: action.payload,
                textoMensaje: '¿Estás seguro de que querés eliminarlo?',
                tituloDialogo: 'Eliminar ' + action.payload.name,
                labelBoton: 'Si, Eliminar',
            };
        case GET_USERS_ROL:
            return {
                ...state,
                roles: action.payload
            };

        case HEROE_NOT_FOUND:
            return {
                ...state,
                errorSuperHeroe: true,
                loadingHeroe: false,
                mensajeWarning:action.payload
            };
        case SEARCH_HEROE:
            return {
                ...state,
                errorSuperHeroe: false,
                loadingHeroe: false
            };
        case CERRAR_MENSAJE:
            return {
                ...state,
                mostrarMensaje: false,
                textoMensaje: ''
            };
        case STATUS_FORMULARIO:
            return {
                ...state,
                abrirFormularioStatus: action.payload,
                tituloFormulario: 'Nuevo Usuario',
                usuarioEdit: {},
                editStatus: false,
            };
        case SET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case GET_USERS:
            return {
                ...state,
                superheroes: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case LOADING_SUPER:
            return {
                ...state,
                loadingHeroe: true
            };
        case VIEW_SUPERHEROE:
            return {
                ...state,
                viewSuperHeroe: action.payload,
                viewModal: true,
            };
        case VIEW_DETAIL_MODAL:
            return {
                ...state,
                viewModal: action.payload
            };

        case SET_NEW_USER:
            return {
                ...state,
                superheroes: [...state.superheroes, action.payload],
                mostrarMensaje: true,
                textoMensaje: 'Superheroe Creado Exitosamente.'
            };
        case DELETE_USER:
            return {
                ...state,
                // eslint-disable-next-line eqeqeq
                superheroes: state.superheroes.filter(elem => { return (elem.id != action.payload) }),
                mostrarMensaje: true,
                textoMensaje: 'SuperHeroe Eliminado Exitosamente.',
                usuarioEliminar: {},
                tituloDialogo: '',
                labelBoton: '',
            };
        default:
            return state;
    }
};

export default UsuarioReducer;