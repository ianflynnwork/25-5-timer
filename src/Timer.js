import { useState } from "react";

const Timer = () => {  
    const [displayTime, setDisplayTime] = useState(25*60);
    const formatTime = (time) => {
        const minutes = Math.floor(time/60);
        const seconds = time % 60;
        return (minutes < 10 ? '0' + minutes: minutes) + ':' + (seconds < 10 ? '0' + seconds: seconds)
    };
    return(
        <div className="timer">
            <h1>{formatTime(displayTime)}</h1>
        </div>
    )
    
}

export default Timer;