//1.) default

function capitalize(string=""){
//2.) type check
    if (typeof string!=="string"||string===""){
        return undefined
    }
    //3.) necessary variable declarations
    let words = string.split(" ").map(word=> word[0].toUpperCase() + word.slice(1)).join(" ")
    return words
}

//or


//1.) default
function capitalize1(string=""){
    //2.) typecheck
    if (typeof string!=="string"||string===""){
        return undefined
    }
    //3.) necessary variables
    return string.split(" ").map(word=>word.replace(word[0], word[0].toUpperCase())).join(" ")
}

console.log(capitalize1("rex is a smexy cursty cuff"))