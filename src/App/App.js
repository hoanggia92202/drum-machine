import React, {useState} from 'react';
import classes from './App.module.scss';

const App = () => {
    const [powerStatus, setPowerStatus] = useState(false);
    const [volumeStatus, setVolumeStatus] = useState(false);
    const [soundTrackStatus, setSoundTrackStatus] = useState(false);
    const [volume, setVolume] = useState(50);
    const [soundTrack, setSoundTrack] = useState("");
    const [bank, setBank] = useState("Heater Kit");

    let powerDiv;
    let volumeOrSoundtrack;

    if(volumeStatus){
        volumeOrSoundtrack = volume;
    }
    else if(soundTrackStatus){
        volumeOrSoundtrack = soundTrack;
    }
    else{
        volumeOrSoundtrack = "";
    }
    
    if(!powerStatus){
        powerDiv = <button id="powerButton" onClick={() => setPower()} className={`${classes.powerButton}`}>OFF</button>
    }
    else{
        powerDiv = <button id="powerButton" onClick={() => setPower()} className={`${classes.powerButton}`}>ON</button>
    }

    return(
        <div id="drum-machine" className={`${classes.App} d-flex container-fluid`}>
            <div className={`${classes.container} row bg-danger m-auto`}>
                <div className={`${classes.leftControl} col-sm-7`}>
                <div id="screen" className={`${classes.screen}`}></div>
                        <div className={`${classes.keyRow} mt-4 ml-auto mr-auto`}>
                            <div id='q' onClick={(event) => expandButton(event)} className={`${classes.keys} drum-pad`}>
                                <audio className="clip" src="https://ss3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id="Q"></audio>Q</div>
                            <div id='w' onClick={(event) => expandButton(event)} className={`${classes.keys} drum-pad`}>
                                <audio className="clip" src="https://ss3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id="W"></audio>W</div>
                            <div id="e" onClick={(event) => expandButton(event)} className={`${classes.keys} drum-pad`}>
                                <audio className="clip" src="https://ss3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id="E"></audio>E</div>
                        </div>
                        <div className={`${classes.keyRow} mt-2 ml-auto mr-auto`}>
                            <div id='a' onClick={(event) => expandButton(event)} className={`${classes.keys} drum-pad`}>
                                <audio className="clip" src="https://ss3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="A"></audio>A</div>
                            <div id='s' onClick={(event) => expandButton(event)} className={`${classes.keys} drum-pad`}>
                                <audio className="clip" src="https://ss3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="S"></audio>S</div>
                            <div id='d' onClick={(event) => expandButton(event)} className={`${classes.keys} drum-pad`}>
                                <audio className="clip" src="https://ss3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="D"></audio>D</div>
                        </div>
                        <div className={`${classes.keyRow} mt-2 ml-auto mr-auto`}>
                            <div id='z' onClick={(event) => expandButton(event)} className={`${classes.keys} drum-pad`}>
                                <audio className="clip" src="https://ss3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="Z"></audio>Z</div>
                            <div id='x' onClick={(event) => expandButton(event)} className={`${classes.keys} drum-pad`}>
                                <audio className="clip" src="https://ss3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="X"></audio>X</div>
                            <div id='c' onClick={(event) => expandButton(event)} className={`${classes.keys} drum-pad`}>
                                <audio className="clip" src="https://ss3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="C"></audio>C</div>
                        </div>
                </div>
                <div className={`${classes.rightControl} col-sm-5 bg-info`}>
                <div className={`${classes.switchPad}`}>
                    <div className={`${classes.powerContainer}`}>
                        {powerDiv}
                    </div>
                    <div id="display" className={`${classes.lcd}`}>{volumeOrSoundtrack}</div>
                    <div className={`${classes.volumeContainer}`}>
                        <div id="volumeSreen" className={`${classes.volumeSreen}`}></div>
                        <input id="volumeControl" className={`${classes.slider_off}`} 
                                onMouseUp={() => mouseUp()} onMouseDown={() => mouseDown()} 
                                onTouchStart={() => touchStart()} onTouchEnd={() => touchEnd()} 
                                type="range" min="1" max="100" defaultValue={volume} 
                                onChange={(e) => getVolume(e)}
                        />
                    </div>
                    <div className={`${classes.powerContainer}`}>
                        <button  id="bankButton" onClick={() => switchBank()} className={`${classes.bankButton}`}>Bank</button>
                    </div>
                    <div id="bankName" className={`${classes.bankName}`}>{bank}</div>
                </div>
                </div>
            </div>                
        </div>
    )
}

export default App;