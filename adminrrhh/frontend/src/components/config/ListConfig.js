import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getConfigs, deleteConfig } from '../../actions/config';

export class ListConfig extends Component {

    static propTypes = {
        configs: PropTypes.array.isRequired,
    }

    componentDidMount() {
        this.props.getConfigs();
    }

    updateFields = (obj, idconfig, idjornada, idturno) => {
        const config = { idconfig, idjornada, idturno };
        this.props.updateData(config);
    }

    render() {
        return (
            <Fragment>

                <h2>Listado de activas:</h2>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nombre</th>
                            <th>Jornada</th>
                            <th>Horario</th>
                            <th style={{ textAlign: 'center' }}>Editar</th>
                            <th style={{ textAlign: 'center' }}>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.configs.map(item => (
                            <tr key={item.idconfig}>
                                <td>{item.codigojornada}</td>
                                <td>{item.nombrejornada}</td>
                                <td>{item.nombrediadesdeturno} - {item.nombrediahastaturno}</td>
                                <td>{item.horadesdeturno} - {item.horahastaturno}</td>

                                <td style={{ textAlign: 'center' }}><button className="btn btn-info btn-sm"
                                    onClick={() => this.updateFields(this, item.idconfig, item.idjornada, item.idturno)}>
                                    Editar
                                    </button>
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <button className="btn btn-danger btn-sm"
                                        onClick={this.props.deleteConfig.bind(this, item.idconfig)}>
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
    configs: state.configs.configs
});

export default connect(mapStateToProps,
    {
        getConfigs,
        deleteConfig
    })(ListConfig);

