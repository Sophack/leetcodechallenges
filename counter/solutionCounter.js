
//create counter function to return the next number in the sequence each time it is called
function createCounter(start) {
    //define a variable to store the value of start
    let count = start;
    //define a function that returns the current value of count and increments it by 1
    return function() {
      return count++;
    }
  }