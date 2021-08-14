//1.)default

function longestWord(sentence=""){
    //2.) typecheck
    if (typeof sentence!=="string"||sentence===""){
        return undefined
    }

    if (!sentence.includes(" ")){ return sentence}

    let sortedSentenceByLength = sentence.split(" ").sort((a,b)=>b.length-a.length)
    return sortedSentenceByLength[0]
}

console.log(longestWord("Harriet Tubman I mean honestly I really don't know but I mean whatever I suppose"))