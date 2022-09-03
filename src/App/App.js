import React from 'react';
import classes from './App.module.scss';

const App = () => {
    return(
        <div id="drum-machine" className={`${classes.App} d-flex container-fluid`}>
            <div className={`${classes.container} row bg-danger m-auto`}>
                <div className={`${classes.leftControl} col-sm-7`}>
                    
                </div>
                <div className={`${classes.rightControl} col-sm-5 bg-info`}>
                    
                </div>
            </div>                
        </div>
    )
}

export default App;