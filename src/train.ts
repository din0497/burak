/* 
L-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

*/
const reverseSentence = (str: string): string => {
  const arr = str.split(' ')
  
 

  return  arr.map(ele => ele.split('').reverse().join('')).join(' ')
}


const result = reverseSentence("we like coding")
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