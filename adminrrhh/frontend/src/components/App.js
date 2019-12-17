import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import Inicio from './layout/Inicio';
import FormJornada from './jornadas/FormJornada';
import FormTurno from './turnos/FormTurno';
import FormConfig from './config/FormConfig';

class App extends Component {
    constructor(...props) {
        super(...props);
        this.data = {
            idjornada: 0,
            codigo: '',
            nombre: '',
            activo: 0
        }
    }

    render() {
        return (
            <Provider store={store}>
                <Header />
                <div className="container">
                    <Route exact path="/" component={Inicio} />
                    <Route path="/front/jornada/" component={FormJornada} />
                    <Route path="/front/turno/" component={FormTurno} />
                    <Route path="/front/config/" component={FormConfig} />
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));