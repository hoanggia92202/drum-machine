import React from 'react';

const KeyRow = ({ keys }) => {
  return (
    <div id='key-row' className='row mt-2 d-flex justify-content-around'>
      <div id='q' className='col-3 h1 p-3 border rounded border-white text-center bg-info'>
        <audio id='Q'></audio>
        {keys[0]}
      </div>
      <div id='w' className='col-3 h1 p-3 border rounded border-white text-center bg-info'>
        <audio id='W'></audio>
        {keys[1]}
      </div>
      <div id='e' className='col-3 h1 p-3 border rounded border-white text-center bg-info'>
        <audio id='E'></audio>
        {keys[2]}
      </div>
    </div>
  );
};

export default KeyRow;
