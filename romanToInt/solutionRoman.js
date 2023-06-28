//define roman numerals as key value pairs 
const key = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};

//define a function that takes a roman numeral as a string and returns the integer value
const romanToInt = (roman) => { 

    //define variable to store the running total
    let sum = 0; 

    //iterate through roman numeral string
    for (let i = 0; i < roman.length; i++) {

        //assign names to first two values
        let current = key[roman[i]];
        let next = key[roman[i+1]] || 0;

        //if first number is greater, add it to the sum
        if (current >= next) {
            sum += current;
        }
        else {
            //if next is greater, subtract the current from next and add that to the sum
            sum += (next - current);
            //skip the next number in the iteration
            i++;
        }}
    return sum;
}