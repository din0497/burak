/* 
H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"



*/

const getPositive = (arr: number[]): string => {
  return arr.filter(ele => ele >= 0).join('')
}

const result = getPositive([1, -4, 2])

console.log(result);

