//we will be given an array and a chunk-size
//we should return the appropriate amount of arrays with the max number of items equal to the chunk size

//1.) default
function arrayChunk(arr = [], size = 0) {
    //2.) type-check
    if (!Array.isArray(arr) || typeof size !== "number" || arr === [] || size === 0) {
        return undefined
    }
    //3.) variable declaration
    //4.) function logic
    let answer = []
    while (arr.length > 0) {
        answer.push(arr.splice(0,size))
        console.log('ok')
    }

    return answer
}


//recursion method

function arrayChunk2(arr = [], size = 0) {
    //2.) type-check
    if (!Array.isArray(arr) || typeof size !== "number" || arr === [] || size === 0) {
        return undefined
    }

    // //terminating condition
    if (arr.length === 0){
        return arr
    }

    return [arr.splice(0,size), ...arrayChunk2(arr,size)]


}

console.log(arrayChunk2([2, 4, 2, 4, 3, 5, 7, 8, 6, 3, 3, 242, 3, 2345, 457475, 3, 52, 35, 25, 356, 7, 8, 45, 632, 4], 3))