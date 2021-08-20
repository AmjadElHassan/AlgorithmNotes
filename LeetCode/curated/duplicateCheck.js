//params: we will be given an array
//return: we will return a boolean representing if duplicate integer values exist in the array

function dupeCheck(arr=[]){
    return [...new Set(arr)].length!==arr.length
}


console.log(dupeCheck([3]))