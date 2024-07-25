// object destructuring

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

let [i, j] = [0, nums.length - 1];

while(i<j){
    [nums[i], nums[j]]=[nums[j], nums[i]]
    i++;
    j--
    console.log(nums);
}

