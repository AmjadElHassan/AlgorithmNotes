//1.) default input
function vowelCount(string=""){
//2.) data type-matching, error handling
    if (typeof string!=="string"||string===""){
        return undefined
    }
    //3.) variable declaration
    //4.)function logic
    //5.) return

    return string.match(/[aeiou]/g).length
}



console.log(vowelCount("reggie Watts"))