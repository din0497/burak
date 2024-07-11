/* 
T-TASK:

Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]
*/


const mergeSortedArrays = (arr1: number[], arr2: number[]): number[] => {

  return [...arr1, ...arr2].sort((a, b) => a - b)
}


console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));




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
