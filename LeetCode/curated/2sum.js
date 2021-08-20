//params: array of integers, and a target integer
//return: return the indices of the 2 numbers that equal the sum

function twoSum(arr = [], target = 0) {
    if (!Array.isArray(arr) || typeof target !== "number") {
        return undefined
    }

    for (let i = 0; i < arr.length; i++) {
        if (sumCheck(i, arr, target)){
            return sumCheck(i, arr, target)
        }
    }
}

function sumCheck(index, arr, target) {
    for (let i = index+1; i < arr.length; i++) {
        if (arr[index]+arr[i]===target){
            return [arr[index], arr[i]]
        }

    }

}

console.log(twoSum([1,5,13,8,5],13))