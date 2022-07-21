import { useEffect, useState } from "react";
import alarmSound from './alarmSound.mp3';


const Timer = () => {  
    const [displayTime, setDisplayTime] = useState(25*60);
    const [breakTime, setBreakTime] = useState(5*60);
    const [sessionTime, setSessionTime] = useState(25*60);
    const [timerOn, setTimerOn] = useState(false);
    const [onBreak, setOnBreak] = useState(false);
    const breakAudio = new Audio(alarmSound);

//new
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        setDisplayTime(sessionTime);
      }, [sessionTime]);

    useEffect(()=>{
        if (displayTime == 0){
            breakAudio.currentTime = 1;
            breakAudio.play();
            setTimeout(()=>{
                breakAudio.pause();
                breakAudio.currentTime = 0;
                }, 1300);
            if(!onBreak){
                setOnBreak(true);
                setDisplayTime(breakTime);
            } else if(onBreak){
                setOnBreak(false);
                setDisplayTime(sessionTime);
            }
        }
    }, [displayTime, onBreak, breakTime, sessionTime]);
//end new

    const playBreakSound = () => {
        breakAudio.currentTime = 1;
        breakAudio.play();
        setTimeout(()=>{
            breakAudio.pause();
            breakAudio.currentTime = 0;
        }, 1300);
    }
    const formatTime = (time) => {
        let minutes = Math.floor(time/60);
        let seconds = time % 60;
        return (minutes < 10 ? '0' + minutes: minutes) + ':' + (seconds < 10 ? '0' + seconds: seconds)
    };
    const changeTime = (amount, type) => {
        if(timerOn){
            return;
        }
        if(type == 'break'){
            //keep timers at 1 minute or higher
            if(breakTime <= 60 && amount < 0 ){
                return;
            }
            setBreakTime((prev)=> prev + amount)
        }
        if(type == 'session'){
            //keep timers at 1 minute or higher
            if(sessionTime <= 60 && amount < 0){
                return;
            }

            if(sessionTime >= 3600 && amount > 0){
                return
            }
            setSessionTime((prev)=> prev + amount);
            if(!timerOn){
                setDisplayTime(sessionTime + amount);
            }

        }
    }
//new 
    const timerControl = ()=>{
        if(intervalId === null){
            const interval = setInterval(()=>{
                setDisplayTime((prev) => prev - 1)
            }, 1000);
            setIntervalId(interval);
        } else {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    const resetTime = () => {
        breakAudio.pause();
        clearInterval(intervalId);
        setIntervalId(null);
        setDisplayTime(25*60);
        setBreakTime(5*60);
        setSessionTime(25*60);
        setOnBreak(false);
    };

    return(
        <div className="timer">
            <h1>Pomodoro Clock</h1>
            <button onClick={playBreakSound}>Play</button>
            <div className="dual-containers">
            <div>
                <h3 id='break-label'>Break Length</h3>
                <div className="times-sets">
                    <button onClick={() => changeTime(-60, 'break')} id='break-decrement'>Down</button>
                </div>
                <h3 id='break-length'>{breakTime/60}</h3>
                <div className="times-sets">
                <button onClick={() => changeTime(60, 'break')} id='break-increment'>Up</button>
                </div>
            </div>
            <div>
                <h3 id='session-label'>Session Length</h3>
                <div className="times-sets">
                    <button onClick={() => changeTime(-60, 'session')} id='session-decrement'>Down</button>
                </div>
                <h3 id='session-length'>{sessionTime/60}</h3>
                <div className="times-sets">
                <button onClick={() => changeTime(60, 'session')} id='session-increment'>Up</button>
                </div>
            </div>
            </div>
            <h3 id='timer-label'>{onBreak ? 'Break' : 'Session'}</h3>
            <h1 id='time-left'>{formatTime(displayTime)}</h1>
            <button id='start_stop' onClick={timerControl}>{timerOn ? ('Pause'):('Start')}</button>
            <button id='reset' onClick={resetTime}>Reset</button>
        </div>
    )
    
}

export default Timer;