import React, { Component } from "react";
import axios from "axios";
import "./Table.css"
class Table extends Component {
  state = {
    image: "",
    name: "",
    phone: "",
    email: "",
    DOB: "",
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    return axios.get("https://randomuser.me/api/").then((response) => {
      console.log(response.data.results[0]);
      const employee = response.data.results[0];
      this.setState({
        image: employee.picture.large,
        name: `${employee.name.first} ${employee.name.last}`,
        phone: employee.phone,
        email: employee.email,
        DOB: employee.dob.date,
      });
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
            <tr>
              <th>
                <img className="employee-image" src={this.state.image} alt="" />
              </th>
              <td className="is-vcentered">{this.state.name}</td>
              <td className="is-vcentered">{this.state.phone}</td>
              <td className="is-vcentered">{this.state.email}</td>
              <td className="is-vcentered">{this.state.DOB}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Table;
