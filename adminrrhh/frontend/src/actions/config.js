import React from 'react';
import { GET_CONFIG, DELETE_CONFIG, ADD_CONFIG, UPDATE_CONFIG } from './types';

//tengo entendido que se puede usar axios de igual forma, pero para no complejizar más las librerías, solo tomaré la por default

//obtener jornadas
export const getConfigs = () => dispatch => {
    fetch('/api/jornadaturno/')
        .then(res => res.json())
        .then((data) => {
            dispatch({
                type: GET_CONFIG,
                payload: data
            });
        })
        .catch(err => console.log(err));
}

//eliminar jornadas
export const deleteConfig = (id) => dispatch => {
    fetch(`/api/jornadaturno/${id}`, { method: 'DELETE' })
        .then((res) => {
            dispatch({
                type: DELETE_CONFIG,
                payload: id
            });
        })
        .catch(err => console.log(err));
}


//agregar nueva jornada
export const addConfig = (config) => dispatch => {
    fetch('/api/jornadaturno/', {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(config) //esto axios lo manejo solo D:
    })
        .then(res => res.json())
        .then((data) => {
            dispatch({
                type: ADD_CONFIG,
                payload: data
            });
        }).catch(err => console.log(err));
}

export const updateConfig = (id, config) => dispatch => {
    fetch(`/api/jornadaturno/${id}/`, {
        method: "PATCH",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(config)
    })
        .then(res => res.json())
        .then((data) => {
            dispatch({
                type: UPDATE_CONFIG,
                payload: data
            });
        }).catch(err => º.log(err));
}
