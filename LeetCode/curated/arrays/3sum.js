
var threeSum = function (arr) {
    let results = []

    //if less than 3 items, no point
    if (arr.length < 3) return arr
    arr = arr.sort()
    target = 0
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] > target) break
        if (i > 0 && arr[i - 1] === arr[i]) continue
        let j = i + 1
        let k = arr.length - 1
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k]
            if (sum === target) {
                results.push([arr[i], arr[j], arr[k]])
                while (arr[j] === arr[j + 1]) j++
                while (arr[k] === [k - 1]) k--
                j++
                k--
            } else if (sum < target) {
                j++
            } else if (sum > target) {
                k--
            }
        }
    }
    return results
};


function threeSum(arr) {
    let results = []
    if (arr.length<3) return results
    arr = arr.sort((a, b) => (a - b))
    let target = 0
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] > target) break
        if (i > 0 && arr[i] === arr[i - 1]) continue
        let j = i + 1
        let k = arr.length - 1
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k]
            if (sum === target) {
                results.push([arr[i], arr[j], arr[k]])
                while (arr[j] === arr[j + 1]) j++
                while (arr[k] === arr[k - 1]) k--
                j++
                k--
            } else if (sum < target) {
                j++
            } else {
                k--
            }
        }
    }
    return results
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]))