import React, { Component } from "react";
import axios from "axios";
import "./Table.css";
class Table extends Component {
  state = {
    image: "",
    name: "",
    phone: "",
    email: "",
    DOB: "",
    arrayOfEmployees: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    return axios
      .get("https://randomuser.me/api/?results=30")
      .then((response) => {
        const employees = this.state.arrayOfEmployees;
        for (let i = 0; i < response.data.results.length; i++) {
          const employee = response.data.results[i];
          employees.push(employee);
          this.setState({
            image: employee.picture.large,
            name: `${employee.name.first} ${employee.name.last}`,
            phone: employee.phone,
            email: employee.email,
            DOB: employee.dob.date,
            arrayOfEmployees: employees,
          });
        }
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
                        src={this.state.image}
                        alt=""
                      />
                    </th>

                    <td className="is-vcentered">{this.state.name}</td>
                    <td className="is-vcentered">{this.state.phone}</td>
                    <td className="is-vcentered">{this.state.email}</td>
                    <td className="is-vcentered">{this.state.DOB}</td>
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
