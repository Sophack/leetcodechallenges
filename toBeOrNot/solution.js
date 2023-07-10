// write a function expect that takes in any value and returns an object with two functions
// 1. toBe - takes in a value and returns true if the value passed in is equal to the value passed into expect
// 2. notToBe(val) accepts another value and returns true if the two values are not equal
// notToBe should throw an error if the two values are equal

const val = 5;
const val2 = 5;

 function expect(val) {
    return {
        toBe: function (val2) {
            if (val !== val2) {
                throw new Error('Values are not equal')
            }
            return val === val2;
        },
        notToBe: function (val2) {
            if (val === val2) {
                throw new Error('Values are equal');
            }
            return val !== val2;
        }
    } }