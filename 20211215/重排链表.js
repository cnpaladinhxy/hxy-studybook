/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    if(!head.next || !head.next.next) return head;
    let arr = []
    while(head) {
        arr.push(head);
        head = head.next;
    }
    let len = arr.length;
    let mid = len >> 1;
    let i = 0;
    while(i<mid) {
        let tmp = arr[i].next
        arr[i].next = arr[len-i-1];
        arr[len-1-i].next = tmp
        i++;
    }
    arr[mid].next = null
};