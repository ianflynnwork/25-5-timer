import React, { useEffect, useState } from "react";

const defaultRemainingTime = {
    breakLength: 5,
    sessionLength: 25,
    minutes: '25',
    seconds: '00'
}

const Timer = () => {    
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            updateRemainingTime();
        }, 1000);
        return ()=> clearInterval(intervalId);
    },[])

    function updateRemainingTime(){
        console.log('hey girllllll');
    }
        return(
            <div>
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