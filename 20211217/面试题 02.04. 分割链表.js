/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

/*
1.找到第一个比x大的数字所在节点firstBigNode
2.扫描链表，将所有小于x的节点插入firstBigNode之前
 */

function insert(node, target, next) {
    if(node) {
        node.next = target;      
    } 
    target.next = next 
    return target
}

var partition = function(head, x) {
    if(!head) return head;
    var start = head;
    var preV = null;
    var newV;
    var firstBigNodePre;
    var res = start;
    while(head) {
        newV = head;
        head = head.next;
        if(newV.val>=x) {
            firstBigNodePre = preV;
            preV = newV;
            break;
        }
        preV = newV;
    }
    while(head) {
        newV = head;
        head = head.next
        if(newV.val<x) {
            if(firstBigNodePre===null) {
                res = newV
            }
            if(preV) {
                preV.next = newV.next
            }          
            firstBigNodePre = insert(firstBigNodePre, newV, firstBigNodePre ? firstBigNodePre.next : start)
        } else {
            preV = newV
        } 
    }
    return res;
};