import React from 'react';
import './style.css';

function Header () {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Click on the Name or DOB headers to sort by descending order or use the search boxes to narrow your results.</p>
      </div>
    )
  }

export default Header;