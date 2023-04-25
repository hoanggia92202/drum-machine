import './App.css';

const App = () => {
  return (
    <div className='container-fluid vh-100 bg-info' style={{ paddingTop: '7rem' }}>
      <div className='row d-flex justify-content-center' style={{ height: '300px' }}>
        <div id='left-control' className='col-md-5 d-flex flex-column justify-content-around bg-secondary'>
          <div id='key-row' className='row d-flex justify-content-around'>
            <div id='q' className='col-3 h1 border rounded text-center border-white p-3'>
              <audio id='Q'></audio>Q
            </div>
            <div id='w' className='col-3 h1 border rounded text-center border-white p-3'>
              <audio id='W'></audio>W
            </div>
            <div id='e' className='col-3 h1 border rounded text-center border-white p-3'>
              <audio id='E'></audio>E
            </div>
          </div>
          <div id='key-row' className='row d-flex justify-content-around'>
            <div id='a' className='col-3 h1 border rounded text-center border-white p-3'>
              <audio id='A'></audio>A
            </div>
            <div id='s' className='col-3 h1 border rounded text-center border-white p-3'>
              <audio id='S'></audio>S
            </div>
            <div id='d' className='col-3 h1 border rounded text-center border-white p-3'>
              <audio id='D'></audio>D
            </div>
          </div>
          <div id='key-row' className='row d-flex justify-content-around'>
            <div id='z' className='col-3 h1 border rounded text-center border-white p-3'>
              <audio id='Z'></audio>Z
            </div>
            <div id='x' className='col-3 h1 border rounded text-center border-white p-3'>
              <audio id='X'></audio>X
            </div>
            <div id='c' className='col-3 h1 border rounded text-center border-white p-3'>
              <audio id='C'></audio>C
            </div>
          </div>
        </div>

        <div id='right-control' className='col-md-3 d-flex justify-content-center bg-secondary'>
          <div id='switch-pad' className='w-75 pt-5 d-flex flex-column align-items-center'>
            <button
              type='button'
              className='w-50 mb-3 btn btn-sm border rounded btn-danger'
              style={{ fontWeight: 'bolder' }}>
              ON/OFF
            </button>
            <div
              className='w-100 mb-3 p-2 border rounded text-white text-center bg-success'
              style={{ fontWeight: 'bolder' }}>
              CHIMNEY
            </div>
            <input id='volumeControl' className='mb-2' type='range' min='1' max='100' defaultValue={50} />
            <div className='w-100 mb-3 p-2 border rounded text-white text-center bg-info' style={{ fontWeight: 'bolder' }}>
              BANK 1
            </div>
            <button
              type='button'
              className='w-50 mb-3 btn btn-sm border rounded btn-success'
              style={{ fontWeight: 'bolder' }}>
              BANK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
