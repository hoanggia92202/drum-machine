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

        <div id='right-control' className='col-md-3 bg-secondary'>
          <div id='switch-pad'>
            <div id='power-container'></div>
            <div id='display' className=''></div>
            <div id='volume-container'>
              <div id='volume-screen'></div>
              <input id='volume-control' type='range' min='1' max='100' />
            </div>
            <div id='power-container'>
              <button id='bank-button' className=''>
                Bank
              </button>
            </div>
            <div id='bank-name' className=''></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
