/* 

You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

 

Example 1:

Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
Example 2:

Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.
 

Constraints:

2 <= s.length <= 1000
s.length is even.
s consists of uppercase and lowercase letters.
*/

var halvesAreAlike = function (s) {
  let balance = 0;
  let mid = Math.floor(s.length / 2);
  const vowels = "aeiouAEIOU";

  for (i = 0; i < mid; i++) {
    if (vowels.includes(s[i])) {
      balance++;
    }
    if (vowels.includes(s[mid + i])) {
      balance--;
    }
  }
  return balance == 0;
};

console.log(halvesAreAlike("book"));

/* var halvesAreAlike = function (s) {
    let balance = 0;
    const vowels = "aeiouAEIOU";
    let i = 0;
    let j = s.length - 1;
  
    while (i < j) {
      if (vowels.includes(s[i])) {
        balance += 1;
      }
      if (vowels.includes(s[j])) {
        balance -= 1;
      }
      i++;
      j--;
    }
  
    return balance == 0;
  };
  
  console.log(halvesAreAlike("book")); */

/* var halvesAreAlike = function (s) {
  let balance = 0;
  const vowels = "aeiouAEIOU";

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      if (i >= s.length / 2) {
        balance += 1;
      } else {
        balance -= 1;
      }
    }
  }
  return balance == 0 ? true : false;
};

console.log(halvesAreAlike("book")); */
