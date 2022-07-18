import { useEffect, useState } from "react";

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
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
        console.log('hello world')
    }
    return(
        <div> 
            <span>{remainingTime.days}</span>
            <span>days</span>
            <span>{remainingTime.hours}</span>
            <span>hours</span>
            <span>{remainingTime.minutes}</span>
            <span>minutes</span>
            <span>{remainingTime.seconds}</span>
            <span>seconds</span>

        </div>
    )
    
}

export default Timer;