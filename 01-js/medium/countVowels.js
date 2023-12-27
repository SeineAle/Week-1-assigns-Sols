/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let cnt = 0;
  const str_ = str.toLowerCase();
  for(i in str_){
    if(str_[i] == 'a' || str_[i] == 'e' || str_[i] == 'i' || str_[i] == 'o' || str_[i] == 'u'){
      cnt ++;
    } 
  }
  return cnt;
    // Your code here
}

module.exports = countVowels;