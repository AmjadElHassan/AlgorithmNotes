//provided 2 strings, determine if the strings are anagrams of each other

//1.) default
function anagramCheck(string1 = "", string2 = "") {
    //2.) typecheck
    if (typeof string1 !== "string" || typeof string2 !== "string" || string1 === "" || string2 === "") {
        return undefined
    }
    string1 = string1.trim().split("").sort().join("")
    string2 = string2.trim().split("").sort().join("")
    return string1===string2
    let characterMap = {}
    let characterMap2 = {}

    if (string1.length !== string2.length) {
        return false
    }

    for (letter of string1) {
        if (characterMap.hasOwnProperty(letter)) {
            characterMap[letter]++
        } else {
            characterMap[letter] = 0
        }
    }

    for (letter of string2) {
        if (characterMap.hasOwnProperty[letter]) {
        } else {
            return false
        }
    }
    return characterMap
}

console.log(anagramCheck("stilent", "listten"))