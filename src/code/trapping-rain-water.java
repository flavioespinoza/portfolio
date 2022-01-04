/**
 * @description Preferred solution
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
