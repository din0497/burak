/* 
X-TASK:

 Shunday function yozing, uni object va string parapetrlari bolsin. Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object bolsa ham sanasin)
 MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

*/
const countOccurrences = (obj: Record<string, any>, str: string): number => {
  let keys = 0
  const stack = [obj];

  while (stack.length) {
    const popedObj = stack.pop()
    for (let key in popedObj) {
      if (key === str) keys++
      if (typeof popedObj[key] === "object" && popedObj[key] !== null) {
        stack.push(popedObj[key])
      }
    }
  }
  return keys
}


console.log(countOccurrences({ model: 'Bugatti', steer: { model: 'HANKOOK', size: 30, type: {model: '34'}} }, 'model'));



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
