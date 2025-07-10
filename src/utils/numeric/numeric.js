const digitsPowSum =  number => {
    const numberOfDigits  = countDigits(number);
    let result = 0;

    while (number) {
        result += Math.pow(number % 10, numberOfDigits);
        number = Math.trunc(number / 10);
    }

    return result;
}
export const countDigits = number => !number ? 1 : Math.trunc(Math.log10(Math.abs(number))) + 1;
export const isEven = number => number % 2 === 0;
export const isOdd = !isEven;
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

export const nextFibonacciNumber = number => {
    let count = 1;
    while (true) {
        let value = nthFibonacciNumber(count++);
        if (number < value)
            return value;
    }
}

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

export const isArmstrong = number => number === digitsPowSum(number);