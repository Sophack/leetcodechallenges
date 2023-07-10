// write function createCounter that should accept an initial integer init. 
// The function should return an object with three methods:
// 1. increment - increases the counter by 1 and then returns it
// 2. decrement - decreases the counter by 1 and then returns it
// 3. reset() - sets the current value to init and returns it

function createCounter(init) {
    let counter = init;
    return {
        increment: function () {
            return ++counter;
        },
        decrement: function () {

            return --counter;
        },
        reset: function () {
            counter = init;
            return counter;
        }
    }
}
