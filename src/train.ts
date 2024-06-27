/* 
N-TASK: 

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;


*/

const palindromCheck = (str: string): boolean => {

  let i = 0;
  let j = str.length - 1;

  while (i <= j) {
  
    if (str[i] != str[j]) {
      return false
    }
    i++
    j--
  }

  return true
}



const result = palindromCheck('dadad')
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
