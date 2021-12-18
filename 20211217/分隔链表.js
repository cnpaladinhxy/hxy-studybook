/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 给你一个头结点为 head 的单链表和一个整数 k ，请你设计一个算法将链表分隔为 k 个连续的部分。

    每部分的长度应该尽可能的相等：任意两部分的长度差距不能超过 1 。这可能会导致有些部分为 null 。

    这 k 个部分应该按照在链表中出现的顺序排列，并且排在前面的部分的长度应该大于或等于排在后面的长度。

    返回一个由上述 k 部分组成的数组。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/split-linked-list-in-parts
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
 var splitListToParts = function (head, k) {
    let resArr = new Array(k).fill(null);
    if(!head) return resArr;
    let start = head;
    let len = 1  
    while(head.next) {
        head = head.next;
        len++
    }
    // let quotient = len / k;
    let quotient = Math.floor(len / k);
    let redundant = len % k;
    head = start;
    let prev = head;
    let crack = head;
    let num = 1;
    let curK = 0;
    for(let i=0;i<len;i++) {
        crack = head;
        head = head.next;
        if(num < quotient|| (len > k && curK < redundant && num!==quotient+1 )) {
            // 每个arr的属性中有Math.floor(quotient)个子节点;如果i没到第redundant个时还应该补一个
            // num==quotient时表示这里已经填入过一次redundant了
            num++;
        } else {
            // 这一节装满了 断开
            // resArr.push(prev);
            resArr[curK] = prev;
            crack.next = null;
            num = 1;
            prev = head;
            curK++;
        }
    }
    return resArr
};