let primeGood = (num)=>{
    let answer = []
    while (num%2==0){
        num=num/2
        answer.push(2)
    }
    for (let i=3; i*i<=num;i+=2){
        while (num%i==0){
            answer.push(i)
            num=num/i
        }
    }
    if (num>2) answer.push(num)
    return answer
}