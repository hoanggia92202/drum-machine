import './App.css';

const App = () => {
  return (
    <div id='drum-machine' className='App d-flex container-fluid'>
      <div className='container row w-75 m-auto'>
        <div className='leftControl col-sm-7'>
          <div id='screen' className='screen'></div>
          <div className='keyRow mt-4 ml-auto mr-auto'>
            <div id='q' className='keys drum-pad'>
              <audio id='Q'></audio>Q
            </div>
            <div id='w' className='keys drum-pad'>
              <audio id='W'></audio>W
            </div>
            <div id='e' className='keys drum-pad'>
              <audio id='E'></audio>E
            </div>
          </div>
          <div className='keyRow mt-2 ml-auto mr-auto'>
            <div id='a' className='keys'>
              <audio id='A'></audio>A
            </div>
            <div id='s' className='keys'>
              <audio id='S'></audio>S
            </div>
            <div id='d' className='keys drum-pad'>
              <audio id='D'></audio>D
            </div>
          </div>
          <div className='keyRow mt-2 ml-auto mr-auto'>
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
        <div className='col-sm-5 bg-info'>
          <div>
            <div></div>
            <div id='display'></div>
            <div>
              <div id='volumeSreen'></div>
              <input id='volumeControl' type='range' min='1' max='100' />
            </div>
            <div>
              <button id='bankButton'>Bank</button>
            </div>
            <div id='bankName'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
