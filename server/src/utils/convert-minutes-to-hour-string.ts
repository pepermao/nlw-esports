export function convertMinutesStringToHours(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const minutesRemainder = minutes % 60;

    return `${hours}:${minutesRemainder < 10? '0' : ''}${minutesRemainder}`;
}