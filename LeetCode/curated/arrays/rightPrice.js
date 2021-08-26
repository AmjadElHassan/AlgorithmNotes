//params: we will be given an array of numbers that represent the price of a stock on different days. the index of the price indicates a particular day of the price
//return: the maximum amount of money possible
//restrictions: choose 1 day to buy, and 1 day to sell

function rightPrice(arr){

    let result = 0
    let min = arr[0]
    for (let i=1; i<arr.length; i++){
        min = Math.min(arr[i], min)
        result = Math.max(result, arr[i]-min)
    }
    return result
}

console.log(rightPrice([3,6,2,6,3,1,3,9]))