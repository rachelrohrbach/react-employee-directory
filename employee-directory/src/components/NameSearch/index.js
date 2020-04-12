import React from 'react';

function NameSearch(props) {
  return (
    <div
      className="form-group"
      style={{
        display: 'flex',
        flexFlow: 'row',
        padding: '10px',
        width: '50%',
      }}
    >
      <input
        onChange={props.handleInputChange}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search"
        id="search"
      />
    </div>
  );
}

export default NameSearch;
