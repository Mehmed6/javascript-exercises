import {randomBoolean, randomInt, randomNumber} from "../random/random.js";

export const join = (array, separator) => array.reduce((result, element) => result + separator + element);

export const randomIntArray = (length, min, bound) => {
    const result = [];

    for (let i = 0; i < length; ++i)
        result[i] = randomInt(min, bound);

    return result;
}

export const randomNumberArray = (length, min, bound) => {
    const result = [];

    for (let i = 0; i < length; ++i)
        result[i] = randomNumber(min, bound);

    return result;
}

export const randomBooleanArray = length => {
    const result = [];

    for (let i = 0; i < length; ++i)
        result[i] = randomBoolean();

    return result;
}