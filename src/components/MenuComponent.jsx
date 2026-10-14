    import React, { Component } from "react";
    import { NavLink } from "react-router-dom";

    import axios from "axios";
    import Global from "./Global";

    export default class MenuComponent extends Component {
    url = Global.urlApiHospitales;

    state = {
        hospitales: [],
    };

    loadHospitales = () => {
        let request = "api/hospitales";
        axios.get(this.url + request).then((response) => {
        console.log("Loading hospitales");
        this.setState({
            hospitales: response.data,
        });
        });
    };

    componentDidMount = () => {
        this.loadHospitales();
    };
    render() {
        return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img
                src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3XvrrYS0S_PBKh0n7QNWZT228-RPi8SvAy34p1NOzWg&s=10"
                }
                style={{ width: "60px" }}
                />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">
                    Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/doctores/22">
                    Doctores
                    </NavLink>
                </li>
                <li className="nav-item dropdown">
                    <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    Hospitales
                    </a>
                    <ul className="dropdown-menu">
                    {this.state.hospitales.map((hospital, index) => {
                        return (
                        <li key={index}>
                            <NavLink
                            className="dropdown-item"
                            to={"/doctores/" + hospital.idHospital}
                            >
                            {hospital.nombre}
                            </NavLink>
                        </li>
                        );
                    })}
                    </ul>
                </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/hospitales">
                     Hospital
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/createhospital">
                    New Hospital
                    </NavLink>
                </li>
                   <li className="nav-item">
                    <NavLink className="nav-link" to="/routes">
                     Service
                    </NavLink>
                </li>

                </ul>
            </div>
            </div>
        </nav>
        );
    }
    }
