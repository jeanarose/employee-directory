import React, { Component } from "react";
import Table from "../EmployeeTable/EmployeeTable";

class Search extends Component {
  state = {
    searchTerm: "",
  };
  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <>
        <input
          name="searchTerm"
          className="input mt-6 mb-6"
          type="text"
          placeholder="Search by Name"
          onChange={this.handleInputChange}
        />
        {this.state.searchTerm ? <h3>Test</h3> : <Table />}
      </>
    );
  }
}

export default Search;
