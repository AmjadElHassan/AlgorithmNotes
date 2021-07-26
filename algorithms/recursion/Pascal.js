/**
 * function getPascalRow(): 
 * receives a number and returns each number in pascals triangle
 * @param {Number} num
 * @returns {Array}
 */
// function getPascalRow(num){
//     if 
// }

function pascalsTriangle(n) {
    var pascal = [];
    var idx = 0;

    for (var i = 0; i < n; i++) {//looping through each number until n. this iteration represents each row that will be made
        idx = pascal.length - i; //idx determines the current index of the final array is
        for (var j = 0; j < i + 1; j++) {//now for each row, we determine each digit. length of each row is equal to the index of the row+1
            if (j === 0 || j === i) {//push 1 if the current digit is the first or last in the row
                pascal.push(1);
            } else {
                pascal.push(pascal[idx + j] + pascal[idx + j - 1]);//we will refer to values in the previous row to calculate the value for the current positon
                //the value of each number that is not wrapping the row are determined by the sum of the 2 values it is in-between in the previous row
            }
        }
    }

    return pascal;
}


/**
 * function returnPascalRows(num): 
 * We want to provide a number of rows, and then have the function return each row as an array
 * @param {Number} number
 * @returns {Array}
 * 
 * @goals 
 * - return n number of rows of pascal's triangle. 
 * > each row an array, all contained within a larger array
 * 
 */
function returnPascalRows(num) {
    let rowArray, rowLength, result = []

    for (let currentRow = 0; currentRow < num; currentRow++) {//this will represent each row to produce
        rowArray = []
        rowLength = currentRow + 1//how many for a particular row
        for (let j = 0; j < rowLength; j++) {
            if (j === 0 || j === rowLength - 1) {
                rowArray.push(1)
            } else {
                rowArray.push(//we will push the sum of the values at the current index and previous index of the previous row. so if we are at row 5, index 3, we will determine that value by adding the values at index 2 and index 3 of row 4.
                    Number(result[currentRow - 1][j - 1] + result[currentRow - 1][j])
                )
            }
        }
        result.push(rowArray)
    }


    return result
}
console.log(returnPascalRows(10))