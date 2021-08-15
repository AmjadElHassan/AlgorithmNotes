//receiving a string representing a sentence, a string representing a word to replace, and a string representing the word to replace it with
//return a string of the original sentence with th replacenebt nade

//1.)default
function searchReplace(sentence="",replace="",replaceWith=""){
    //2.) typecheck
    if (typeof sentence!=="string"||typeof replace!=="string"||typeof replaceWith!=="string"||sentence===""||replace===""||replaceWith===""){
        return undefined
    }

    //3.)variable declaration
    //4.) function logic
    //note: the second parameter of constructed Regex refers to regular expression flags. so in this case it is g for global and i for case-insensitive
    if (sentence.trim().toLowerCase().includes(replace.trim().toLowerCase())){
        let regex = new RegExp(replace, "gi")
        return sentence.replace(regex, replaceWith)
    } else {
        return "no match found"
    }
}

console.log(searchReplace("this is a test sentence to see if test this thing works", "test", "crest"))