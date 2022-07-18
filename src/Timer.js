import { useState } from "react";

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const Timer = () => {    
    
        return(
            <div> 
                <span>30</span>
                <span>days</span>
                <span>12</span>
                <span>hours</span>
                <span>4</span>
                <span>minutes</span>
                <span>32</span>
                <span>seconds</span>

            </div>
        )
    
}

export default Timer;