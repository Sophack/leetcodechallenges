//async function that sleeps for a given amount of time
async function sleep(time) {
    //return a new promise that resolves after the given amount of time
    return new Promise((resolve, reject) => {
        //use setTimeout to wait for the given amount of time
        setTimeout(() => {
            //resolve the promise
            resolve();
        }, time);
    });
}
    