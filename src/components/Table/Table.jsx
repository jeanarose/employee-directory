import React, { Component } from "react";
import axios from "axios";
import "./Table.css";
class Table extends Component {
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
        console.log(response.data.results)
        this.setState({ arrayOfEmployees: response.data.results });
      });
  };
  render() {
    return (
      <>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
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
                    <td className="is-vcentered">{employee.dob.date}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Table;
