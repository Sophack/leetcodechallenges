// write a function to filter an array 'arr' based on a given filtering function 'fn' and return a filtered array


//define 'filter' for the following function 
// function filterArray(arr, fn) {  
//     const filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {   
//         if (fn(arr[i])) {
//             filteredArr.push(arr[i]);

//         }
//     }
//     return filteredArr;
// }
// const arr = [1, 2, 3, 4, 5];
// const fn = (num) => num % 2 === 0;

// const filteredArr = filterArray(arr, fn);


function filterArray(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}                                                                                                                                                                                                                                                         
const arr = [1, 2, 3, 4, 5];
const fn = (num) => num % 2 === 0;

const filteredArr = filterArray(arr, fn);
console.log(filteredArr); // Output: [2, 4]