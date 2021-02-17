import React, { Component } from "react";
import EmployeeRows from "../EmployeeRows/EmployeeRows";
import Search from "../Search/Search";
import axios from "axios";
import "./EmployeeTable.css";

class EmployeeTable extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    sort: false,
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    return axios
      .get("https://randomuser.me/api/?results=30&nat=us")
      .then((response) => {
        this.setState({
          employees: response.data.results,
          filteredEmployees: response.data.results,
        });
      });
  };

  handleInputChange = (event) => {
    const searchTerm = event.target.value;
    const filteredEmployees = this.state.employees.filter((employee) => {
      return employee.name.first
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    this.setState({ filteredEmployees: filteredEmployees });
  };
// object.values of each employee would be an array of every value so if I do .join I get one long string and then I can search .includes and it will search every column of the employees
  handleNameSort = (event) => {
    this.setState({ sort: !this.state.sort });
    const compare = (a, b) => {
      if (this.state.sort) {
        return a.name.last.localeCompare(b.name.last);
      } else {
        return b.name.last.localeCompare(a.name.last);
      }
    };
    const sorted = this.state.employees.sort(compare);
    this.setState({ filteredEmployees: sorted });
  };

  handlePhoneSort = (event) => {};
  handleEmailSort = (event) => {
    const sortedEmail = this.state.employees;
    sortedEmail.sort((a, b) => {
      if (a.email < b.email) {
        return a.email.localeCompare(b.email);
      } else if (a.email > b.email) {
        return a.email.localeCompare(b.email);
      }
    });
    this.setState({ employees: sortedEmail });
  };
  handleDOBSort = (event) => {
    const sortedDOB = this.state.employees;
    sortedDOB.sort((a, b) => {
      if (a.dob.date < b.dob.date) {
        return a.dob.date.localeCompare(b.dob.date);
      } else if (a.dob.date > b.dob.date) {
        return a.dob.date.localeCompare(b.dob.date);
      }
    });
    this.setState({ employees: sortedDOB });
  };

  render() {
    return (
      <>
        {/* value and onChange are the props */}
        <Search
          name="searchTerm"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
        />
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Image</th>
              <th>
                Name{" "}
                <i
                  name="name"
                  onClick={this.handleNameSort}
                  class="fas fa-caret-down"
                ></i>
              </th>
              <th>
                Phone{" "}
                <i
                  name="phone"
                  onClick={this.handlePhoneSort}
                  class="fas fa-caret-down"
                ></i>
              </th>
              <th>
                Email{" "}
                <i
                  name="email"
                  onClick={this.handleEmailSort}
                  class="fas fa-caret-down"
                ></i>
              </th>
              <th>
                DOB{" "}
                <i
                  name="dob"
                  onClick={this.handleDOBSort}
                  class="fas fa-caret-down"
                ></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredEmployees.map((employee) => (
              <EmployeeRows {...employee} key={employee.id.value} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default EmployeeTable;
