import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTurnos, deleteTurno } from '../../actions/turnos';

export class ListTurnos extends Component {

    static propTypes = {
        turnos: PropTypes.array.isRequired,
    }

    componentDidMount() {
        this.props.getTurnos();
    }

    updateFields = (obj, idturno, diadesde, diahasta, horadesde, horahasta) => {
        const activo = 1;
        const turno = { idturno, diadesde, diahasta, horadesde, horahasta, activo };
        this.props.updateData(turno);
    }

    render() {
        return (
            <Fragment>

                <h2>Listado de activas:</h2>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Dia Desde</th>
                            <th>Dia Hasta</th>
                            <th>Hora Desde</th>
                            <th>Hora Hasta</th>
                            <th style={{ textAlign: 'center' }}>Editar</th>
                            <th style={{ textAlign: 'center' }}>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.turnos.map(turno => (
                            <tr key={turno.idturno}>
                                <td>{turno.nombrediadesde}</td>
                                <td>{turno.nombrediahasta}</td>
                                <td>{turno.horadesde}</td>
                                <td>{turno.horahasta}</td>
                                <td style={{ textAlign: 'center' }}><button className="btn btn-info btn-sm"
                                    onClick={() => this.updateFields(this, turno.idturno, turno.diadesde, turno.diahasta, turno.horadesde, turno.horahasta)}>
                                    Editar
                                    </button>
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <button className="btn btn-danger btn-sm"
                                        onClick={this.props.deleteTurno.bind(this, turno.idturno)}>
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
    turnos: state.turnos.turnos
});

export default connect(mapStateToProps,
    {
        getTurnos,
        deleteTurno
    })(ListTurnos);

