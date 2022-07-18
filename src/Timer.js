import React, { useState } from "react";
import { useTimer } from "react-timer-hook";

const defaultRemainingTime = {
    breakLength: 5,
    sessionLength: 25,
    minutes: '25',
    seconds: '00'
}

const Timer = () => {    
    const time = new Date();
    time.setSeconds(time.getSeconds() + 1500); // 10 minutes timer
    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ time, onExpire: () => console.warn('onExpire called') }); 
      
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

        return(
            <div> 
                <div style={{textAlign: 'center'}}>
                    <div style={{fontSize: '100px'}}>
                        <span>{minutes}</span>:<span>{seconds}</span>
                    </div>
                    <p>{isRunning ? 'Running' : 'Stopped'}</p>
                    <button onClick={start}>Start</button>
                    <button onClick={pause}>Pause</button>
                    <button onClick={resume}>Resume</button>
                    <button onClick={() => {
                        // Restarts to 5 minutes timer
                        const time = new Date();
                        time.setSeconds(time.getSeconds() + 300);
                        restart(time)
                    }}>Restart</button>
                </div>
                <div>
                    <div id="break-label">Break Length</div>
                    <input 
                        id="break-length"
                        type="text"
                        readOnly 
                        value={remainingTime.breakLength}
                    />
                    <button id="break-decrement">Down</button>
                    <button id="break-increment">Up</button>
                </div>
                <div>
                    <div id="session-label">Session Length</div>
                    <input 
                        id="session-length"
                        type="text"
                        readOnly 
                        value={remainingTime.sessionLength}
                    />
                    <button id="session-decrement">Down</button>
                    <button id="session-increment">Up</button>
                </div>
                <div background-color="">
                    <div id="timer-label">Session</div>
                    
                    
                    <div id="time-left">
                    <span>{remainingTime.minutes}</span>
                    <span>:</span>
                    <span>{remainingTime.seconds}</span>
                    
                    
                    
                    </div>
                    
                    
                    
                    <button id="start_stop">Start/Stop</button>
                    <button id="reset">Reset</button>
                </div>
                
            </div>
        )
    
}

export default Timer;