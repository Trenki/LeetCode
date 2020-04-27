/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
backtrack = (list, temp, nums) => {
    const numsLength = nums.length
    if (temp.length == numsLength) {
        return list.push([...temp])
    }
    for (let i = 0; i < numsLength; i++) {
        if (temp.includes( nums[i])) continue;
        temp.push( nums[i])
        backtrack(list, temp, nums)
        temp.pop()
    }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const list = []
    backtrack(list, [], nums)
    return list
};
// @lc code=end

