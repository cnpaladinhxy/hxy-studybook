/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
        const start = head;
        let num = 0;
        let beforeHead = head;
        while(head.next) {
            if(num>=n) beforeHead = beforeHead.next;
            num++;
            head = head.next;
        }
        // let newV = 
        if(n===num+1) return start.next;
        beforeHead.next = beforeHead.next.next;
        return start
    };