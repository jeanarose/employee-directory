import React, { Component } from "react";
import EmployeeRows from "../EmployeeRows/EmployeeRows";
import Search from "../Search/Search";
class EmployeeTable extends Component {
  state = {
    searchTerm: "",
  };
  handleInputChange = () => {
    console.log("Handling input change");
  };
  render() {
    return (
      <>
        <Search
          value={this.state.searchTerm}
          handleInputChange={this.handleInputChange}
        />
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
          <EmployeeRows />
        </table>
      </>
    );
  }
}

export default EmployeeTable;
