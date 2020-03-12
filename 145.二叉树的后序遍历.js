/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
    let result = []
    let cur = root;
    let Stack = []
    while (Stack.length > 0 || cur) {
        while (cur) {
            result.unshift(cur.val);
            Stack.push(cur);
            cur = cur.right;
        }
        let node = Stack.pop();
        cur = node.left;
    }
    return result
};
// @lc code=end

