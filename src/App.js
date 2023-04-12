import './App.css';

const App = () => {
  return (
    <div id='drum-machine' className='d-flex container-fluid'>
      <div className='row bg-danger w-75 m-auto'>
        <div className='col-sm-7'>
          <div id='screen'></div>
          <div className='mt-4 ml-auto mr-auto'>
            <div id='q' className='drum-pad'>
              <audio className='clip' id='Q'></audio>ooo
            </div>
            <div id='w' className='drum-pad'>
              <audio className='clip' id='W'></audio>W
            </div>
            <div id='e' className='drum-pad'>
              <audio className='clip' id='E'></audio>E
            </div>
          </div>
          <div className='mt-2 ml-auto mr-auto'>
            <div id='a'>
              <audio className='clip' id='A'></audio>A
            </div>
            <div id='s'>
              <audio className='clip' id='S'></audio>S
            </div>
            <div id='d' className='drum-pad'>
              <audio className='clip' id='D'></audio>D
            </div>
          </div>
          <div className='mt-2 ml-auto mr-auto'>
            <div id='z'>
              <audio className='clip' id='Z'></audio>Z
            </div>
            <div id='x'>
              <audio className='clip' id='X'></audio>X
            </div>
            <div id='c'>
              <audio className='clip' id='C'></audio>C
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
