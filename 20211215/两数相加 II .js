/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */



 function recursion() {
    let arr1 = [];
    let arr2 = [];
    let node = null
    function recur() {
        let tmp = 0;
        let len1 = arr1.length-1;
        let len2 = arr2.length-1;
        while(len1>=0 && len2>=0) {
            let sum = arr1[len1] + arr2[len2] + tmp;
            if(sum>9) {
                tmp = 1;
                node = new ListNode(sum-10, node)
            } else {
                tmp = 0;
                node = new ListNode(sum, node)
            }
            len1--;
            len2--;
        }
        while(len1>=0 && tmp===1) {
            let sum = arr1[len1] + 1;
            if(sum > 9) {
                tmp=1
                node = new ListNode(sum-10, node)
                len1--
            } else {
                tmp=0
                node = new ListNode(sum, node);
                len1--
            }
            if(len1<0 && tmp===1) {
                node = new ListNode(1, node)
                tmp = 0
            }
        }
        while(len2>=0 && tmp===1) {
            let sum = arr2[len2] + 1;
            if(sum > 9) {
                tmp=1
                node = new ListNode(sum-10, node)
                len2--
            } else {
                tmp=0
                node = new ListNode(sum, node);
                len2--
            }
            if(len2<0 && tmp===1) {
                node = new ListNode(1, node)
                tmp = 0
            }
        }
        if(len1>=0) {
            return [node, 1, len1]
        } else if (len2>=0) {
            return [node, 2, len2]
        } else {
            if(tmp===1) node = new ListNode(1, node)
            return [node, 0]
        } 
    }
    function fn(l1, l2) {
        if(!l1 && !l2) return recur()

        if(l1) {
            arr1.push(l1.val)
            l1 = l1.next;
        };
        if(l2) {
            arr2.push(l2.val)
            l2 = l2.next
        }; 
        return fn(l1, l2)
    }
    return fn
}


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var fn = recursion();
    const [node, chosen, val] = fn(l1, l2);
    let i = null;
    let res = null;
    if(chosen===0) {
        return node
    }
    else if(chosen===1) {
        i = l1;
        res = l1;
    } else {
        i = l2;
        res = l2;
    }
    for(let j=0;j<val;j++) {
        i = i.next;
    }
    i.next = node;
    return res;
};