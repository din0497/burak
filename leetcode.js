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

/* var halvesAreAlike = function (s) {
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

console.log(halvesAreAlike("book")); */

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

//=======================================

/* 

You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

 

Example 1:

Input: num = 9669
Output: 9969
Explanation: 
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.
Example 2:

Input: num = 9996
Output: 9999
Explanation: Changing the last digit 6 to 9 results in the maximum number.
Example 3:

Input: num = 9999
Output: 9999
Explanation: It is better not to apply any change.
 

Constraints:

1 <= num <= 104
num consists of only 6 and 9 digits.
*/

/* var maximum69Number = function (number) {
  let digits = [];

  while (number != 0) {
    digits.unshift(number % 10);
    number = Math.floor(number / 10);
  }
  let ans = 0;
  let is6 = false;
  for (i = 0; i < digits.length; i++) {
    let digit = digits[i];
    if (digit == 6 && !is6) {
      digit = 9;
      is6 = true;
    }

    ans += digit * 10 ** (digits.length - 1 - i);
  }
  return ans;
};

console.log(maximum69Number(99966)); */

/* 
900 => 9 ** digits.length - 1 - digits[i];
90 => 9 ** digits.length - 1 
*/

/* var strStr = function (haystack, needle) {
  if (!needle.length) return 0;

  // Loop through the haystack's letters
  for (let i = 0; i <= haystack.length - needle.length; i++) {
      // Check if the current letter matches the start of the needle
      if (haystack[i] === needle[0]) {
          // Loop through the needle
          for (let j = 0; ; j++) {
              // Reached the end of the needle (and thus fully found it at i)
              if (j == needle.length) {
                  return i;
              }
              // Letters not matched (needle not found at i)
              else if (haystack[i + j] !== needle[j]) {
                  break;
              }
          }
      }
  }
  return -1;
};

console.log(strStr('sadbutsad', 'sad')); */

const moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
      continue;
    }
    console.log("iterations", i, "count:", count);

    [nums[i- count], nums[i ]] = [nums[i], nums[i - count]];
  }
  return nums;
};

console.log(moveZeroes([1,3,0,4,0,2]));
