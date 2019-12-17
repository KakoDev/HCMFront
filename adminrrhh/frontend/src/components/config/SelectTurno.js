import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getTurnos } from '../../actions/turnos';
import PropTypes from 'prop-types';

export class SelectTurnos extends Component {

    static propTypes = {
        turnos: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getTurnos();
    }

    changeTurno = (obj) => {
        this.props.changeSelect(2, obj.target.value);
    }

    render() {
        const { actualValue } = this.props;
        return (
            <Fragment>
                <select className="form-control" onChange={this.changeTurno} value={actualValue} >
                    <option value='0'> -- Seleccione --</option>
                    {this.props.turnos.map(item => (
                        <option key={item.idturno} value={item.idturno}>{item.nombrediadesde} - {item.nombrediahasta} ({item.horadesde} - {item.horahasta})</option>
                    ))}
                </select>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    turnos: state.turnos.turnos
});


export default connect(mapStateToProps,
    {
        getTurnos
    })(SelectTurnos);