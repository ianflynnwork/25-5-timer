

const Length = ({title, changeTime, type, time}) => {

    return (
        <div>
            <h3 id={type + '-label'}>{title}</h3>
            <div className="times-sets">
                <button onClick={() => changeTime(-60, type)} id={type + '-decrement'}>Down</button>
            </div>
            <h3 id={type + '-length'}>{time}</h3>
            <div className="times-sets">
            <button onClick={() => changeTime(60, type)} id={type + '-increment'}>Up</button>
            </div>
        </div>
    )
}
export default Length;