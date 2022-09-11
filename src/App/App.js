import React from 'react';
import classes from './App.module.scss';

const App = () => {
    return(
        <div id="drum-machine" className={`${classes.App} d-flex container-fluid`}>
            <div className={`${classes.container} row bg-danger m-auto`}>
                <div className={`${classes.leftControl} col-sm-7`}>
                <div id="screen" className={`${classes.screen}`}></div>
                        <div className={`${classes.keyRow} mt-4 ml-auto mr-auto`}>
                            <div id='q' onClick={(event) =>this.expandButton(event)} className={`${classes.keys} drum-pad`}>
                                <audio className="clip" src="https://ss3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id="Q"></audio>Q</div>
                            <div id='w' onClick={(event) =>this.expandButton(event)} className={`${classes.keys} drum-pad`}>
                                <audio className="clip" src="https://ss3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id="W"></audio>W</div>
                            <div id="e" onClick={(event) =>this.expandButton(event)} className={`${classes.keys} drum-pad`}>
                                <audio className="clip" src="https://ss3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id="E"></audio>E</div>
                        </div>
                        <div className={`${classes.keyRow} mt-2 ml-auto mr-auto`}>
                            <div id='a' onClick={(event) =>this.expandButton(event)} className={`${classes.keys} drum-pad`}>
                                <audio className="clip" src="https://ss3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="A"></audio>A</div>
                            <div id='s' onClick={(event) =>this.expandButton(event)} className={`${classes.keys} drum-pad`}>
                                <audio className="clip" src="https://ss3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="S"></audio>S</div>
                            <div id='d' onClick={(event) =>this.expandButton(event)} className={`${classes.keys} drum-pad`}>
                                <audio className="clip" src="https://ss3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="D"></audio>D</div>
                        </div>
                        <div className={`${classes.keyRow} mt-2 ml-auto mr-auto`}>
                            <div id='z' onClick={(event) =>this.expandButton(event)} className={`${classes.keys} drum-pad`}>
                                <audio className="clip" src="https://ss3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="Z"></audio>Z</div>
                            <div id='x' onClick={(event) =>this.expandButton(event)} className={`${classes.keys} drum-pad`}>
                                <audio className="clip" src="https://ss3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="X"></audio>X</div>
                            <div id='c' onClick={(event) =>this.expandButton(event)} className={`${classes.keys} drum-pad`}>
                                <audio className="clip" src="https://ss3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="C"></audio>C</div>
                        </div>
                </div>
                <div className={`${classes.rightControl} col-sm-5 bg-info`}>
                    
                </div>
            </div>                
        </div>
    )
}

export default App;