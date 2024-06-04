/* 
G-TASK: 

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.


*/

const getHighestIndex = (arr: number[]): number => {
  const maxInt = Math.max(...arr);
  return arr.indexOf(maxInt);
};

const result = getHighestIndex([5, 21, 12, 21, 35]);

console.log(result);
