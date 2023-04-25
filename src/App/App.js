import KeyRow from '../KeyRow/KeyRow';
import Button from '../Button/Button';

const App = () => {
  return (
    <div className='container-fluid bg-black' style={{ minHeight: '100vh', width: '100%', paddingTop: '7rem' }}>
      <div
        className='row pb-5 d-flex justify-content-center'
        style={{ minHeight: '300px', maxWidth: '1300px', margin: 'auto' }}>
        <div id='left-control' className='col-md-5 p-4 d-flex flex-column justify-content-around border rounded-white'>
          <KeyRow keys={['Q', 'W', 'E']} />
          <KeyRow keys={['A', 'S', 'D']} />
          <KeyRow keys={['Z', 'X', 'C']} />
        </div>
        <div id='right-control' className='col-md-3 p-4 d-flex justify-content-center border rounded-white'>
          <div id='switch-pad' className='w-75 d-flex flex-column align-items-center'>
            <Button name={'ON/OFF'} color={'danger'} />
            <div
              className='w-100 p-2 mb-3 border rounded text-white text-center bg-success'
              style={{ fontWeight: 'bolder' }}>
              CHIMNEY
            </div>
            <input id='volumeControl' type='range' min='1' max='100' defaultValue={50} />
            <div
              className='w-100 p-2 mt-3 mb-3 border rounded text-white text-center bg-success'
              style={{ fontWeight: 'bolder' }}>
              BANK 1
            </div>
            <Button name={'BANK'} color={'warning'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
