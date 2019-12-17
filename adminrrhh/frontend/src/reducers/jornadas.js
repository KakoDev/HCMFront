import { GET_JORNADAS, DELETE_JORNADA, ADD_JORNADA, UPDATE_JORNADA } from '../actions/types.js';

const initialState = {
    jornadas: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_JORNADAS:
            return {
                ...state,
                jornadas: action.payload
            };
        case DELETE_JORNADA:
            return {
                ...state,
                jornadas: state.jornadas.filter(jornada => jornada.idjornada !== action.payload)
            };
        case ADD_JORNADA:
            return {
                ...state,
                jornadas: [...state.jornadas, action.payload]
            };
        case UPDATE_JORNADA:
            return {
                ...state,
                jornadas: state.jornadas.map(item => {
                    return item.idjornada === action.payload.idjornada ? action.payload : item;
                })
            }
        default:
            return state;
    }
}
