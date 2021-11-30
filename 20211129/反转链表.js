/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if(!head || !head.next) return head;
    let preV;
    let newV;
    while(head) {
        newV = head;
        head = head.next
        newV.next = preV || null;
        preV = newV;
    }
    return head || newV
};