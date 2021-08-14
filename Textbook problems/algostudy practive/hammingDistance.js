//1.)default
function hammingDistance(string1="", string2=""){
    //2.)typeCheck
    if (typeof string1!=="string" || typeof string2!=="string" || string1===""||string2===""||string1.length!==string2.length){
        return undefined
    }

    let changeCount = 0

    for (let i=0;i<string1.length;i++){
        if (string1[i]!==string2[i]){
            changeCount++
        }
    }

    return changeCount
}

console.log(hammingDistance("lorry", "rorry"))