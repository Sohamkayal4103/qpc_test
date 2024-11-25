# Search Insert Position

This ```index.js``` contains two JavaScript functions to find the index of a target value in a sorted array or determine the position where it should be inserted if not found.

**Note**: I have assumed that multiple elements with the same value can occur in the array, and the functions return the index of the **first occurrence**.

## Approaches

### 1. Brute-force Approach

- **Method**: Iterate through the array from start to end.
- **Logic**: For each element, check if it is greater than or equal to the target.
- **Time Complexity**: O(n), where n is the number of elements in the array.
- **Usage**: Simple to implement but not efficient for large arrays.

### 2. Optimized Approach (Binary Search)

- **Method**: Utilize binary search to find the correct insertion index.
- **Logic**:
  - Initialize two pointers, `left` and `right`.
  - While `left` is less than `right`, calculate the mid-point.
  - Adjust pointers based on comparison with the target.
  - Handles duplicates correctly by finding the leftmost insertion point.
- **Time Complexity**: O(log n), significantly faster for large arrays.
- **Usage**: Preferred for efficiency, especially with large datasets.
