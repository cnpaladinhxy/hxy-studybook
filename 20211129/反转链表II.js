/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    if(!head || !head.next) return head;
    if(left===right) return head;
    let res = head;
    let start;
    let index = 1;
    let preV;
    let newV;
    let leftV;
    while(head){
        newV = head;
        head = head.next;
        if(index===right) {
            leftV.next = newV.next || null;
           if(leftV !== start) start.next = newV || null;
           else {
               res = newV
           }
        }
        if( right>=index && index>=left) {
            if(!leftV) {
                leftV = newV;
                start = preV || newV;
            } else {
                newV.next = preV || null;
            } 
        } 
        
        preV = newV
        index++
    }
    return res
};