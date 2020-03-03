/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if(N < 2){
        return N
    }
    let a = 0,b=1
    for (let i = 2; i<=N;i++){
        b=a+b;
        a=b-a; 
    }
    return b
};
// @lc code=end

