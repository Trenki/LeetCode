/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1;
    let right = n;
    while(left < right){
        let mid = left + parseInt((right-left)/2);
        if(guess(mid) === 1){
            left = mid + 1;
        }
        else if (guess(mid) === -1){
            right = mid ;
        }
        else{
            return mid;
        }
    }
    return left;
};
// @lc code=end

