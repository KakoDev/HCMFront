import { combineReducers } from 'redux';
import jornadas from './jornadas'
import turnos from './turnos'
import configs from './config'

export default combineReducers({
    jornadas: jornadas,
    turnos: turnos,
    configs: configs,
});