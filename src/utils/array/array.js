import {randomBoolean, randomInt, randomNumber} from "../random/random.js";
/**
 * Joins the elements of an array into a single string, separated by the specified separator.
 *
 * @param {Array} array - The array whose elements will be joined.
 * @param {string} separator - The string to separate each element.
 * @returns {string} The joined string.
 */
export const join = (array, separator) => array.reduce((result, element) => result + separator + element);
/**
 * Generates an array of random integers within the specified range.
 *
 * @param {number} length - The length of the array to generate.
 * @param {number} min - The minimum value (inclusive) for random integers.
 * @param {number} bound - The upper bound (exclusive) for random integers.
 * @returns {number[]} An array of random integers.
 */
export const randomIntArray = (length, min, bound) => {
    const result = [];

    for (let i = 0; i < length; ++i)
        result[i] = randomInt(min, bound);

    return result;
}

/**
 * Generates an array of random floating-point numbers within the specified range.
 *
 * @param {number} length - The length of the array to generate.
 * @param {number} min - The minimum value (inclusive) for random numbers.
 * @param {number} bound - The upper bound (exclusive) for random numbers.
 * @returns {number[]} An array of random floating-point numbers.
 */
export const randomNumberArray = (length, min, bound) => {
    const result = [];

    for (let i = 0; i < length; ++i)
        result[i] = randomNumber(min, bound);

    return result;
}

/**
 * Generates an array of random boolean values.
 *
 * @param {number} length - The length of the array to generate.
 * @returns {boolean[]} An array of random boolean values.
 */
export const randomBooleanArray = length => {
    const result = [];

    for (let i = 0; i < length; ++i)
        result[i] = randomBoolean();

    return result;
}