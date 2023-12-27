/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const str_ = str.toLowerCase();
  let str__ = "";
  for(i in str_){
    if(str_[i] >= 'a' && str_[i] <= 'z') str__ += str_[i];
  }
  const n = str__.length;
  for(let i = 0; i <= n/2; i ++){
    if(str__[i] != str__[n-1-i]) return false;
  }
  return true;
}

module.exports = isPalindrome;
