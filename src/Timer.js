import { useState } from "react";
import Length from './Length';

const Timer = () => {  
    const [displayTime, setDisplayTime] = useState(25*60);
    const [breakTime, setBreakTime] = useState(5*60);
    const [sessionTime, setSessionTime] = useState(25*60);

    const formatTime = (time) => {
        const minutes = Math.floor(time/60);
        const seconds = time % 60;
        return (minutes < 10 ? '0' + minutes: minutes) + ':' + (seconds < 10 ? '0' + seconds: seconds)
    };
    const changeTime = (amount, type) => {
        if(type == 'break'){
            if(breakTime <= 60 && amount < 0){
                return;
            }
            setBreakTime((prev)=> prev + amount)
        }
        if(type == 'session'){
            if(sessionTime <= 60 && amount < 0){
                return;
            }
            setSessionTime((prev)=> prev + amount)
        }
    }
    return(
        <div className="timer">
            <Length 
                title={'break length'} 
                changeTime={changeTime}
                type={'break'}
                time={breakTime}
                formatTime={formatTime}/>
            <Length 
                title={'session length'} 
                changeTime={changeTime}
                type={'session'}
                time={sessionTime}
                formatTime={formatTime}/>
            <h1>{formatTime(displayTime)}</h1>
        </div>
    )
    
}

export default Timer;