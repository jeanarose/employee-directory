import React from "react";
import EmployeeRows from "../EmployeeRows/EmployeeRows";

const EmployeeTable = (props) => {
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
        <EmployeeRows />
      </table>
    </>
  );
};

export default EmployeeTable;
