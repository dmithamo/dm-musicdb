/**
 * @description Format track length as mins and secs
 * @param timeInSeconds
 * @returns {string} mins:secs
 */
export const formatTrackLength = (timeInSeconds: number) =>
  `${padValue(Math.floor(timeInSeconds / 60))}:${padValue(
    Math.ceil(timeInSeconds % 60),
  )}`;

const padValue = (value: number) => (value < 10 ? `0${value}` : value);
