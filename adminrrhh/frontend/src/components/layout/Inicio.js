import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getConfigs } from '../../actions/config';

export class Inicio extends Component {

    static propTypes = {
        configs: PropTypes.array.isRequired,
    }

    componentDidMount() {
        this.props.getConfigs();
    }


    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    <h1>Listado de Horarios configurados en el sistema</h1>
                </div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nombre</th>
                            <th>Jornada</th>
                            <th>Horario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.configs.map(item => (
                            <tr key={item.idconfig}>
                                <td>{item.codigojornada}</td>
                                <td>{item.nombrejornada}</td>
                                <td>{item.nombrediadesdeturno} - {item.nombrediahastaturno}</td>
                                <td>{item.horadesdeturno} - {item.horahastaturno}</td>
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
        getConfigs
    })(Inicio);

