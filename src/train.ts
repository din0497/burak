/* 
  I-TASK:

Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

*/

const majorityElement = (arr: number[]): string => {
  const uniqueNums = new Set(arr);
  const collection: object[] = [];
  let maxOccurance: number = 0;
  let index: number = 0;
  for (const num of uniqueNums) {
    const occurance: number = arr.filter((ele) => ele == num).length;
    collection.push({ [num]: occurance });
  };

  for (let i = 0; i < collection.length; i++) {
    if (Object.values(collection[i])[0] > maxOccurance) {
      maxOccurance = Object.values(collection[i])[0];
      index = i;
    }
  }

  return Object.keys(collection[index])[0];
};

const result = majorityElement([1, 2, 3, 4, 5, 4, 3, 4]);

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