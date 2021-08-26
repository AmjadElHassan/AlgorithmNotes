//param: given an array of integers and a target integer
//return: the minimum value of the rotated array

function minimumRotate(arr){
    let l = 0
    let r = arr.length-1

    while (l<r){
        let m = Math.floor((l+r)/2)

        if (arr[m]<arr[r]){
            r=m
        } else {
            l = m+1
        }
    }
    return arr[l]
}

console.log(minimumRotate([8,9,10,11,12,13,4,5,6,7]))