var Node = function(val, next) {
    this.val = val===undefined ? null : val;
    this.next = next === undefined ? null : next;
    
};

var MyLinkedList = function() {
    this.head = null
    this.hair = new Node(null, this.head)
   
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(!this.head) return -1
    let cursor = this.head
    for(let i=1;i<=index;i++) {
        cursor = cursor.next;
        if(!cursor) return -1;
    }
    return cursor.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.hair.next = new Node(val, this.head)
    this.head = this.hair.next;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(!this.head) return this.addAtHead(val)
    let node = this.hair;
    while(node.next) {
        node = node.next
    }
    node.next = new Node(val)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index<1) return this.addAtHead(val);
    let node = this.hair
    for(let i=0;i<index;i++) {
        if(!node.next) return;
        node = node.next;
    }
    node.next = new Node(val, node.next)
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index<0) return;
    if(index === 0) {
        this.head = this.head.next;
        this.hair.next = this.head;
        return
    }
    let node = this.hair;
    for(let i=0;i<index;i++) {
        node = node.next;
        if(!node.next) return;
    }
    node.next = node.next.next;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */