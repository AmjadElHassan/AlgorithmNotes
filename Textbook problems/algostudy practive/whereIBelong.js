//given an array of numbers, and a number, determine the index of where the number should be inserted into the provided array
//return the index where the number should be

//1.) default

function whereIbelong(arr=[],number=0){
    //2.) typecheck
    if (!Array.isArray(arr)||arr.some(item=>typeof item!=="number")||typeof number !== "number"){
        return "input error"
    }
    //3.) variable declaration
    //4.)functionlogic
    arr.push(number)
    arr.sort((a,b)=>a-b)
    return console.log(arr.indexOf(number))
}

whereIbelong([8,3,2,3,5,6,75,23,4,6,24,133,41], 13)
