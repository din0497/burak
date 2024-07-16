/* 
V-TASK:

Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}
*/

const countChars = (str: string): Record<string, number> => {
  const counts: Record<string, number> = {};
  for (const char of str) {
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
};

console.log(countChars("hello world"));



/* Project Standards
 - Logging standards
 - Naming standards:
      function, method, variable => CAMEL
      class => PASCAL
      folder => KEBAB
      css => snake
  - ERROR handling
  [2,3,4,5,5,6,4,5]  

  ---validations
        frontend
        backend
        database
*/
