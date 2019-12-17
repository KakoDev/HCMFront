import React from 'react';
import { GET_TURNO, ADD_TURNO, DELETE_TURNO, UPDATE_TURNO } from './types';

//tengo entendido que se puede usar axios de igual forma, pero para no complejizar más las librerías, solo tomaré la por default

export const getTurnos = () => dispatch => {
    fetch('/api/turnos/')
        .then(res => res.json())
        .then((data) => {
            dispatch({
                type: GET_TURNO,
                payload: data
            });
        })
        .catch(err => console.log(err));
}

export const deleteTurno = (id) => dispatch => {
    fetch(`/api/turnos/${id}`, { method: 'DELETE' })
        .then((res) => {
            dispatch({
                type: DELETE_TURNO,
                payload: id
            });
        })
        .catch(err => console.log(err));
}


export const addTurno = (turno) => dispatch => {
    fetch('/api/turnos/', {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(turno)
    })
        .then(res => res.json())
        .then((data) => {
            dispatch({
                type: ADD_TURNO,
                payload: data
            });
        }).catch(err => console.log(err));
}

export const updateTurno = (id, turno) => dispatch => {
    fetch(`/api/turnos/${id}/`, {
        method: "PATCH",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(turno)
    })
        .then(res => res.json())
        .then((data) => {
            dispatch({
                type: UPDATE_TURNO,
                payload: data
            });
        }).catch(err => console.log(err));
}
