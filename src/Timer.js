import { useState } from "react";
import Length from './Length';


const Timer = () => {  
    const [displayTime, setDisplayTime] = useState(25*60);
    const [breakTime, setBreakTime] = useState(5*60);
    const [sessionTime, setSessionTime] = useState(25*60);
    const [timerOn, setTimerOn] = useState(false);
    const [onBreak, setOnBreak] = useState(false);
    const [breakAudio, setBreakAudio] = useState(new Audio('./alarmSound.mp3'));

    const playBreakSound = ()=>{
        breakAudio.currentTime = 0;
        breakAudio.play();
        setTimeout(()=>{
            breakAudio.pause();
            breakAudio.currentTime = 0;
        }, 2000);
    }
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
    const controlTime = () => {
        let second = 1000;
        let date = new Date().getTime();
        let nextDate = new Date().getTime() + second;
        let onBreakVariable = onBreak;
        if(!timerOn){
            let interval = setInterval(()=> {
                date = new Date().getTime();
                if(date > nextDate){
                    setDisplayTime((prev) => {
                        if(prev <= 0 && !onBreakVariable){
                            playBreakSound();
                            onBreakVariable=true;
                            setOnBreak(true);
                            return breakTime;
                        } else if(prev <= 0 && onBreakVariable){
                            playBreakSound();
                            onBreakVariable=false;
                            setOnBreak(false);
                            return sessionTime;
                        }
                        return prev - 1;
                    });
                    nextDate += second;
                }
            }, 30);
            localStorage.clear();
            localStorage.setItem('interval-id', interval);
        }
        if (timerOn) {
            clearInterval(localStorage.getItem('interval-id'));
        }
        setTimerOn(!timerOn);
    };
    const resetTime = () => {
        setDisplayTime(25*60);
        setBreakTime(5*60);
        setSessionTime(25*60);
    }


    return(
        <div className="timer">
            <h1>Pomodoro Clock</h1>
            <button onClick={playBreakSound}>Play</button>
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
            <h3>{onBreak ? 'BREAK' : 'SESSION'}</h3>
            <h1>{formatTime(displayTime)}</h1>
            <button onClick={controlTime}>{timerOn ? ('pause it'):('run it')}</button>
            <button onClick={resetTime}>Reset</button>
        </div>
    )
    
}

export default Timer;