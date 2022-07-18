import { useEffect, useState } from "react";
import { getRemainingTimeUntilMsTimestamp } from "./TimerUtils";

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00'
}

const Timer = ({countdownTimestampMs}) => {    
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            updateRemainingTime(countdownTimestampMs);
        },1000);
        return () => clearInterval(intervalID);
    },[countdownTimestampMs])

    function updateRemainingTime(countdown){
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }
    return(
        <div> 
            <span>{remainingTime.minutes}</span>
            <span>minutes</span>
            <span>{remainingTime.seconds}</span>
            <span>seconds</span>

        </div>
    )
    
}

export default Timer;