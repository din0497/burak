/* 
J-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

*/

const findLongestWord = (text: string): string => {
  const arr: string[] = text.split(" ").sort((a,b)=> {
    return b.length - a.length 
  });
 return arr[0]
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