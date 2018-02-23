import React, {Component} from 'react';
import './App.css';

// Components
import Timer from './Timer/Timer'
import Clock from './Clock/Clock'

class App extends Component {

    state = {
        workMinutes: 25,
        breakMinutes: 5,
        counter: 0,
        isWork: true,
    };

    changeWorkMinutesHandler = event => {
        this.setState({
            workMinutes: Math.max(event.target.value, 1),
        })
    };

    changeBreakMinutesHandler = event => {
        this.setState({
            breakMinutes: Math.max(event.target.value, 1),
        })
    };

    startClockHandler = event => {
        // this.stepWork(true);

        if (!this.state.counter){
            const timeLeft = (this.state.isWork? this.state.workMinutes : this.state.breakMinutes) * 60;
            this.setState({
                counter: timeLeft,
            }, this.step);
        }
    };

    step = () => {
        if (!this.state.counter){ // time to alternate between work & break sessions
            this.setState({
                isWork: !this.state.isWork,
            });
            this.playAudio();
            this.startClockHandler();
        } else {
            this.setState({
                counter: this.state.counter - 1
            });
            setTimeout(this.step, 1000)
        }
    };

    playAudio = () => {
        const aud = document.getElementById('audio_applause');
        aud.pause();
        aud.currentTime = 0;
        aud.play()
    };

    /*
    stepWork = () => {
        let secCount = this.state.counter + 1;
        if (this.isWork && secCount === this.state.workMinutes){
            this.setState({
                isWork: !this.state
            })
            secCount = 0;
            setTimeout(this.stepWork(false), 1000);
        } else if (!isWork && secCount === this.state.breakMinutes){
            secCount = 0;
            setTimeout(this.stepWork(true), 1000);
        } else {
            setTimeout(this.stepWork(isWork), 1000);
        }
        this.setState({
            counter: secCount,
        })
    };
    */


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">React Pomodoro</h1>
                </header>

                <Timer workMinutes={this.state.workMinutes}
                       breakMinutes={this.state.breakMinutes}
                       changeWorkMinutes={this.changeWorkMinutesHandler}
                       changeBreakMinutes={this.changeBreakMinutesHandler}>
                </Timer>

                <Clock startClock={this.startClockHandler} timeLeft={this.state.counter}>
                </Clock>

            </div>
        );
    }
}

export default App;
