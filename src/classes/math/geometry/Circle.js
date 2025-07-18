export class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    set radius(radius) {
        if (radius < 0)
            throw new Error("Radius cannot be negative");

        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    get area() {
        return Math.PI * this._radius * this._radius;
    }

    get circumference() {
        return 2 * Math.PI * this._radius;
    }

    toString() {
        return `Radius: ${this.radius} Area: ${this.area} Circumference: ${this.circumference}`;
    }
}