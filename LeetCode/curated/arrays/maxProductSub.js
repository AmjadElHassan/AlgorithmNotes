//param: we will be given an array of integeres
//return: return the product of the contiguous subarray with the maximum product

var maxProduct = function(arr) {
    let currentMaxProduct = arr[0]
    let currentMinProduct = arr[0]
    let result = arr[0]


    let tempMax
    let tempMin

    for (let i = 1;i<arr.length;i++){
        tempMax = Math.max(arr[i], currentMaxProduct*arr[i], currentMinProduct*arr[i])
        tempMin = Math.min(arr[i], currentMinProduct*arr[i], currentMaxProduct*arr[i])

        currentMaxProduct = tempMax
        currentMinProduct = tempMin

        result = Math.max(result, currentMaxProduct)
    }
    return result
};
