//we will be given an array
//we must return an array with all the falsy items removed

//note: what is afalsy value?
//an object that is examined as false when evaluated as a boolean:
//falsy values include: false, null, undefined, 0, NaN, and ""

//1.) default
function bouncify(arr=[]){
    //2.) typecheck
    if (!Array.isArray(arr)||arr===[]){
        return undefined
    }
    //3.) declaration

    // for (let i=0;i<arr.length;i++){
    //     if (arr[i]){
    //         console.log(arr[i])
    //     }
    //     // if (!!arr[i]===false){
    //     //     console.log(arr[i])
    //     //     arr.splice(i,1)
    //     // }
    // }

    return arr.filter(value=>value)
}
console.log(bouncify([0,3,5,2,4,null,21,2,3,1,"", undefined, 34]))