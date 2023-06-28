/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    //define variables to store the first two numbers in the sequence
    let a = 0;
    let b = 1;
    //define a variable to store the next number in the sequence
    let next;
    //define a variable to store the current number in the sequence
    let current;
    //define a variable to store the previous number in the sequence
    let previous;
    //define a variable to store the number of times the loop has run
    let count = 0;
    //define a variable to store the number of times the loop should run
    let max = 100;  
    //define a while loop that runs while count is less than max
    while (count < max) {

        //if count is 0, set current to 0
        if (count === 0) {
            current = 0;
        }
        //if count is 1, set current to 1
        else if (count === 1) {
            current = 1;
        }
        //otherwise set current to the sum of a and b
        else {
            current = a + b;
        }
        //set next to the sum of current and b
        next = current + b;
        //set previous to current
        previous = current;
        //set a to b
        a = b;
        //set b to current
        b = current;
        //increment count by 1
        count++;
        //yield current
        yield current;
    }
};


/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */