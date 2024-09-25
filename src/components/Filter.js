import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div className="d-flex justify-content-between mb-3">
      <button className="btn btn-outline-primary" onClick={() => setFilter('all')}>All</button>
      <button className="btn btn-outline-success" onClick={() => setFilter('completed')}>Completed</button>
      <button className="btn btn-outline-warning" onClick={() => setFilter('pending')}>Pending</button>
    </div>
  );
};

export default Filter;
