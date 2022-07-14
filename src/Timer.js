import React from "react";


class Timer extends React.Component{
    constructor(){
        super();
        this.state={
            breakLength: 5,
            sessionLength: 25
        }
    }

    render(){
        return(
            <div>
                <div>
                    <div id="break-label">Break Length</div>
                    <input 
                        id="break-length"
                        type="text"
                        readOnly 
                        value={ this.state.breakLength }
                    />
                    <button id="break-decrement">Down</button>
                    <button id="break-increment">Up</button>
                </div>
                <div>
                    <div id="session-label">Session Length</div>
                    <input 
                        id="session-length"
                        type="text"
                        readOnly 
                        value={ this.state.sessionLength }
                    />
                    <button id="session-decrement">Down</button>
                    <button id="session-increment">Up</button>
                </div>
                
                
            </div>
        )
    }
}

export default Timer;