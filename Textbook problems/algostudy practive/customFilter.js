//given an array, and a callback function,
//return an array filtered by the callback function

//1.) default

function customFilter(arr=[], callback=function(){return}){
    //2) type-check
    if (!Array.isArray(arr)||arr===[]||typeof callback!=="function"){
        return "invalid params"
    }

    //3.) variable declaration
    for (let i = 0; i<arr.length;i++){
        if (!callback(arr[i])){
            arr.splice(i,1)
            i--
        }
    }

    return arr
}

function numberCheck(num){
    return typeof num==="number"
}

console.log(customFilter([3,5,2,54,2,2,"42",5263,6741,"dlf",3465,23541,46,"lkdf" , 34, "poop", "hi"], numberCheck))
"lkadfjal"