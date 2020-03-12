/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result  = []
    let cur = root;
    let Stack = []
    while(cur || Stack.length > 0){
        while(cur){
            result.push(cur.val)
            Stack.push(cur)
            cur = cur.left
        }
        cur = Stack.pop()
        cur = cur.right
    }
    return result
};
// @lc code=end

