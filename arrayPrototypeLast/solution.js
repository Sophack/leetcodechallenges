//enhance array prototype by adding a method that returns the last element of the array

//added method 'last()' to Array.prototype 
Array.prototype.last = function() {

    if (this.length === 0) {
        //because there are no elements in the array, return -1
        return -1;
    }
    //otherwise return the last element in the array
    else {
        return this[this.length - 1];
    }
}
