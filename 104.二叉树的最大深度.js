/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root){
        return 0
    }
    let Stack = [{
        tree:root,
        num:1
    }]
    let depth = 1
    while(Stack.length > 0){
        let curOBj = Stack.pop()
        let cur = curOBj.tree
        let nowDepth = curOBj.num
        depth = Math.max(depth,nowDepth)
        if(cur){
            if(cur.left){
                Stack.push({tree:cur.left,num:nowDepth+1})
            }
            if(cur.right){
                Stack.push({tree:cur.right,num:nowDepth+1})
            }
        }
        
    }
    return depth
   
};
// @lc code=end

