/*
 *
 *  Implement an algorithm to determine if a string has all unique characters. What if you can not use additional data structures?
 *
 */
function checkDupesArr(str) {

    var char_arr = new Array(str.length);

    for (var i = 0; i < str.length; i++) 
    {
        if (char_arr[str.charCodeAt(i)]) {
            return false;
        }
        char_arr[str.charCodeAt(i)] = true;
    }
    return true;
}

console.log(checkDupesArr("zyxw")); // True
console.log(checkDupesArr("abcced")); // False