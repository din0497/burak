/* 
Q-TASK:

Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false
*/
type ob = { [key: string]: any };

const hasProperty = (obj: ob, str: string): boolean => {
  for (const key in obj) {
    if (key === str) {
      return true
    }
  }
  return false
}

console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));



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
