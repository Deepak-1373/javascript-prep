// time complexity O(n ^ 2)

const array = [3, 1, 2, 9, 7, 6, 4, 2, 3];

function bubbleSort(nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }

  return nums;
}
