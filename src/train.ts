/* 
O-TASK:

Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

*/


const calculateSumOfNumbers = (data: any): number => {
  let result = 0;
  for (const ele of data) { 
    if (typeof ele === "number") {
      result += ele
    }
  }

  return result
}

const result = calculateSumOfNumbers([10, "10", { son: 10 }, true, 35])

console.log(result);


/* Project Standards
 - Logging standards
 - Naming standards:
      function, method, variable => CAMEL
      class => PASCAL
      folder => KEBAB
      css => snake
  - ERROR handling
  [2,3,4,5,5,6,4,5]  

*/
