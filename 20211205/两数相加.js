/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


 var addTwoNumbers = function(l1, l2) {
    let newV = null;
    let res = null;
    let tmp = 0;
    let start;
    while(l1 && l2) {
        let cur = l1.val + l2.val + tmp;
        if(cur>9) {
            tmp = 1;
            res = new ListNode(cur-10)
        } else {
            tmp = 0;
            res = new ListNode(cur)
        }
        if(!newV) {
            start = res;
        } else {
            newV.next = res;
        }
        newV = res;
        l1 = l1.next;
        l2 = l2.next;
    }
    
    function handleTail(list) {
        if(list) {
            list.val += tmp;
            res.next = list;
            while(list && list.val>9) {
                list.val-=10;
                if(list.next) {
                    list.next.val += 1;
                } else {
                    list.next = new ListNode(1);
                    break;
                }
                list = list.next;
            }
        }
    }
    if(l1) {
        handleTail(l1)
    } else if(l2) {
        handleTail(l2)
    } else {
        res.next = tmp ? new ListNode(1) : null
    }

    return start;
};