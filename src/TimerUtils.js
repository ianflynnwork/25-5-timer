import dayjs from "dayjs";

export function getRemainingTimeUntilMsTimestamp(timestampMs){
    const timestampsDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs();
    if(timestampsDayjs.isBefore(nowDayjs)){
        return {
            seconds: '00',
            minutes: '00',
        }
    }
    return {
        seconds: getRemainingSeconds(nowDayjs, timestampsDayjs),
        minutes: getRemainingMinutes(nowDayjs, timestampsDayjs)
    };
}
function getRemainingSeconds(nowDayjs, timestampsDayjs){
    const seconds = timestampsDayjs.diff(nowDayjs, 'seconds') % 60;
    return padWithZeros(seconds, 2);
}
function getRemainingMinutes(nowDayjs, timestampsDayjs){
    const minutes = timestampsDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZeros(minutes, 2);
}
function padWithZeros(number, minLength){
    const numberString = number.toString();
    if(numberString.length >= minLength) return numberString;
    return '0'.repeat(minLength - numberString.length) + numberString;
}