# Java

## Declaring Variables

- `String` - stores text, such as `"Hello"`. String values are surrounded by **double quotes**
- `char` - stores **single String character**, such as `'a'` or `'B'`. Char values are surrounded by **single quotes**
- `int` - stores **integers** (whole numbers), without decimals, such as 123 or -123
- `float` - stores **floating point numbers**, with decimals, such as 19.99 or -19.99
- `boolean` - stores values with two states: `true` or `false`

```java
class Solution {
    public int myClassName(int[] arr) {

        String message = "Hello Flavio!"; // double quotes
        char arg1 = 'a';                  // single character, single quotes

        int result = 0;
        float price = 110.59f;
        boolean isValid = true;

        System.out.println(message);      // equivalent to console.log(message) in JavaScript
        System.out.println(arg1);
        System.out.println(isValid);

        if (result <= 0) {
            result++;
        }

        while (result < price) {
            ++result;
        }

    return result;
  }
}
```

## Classes

```java
/**
 * @name Trapping Rain Water
 * @url https://LeetCode.com
 * @description Flavio's preferred solution
 * @param {int[]} Array of integers
 * @returns {int} Integer representing the number of rain water traps possible
 * */
class Solution {
    public int trap(int[] height) {
        int result = 0;
        int start = 0;
        int end = height.length - 1;
        while (start < end) {
            if (height[start] <= height[end]) {
                // start left, trap right
                int current = height[start];
                while (height[++start] < current) {
                    result += current - height[start]; // A, B
                }
            } else {
                // start right, trap left
                int current = height[end];
                while(height[--end] < current) {
                    result += current - height[end]; // C, D
                }
            }
        }
        return result;
    }
}
```
