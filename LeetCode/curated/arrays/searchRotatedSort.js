//params: we will be given an array that is rotated, and a target value
//return: return index of match in O(log(n)) time


function searchRotate(arr, target) {


    let l = 0
    let r = arr.length - 1

    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        
        if (arr[m] === target) {
            return m
        }

        if (arr[m]>=arr[l]){
            if (arr[l]<=target && target<=arr[m]){
                r = m-1
            } else {
                l = m + 1
            }
        } else {
            if (arr[m]<=target && target<=arr[r]){
                l = m+1
            } else {
                r = m-1
            }

        }
    }
    return -1
}

console.log(searchRotate([4,5,6,7,0,1,2],0))