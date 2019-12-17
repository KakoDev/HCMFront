import React, { Component, Fragment } from 'react'

export class Dias extends Component {

    state = {
        value: 1
    }

    changeDay = (obj) => {
        this.setState({
            value: obj.target.value
        })
        this.props.changeDay(obj.target.value);
    }

    render() {
        const { actualDay } = this.props;
        return (
            <Fragment>
                <select className="form-control" onChange={this.changeDay} value={actualDay}>
                    <option value="1">Lunes</option>
                    <option value="2">Martes</option>
                    <option value="3">Miercoles</option>
                    <option value="4">Jueves</option>
                    <option value="5">Viernes</option>
                    <option value="6">Sábado</option>
                    <option value="7">Domingo</option>
                </select>
            </Fragment>
        )
    }
}

export default Dias;