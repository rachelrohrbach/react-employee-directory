import React from 'react';

function Employees(props) {
  function formatDate(date) {
    const dateArray = date.split('-');
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split('T');
    const day = dayArray[0];
    const formattedDate = [month, day, year].join('-');
    return formattedDate;
  }

  return (
    <tbody>
      {props.employees.map((employee) => (
        <tr key={employee.id.value}>
          <td>
            <img alt="placeholder" src={employee.picture.thumbnail} />
          </td>
          <td>
            {employee.name.first} {employee.name.last}
          </td>
          <td>{employee.phone}</td>
          <td>{employee.email}</td>
          <td>{formatDate(employee.dob.date)}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default Employees;
