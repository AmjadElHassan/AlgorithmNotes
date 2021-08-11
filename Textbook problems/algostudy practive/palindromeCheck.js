//function will receive a string as an argument
//will return a boolean representing whther the string is a palindrome or not
//example: "harry" => False, "racecar" => True

//1.)defaulting arguments. set equal with =
function palindromeCheck(string=""){

    //2.) typechecking + input-error handling
    if (typeof string!=="string" || string===""){
        return false
    }

    //3.) declare any needed scope-level variables
    //4.) function logic
    //5.) return

    return (string === string.trim().split("").reverse().join(""))
}

if (palindromeCheck("434")){console.log('yup')}