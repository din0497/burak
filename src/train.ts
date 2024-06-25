/* 
M-TASK: 

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];


*/
/* const getSquareNumbers = (arr: number[]): object[] => {
  return arr.map(ele => {
    return { number: ele, square: ele * ele }
  });
}


const result = getSquareNumbers([1, 2, 3])
console.log(result); */



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

interface MemberInput {
  memberNick: string;
  memberPhone: string;
  memberPassword:string;
  memberImage:string;
  age: number;
  memberType?: string;

}


const body = {
  memberNick: "max",
  memberPhone: '010',
  memberPassword:'skjdfjsldf', 
  memberImage:"uplods/",
  age: 15,
}

const newMember: MemberInput = body;

newMember.memberType = 'Restaurant'

console.log(newMember);
