//receive string
//turn it into pig latin
//1.) default
function pigLatify(string=""){
    //2.) type check 
    if (typeof string!=="string"||string===""){
        return undefined
    }
    //3.) variable declaration
    string = string.trim().toLowerCase().replace(/[^a-z\d]/g, "")
    let firstLetter = string[0]
    let wordBody = string.slice(1)
    wordBody[0].toUpperCase()
    //4.) function logic
    return wordBody+firstLetter+"ay"
}

console.log(pigLatify("harry"))