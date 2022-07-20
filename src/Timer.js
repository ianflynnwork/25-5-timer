import { useState } from "react";
import Length from './Length';

const Timer = () => {  
    const [displayTime, setDisplayTime] = useState(25*60);
    const [breakTime, setBreakTime] = useState(5*60);
    const [sessionTime, setSessionTime] = useState(25*60);
    const [timerOn, setTimerOn] = useState(false);

    const formatTime = (time) => {
        const minutes = Math.floor(time/60);
        const seconds = time % 60;
        return (minutes < 10 ? '0' + minutes: minutes) + ':' + (seconds < 10 ? '0' + seconds: seconds)
    };
    const changeTime = (amount, type) => {
        if(type == 'break'){
            //keep timers at 1 minute or higher
            if(breakTime <= 60 && amount < 0){
                return;
            }
            setBreakTime((prev)=> prev + amount)
        }
        if(type == 'session'){
            //keep timers at 1 minute or higher
            if(sessionTime <= 60 && amount < 0){
                return;
            }
            setSessionTime((prev)=> prev + amount);
            if(!timerOn){
                setDisplayTime(sessionTime + amount);
            }

        }
    }
    return(
        <div className="timer">
            <h1>Pomodoro Clock</h1>
            <div className="dual-containers">
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
            </div>
            
            <h1>{formatTime(displayTime)}</h1>
        </div>
    )
    
}

export default Timer;