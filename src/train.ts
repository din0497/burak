/* 
K-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;


*/
const countVowels = (input: string): any => {
  const vowels: string[] | null = input.match(/[aeiouAEIOU]/g);

  return vowels !== null ? vowels.length : "There is no any vowels!"
}


const result = countVowels("string")
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