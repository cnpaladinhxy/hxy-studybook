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
 var swapPairs = function(head) {
    if(!head || !head.next) return head;
    let preV;
    let newV;
    let res;
    while(head && head.next) {
        newV = head;
        head = head.next;
        newV.next = head.next;
        preV ? (preV.next = head) : res = head;
        preV = newV;
        newV = head;
        head = head.next;
        newV.next = preV;
    }
    return res;
};