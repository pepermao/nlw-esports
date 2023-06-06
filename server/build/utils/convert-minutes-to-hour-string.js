"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMinutesStringToHours = void 0;
function convertMinutesStringToHours(minutes) {
    const hours = Math.floor(minutes / 60);
    const minutesRemainder = minutes % 60;
    return `${hours}:${minutesRemainder < 10 ? '0' : ''}${minutesRemainder}`;
}
exports.convertMinutesStringToHours = convertMinutesStringToHours;
