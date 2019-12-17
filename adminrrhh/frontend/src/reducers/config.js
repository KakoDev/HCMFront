import { GET_CONFIG, DELETE_CONFIG, ADD_CONFIG, UPDATE_CONFIG } from '../actions/types.js';

const initialState = {
    configs: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONFIG:
            return {
                ...state,
                configs: action.payload
            };
        case DELETE_CONFIG:
            return {
                ...state,
                configs: state.configs.filter(item => item.idconfig !== action.payload)
            };
        case ADD_CONFIG:
            return {
                ...state,
                configs: [...state.configs, action.payload]
            };
        case UPDATE_CONFIG:
            return {
                ...state,
                configs: state.configs.map(item => {
                    return item.idconfig === action.payload.idconfig ? action.payload : item;
                })
            }
        default:
            return state;
    }
}

