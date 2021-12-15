/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
    let num = 0;
    let node = head;
    while (head) {
        if(num>=k) {
            node = node.next;
        }
        head = head.next;
        num++
    }
    return node;
};