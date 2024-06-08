/* 

H2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"





*/

const getDigits = (str: string): string => {
  return str.split('')
    .filter(ele => !isNaN(Number(ele)))
    .join('')

}

const result = getDigits('m14i1t')

console.log(result);

