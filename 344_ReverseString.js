/**
 * Write a function that takes a string as input and returns the string reversed.
 * Example:
 * Given s = "hello", return "olleh".
 * Runtime: 209 ms
 * 
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var n = s.length;
    var newStr = '';
    while(n>0) {
        n--;
        newStr += s.charAt(n);
    }
    
    return newStr;
};
