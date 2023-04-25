import KeyRow from '../KeyRow/KeyRow';
import Button from '../Button/Button';
import Lcd from '../Lcd/Lcd';

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
            <Lcd display={'Chimney'} />
            <input id='volumeControl' className='mb-3' type='range' min='1' max='100' defaultValue={50} />
            <Lcd display={'BANK 1'} />
            <Button name={'BANK'} color={'warning'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
