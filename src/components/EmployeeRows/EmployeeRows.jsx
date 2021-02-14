import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import "./EmployeeRows.css";

class EmployeeRows extends Component {
  state = {
    arrayOfEmployees: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    return axios
      .get("https://randomuser.me/api/?results=30")
      .then((response) => {
        console.log(response.data.results);
        this.setState({ arrayOfEmployees: response.data.results });
      });
  };
  render() {
    return (
      <>
        <tbody>
          {this.state.arrayOfEmployees.map((employee) => {
            return (
              <>
                <tr>
                  <th>
                    <img
                      className="employee-image"
                      src={employee.picture.large}
                      alt=""
                    />
                  </th>

                  <td className="is-vcentered">
                    {employee.name.first} {employee.name.last}
                  </td>
                  <td className="is-vcentered">{employee.phone}</td>
                  <td className="is-vcentered">{employee.email}</td>
                  <td className="is-vcentered">
                    {moment(employee.dob.date).format("ll")}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </>
    );
  }
}

export default EmployeeRows;
