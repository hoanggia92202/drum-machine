import './App.css';

const App = () => {
  return (
    <div className='container-fluid bg-info'>
      <div className='row'>
        <div id='left-control' className='col-md-6'>
          <div id='key-row' className='row'>
            <div id='q' className='col-4'>
              <audio id='Q'></audio>Q
            </div>
            <div id='w' className='col-4'>
              <audio id='W'></audio>W
            </div>
            <div id='e' className='col-4'>
              <audio id='E'></audio>E
            </div>
          </div>
          <div id='key-row' className='row'>
            <div id='a' className='col-4'>
              <audio id='A'></audio>A
            </div>
            <div id='s' className='col-4'>
              <audio id='S'></audio>S
            </div>
            <div id='d' className='col-4'>
              <audio id='D'></audio>D
            </div>
          </div>
          <div id='key-row' className='row'>
            <div id='z' className='col-4'>
              <audio id='Z'></audio>Z
            </div>
            <div id='x' className='col-4'>
              <audio id='X'></audio>X
            </div>
            <div id='c' className='col-4'>
              <audio id='C'></audio>C
            </div>
          </div>
        </div>

        <div id='right-control' className='col-md-6'>
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
