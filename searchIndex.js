// Brute-force approach : O(n)time, O(1) space
function searchInsertBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}

// Optimized approach using binary search : O(log n) time, O(1) space
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid; // Move right to mid to continue searching left side
    }
  }

  return left;
}

// Test cases
const testCases = [
  { nums: [1, 3, 5, 6], target: 5, expected: 2 },
  { nums: [1, 3, 5, 6], target: 2, expected: 1 },
  { nums: [1, 3, 5, 6], target: 7, expected: 4 },
  { nums: [1, 3, 5, 6], target: 0, expected: 0 },
  { nums: [1], target: 0, expected: 0 },
  { nums: [1], target: 1, expected: 0 },
  { nums: [1], target: 2, expected: 1 },
  { nums: [], target: 5, expected: 0 },
  { nums: [1, 3, 3, 3, 5, 6], target: 3, expected: 1 },
];

function testSearchInsert(func) {
  testCases.forEach(({ nums, target, expected }, index) => {
    const result = func(nums, target);
    const passed = result === expected;
    console.log(`Test case ${index + 1}: ${passed ? "Passed" : "Failed"}`);
    if (!passed) {
      console.log(`  Input: nums = [${nums}], target = ${target}`);
      console.log(`  Expected: ${expected}, Got: ${result}`);
    }
  });
}

// Run tests for brute-force approach
console.log("Testing brute-force approach:");
testSearchInsert(searchInsertBrute);

// Run tests for optimized approach
console.log("\nTesting optimized approach:");
testSearchInsert(searchInsert);
