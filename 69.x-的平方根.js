/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) {
        return x
    }
    let left = 2, right = Math.floor(x / 2)
    while (left <= right) {
        let a = left + Math.floor((right - left) / 2)
        let num = a * a
        if (num > x) {
            right = a - 1
        } else if (num < x) {
            left = a + 1
        } else {
            return a
        }
    }
    return right
};
// @lc code=end

