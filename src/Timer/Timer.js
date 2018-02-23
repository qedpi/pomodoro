import React from 'react'

import './Timer.css'

const timer = props => {
    return (
        <div id="Timer">
            <p>Session : Break &nbsp;</p>
            <input type="number" value={props.workMinutes} onChange={props.changeWorkMinutes}/> &nbsp;
            <input type="number" value={props.breakMinutes} onChange={props.changeBreakMinutes}/>
            <hr/>
        </div>
    )
};

export default timer