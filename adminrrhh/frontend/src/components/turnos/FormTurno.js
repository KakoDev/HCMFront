import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { addTurno, updateTurno } from '../../actions/turnos';
import ListTurno from './ListTurno';
import Dias from './Dias';

export class FormTurno extends Component {

    state = {
        idturno: 0,
        diadesde: 1,
        diahasta: 1,
        horadesde: '',
        horahasta: '',
        activo: 1,
        errorMsg: ''
    };

    onChange = e => this.setState({ [e.target.name]: ("" + e.target.value).toUpperCase() });

    validateForm = e => {
        const { horadesde, horahasta } = this.state;
        if (!this.ValidateTimeFormat(horadesde) ||
            !this.ValidateTimeFormat(horahasta)) {
            this.setState({
                errorMsg: 'El formato ingresado de la hora, no es correcto (Ej: 09:00)'
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
        const { diadesde, diahasta, horadesde, horahasta } = this.state;
        if (!this.validateForm()) return;
        const turno = { diadesde, diahasta, horadesde, horahasta };
        this.props.addTurno(turno);
        this.setState({ diadesde: 1, diahasta: 1, horadesde: '', horahasta: '' });
    }

    ValidateTimeFormat = param => {
        const re = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/;
        return re.test(param);
    }

    UpdateUserData = e => {
        e.preventDefault();
        const { idturno, diadesde, diahasta, horadesde, horahasta } = this.state;
        const turno = { idturno, diadesde, diahasta, horadesde, horahasta };
        if (!this.validateForm()) return;
        this.props.updateTurno(idturno, turno);
        this.setState({ idturno: 0, diadesde: 1, diahasta: 1, horadesde: '', horahasta: '' });
    }

    updateSelectedDayDesde = (day) => {
        this.setState({ diadesde: day });
    }

    updateSelectedDayHasta = (day) => {
        this.setState({ diahasta: day });
    }

    readUpdateData = (turno) => {
        this.setState(turno);
    }

    render() {
        const { idturno, diadesde, diahasta, horadesde, horahasta, errorMsg } = this.state;
        return (
            <Fragment>
                <div className="card card-body mt-4 mb-4">
                    <h2>Agregar Horario</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Dia Desde</label>
                            <Dias changeDay={this.updateSelectedDayDesde} actualDay={diadesde} />
                        </div>
                        <div className="form-group">
                            <label>Dia Hasta</label>
                            <Dias changeDay={this.updateSelectedDayHasta} actualDay={diahasta} />
                        </div>
                        <div className="form-group">
                            <label>Hora Desde</label>
                            <input type="text"
                                maxLength="6"
                                className="form-control"
                                name="horadesde"
                                onChange={this.onChange}
                                value={horadesde} />
                        </div>
                        <div className="form-group">
                            <label>Hora Hasta</label>
                            <input type="text"
                                maxLength="6"
                                className="form-control"
                                name="horahasta"
                                onChange={this.onChange}
                                value={horahasta} />
                        </div>
                        <div className="alert alert-danger" role="alert"
                            hidden={errorMsg.length === 0 ? true : false}
                            style={{ textAlign: 'center' }}>
                            <label>{errorMsg}</label>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button type="submit" className="btn btn-primary"
                                style={{ margin: '10px' }}
                                disabled={idturno === 0 ? false : true}
                            > Guardar</button>
                            <button type="button" onClick={this.UpdateUserData} className="btn btn-info"
                                style={{ margin: '10px' }}
                                disabled={idturno === 0 ? true : false}
                            > Modificar</button>

                        </div>

                    </form>

                </div>

                <ListTurno updateData={this.readUpdateData} />

            </Fragment >
        )
    }
}

export default connect(null, { addTurno, updateTurno })(FormTurno);
