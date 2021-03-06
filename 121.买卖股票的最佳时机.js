/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length == 0){
        return 0
    }
    let min =prices[0];
    let max = 0;
    for(let i =0;i<prices.length; i++){
        min = Math.min(prices[i],min)
        max = Math.max(prices[i]  -min,max)
    }
    return max
};
// @lc code=end

