import React, { Component } from "react";
import EmployeeRows from "../EmployeeRows/EmployeeRows";
import Search from "../Search/Search";
import axios from "axios";
import "./EmployeeTable.css";

class EmployeeTable extends Component {
  state = {
    employees: [],
    searchTerm: "",
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    return axios
      .get("https://randomuser.me/api/?results=30&nat=us")
      .then((response) => {
        this.setState({ employees: response.data.results });
      });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // const searchedEmployee = this.state.employees.map((employee) => {
    //   return employee === this.state.searchTerm;
    // });
  };

  handleNameSort = (event) => {
    console.log("Caret clicked!");
    const sortedNames = this.state.employees;
    sortedNames.sort((a, b) => {
      if (a.name.last < b.name.last) {
        return a.name.last.localeCompare(b.name.last);
      } else if (a.name.last > b.name.last) {
        return a.name.last.localeCompare(b.name.last);
      }
    });
    this.setState({ employees: sortedNames });
    console.log(sortedNames);
  };

  handlePhoneSort = (event) => {};
  handleEmailSort = (event) => {};
  handleDOBSort = (event) => {
    console.log("Caret clicked!");
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
            {this.state.searchTerm === ""
              ? this.state.employees.map((employee) => (
                  <EmployeeRows {...employee} key={employee.id.value} />
                ))
              : this.state.employees.filter((employee) => {
                  <EmployeeRows />;
                })}
          </tbody>
        </table>
      </>
    );
  }
}

export default EmployeeTable;
