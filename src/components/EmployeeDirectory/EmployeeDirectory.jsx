import React, { Component } from "react";

class EmployeeDirectory extends Component {
  render() {
    return (
      <>
        <h1 classNameName="title">Hello World!</h1>
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
              <th>1</th>
              <td>
                <a
                  href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                  title="Leicester City F.C."
                >
                  Leicester City
                </a>{" "}
                <strong>(C)</strong>
              </td>
              <td>38</td>
              <td>23</td>
              <td>12</td>
            </tr>
            <tr>
              <th>2</th>
              <td>
                <a
                  href="https://en.wikipedia.org/wiki/Arsenal_F.C."
                  title="Arsenal F.C."
                >
                  Arsenal
                </a>
              </td>
              <td>38</td>
              <td>20</td>
              <td>11</td>
            </tr>
            <tr>
              <th>3</th>
              <td>
                <a
                  href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C."
                  title="Tottenham Hotspur F.C."
                >
                  Tottenham Hotspur
                </a>
              </td>
              <td>38</td>
              <td>19</td>
              <td>13</td>
            </tr>
            <tr>
              <th>4</th>
              <td>
                <a
                  href="https://en.wikipedia.org/wiki/Manchester_City_F.C."
                  title="Manchester City F.C."
                >
                  Manchester City
                </a>
              </td>
              <td>38</td>
              <td>19</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default EmployeeDirectory;
