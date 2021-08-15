//now insertion sort works by switching number through an array. we travel from our initial item. we decide if it should come before or after the next value, and switch them if necessary.
//we repreat this through the whole array
//basically we build our final sorted array, 1 item at a time


//Parameters: we should receive and array of integers
//return: returns a sorted version of the array from least to greatest. use insertionSort to do this
//example: [2,3,4,2,52,]=>[2,2,3,4,52]


//1.) default arguments
// function insertSort(arr = []) {
//     //2.) typecheck, and handle 
//     if (Array.isArray(arr) !== true || arr.length === 0) {
//         return console.log(arr)
//     }
//     //3.) any variables
//     //4.)funciton logic

//     for (let i = 1; i < arr.length; i++) {
//         checkAndSwap(i, arr)
//     }
//     //5.) return
//     console.log(arr)
// }

// function checkAndSwap(index, array) {
//     if (array[index] < array[index - 1]) {//if the previous iteration in the array is greater than the value at the current index position
//         [array[index - 1], array[index]] = [array[index], array[index - 1]]
//         checkAndSwap(index - 1, array)
//     }
//     return array
// }

//1.) default
function insertSort(arr = []) {
    //2.) type-check
    if (!Array.isArray(arr)||arr===[]) {
        return undefined
    }
    //3.) variable declaration
    //4.) function logic
    //note, start at i=1, because wee will be comparing to the previous index value
    for (let i=1;i<arr.length;i++){
        checkAndSwap(i, arr)
    }
    //5.) return
    return arr
}

//1.) default
function checkAndSwap(index="", array=[]){
    //2.) type check
    
    if (typeof index!=="number"||!Array.isArray(array)){
        return undefined
    }

    if (array[index]<array[index-1]){
        [array[index],array[index-1]] = [array[index-1], array[index]]
        checkAndSwap(index-1, array)
    }
    return array
}

console.log(insertSort([8, 5, 2, 9, 5, 6, 3]))