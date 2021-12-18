/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
    if(val === head.val) return head.next;
    let start = head;
    while(head.next && head.next.val!==val) {
        head = head.next;
    }
    head.next = head.next.next; 
    return start;
};