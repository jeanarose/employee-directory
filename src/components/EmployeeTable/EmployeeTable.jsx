import React, { Component } from "react";
import EmployeeRows from "../EmployeeRows/EmployeeRows";
import Search from "../Search/Search";
import axios from "axios"

class EmployeeTable extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    return axios
      .get("https://randomuser.me/api/?results=30")
      .then((response) => {
        console.log(response.data.results);
        this.setState({ employees: response.data.results });
      });
  };
  render() {
    return (
      <>
        <Search />
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
          {this.state.employees.map((employee) => (
            <EmployeeRows {...employee} key={employee.id.value} />
          ))}
        </table>
      </>
    );
  }
}

export default EmployeeTable;
