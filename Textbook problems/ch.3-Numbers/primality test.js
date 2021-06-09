//basic O(n) test
// let primeBad = (num) => {
//     if (num <= 1) {
//         return false
//     }
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             return false
//         }
//         return true
//     }
// }

// O(sqrt(n))
// after the number 3, 
// primality follows the formula: 6k+/-1
//also important to know, that if the square of a prime number is not prime, then the number is not prime
// let primeGood = (num) => {
//     if (num <= 1) {
//         return false
//     }
//     if (num <= 3) {
//         return true
//     }
//     if (num % 2 == 0 || num % 3 == 0) {
//         return false
//     }
//     for (let i = 5; i * i <= n; i += 6) {
//         if (n % i == 0 || n % (i + 2) == 0) {
//             return false
//         }
//     }
//     return true
// }

// let allprime = (num) => {
//     let total = []
//     if (num <= 1) {
//         return false
//     }
//     if (num <= 3) {
//         total.push(2, 3)
//     }
//     for (let i = 5; i <= num; i += 6) {
//         total.push(i, i + 2)
//     }
//     return total
// }

// let primeGood = (num) =>{
//     if (num<=1){
//         return false
//     }
//     if (num<=3){
//         return true
//     }
//     if (num%2==0||num%3==0){
//         return false
//     }
//     for (let i=5;i*i<=n;i+=6){
//         if (num%i==0||num%(i+2)==0){
//             return false
//         }
//     }
//     return true
// }

let primeGood = (num)=>{
    if (num<=1){
        return false
    }
    if (num<=3){
        return true
    }
    if (num%2===0||num%3===0){
        return false
    }
    for (let i = 5; i*i<=num;i+=6){
        if (num%i==0||num%(i+2)==0){
            return false
        }
    }
    return true
}

let allPrime = (num) =>{
    let original = [2,3]
    for (let i = 5;i<=num;i+=6){
        original.push(i,i+2)
    }
    return original
}


// let isPrime = (num) =>{
//     if (num<=1){
//         return false
//     }
//     if (num<=3){
//         return true
//     }
//     if (num%2==0||num%3==0){
//         return false
//     }

//     for (let i = 5; i<=num;i+=6){
//         if (num%i==0||num%(i+2)==0){
//             return false
//         }
//     }
//     return true
// }

// let allPrimesCheck = (num) =>{
//     if (num<=1){
//         return false
//     }
//     if (num>=2){
//         console.log(2)
//         if (num>=3){
//             console.log(3)
//             for (let i = 5; i<=num;i+=6){
//                 console.log(i,i+2)
//             }
//         }
//     }
// }