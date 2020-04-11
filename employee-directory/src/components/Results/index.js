import React from 'react';
import API from '../../utils/API';
import Employees from '../EmployeeCard';

class Results extends React.Component {
  state = {
    employees: [],
    search: '',
    sortType: '',
  };

  componentDidMount() {
    this.getEmployees();
    console.log(this.state.sortType);
  }
  getEmployees = () => {
    API.getEmployees()
      .then((res) => {
        this.setState({
          employees: res.data.results,
        });
        console.log(this.state.employees);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <div className="datatable mt-5">
          <table
            id="table"
            className="table table-striped table-hover table-condensed"
          >
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
              </tr>
            </thead>
            <Employees
              sort={this.state.sortType}
              employees={this.state.employees}
            />
          </table>
        </div>
      </div>
    );
  }
}
export default Results;
