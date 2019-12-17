import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getJornadas, deleteJornadas } from '../../actions/jornadas';

export class ListJornadas extends Component {

    static propTypes = {
        jornadas: PropTypes.array.isRequired,
    }

    componentDidMount() {
        this.props.getJornadas();
    }

    updateFields = (obj, idjornada, codigo, nombre) => {
        const activo = 1;
        const jornada = { idjornada, codigo, nombre, activo };
        this.props.updateData(jornada);
    }

    render() {
        return (
            <Fragment>

                <h2>Listado de activas:</h2>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Descripción</th>
                            <th style={{ textAlign: 'center' }}>Editar</th>
                            <th style={{ textAlign: 'center' }}>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.jornadas.map(jornada => (
                            <tr key={jornada.idjornada}>
                                <td>{jornada.codigo}</td>
                                <td>{jornada.nombre}</td>
                                <td style={{ textAlign: 'center' }}><button className="btn btn-info btn-sm"
                                    onClick={() => this.updateFields(this, jornada.idjornada, jornada.codigo, jornada.nombre)}>
                                    Editar
                                    </button>
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <button className="btn btn-danger btn-sm"
                                        onClick={this.props.deleteJornadas.bind(this, jornada.idjornada)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </Fragment >
        )
    }
}

const mapStateToProps = state => ({
    jornadas: state.jornadas.jornadas
});

export default connect(mapStateToProps,
    {
        getJornadas,
        deleteJornadas
    })(ListJornadas);

