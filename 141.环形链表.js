/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    while(head){
        if(head.val=='asdl'){
            return true
        }else{
            head.val = 'asdl'
        }
        head = head.next
    }
    return false
};
// @lc code=end

