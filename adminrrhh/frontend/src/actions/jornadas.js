import React from 'react';
import { GET_JORNADAS, DELETE_JORNADA, ADD_JORNADA, UPDATE_JORNADA } from './types';

//tengo entendido que se puede usar axios de igual forma, pero para no complejizar más las librerías, solo tomaré la por default

//obtener jornadas
export const getJornadas = () => dispatch => {
    fetch('/api/jornadas/')
        .then(res => res.json())
        .then((data) => {
            dispatch({
                type: GET_JORNADAS,
                payload: data
            });
        })
        .catch(err => console.log(err));
}

//eliminar jornadas
export const deleteJornadas = (id) => dispatch => {
    fetch(`/api/jornadas/${id}`, { method: 'DELETE' })
        .then((res) => {
            dispatch({
                type: DELETE_JORNADA,
                payload: id
            });
        })
        .catch(err => console.log(err));
}


//agregar nueva jornada
export const addJornada = (jornada) => dispatch => {
    fetch('/api/jornadas/', {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jornada) //esto axios lo manejo solo D:
    })
        .then(res => res.json())
        .then((data) => {
            dispatch({
                type: ADD_JORNADA,
                payload: data
            });
        }).catch(err => console.log(err));
}

export const updateJornada = (id, jornada) => dispatch => {
    fetch(`/api/jornadas/${id}/`, {
        method: "PATCH",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jornada)
    })
        .then(res => res.json())
        .then((data) => {
            dispatch({
                type: UPDATE_JORNADA,
                payload: data
            });
        }).catch(err => º.log(err));
}
