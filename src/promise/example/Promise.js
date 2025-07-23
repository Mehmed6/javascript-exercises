import {randomPoint} from "../../classes/math/geometry/Point.js";
import {writeLine} from "../../utils/console/console.js";
import {Circle} from "../../classes/math/geometry/Circle.js";
import {randomBoolean, randomInt} from "../../utils/random/random.js";


const resolveCallback = (min, bound) => {
    let point = randomPoint(min, bound)
    writeLine(`resolveCallback => point = ${point}`)
    return point;
}

const rejectCallback = radius => {
    let circle = new Circle(radius)
    writeLine(`rejectCallback => circle = ${circle}`)
    return circle;
}
const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomBoolean())
                resolve(randomInt(1, 10));
            else
                reject(randomInt(5, 15));

        }, 2000)
    })
}
const main = () => {
    getData().then(bound => resolveCallback(0, bound))
        .catch(radius => rejectCallback(radius))

    writeLine("main ends...!")
}

main()