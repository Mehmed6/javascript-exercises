export const randomInt = (min, bound) => Math.trunc(Math.random() * (bound - min) + min);
export const randomNumber = (min, bound) => Math.random() * (bound - min) + min;
export const randomBoolean = () => Math.random() < 0.5;