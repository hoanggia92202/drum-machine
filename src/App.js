import './App.css';

const App = () => {
  return (
    <div className='container'>
      <div className='padding'></div>
      <div className='left-control'>
        <div className='key-row'>
          <div id='q' className='keys'>
            <audio id='Q'></audio>Q
          </div>
          <div id='w' className='keys'>
            <audio id='W'></audio>W
          </div>
          <div id='e' className='keys'>
            <audio id='E'></audio>E
          </div>
        </div>
        <div className='key-row'>
          <div id='a' className='keys'>
            <audio id='A'></audio>A
          </div>
          <div id='s' className='keys'>
            <audio id='S'></audio>S
          </div>
          <div id='d' className='keys'>
            <audio id='D'></audio>D
          </div>
        </div>
        <div className='key-row'>
          <div id='z' className='keys'>
            <audio id='Z'></audio>Z
          </div>
          <div id='x' className='keys'>
            <audio id='X'></audio>X
          </div>
          <div id='c' className='keys'>
            <audio id='C'></audio>C
          </div>
        </div>
      </div>
      <div className='right-control'>
        <div className='switch-pad'>
          <div className='power-container'></div>
          <div id='display' className='lcd'></div>
          <div className='volume-container'>
            <div id='volume-screen' className='volume-screen'></div>
            <input id='volume-control' className='slider-off' type='range' min='1' max='100' />
          </div>
          <div className='power-container'>
            <button id='bank-button' className='bank-button'>
              Bank
            </button>
          </div>
          <div id='bank-name' className='bank-name'></div>
        </div>
      </div>
    </div>
  );
};

export default App;
