import './App.css';

const App = () => {
  return (
    <div className='App container-fluid bg-secondary' style={{ paddingTop: '7rem' }}>
      <div className='row d-flex justify-content-center' style={{ height: '300px' }}>
        <div id='left-control' className='col-md-5 d-flex flex-column justify-content-around border rounded-white'>
          <div id='key-row' className='row d-flex justify-content-around'>
            <div id='q' className='col-3 h1 border rounded text-center border-white bg-info'>
              <audio id='Q'></audio>Q
            </div>
            <div id='w' className='col-3 h1 border rounded text-center border-white bg-info'>
              <audio id='W'></audio>W
            </div>
            <div id='e' className='col-3 h1 border rounded text-center border-white bg-info'>
              <audio id='E'></audio>E
            </div>
          </div>
          <div id='key-row' className='row d-flex justify-content-around'>
            <div id='a' className='col-3 h1 border rounded text-center border-white bg-info'>
              <audio id='A'></audio>A
            </div>
            <div id='s' className='col-3 h1 border rounded text-center border-white bg-info'>
              <audio id='S'></audio>S
            </div>
            <div id='d' className='col-3 h1 border rounded text-center border-white bg-info'>
              <audio id='D'></audio>D
            </div>
          </div>
          <div id='key-row' className='row d-flex justify-content-around'>
            <div id='z' className='col-3 h1 border rounded text-center border-white bg-info'>
              <audio id='Z'></audio>Z
            </div>
            <div id='x' className='col-3 h1 border rounded text-center border-white bg-info'>
              <audio id='X'></audio>X
            </div>
            <div id='c' className='col-3 h1 border rounded text-center border-white bg-info'>
              <audio id='C'></audio>C
            </div>
          </div>
        </div>

        <div id='right-control' className='col-md-3 d-flex justify-content-center border rounded-white'>
          <div id='switch-pad' className='w-75 d-flex flex-column align-items-center'>
            <button type='button' className='w-50 btn btn-sm border rounded btn-danger' style={{ fontWeight: 'bolder' }}>
              ON/OFF
            </button>
            <div className='w-100 border rounded text-white text-center bg-success' style={{ fontWeight: 'bolder' }}>
              CHIMNEY
            </div>
            <input id='volumeControl' type='range' min='1' max='100' defaultValue={50} />
            <div className='w-100 border rounded text-white text-center bg-info' style={{ fontWeight: 'bolder' }}>
              BANK 1
            </div>
            <button type='button' className='w-50 btn btn-sm border rounded btn-success' style={{ fontWeight: 'bolder' }}>
              BANK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
