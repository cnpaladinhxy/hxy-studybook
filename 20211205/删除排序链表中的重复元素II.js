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

 function deleteNextNode(node) {
    if(!node || !node.next){
        return
    }
    if(node.next.val===undefined){
        node.next = node.next.next
        deleteNextNode(node)
    }  
    
}

var deleteDuplicates = function(head) {
    if(!head || !head.next) return head
    const start = head;
    let preV = {}
    let currentVal = NaN
    preV.next = start;
    let newV;
    while(head.next) {
        newV = head;
        head = head.next;
        newV.val !== undefined && (currentVal = newV.val)
        if(currentVal===head.val) {
            newV.val = undefined;
            head.val = undefined;
        }
    }
    head = preV;
    while(head) {
        deleteNextNode(head)
        head = head.next;
    }
    return preV.next ? preV.next : null
};