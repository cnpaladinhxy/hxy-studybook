/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

 function copyNode(head) {
    var newNode = null;
    var map = new Map();
    function copy(node) {
        if(node) {
            if(node.next) {
                node = node.next
                newNode = new Node(node.val, copy(node))      
            } 
              
            map.set(node, newNode) 
        }
        return newNode
    }
    newNode =  new Node(head.val, copy(head))
    map.set(head, newNode)
    var res = newNode;
    while(newNode) {
        newNode.random = map.get(head.random);
        newNode = newNode.next;
        head = head.next;
    }
    return res;
}


var copyRandomList = function(head) {
    if(!head) return head;
    var start = copyNode(head)
    return start
};