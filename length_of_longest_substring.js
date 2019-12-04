/*
Given a string, find the length of the longest substring without repeating 
characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence 
             and not a substring.
*/

// lengthOfLongestSubstring('hello')
function lengthOfLongestSubstring(str) {
  // save substring sequences into a hash
  // {'h': 1, 'he': 2, 'hel': 3, 'l': 1, 'le': 2}
  let subs = {};
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      let sub = str.slice(start, i + 1);
      subs[sub] = sub.length;
      start = i - 1;
    } else {
      start = i;
    }
  }
  console.log(subs);
  let max = 0;
  for (let key in subs) {
    if(subs[key] > max) {
      max = subs[key];
    }
  }
  return max;
}

console.log(lengthOfLongestSubstring('hello'));