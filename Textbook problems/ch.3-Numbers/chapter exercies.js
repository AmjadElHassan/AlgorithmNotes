//Question 1
//given three numbers x,y, and p. compute (x^y)%p



//simple solution
let simple = (x, y, p) => {
    Math.pow(x, y) % p
}
//this will not work to calculate large numbers or large exponents
//we can however calculate the modulus in a less proccess-intensive way
let advanced = (x, y, p) => {
    if (p == 1) {
        return 0
    }
    let value = 1
    for (let i = 0; i < y; i++) {
        let value = (value * x) % p
    }
    //this is using a property that allows us to solve this problem, by carrying each modulus through each exponent
    //that we have to account for. by carrying the modulus through each iteration, it allows our 32-bit floating system
    //break down a calculation that can only be contained by a 256bit system
    return value
}


let advance = (x, y, p) => {
    if (p == 1) {
        return 0
    }
    let value = 1
    for (let i = 0; i < y; i++) {
        value = value * x % p
    }
    return value
}

//Time Complexity O(n)

// let advance = (x, y, p) => {
//     if (p == 1) {
//         return 0
//     }

//     let value = 0

//     for (let i = 0; i < y; i++) {
//         value = (value * y) % p
//     }

//     return value
// }

//Question 2:print all prime numebrs less than n

// let allPrimes = (num) => {
//     if (num <= 1) {
//         console.log(0)
//     } else {
//         console.log(2)
//         if (num >= 3) {
//             console.log(3)
//             for (let i = 5; i < num; i += 6) {
//                 console.log(i)
//                 if ((i + 2) < num) console.log(i + 2)
//             }
//         }
//     }

// }

//question 3: check for a full set of prime numbers
//a number is ugly if its only prime factors are 2,3, or, 5. return all ugly numbers that are less than an integer n

let uglyArrayFind = (num)=>{
    let answer = []
    let uglyDivisors = [2,3,5]
    for (let i = 1; i<=num;i++){
        if (isUgly(i,uglyDivisors)){
            answer.push(i)
        }
    }
    return answer
}

//timeComplexity = O(n*log2(n)) n because we are iterating in 1 loop

function isUgly(number,divs){
    divs.forEach(divisor=>{
        // console.log(`this is the ugly check for number:${divisor}. I am evaluating ${number}`)
        number = maxDivide(number,divisor)
    })
    return number===1
}
//timeComplexity = O(n*log2(n)). without the divisor functionality i added, it would jus tbe log2(n), because it'd depend on maxDivide

function maxDivide(number, divisor){
    while (number%divisor==0){
        number/=divisor
    }
    return number
}
//time Complexity is log2(n). loop is determined by constant division.
//to be O(sqrt(n)), we need constant addition or subtraction that ramps up
//ex for (let i=0;i<n;i++){
    //n+=i
//}