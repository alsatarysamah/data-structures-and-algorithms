function twoSum(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let rem1 = target - nums[i];

    if (obj[rem1] !== undefined) {
      return [obj[rem1], i];
    } else obj[nums[i]] = i;
  }
}
////////////////////4,6,5,3
console.log(twoSum([3, 1, 2, 4], 7));
