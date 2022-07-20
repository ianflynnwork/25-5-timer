import { useEffect, useState } from "react";
import useInterval from "./hooks/useInterval";

const Timer = () => {  
    const [remainingTime, setRemainingTime] = useState(1500);
    const [running, setRunning] = useState(false);

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setRemainingTime(remainingTime => remainingTime - 1);
        }, 1000);
        return () => clearInterval(intervalID);
    },[running==true])

    function handleStart(){
        
    }
    function getMinutes(){
        const minutes =Math.floor(remainingTime / 60);
        return padWithZeros(minutes);
    }
    function getSeconds(){
        const seconds = remainingTime % 60;
        return padWithZeros(seconds);
    }
    function padWithZeros(number){
        const numberString = number.toString();
        if(numberString.length >= 2){
            return numberString;
        }
        return '0'.repeat(2 - numberString.length) + number;
    }
    return(
        <div className="timer">
            <span className="timer__part timer__part--minutes" >{getMinutes()}</span>
            <span className="timer__part">:</span>
            <span className="timer__part timer__part--seconds">{getSeconds()}</span>
            <button type="button" 
                    className="timer__btn timer__btn--control timer__btn--start" 
                    onClick={handleStart}>
                Play
            </button>
            <button type="button" className="timer__btn timer__btn--control timer__btn--reset">
                Reset
            </button>
        </div>
    )
    
}

export default Timer;