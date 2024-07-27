/* 
ZA-TASK:

Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin. 
MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

*/
interface T {
  age: number
}
const sortAge = (arr: T[]): T[] => {

  return arr.sort((a, b) => a.age - b.age)
}


console.log(sortAge([{ age: 23 }, { age: 21 }, { age: 13 }]));


/* 
ZB-TASK:

Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
MASALAN: randomBetween(30, 50) return 45
*/

const randomBetween = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(randomBetween(20, 50));


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




