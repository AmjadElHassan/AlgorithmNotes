//params: we will be given an array of integers sorted form least to greatest
//return: remove duplicates
//restrictions: cannot create additional arrays. only modify input-array



function removeDupes(arr=[]){
    if (!Array.isArray(arr)){
        return undefined
    }
    return [...new Set(arr)]
}

console.log(removeDupes([1,2,3,3,4,5,6,7,7,8]))