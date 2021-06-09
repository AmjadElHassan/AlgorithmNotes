//.charAt(index): returns the chatacter at index
'dog'.charAt(1)//returns o

//.substring(startIndex,endIndex): returns the characters between these 2 index points
//if endIndex is not included, it will return all characters from startIndex till end.
'Youtube'.substring(1)//returns 'outube'

//.indexOf(stringValue,[startingIndex]): returns index positions of matching string. will return -1 if nothing found
//how to check if a string value exists in a larger string?
let stringSearch = (string, stringSearch) =>{
    return string.indexOf(stringSearch) != -1
}

//.startsWith() and .endsWith() checks if a string starts or ends witha  particular string
'red dragon'.startsWith('red')//true
'red dragon'.startsWith('dragon')//false

//string Decomposition: .split(seperator) seperates all substrings seperated by the seperator into an array

//string replace: .replace('stringToReplace', replacement): returns a string with a replacement
"wizard of oz".replace('wizard','witch')//returns witch of oz

//RegEx
//the Two RegExp functions:
// .search(): tests for matches in a string, returns index of match
// .match(): tests for matches. returns all matches

//the 2 regex functions, a plain string can accept:
//.exec(): tests for match. returns the first match
//.test(): boolean test for match in string

//regex symbol rules

//^ indicates start of a string
// \d: any digit
// [abc] matches for any character within the bracket
//[^abc] matches for any character not within the bracket
//[0-9] finds any digit between the hypens
//[|] or operator

//optional match Tags:
// /i: case-insensitive matching
// /g: global match (don't stop at first match)
// /m: multiline matching
