/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function rotate(head, beforeHead, end) {
    let res = beforeHead.next;
    beforeHead.next = null;
    end.next = head;
    return res
}

var rotateRight = function(head, k) {
    if(k===0 || !head || !head.next) return head;
    const start = head;
    let num = 0;
    let beforeHead = head;
    while(head.next) {
        if(num>=k) beforeHead = beforeHead.next;
        num++;
        head = head.next;
    }
    if(num<=k) {
        k = k % (num+1);
        if(k===0) return start;
        else {
            for (let i=0;i<(num-k);i++) {
                beforeHead = beforeHead.next
            }
        }
    }
    res = rotate(start, beforeHead, head)
    return res
};