/**
 * Returns the sum of each digit of a number raised to the power of the number of digits.
 * For example, for 153: 1^3 + 5^3 + 3^3 = 153.
 *
 * @param {number} number - The number to process.
 * @returns {number} The sum of the digits each raised to the power of the number of digits.
 */
const digitsPowSum =  number => {
    const numberOfDigits  = countDigits(number);
    let result = 0;

    while (number) {
        result += Math.pow(number % 10, numberOfDigits);
        number = Math.trunc(number / 10);
    }

    return result;
}
/**
 * Returns the number of digits in a given number.
 *
 * @param {number} number - The number to count digits of.
 * @returns {number} The count of digits in the number.
 */
export const countDigits = number => !number ? 1 : Math.trunc(Math.log10(Math.abs(number))) + 1;

/**
 * Checks if a number is even.
 *
 * @param {number} number - The number to check.
 * @returns {boolean} True if the number is even, false otherwise.
 */
export const isEven = number => number % 2 === 0;

/**
 * Checks if a number is odd.
 *
 * @param {number} number - The number to check.
 * @returns {boolean} True if the number is odd, false otherwise.
 */
export const isOdd = !isEven;
/**
 * Checks if a number is prime.
 * Returns true if the number is a prime number, otherwise false.
 * Optimized for small divisors and odd numbers.
 *
 * @param {number} number - The number to check for primality.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
export const isPrime = number => {
    if (number <= 1)
        return false;

    if (number % 2 === 0)
        return number === 2;
    if (number % 3 === 0)
        return number === 3;
    if (number % 5 === 0)
        return number === 5;
    if (number % 7 === 0)
        return number === 7;

    for (let i = 11; i * i <= number; i += 2) {
        if (number % i === 0)
            return false;
    }

    return true;
}

/**
 * Returns the nth Fibonacci number.
 * For example, nth=1 returns 0, nth=2 returns 1, nth=3 returns 1, nth=4 returns 2, etc.
 *
 * @param {number} nth - The position in the Fibonacci sequence (1-based).
 * @returns {number} The nth Fibonacci number.
 */
export const nthFibonacciNumber = nth => {

    if (nth <= 2)
        return nth - 1;

    let prev1 = 1, prev2 = 1, value = 1;

    for (let i = 3; i < nth; ++i) {

        value = prev1 + prev2;
        prev2 = prev1;
        prev1 = value;
    }
    return value;
}

/**
 * Returns the smallest Fibonacci number greater than the given number.
 *
 * @param {number} number - The reference number.
 * @returns {number} The next Fibonacci number after the given number.
 */
export const nextFibonacciNumber = number => {
    let count = 1;
    while (true) {
        let value = nthFibonacciNumber(count++);
        if (number < value)
            return value;
    }
}

/**
 * Returns the nth prime number.
 * For example, nth=1 returns 2, nth=2 returns 3, nth=3 returns 5.
 * Returns -1 if nth is less than 1.
 *
 * @param {number} nth - The position of the prime number to find.
 * @returns {number} The nth prime number, or -1 for invalid input.
 */
export const nthPrime = nth => {
    if (nth < 1)
        return -1;

    let count = 0;
    let number = 1;

    while (count < nth) {
        ++number;
        if (isPrime(number))
            ++count;
    }

    return number;
}

/**
 * Checks if a number is an Armstrong number.
 * An Armstrong number is a number that is equal to the sum of its own digits
 * each raised to the power of the number of digits.
 *
 * @param {number} number - The number to check.
 * @returns {boolean} Returns true if the number is an Armstrong number, otherwise false.
 */
export const isArmstrong = number => number === digitsPowSum(number);