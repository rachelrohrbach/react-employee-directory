import React from 'react';
import API from '../../utils/API';
import Employees from '../EmployeeCard';
import SearchForm from '../SearchForm';
import DOBSearch from '../DOBSearch';
import Wrapper from '../Wrapper';

class Results extends React.Component {
  state = {
    employees: [],
    filter: '',
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

  sortEmployees = (sortFunction) => {
    const sortedEmployees = this.state.employees.sort(sortFunction);
    this.setState({
      employees: sortedEmployees,
    });
  };

  employeeFilter = (employee) => {
    return (
      employee.name.first.toLowerCase().includes(this.state.filter) ||
      employee.name.last.toLowerCase().includes(this.state.filter)
    );
  };

  handleInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    console.log('input');
    console.log(value);

    this.setState({
      filter: value.toLowerCase(),
    });
  };

  render() {
    return (
      <Wrapper>
        <div className="row">
          <DOBSearch />
          <SearchForm
            value={this.state.filter}
            handleInputChange={this.handleInputChange}
          />
        </div>

        <div className="datatable mt-5">
          <table
            id="table"
            className="table table-striped table-hover table-condensed"
          >
            <thead>
              <tr>
                <th>Image</th>
                <th
                  onClick={() =>
                    this.sortEmployees((a, b) =>
                      a.name.first.localeCompare(b.name.first)
                    )
                  }
                >
                  Name
                </th>
                <th>Phone</th>
                <th>Email</th>
                <th
                  onClick={() =>
                    this.sortEmployees((a, b) =>
                      a.dob.date.localeCompare(b.dob.date)
                    )
                  }
                >
                  DOB
                </th>
              </tr>
            </thead>
            <Employees
              sort={this.state.sortType}
              employees={this.state.employees.filter(this.employeeFilter)}
            />
          </table>
        </div>
      </Wrapper>
    );
  }
}
export default Results;
