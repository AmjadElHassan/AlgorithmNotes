function longest(s){
    //keep track of index of previous iterations of a letter 
    let map = {}    
    //keep track of our index to compare
    let l = 0

    return s.split("").reduce((accumulator,letter,index)=>{
        //if the current letter appeared previously it will be stored in map. so we should change our start point
        //to 1 index after its last appearance
        l = arr[letter]>=l ? arr[letter]+1: l
        //next, update our map of that latter to this most latest instance
        map[letter] = index
        return Math.max(accumulator, index-l+1)
    },0)
}