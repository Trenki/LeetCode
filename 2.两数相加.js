/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res;
    let current;
    let pre = 0 
    while(l1||l2){
        let val = 0
        if(l1){
            val +=l1.val
            l1 = l1.next
        }
        if(l2){
            val +=l2.val
            l2 = l2.next
        }
        val = val + pre
        let a = new ListNode(val%10)
        if(res){
            current.next = a
            current = current.next
        }else{
            res = a
            current = res
        }
        val>9?pre =1:pre = 0

    }
    if(pre){
        let a = new ListNode(pre)
        current.next = a
    }
    return res
};
// @lc code=end

