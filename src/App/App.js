import React, {useState} from 'react';
import classes from './App.module.scss';

const App = () => {
    const [powerStatus, setPowerStatus] = useState(false);
    const [volumeStatus, setVolumeStatus] = useState(false);
    const [soundTrackStatus, setSoundTrackStatus] = useState(false);
    const [volume, setVolume] = useState(50);
    const [soundTrack, setSoundTrack] = useState("");
    const [bank, setBank] = useState("Heater Kit");

    const setSoundTrackName = (name) => {
        setSoundTrackStatus(true);
        setSoundTrack(name);
    }

    const expandButton = (event) => {
        let key = event.key || event.target.id;
        key = key.toLowerCase();
 
         switch(key){
             case 'q':
                 document.getElementById('q').style.transform = "scale(1.1,1.1)";
                 document.getElementById('q').style.borderColor = "#ff0000";
                 document.getElementById('q').style.backgroundColor = "#4db8ff";
                 document.getElementById('Q').play();
         
                 if(bank === "Heater Kit"){
                     const audio1 = window.$heaterKitAudio1;
                     audio1.play();
                     audio1.volume = volume / 100;
                     setSoundTrackName("Heater 1");
                 }
                 else if(bank === "Smooth Piano Kit"){
                     const audio1 = window.$smoothPianoKitAudio1;
                     audio1.play();
                     audio1.volume = volume / 100;
                     setSoundTrackName("Chord-1");
                 }
                 
                 //////////////////////////////////////////////////////////
                 //use this for long sound clip that can adjust volume 
                 //while the song is playing.
                 /*
                      const audio = new Audio("http://21273.live.streamtheworld.com/LOS40_DANCE.mp3");
                      let volumeControl = document.getElementById("volumeControl");
                      audio.play()
         
                      volumeControl.addEventListener("change", (e) => {
                         audio.volume = this.state.volume / 100;
                      });
                 */
                 /////////////////////////////////////////////////////////
 
                 break;
             case "w":
                 document.getElementById("w").style.transform = "scale(1.1,1.1)";
                 document.getElementById("w").style.borderColor = "#ff1aff";
                 document.getElementById("w").style.backgroundColor = "#ff8000";
                 document.getElementById('W').play();
 
                 if(bank === "Heater Kit"){
                     const audio2 = window.$heaterKitAudio2;
                     audio2.play();
                     audio2.volume = volume / 100;
                     setSoundTrackName("Heater 2");
                 }
                 else if(bank === "Smooth Piano Kit"){
                     const audio2 = window.$smoothPianoKitAudio2;
                     audio2.play();
                     audio2.volume = volume / 100;
                     setSoundTrackName("Chord-2");
                 }
                 break;
             case "e":
                 document.getElementById("e").style.transform = "scale(1.1,1.1)";
                 document.getElementById("e").style.borderColor = "#4d4dff";
                 document.getElementById("e").style.backgroundColor = "#00ffff";
                 document.getElementById('E').play();
 
                 if(bank === "Heater Kit"){
                     const audio3 = window.$heaterKitAudio3;
                     audio3.play();
                     audio3.volume = volume / 100;
                     setSoundTrackName("Heater 3");
                 }
                 else if(bank === "Smooth Piano Kit"){
                     const audio3 = window.$smoothPianoKitAudio3;
                     audio3.play();
                     audio3.volume = volume / 100;
                     setSoundTrackName("Chord-3");
                 }
                 break;
             case "a":
                 document.getElementById("a").style.transform = "scale(1.1,1.1)";
                 document.getElementById("a").style.borderColor = "#0040ff";
                 document.getElementById("a").style.backgroundColor = "#cccc00";
                 document.getElementById('A').play();
 
                 if(bank === "Heater Kit"){
                     const audio4 = window.$heaterKitAudio4;
                     audio4.play();
                     audio4.volume = volume / 100;
                     setSoundTrackName("Heater 4");
                 }
                 else if(bank === "Smooth Piano Kit"){
                     const audio4 = window.$smoothPianoKitAudio4;
                     audio4.play();
                     audio4.volume = volume / 100;
                     setSoundTrackName("Shaker");
                 }
                 break;
             case "s":
                 document.getElementById("s").style.transform = "scale(1.1,1.1)";
                 document.getElementById("s").style.borderColor = "#cc00cc";
                 document.getElementById("s").style.backgroundColor = "#ff794d";
                 document.getElementById('S').play();
 
                 if(bank === "Heater Kit"){
                     const audio5 = window.$heaterKitAudio5;
                     audio5.play();
                     audio5.volume = volume / 100;
                     setSoundTrackName("Clap");
                 }
                 else if(bank === "Smooth Piano Kit"){
                     const audio5 = window.$smoothPianoKitAudio5;
                     audio5.play();
                     audio5.volume = volume / 100;
                     setSoundTrackName("Open-HH");
                 }
                 break;
             case "d":
                 document.getElementById("d").style.transform = "scale(1.1,1.1)";
                 document.getElementById("d").style.borderColor = "#ff0066";
                 document.getElementById("d").style.backgroundColor = "#4db8ff";
                 document.getElementById('D').play();
 
                 if(bank === "Heater Kit"){
                     const audio6 = window.$heaterKitAudio6;
                     audio6.play();
                     audio6.volume = volume / 100;
                     setSoundTrackName("Open HH");
                 }
                 else if(bank === "Smooth Piano Kit"){
                     const audio6 = window.$smoothPianoKitAudio6;
                     audio6.play();
                     audio6.volume = volume / 100;
                     setSoundTrackName("Closed-HH");
                 }
                 break;
             case "z":
                 document.getElementById("z").style.transform = "scale(1.1,1.1)";
                 document.getElementById("z").style.borderColor = "#ff0066";
                 document.getElementById("z").style.backgroundColor = "#00e600";
                 document.getElementById('Z').play();
 
                 if(bank === "Heater Kit"){
                     const audio7 = window.$heaterKitAudio7;
                     audio7.play();
                     audio7.volume = volume / 100;
                     setSoundTrackName("Kick n' Hat");
                 }
                 else if(bank === "Smooth Piano Kit"){
                     const audio7 = window.$smoothPianoKitAudio7;
                     audio7.play();
                     audio7.volume = volume / 100;
                     setSoundTrackName("Punchy-Kick");
                 }
                 break;
             case "x":
                 document.getElementById("x").style.transform = "scale(1.1,1.1)";
                 document.getElementById("x").style.borderColor = "#008000";
                 document.getElementById("x").style.backgroundColor = "#ff9900";
                 document.getElementById('X').play();
 
                 if(bank === "Heater Kit"){
                     const audio8 = window.$heaterKitAudio8;
                     audio8.play();
                     audio8.volume = volume / 100;
                     setSoundTrackName("Kick");
                 }
                 else if(bank === "Smooth Piano Kit"){
                     const audio8 = window.$smoothPianoKitAudio8;
                     audio8.play();
                     audio8.volume = volume / 100;
                     setSoundTrackName("Side-Stick");
                 }
                 break;
             case "c":
                 document.getElementById("c").style.transform = "scale(1.1,1.1)";
                 document.getElementById("c").style.borderColor = "#0000e6";
                 document.getElementById("c").style.backgroundColor = "#ff0066";
                 document.getElementById('C').play();
 
                 if(bank === "Heater Kit"){
                     const audio9 = window.$heaterKitAudio9;
                     audio9.play();
                     audio9.volume = volume / 100;
                     setSoundTrackName("Closed HH");
                 }
                 else if(bank === "Smooth Piano Kit"){
                     const audio9 = window.$smoothPianoKitAudio9;
                     audio9.play();
                     audio9.volume = volume / 100;
                     setSoundTrackName("Snare");
                 }
                 break;
         }
 
         //set all button border back to blue
         setTimeout(() => {
             document.getElementById(key).style.transform = "scale(1,1)";
             document.getElementById(key).style.borderColor = "#d4e766";
             document.getElementById(key).style.backgroundColor = "#4CAF50";
          },200);
     }

    const setPower = () => {
        //* power off *//
        if(powerStatus){
            setPowerStatus(false);
            setVolume(50);
            setSoundTrackStatus(false);
            
            document.getElementById('volumeControl').value = "50";
            document.getElementById('volumeControl').style.backgroundColor ="rgb(180, 178, 178)"
            document.getElementById('q').style.backgroundColor = "";
            document.getElementById('w').style.backgroundColor = "";
            document.getElementById('e').style.backgroundColor = "";
            document.getElementById('a').style.backgroundColor = "";
            document.getElementById('s').style.backgroundColor = "";
            document.getElementById('d').style.backgroundColor = "";
            document.getElementById('z').style.backgroundColor = "";
            document.getElementById('x').style.backgroundColor = "";
            document.getElementById('c').style.backgroundColor = "";
            document.getElementById('powerButton').style.backgroundColor = "";
            document.getElementById('bankButton').style.backgroundColor = "";
            document.getElementById('bankName').style.opacity = "0";
            document.getElementById('bankButton').disabled=true;
            document.getElementById('screen').style.zIndex = "10";
            document.getElementById('volumeSreen').style.zIndex = "10";
        }
        //* power on *//
        else{
            setPowerStatus(true);
            document.getElementById('q').style.backgroundColor = "#4CAF50";
            document.getElementById('w').style.backgroundColor = "#4CAF50";
            document.getElementById('e').style.backgroundColor = "#4CAF50";
            document.getElementById('a').style.backgroundColor = "#4CAF50";
            document.getElementById('s').style.backgroundColor = "#4CAF50";
            document.getElementById('d').style.backgroundColor = "#4CAF50";
            document.getElementById('z').style.backgroundColor = "#4CAF50";
            document.getElementById('x').style.backgroundColor = "#4CAF50";
            document.getElementById('c').style.backgroundColor = "#4CAF50";
            document.getElementById('powerButton').style.backgroundColor = "red";
            document.getElementById('bankButton').style.backgroundColor = "rgb(50, 184, 72)";
            document.getElementById('bankButton').disabled=false;
            document.getElementById('bankName').style.opacity = "1";
            document.getElementById('screen').style.zIndex = "-1";
            document.getElementById('volumeSreen').style.zIndex = "-10";
            document.getElementById('volumeControl').style.backgroundColor ="red";
        }
    };

    const switchBank = () => {
        if(bank === "Heater Kit"){
            setBank("Smooth Piano Kit");
        }
        else{
            setBank("Heater Kit");
        }
    };

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