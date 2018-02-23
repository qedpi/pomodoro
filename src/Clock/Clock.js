import React from 'react'

import './Clock.css'

const clock = props => {
    const mins = String(Math.floor(props.timeLeft / 60)).padStart(2, '0');
    const secs = String(props.timeLeft % 60).padStart(2, '0');
    return (
        <div id="Clock">
            <button onClick={props.startClock}>Start</button>
            <p id="time">{mins}:{secs}</p>
        </div>
    )
};

export default clock