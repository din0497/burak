/* 
S-TASK:

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2
*/


const missingNumber = (arr: number[]): number[] => {

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const allNums = new Set<number>();
  for (let i = min; i <= max; i++) {
    allNums.add(i);
  }



  const nums = new Set<number>(arr);
  const result: number[] = [];

  allNums.forEach(num => {
    if (!nums.has(num)) {
      result.push(num);
    }
  });

  result.sort((a, b) => a - b);
  return result;
}

console.log(missingNumber([3, 0, 1]));






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
