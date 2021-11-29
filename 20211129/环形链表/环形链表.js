/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 
 // 68ms
var hasCycle = function(head) {
    let set = new Set();
    while(head) {
        if(set.has(head)) return true;
        set.add(head);
        head = head.next;
    }
    return false;
};


/*
// 80ms
var hasCycle = head => {
    let map = new Map();
    while(head) {
        if (map.has(head)) return true;
        map.set(head, true);
        head = head.next
    }
    return false
}
*/

/*
// 72ms
var hasCycle = head => {
    let map = new WeakMap();
    while(head) {
        if(map.has(head)) return true;
        map.set(head, true);
        head = head.next;
    }
    return false;
}
*/

/*
// 84ms
var hasCycle = head => {
    let arr = [];
    while(head) {
        if (arr.find(item=>item===head)) return true;
        arr.push(head)
        head = head.next;
    }
    return false;
}
*/