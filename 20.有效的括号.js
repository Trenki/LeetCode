/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    let Stack = []
    for (var ch of s) {
        if (ch in map) {
            Stack.push(ch)
        } else {
            if (map[Stack.pop()] != ch) {
                return false
            }
        }
    }
    return !Stack.length

};
// @lc code=end

