

const Length = ({title, changeTime, type, time, titleId, downId, upId, timeId}) => {

    return (
        <div>
            <h3 id={titleId}>{title}</h3>
            <div className="times-sets">
                <button onClick={() => changeTime(-60, type)} id={downId}>Down</button>
            </div>
            <h3 id={timeId}>{time}</h3>
            <div className="times-sets">
            <button onClick={() => changeTime(60, type)} id={upId}>Up</button>
            </div>
        </div>
    )
}
export default Length;