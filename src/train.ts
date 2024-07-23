/* 
Y-TASK:

 Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
 MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

*/
const findIntersection = (arr1: number[], arr2: number[]): number[] => {
  const result = []

  for (const num of arr1) {
    if (arr2.includes(num)) {
      result.push(num)
    }
  }
  return result
}


console.log(findIntersection([1, 2, 3, 0], [3, 2, 0]));



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




