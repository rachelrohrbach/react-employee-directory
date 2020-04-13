import React from 'react';

function DOBSearch(props) {
  return (
    <div
      className="form-group"
      style={{ display: 'flex', flexFlow: 'row', padding: '10px', marginLeft: '10px' }}
    >
      <label className="input-group-text">
        <span className="badge" style={{ padding: '10px', fontSize: '18px' }}>
          DOB
        </span>
      </label>
      <input
        onChange={props.handleStartInputChange}
        name="start"
        type="date"
        className="form-control"
        id="startingDate"
        style={{ padding: '15px' }}
      />
      <input
        onChange={props.handleEndInputChange}
        name="end"
        type="date"
        className="form-control"
        id="endingDate"
        style={{ padding: '15px' }}
      />
    </div>
  );
}

export default DOBSearch;
