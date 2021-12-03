/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

 function insert(preV, target1, target2) {
    let res;
    preV ? (preV.next = target2) : (res = target2);
    target2.next = target1 || null;
    return res;
}

var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    if(!list2) return list1;
    let start = list1;
    let preV = null;
    let new1;
    let nextV;
    let new2;
    let flag;
    while(list1) {
        new1 = list1;
        nextV = list1.next;
        if(list2) {
            new2 = list2.next;
            if(new1.val>=list2.val) {
                // 把list2插入new1之前，preV之后
                flag = insert(preV, new1, list2);
                flag && (start = flag);
                preV = list2;
                list2 = new2;
            } else {
                preV = new1;    
                list1 = nextV;
            }
             
        } else {
            return start
        }
    }
    if(list2){
        new1.next =list2
    }
    return start;
};