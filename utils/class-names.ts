/**
 * It takes an array of strings and/or falsy values, filters out the falsy values, and returns a string of the remaining values joined by a space
 * @param {(false | null | undefined | string)[]} classes - (false | null | undefined | string)[]
 */
export const classNames = (...classes: (false | null | undefined | string)[]): string => classes.filter(Boolean).join(' ');
