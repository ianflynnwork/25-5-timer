import dayjs from "dayjs";

export function getRemainingTimeUntilMsTimestamp(timestampMs){
    const timestampsDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs();
    if(timestampsDayjs.isBefore(nowDayjs)){
        return {
            seconds: '00',
            minutes: '00',
            hours: '00',
            days: '00'
        }
    }
    return {
        seconds: getRemainingSeconds(nowDayjs, timestampsDayjs),
        minutes: getRemainingMinutes(nowDayjs, timestampsDayjs),
        hours: getRemainingHours(nowDayjs, timestampsDayjs),
        days: getRemainingDays(nowDayjs, timestampsDayjs)
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
function getRemainingHours(nowDayjs, timestampsDayjs){
    const hours = timestampsDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZeros(hours, 2);
}
function getRemainingDays(nowDayjs, timestampsDayjs){
    const days = timestampsDayjs.diff(nowDayjs, 'days') % 60;
    return days.toString();
}
function padWithZeros(number, minLength){
    const numberString = number.toString();
    if(numberString.length >= minLength) return numberString;
    return '0'.repeat(minLength - numberString.length) + numberString;

}