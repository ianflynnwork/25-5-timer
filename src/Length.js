

const Length = ({title, changeTime, type, time, formatTime}) => {

    return (
        <div>
            <h3>{title}</h3>
            <div className="times-sets">
                <button onClick={() => changeTime(-60, type)}>Down</button>
            </div>
            <h3>{formatTime(time)}</h3>
            <div className="times-sets">
            <button onClick={() => changeTime(60, type)}>Up</button>
            </div>
        </div>
    )
}
export default Length;