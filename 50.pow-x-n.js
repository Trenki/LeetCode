/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n == 0 ){
        return 1
    }
    let res = 1
    if(n < 0){
        x = 1/x
        n = -n
    }
    while(true){
        if(n % 2 ==1){
            res = x*res
        }
        if(n == 1){
            return res
        }
        x =x*x
        n = parseInt(n/2)
    }
};
// @lc code=end

