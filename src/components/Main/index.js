import React from 'react';
import API from '../../utils/API';
import Employees from '../EmployeeResults';
import NameSearch from '../NameSearch';
import DOBSearch from '../DOBSearch';
import Wrapper from '../Wrapper';

class Main extends React.Component {
  state = {
    employees: [],
    nameFilter: '',
    dobStartFilter: '',
    dobEndFilter: '',
    sortType: '',
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.getEmployees()
      .then((res) => {
        this.setState({
          employees: res.data.results,
        });
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
    const { dobStartFilter, dobEndFilter } = this.state;

    if (dobStartFilter === '' && dobEndFilter !== '') {
      return (
        (employee.name.first.toLowerCase().includes(this.state.nameFilter) ||
          employee.name.last.toLowerCase().includes(this.state.nameFilter)) &&
        employee.dob.date <= this.state.dobEndFilter
      );
    } else if (dobStartFilter !== '' && dobEndFilter === '') {
      return (
        (employee.name.first.toLowerCase().includes(this.state.nameFilter) ||
          employee.name.last.toLowerCase().includes(this.state.nameFilter)) &&
        this.state.dobStartFilter <= employee.dob.date
      );
    } else if (dobStartFilter === '' && dobEndFilter === '') {
      return (
        employee.name.first.toLowerCase().includes(this.state.nameFilter) ||
        employee.name.last.toLowerCase().includes(this.state.nameFilter)
      );
    }

    return (
      (employee.name.first.toLowerCase().includes(this.state.nameFilter) ||
        employee.name.last.toLowerCase().includes(this.state.nameFilter)) &&
      this.state.dobStartFilter <= employee.dob.date &&
      employee.dob.date <= this.state.dobEndFilter
    );
  };

  handleStartInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      dobStartFilter: value,
    });
  };

  handleEndInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      dobEndFilter: value,
    });
  };

  handleInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      nameFilter: value.toLowerCase(),
    });
  };

  render() {
    return (
      <Wrapper>
        <div className="row">
          <DOBSearch
            handleStartInputChange={this.handleStartInputChange}
            handleEndInputChange={this.handleEndInputChange}
          />
          <NameSearch handleInputChange={this.handleInputChange} />
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
export default Main;
