import React from 'react';

const Lcd = ({ display }) => {
  return (
    <div className='w-100 mb-3 p-2 border rounded text-white text-center bg-success' style={{ fontWeight: 'bolder' }}>
      {display}
    </div>
  );
};

export default Lcd;
