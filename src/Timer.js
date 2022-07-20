import { useState } from "react";
import Length from './Length';

const Timer = () => {  
    const [displayTime, setDisplayTime] = useState(25*60);
    const [breakTime, setBreakTime] = useState(5*60);

    const formatTime = (time) => {
        const minutes = Math.floor(time/60);
        const seconds = time % 60;
        return (minutes < 10 ? '0' + minutes: minutes) + ':' + (seconds < 10 ? '0' + seconds: seconds)
    };
    const changeTime = (amount, type) => {
        if(type == 'break'){
            setBreakTime((prev)=> prev + amount)
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
            <h1>{formatTime(displayTime)}</h1>
        </div>
    )
    
}

export default Timer;