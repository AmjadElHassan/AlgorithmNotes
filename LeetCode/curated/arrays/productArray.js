//params: we are given an array of integers
//return: an array such that the value at each index, i, is the product of all values of the original array except for i

function productArray(arr){
    let totalProduct = arr.reduce((a,b)=>{
        return a*=b
    },1)
    return arr.map((x,index)=>{
        if (x===0){
            let temp = [...arr]
            temp.splice(index,1)
            return temp.reduce((a,b)=>{return a*=b},1)
            
        }
        return totalProduct/x})
};
console.log(productArray([-1,1,0,-3,3]))