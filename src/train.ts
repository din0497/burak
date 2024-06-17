/* 
J-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

*/

const findLongestWord = (text: string): string => {
  const arr: string[] = text.split(" ");
  const data = {
    maxLength: 0,
    longest: ''
  }
  for (const ele of arr) {
    if (ele.length > data.maxLength) {
      data.maxLength = ele.length;
      data.longest = ele
    }
  }
  return data.longest

}

const result = findLongestWord("I come from Uzbekistan")
console.log(result);



/* Project Standards
 - Logging standards
 - Naming standards:
      function, method, variable => CAMEL
      class => PASCAL
      folder => KEBAB
      css => snake
  - ERROR handling
  [2,3,4,5,5,6,4,5]  

*/