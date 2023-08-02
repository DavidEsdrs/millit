export = millit;
/**
 * Parse milliseconds to string representation
 *
 *
 * @param {Number} time
 * @throws {Error} throw an error if val is an empty string or is not a number
 * @return {String}
 */
declare function millit(time: number): string;

/**
 * Parse time string to milliseconds
 *
 *
 * @param {String} time
 * @throws {Error} throw an error if val is an empty string or is not a number
 * @return {Number}
 */
declare function millit(time: string): number;
