/* 
U-TASK:

Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;
*/
const sumOdds = (num: number): number => {
  let i = 0;
  let count = 0;
  while (i < num) {
    if (i % 2 !== 0) {
      count++
    }
    i++
  }
  return count
}


console.log(sumOdds(11));




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
