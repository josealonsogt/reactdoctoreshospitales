import React, { Component } from "react";
import Global from "./Global";
import axios from "axios";

export default class DoctoresComponent extends Component {
  url = Global.urlApiDoctores;

  state = {
    doctores: [],
  };

  loadDoctoresHospital = () => {
    let request = "/api/Doctores/DoctoresHospital/" + this.props.idhospital;
    axios.get(this.url + request).then((response) => {
      console.log("loadoctores");

      this.setState({
        doctores: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadDoctoresHospital();
  };

  componentDidUpdate = (oldProps) => {
    if (oldProps.idhospital != this.props.idhospital) {
      this.loadDoctoresHospital();
    }
  };
  render() {
    return (
      <div>
        <h1>Doctores del Hospital{this.props.idhospital}</h1>

        <table className="table table-primary">
          <thead>
            <tr>
              <th>Apellidos</th>
              <th>Especialidad</th>

              <th>Salario</th>

              <th>Hospital</th>

            </tr>
          </thead>
          <tbody>
        {
          this.state.doctores.map((doc,index)=> {
            return(
              <tr key={index}>
                <td>{doc.apellido}</td>
                <td>{doc.especialidad}</td>
                <td>{doc.salario}</td>
                <td>{doc.idHospital}</td>
              </tr>
            )
          })
        }

        <button >
        detalle doctor
      
        </button>


          </tbody>
        </table>
      </div>
    );
  }
}
