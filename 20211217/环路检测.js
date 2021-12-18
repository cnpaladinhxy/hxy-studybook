/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    if (!head || !head.next) return null;
    let set = new Set();
    let node = head;
    while(!set.has(node.next)) {
        if(!node.next) return null;
        set.add(node);
        node = node.next;
    }
    return node.next
};
