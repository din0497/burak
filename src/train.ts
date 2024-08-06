/* 
ZF-TASK:

Shunday function yozing, uni string parametri bolsin. String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'
*/
function capitalizeFirstChar(str: string) {
    if (str.length <= 2) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const capitalizeWords = (str: string) => {
    return str.split(' ')
        .map(
            ele => capitalizeFirstChar(ele))
        .join(' ')
}
console.log(capitalizeWords("name should be a string"));


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




