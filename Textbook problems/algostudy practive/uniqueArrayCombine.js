//we will be given 2 arrays, we must combine them into 1 array, and return the unique values

function combine(arr1=[],arr2=[]){
    if (!Array.isArray(arr1)||!Array.isArray(arr2)){
        return undefined
    }

    return [...new Set([...arr1, ...arr2])]
}

console.log(combine([3,5,2,4,23,4,243,23,4,34,34,34,3,4,34], ["d","t","s","s","s","f","l","l","j","r","l","3"]))