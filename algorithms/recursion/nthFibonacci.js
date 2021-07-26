//given an integer N
//return fibonacci's number to the nth inter

//fibonacci formula is: F(n) = F(n-1) + F(n-2)
//this is to the every nth digit is a function of the last 2 numbers before it. 


/**
 * function fibFind(): 
 * function should return the digit of fibonacci referring to its index.
 * @goals
 * - return fibonacci number to digit n
 * @param {*} n 
 */
function fibFind(n){
if (n<2){
    return n 
} else {
    return fibFind(n-1)+fibFind(n-2)
}
}


/**
 * function fibTeller(): tell you the entire fibonacci sequence to a certain index
 * 
 */
function fibTeller(n){
    fiboArray = [0,1]
    for (let i = 2; i<n;i++){
        let latestAddition = fiboArray[i-1]+fiboArray[i-2]
        fiboArray.push(latestAddition)
    }
    return fiboArray
}

console.log(fibTeller(12))