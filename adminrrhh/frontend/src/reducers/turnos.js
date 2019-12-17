import { GET_TURNO, DELETE_TURNO, ADD_TURNO, UPDATE_TURNO } from '../actions/types.js';

const initialState = {
    turnos: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TURNO:
            return {
                ...state,
                turnos: action.payload
            };
        case DELETE_TURNO:
            return {
                ...state,
                turnos: state.turnos.filter(t => t.idturno !== action.payload)
            };
        case ADD_TURNO:
            return {
                ...state,
                turnos: [...state.turnos, action.payload]
            };
        case UPDATE_TURNO:
            return {
                ...state,
                turnos: state.turnos.map(item => {
                    return item.idturno === action.payload.idturno ? action.payload : item;
                })
            }
        default:
            return state;
    }
}
