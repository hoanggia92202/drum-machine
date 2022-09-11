import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import {BrowserRouter} from 'react-router-dom';
import './main.scss';

window.$heaterKitAudio1 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
window.$heaterKitAudio2 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
window.$heaterKitAudio3 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3");
window.$heaterKitAudio4 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
window.$heaterKitAudio5 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
window.$heaterKitAudio6 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
window.$heaterKitAudio7 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
window.$heaterKitAudio8 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
window.$heaterKitAudio9 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");

window.$smoothPianoKitAudio1 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3");
window.$smoothPianoKitAudio2 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3");
window.$smoothPianoKitAudio3 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3");
window.$smoothPianoKitAudio4 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3");
window.$smoothPianoKitAudio5 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3");
window.$smoothPianoKitAudio6 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3");
window.$smoothPianoKitAudio7 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3");
window.$smoothPianoKitAudio8 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3");
window.$smoothPianoKitAudio9 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3");

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));


