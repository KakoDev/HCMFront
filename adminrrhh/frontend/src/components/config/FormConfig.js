import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { addConfig, updateConfig } from '../../actions/config';
import ListConfig from './ListConfig';
import SelectJornada from './SelectJornada';
import SelectTurnos from './SelectTurno';

export class FormConfig extends Component {

    state = {
        idconfig: 0,
        idturno: 0,
        idjornada: 0,
        errorMsg: ''
    };

    onChange = e => this.setState({ [e.target.name]: ("" + e.target.value).toUpperCase() });

    validateForm = () => {
        const { idturno, idjornada } = this.state;
        if (idturno === 0 || idjornada === 0) {
            this.setState({
                errorMsg: 'Debe seleccionar una jornada y un horario válido'
            });
            return false;
        } else {
            this.setState({
                errorMsg: ''
            });
            return true;
        }

    }

    onSubmit = e => {
        e.preventDefault();
        const { idturno, idjornada } = this.state;
        if (!this.validateForm()) return;
        const config = { idturno, idjornada };
        this.props.addConfig(config);
        this.setState({ idturno: 0, idjornada: 0 });
    }

    UpdateUserData = e => {
        e.preventDefault();
        const { idconfig, idturno, idjornada } = this.state;
        if (!this.validateForm()) return;
        const config = { idconfig, idturno, idjornada };
        this.props.updateConfig(idconfig, config);
        this.setState({ idconfig: 0, idturno: 0, idjornada: 0 });
    }

    readUpdateData = (config) => {
        this.setState(config);
    }

    changeSelect = (type, value) => {
        if (type === 1) {
            this.setState({ idjornada: value });
        } else {
            if (type === 2) {
                this.setState({ idturno: value });
            }
        }
    }

    render() {
        const { errorMsg, idconfig, idturno, idjornada } = this.state;
        return (
            <Fragment>
                <div className="card card-body mt-4 mb-4">
                    <h2>Agregar Horario por Jornada </h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Jornada</label>
                            <SelectJornada changeSelect={this.changeSelect} actualValue={idjornada} />
                        </div>
                        <div className="form-group">
                            <label>Horario</label>
                            <SelectTurnos changeSelect={this.changeSelect} actualValue={idturno} />
                        </div>
                        <div className="alert alert-danger" role="alert"
                            hidden={errorMsg.length === 0 ? true : false}
                            style={{ textAlign: 'center' }}>
                            <label>{errorMsg}</label>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button type="submit" className="btn btn-primary"
                                style={{ margin: '10px' }}
                                disabled={idconfig === 0 ? false : true}
                            > Guardar</button>
                            <button type="button" onClick={this.UpdateUserData} className="btn btn-info"
                                style={{ margin: '10px' }}
                                disabled={idconfig === 0 ? true : false}
                            > Modificar</button>

                        </div>

                    </form>

                </div>

                <ListConfig updateData={this.readUpdateData} />

            </Fragment >
        )
    }
}

export default connect(null, { addConfig, updateConfig })(FormConfig);
