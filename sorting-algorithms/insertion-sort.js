// time complexity (n ^ 2)

const array = [3, 1, 2, 9, 7, 6, 4, 2, 3];

function selectionSort(nums) {
  for (let step = 1; step < nums.length; step++) {
    key = nums[step];
    j = step - 1;

    while (j >= 0 && key < nums[j]) {
      nums[j + 1] = nums[j];
      j = j - 1;
    }

    nums[j + 1] = key;
  }
  return nums;
}
