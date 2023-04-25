import React from 'react';

const Button = ({ name, color }) => {
  return (
    <button
      type='button'
      className={`btn btn-sm mb-3 border rounded btn-danger bg-${color}`}
      style={{ fontWeight: 'bolder' }}>
      {name}
    </button>
  );
};

export default Button;
