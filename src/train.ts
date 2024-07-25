/* 
Z-TASK:

Shunday function yozing, uni sonlardan tashkil topgan array qabul qilsin. Function arraydagi juft sonlarni yigindisini qaytarsin
MASALAN: sumEvens([1,2,3]) return 2

*/

const sumEvens = (arr: number[]): number => {
  let sum = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      sum += num
    }
  }


  return sum
}

console.log(sumEvens([1, 2, 3, 4, 5, 6, 7, 8, 10]));



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




