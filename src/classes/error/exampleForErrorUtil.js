import {writeLine} from "../../utils/console/console.js";
import {ErrorUtil} from "./ErrorUtil.js";

class MathUtil {
    static log(value) {
        if (value < 0)
            throw new Error("Indeterminate")

        if (value === 0)
            throw new Error("Undefined")

        return Math.log(value)
    }
}

const doSomethingCallback = () => {
    let min = -10;
    let max = 10;
    let result = MathUtil.log(Math.random() * (max - min) + min);
    writeLine(result)
}

const doSomethingErrorCallback = ex => {
    writeLine(`doSomething -> Message: ${ex.message}`);
    throw ex;
}

const doSomethingFinallyCallback = () => writeLine("doSomething -> finally");

const doSomething = () => ErrorUtil.subscribeWithFinally(doSomethingCallback, doSomethingErrorCallback, doSomethingFinallyCallback)
const main = () => {

    for (let i = 0; i < 10; ++i) {
        try {
            doSomething();
        }
        catch (ex) {
            writeLine(`main-> Message:${ex.message}, Error Code:${ex.errCode}`)
        }
        finally {
            writeLine("main -> finally")
        }
        writeLine("-----------------------------------------------")
    }
}

main()