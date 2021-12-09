var Node = function(val, next) {
    this.val = val;
    this.next = next || null;
}

var FrontMiddleBackQueue = function() {
    this.num = 0;
    this.head = new Node(null)
};

function insert(node, val) {
    var next = node.next;
    node.next = new Node(val, next)
    return node
}

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    this.head = insert(this.head, val)
    this.num++
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    var middle = this.num >> 1;
    var node = this.head;
    while(middle>0) {
        middle--;
        node = node.next;
    }
    node = insert(node, val)
    this.num++
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    var node = this.head;
    while(node && node.next) {
        node = node.next
    }
    insert(node, val)
    this.num++;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
    if(this.num===0) return -1
    var node = this.head.next;
    this.head.next = this.head.next.next;
    this.num--;
    return node.val;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
    if(this.num===0) return -1;
    var middle = this.num >> 1;
    var node = this.head;
    if(this.num % 2===0) middle--;
    while(middle>0) {
        middle--;
        node = node.next;
    }
    var res = node.next;
    node.next  = node.next.next;
    this.num--;
    return res.val;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    if(this.num===0) return -1;
    var node = this.head;
    while(node.next.next) {
        node = node.next;
    }
    var res = node.next;
    node.next = null;
    this.num--;
    return res.val
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */