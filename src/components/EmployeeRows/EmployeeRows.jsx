import React from "react";
import moment from "moment";
import "./EmployeeRows.css"

const EmployeeRows = ({ picture, name, phone, email, dob }) => {
  return (
    <>
      <tbody>
        <tr>
          <th>
            <img className="employee-image" src={picture.large} alt="" />
          </th>

          <td className="is-vcentered">
            {name.first} {name.last}
          </td>
          <td className="is-vcentered">{phone}</td>
          <td className="is-vcentered">{email}</td>
          <td className="is-vcentered">{moment(dob.date).format("ll")}</td>
        </tr>
      </tbody>
    </>
  );
};

export default EmployeeRows;
