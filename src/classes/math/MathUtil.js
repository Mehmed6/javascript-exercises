
export class MathUtil {

    static abs(value) {
        return value < 0 ? -value : value;
    }

    static factorial(n) {
        if (n < 0)
            throw new Error('Number must be greater than 0');

        if (n === 0 || n === 1)
            return 1;

        let result = 1;

        for (let i = 2; i <= n; ++i)
            result *= i;

        return result;
    }

    static max(a, b) {
        return a > b ? a : b;
    }

    static min(a, b) {
        return a < b ? a : b;
    }

    static pow(base, exponent) {
        if (exponent === 0)
            return 1;

        let result =1;
        const sing = exponent < 0 ? -1 : 1;
        exponent = this.abs(exponent);

        while(exponent--)
            result *= base;

        return sing < 0 ? 1 / result : result;
    }

    static sqrt(value) {
        //TODO:
    }
}