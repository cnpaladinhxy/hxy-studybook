/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

 function curry(preV ,head, k) {
    // 收集小组
    let num = 1;
    let start = head;
    return function curryFn() {
        if(num<k) {
            if(head.next==null) {
                // head.next = preV
                return {start, end:head}
            }
            num++;
            head = head.next;
            return curryFn()
        } else {
            return reverse(preV, start, head)
        }
    }
}

function reverse(preV, start, end) {
    // 处理单个小组，返回首尾
    let head = start;
    let newV;
    if(preV){   // preV指向end
        preV.next = end;
    }
    while(head!==end) {
        newV = head;
        head = head.next
        if(newV!==start) {
            newV.next = preV;
        }
        preV = newV;
    }
    start.next = end.next;
    end.next = preV
    return {start:end, end:start}
}

var reverseKGroup = function(head, k) {
    if(k === 1 || !head.next || !head) return head;
    let preV = null;
    let res;
    while(true) {
        const fn = curry(preV, head, k)
        let {start, end} = fn();    // 返回处理好的翻转小组，头部已与上一个连接,尾部已连接
        if(!res) {
            res = start
        }
        if(!end.next) {
            return res
        }
        preV = end;
        head = end.next;
    }
};




