import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getJornadas } from '../../actions/jornadas';
import PropTypes from 'prop-types';

export class SelectJornada extends Component {
    static propTypes = {
        jornadas: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getJornadas();
    }

    changeValue = (obj) => {
        this.props.changeSelect(1, obj.target.value);
    }

    render() {
        const { actualValue } = this.props;
        return (
            <Fragment>
                <select className="form-control" onChange={this.changeValue} name="jornada" value={actualValue}>
                    <option value='0'> -- Seleccione --</option>
                    {this.props.jornadas.map(jor => (
                        <option key={jor.idjornada} value={jor.idjornada}>{jor.codigo} - {jor.nombre}</option>
                    ))}
                </select>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    jornadas: state.jornadas.jornadas
});


export default connect(mapStateToProps,
    {
        getJornadas
    })(SelectJornada);