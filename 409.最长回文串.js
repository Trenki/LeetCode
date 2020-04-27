/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = new Map()
    let count = 0;
    let isAddOne = false;
    for(let i = 0,len =s.length; i< len;i++){
        let a = s[i]
        if(map.has(a)){
            let times = map.get(a)+1
            map.set(a,times)
        }else{
            map.set(a,1)
        }
    }
   map.forEach(function(value,key){
　　　　if(value%2 == 0){
        count +=value
        }else{
            if(isAddOne){
                count +=value -1
            }else{
                count +=value
                isAddOne = true
            }
        }
　　});
    return count
};
// @lc code=end

