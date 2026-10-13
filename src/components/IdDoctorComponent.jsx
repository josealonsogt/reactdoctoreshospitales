import React, { Component } from "react";
import Global from "./Global";
import axios from "axios";

export default class IdDoctorComponent extends Component {
    url = Global.urlApiDoctores;

    state = {
        doctor: null,
    };

    detalleDoctor = () => {
        let idDoctor = this.props.idDoctor;
        let Request = "/api/Doctores/" + idDoctor;
        axios.get(this.urlApiDoctores + Request).then((response) => {
        console.log("leyendo doctor");
        this.setState({
            doctor: response.data,
        });
        });
    };

    componentDidMount = () => {
        console.log("Id doctor:" + this.props.idDoctor);
        this.detalleDoctor();
    };

    componentDidUpdate = (oldProps) => {
        console.log("Current: " + this.props.idDoctor);
        console.log("Old: " + oldProps.idDoctor);
        if (this.props.idDoctor != oldProps.idDoctor) {
        this.detalleDoctor();
        }
    };

    render() {
        return (
        <div>
            <h1>Detalle Medico</h1>
            {this.state.dcotor && (
            <div>
                <h3>
                {this.state.doctor.apellido} {this.state.doctor.Urología}
                </h3>
                <h3>{this.state.doctor.especialidad}</h3>
                <h3>{this.state.doctor.idHospital}</h3>
                <h3>{this.state.doctor.salario}</h3>
            </div>
            )}
        </div>
        );
    }
    }
