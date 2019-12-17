import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboardList, faUserClock, faDatabase } from '@fortawesome/free-solid-svg-icons'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">HCMFront - RRHH</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                <FontAwesomeIcon icon={faHome} size="xs" /> Inicio</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/front/jornada/"><FontAwesomeIcon icon={faClipboardList} size="xs" />  Jornadas</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/front/turno/"><FontAwesomeIcon icon={faUserClock} size="xs" /> Horarios</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/front/config/"><FontAwesomeIcon icon={faDatabase} size="xs" /> Configuración de Jornadas</a>
                        </li>
                    </ul>
                </div>
            </nav >
        )
    }
}

export default Header;
