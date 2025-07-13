/**
 * Returns a random integer within the specified range.
 * @param {number} min - Inclusive lower bound.
 * @param {number} bound - Exclusive upper bound.
 * @returns {number} Random integer in the range [min, bound).
 */
export const randomInt = (min, bound) => Math.trunc(Math.random() * (bound - min) + min);

/**
 * Returns a random number within the specified range.
 * @param {number} min - Inclusive lower bound.
 * @param {number} bound - Exclusive upper bound.
 * @returns {number} Random number in the range [min, bound).
 */
export const randomNumber = (min, bound) => Math.random() * (bound - min) + min;
/**
 * Returns a random boolean value.
 * @returns {boolean} true or false, with equal probability.
 */
export const randomBoolean = () => Math.random() < 0.5;