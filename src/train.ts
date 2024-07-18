/* 
W-TASK:

Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

*/
const chunkArray = (arr: number[], num: number): number[][] => {
  let [result, temp, count]: any = [[], [], 0]

  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i])
    count++;

    if (count === num || i === arr.length - 1) {
      result.push(temp);
      temp = [];
      count = 0;
    }
  }

  return result
}


console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));



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
