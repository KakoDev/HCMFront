import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addJornada, updateJornada } from '../../actions/jornadas';
import ListJornadas from './ListJornadas';

export class FormJornada extends Component {

    state = {
        idjornada: 0,
        codigo: "",
        nombre: "",
        activo: 1
    };

    static propTypes = {
        //addJornada: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: ("" + e.target.value).toUpperCase() });

    onSubmit = e => {
        e.preventDefault();
        const { codigo, nombre, activo } = this.state;
        if (codigo === "" || nombre === "") return;
        const jornada = { codigo, nombre, activo };
        this.props.addJornada(jornada);
        this.setState({ codigo: '', nombre: '' });
    }

    UpdateUserData = e => {
        e.preventDefault();
        const { idjornada, codigo, nombre, activo } = this.state;
        const jornada = { idjornada, codigo, nombre, activo };
        if (codigo === "" || nombre === "") return;
        this.props.updateJornada(idjornada, jornada);
        this.setState({ idjornada: 0, codigo: '', nombre: '' });
    }

    readUpdateData = (jornada) => {
        this.setState(jornada);
    }

    render() {
        const { idjornada, codigo, nombre } = this.state;
        return (
            <Fragment>
                <div className="card card-body mt-4 mb-4">
                    <h2>Agregar Jornada</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Codigo</label>
                            <input type="text"
                                className="form-control"
                                name="codigo"
                                onChange={this.onChange}
                                value={codigo}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Nombre</label>
                            <input type="text"
                                className="form-control"
                                name="nombre"
                                onChange={this.onChange}
                                value={nombre} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>

                            <button type="submit" className="btn btn-primary"
                                style={{ margin: '10px' }}
                                disabled={idjornada === 0 ? false : true}
                            > Guardar</button>
                            <button type="button" onClick={this.UpdateUserData} className="btn btn-info"
                                style={{ margin: '10px' }}
                                disabled={idjornada === 0 ? true : false}
                            > Modificar</button>

                        </div>

                    </form>

                </div>

                <ListJornadas updateData={this.readUpdateData} />

            </Fragment >
        )
    }
}

export default connect(null, { addJornada, updateJornada })(FormJornada);
