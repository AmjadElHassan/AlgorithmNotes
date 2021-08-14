// //1.) default
// function mostRecurring(string=""){
// //2.) data type matching
//     if (typeof string!=="string"||string===""){
//         return undefined
//     }
//     //3.) variable declarations

//     let letterMap = {}
//     const uniqueLetters = [...new Set(string)]


//     //4.) function logic
//     for (const letter of string){
//         if (letterMap.hasOwnProperty(letter)){
//             letterMap[letter]++
//         } else {
//             letterMap[letter] = 1
//         }
//     }

//     //5.) variable declaration

//     let currentMaxOccurence = 0
//     let currentAnswer

//     //6.) function logic
//     for (const letter in letterMap){
//         if (letterMap[letter]>currentMaxOccurence){
//             currentMaxOccurence = letterMap[letter]
//             currentAnswer = letter
//             console.log('okay')
//         } else if (letterMap[letter]===currentMaxOccurence){
//             currentAnswer+=` and ${letter}`
//         }
//     }

//     //7.)return


//     console.log(currentAnswer)

// }

// mostRecurring("harrrrrrrriet Tubman")


//SO THAT WAS THE CHUMP WAY. MUCH BETTER WAY TO TO DO BY CONVERTING THE OBJECT INTO WORKABLE ARRAYS

//1.) default
function mostRecurring(string=""){
    //2.) data-type matching
    if (typeof string!=="string"||string===""){
        return undefined
    }
    //3.) declare variables
    let letterMap = {}

    for (const letter of string){
        if (letterMap.hasOwnProperty(letter)){
            letterMap[letter]++
        } else {
            letterMap[letter] = 1
        }
    }

    let letterArray = Object.keys(letterMap)
    let occurenceArray = Object.values(letterMap)
    let maxValue = Math.max(...occurenceArray)
    let maxIndex = occurenceArray.indexOf(maxValue)
    return letterArray[maxIndex]
    
}

mostRecurring("harrrrrrrriet Tubman")