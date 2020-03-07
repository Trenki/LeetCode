/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    if(path.length == 0){
        return "/"
    }
    let arr = path.split("/")
    let Stack = []
    for (let i = 0;i<arr.length;i++) {
        if (!arr[i] || arr[i] == '.') {
            continue
        } else if (arr[i] == '..') {
            Stack.pop()
        } else {
            Stack.push(arr[i])
        }
    }
    return "/" + Stack.join("/")
};
// @lc code=end


