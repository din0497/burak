/* 
ZH-TASK:

Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin. 
MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]
*/
const findDisappearedNumbers = (arr: number[]) => {
    let result = []
    for (let i = 1; i < Math.max(...arr); i++) {
        if (!arr.includes(i)) {

            result.push(i)
        }
    }
    return result
}

console.log(findDisappearedNumbers([ 1, 3, 4, 7]));



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




