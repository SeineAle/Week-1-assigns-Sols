/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length) return false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const map_str = {};
  for(let i = 0; i < str2.length; i ++){
    if(str1[i]!=' ') map_str[str1[i]] = map_str[str1[i]] ? map_str[str1[i]] + 1 : 1;
    if(str2[i]!=' ') map_str[str2[i]] = map_str[str2[i]] ? map_str[str2[i]] - 1 : -1;
  }
  for(key in map_str){
    if(map_str[key] != 0) return false;
  }
  return true;
}

module.exports = isAnagram;
