function Node(val, next) {
    this.val = val;
    this.next = next || null;
}


/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.length = k;
    var node;
    var head;
    var preV;
    if(k === 1) {
        this.tail = new Node(null,null)
        this.tail.next = this.tail
        head = this.tail;
        node = this.tail
    } else {
            for(var i=1;i<k;i++) {
            node = new Node(null, null)
            if(!head) {
                head = new Node(null, node) 
            } else {
                preV.next = node;
            }
            preV = node
        }
        node.next = head;   // circle
    }
    this.cursor = head; // 初始化游标
    this.tail = node;
};

// 移动游标
MyCircularQueue.prototype.moveCursor = function() {
    this.cursor = this.cursor.next;
}

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.cursor.val === null) {
        this.cursor.val = value;
        return true;
    } else {
        if(this.cursor.next.val === null) {
            this.moveCursor()
            this.cursor.val = value;
            return true;
        }
        else {
            return false;
        }
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) return false;
    this.tail.next.val = null;
    this.tail = this.tail.next;
    if(this.cursor.next.val!==null) {
        this.moveCursor();
    }
    if(this.isEmpty()) {
        this.cursor = this.tail.next;
    }
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()) return -1;
    else return this.tail.next.val;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()) return -1
    return this.cursor.val;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    if(this.tail.next.val===null) {
        return true;
    } else {
        return false;
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    if(this.tail.val!==null) return true;
    else return false;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

const obj = new MyCircularQueue(1);
console.log(obj);

var param_1 = obj.enQueue(1)
var param_2 = obj.enQueue(2)
var param_3 = obj.deQueue()
var param_2 = obj.enQueue(2)
var param_4 = obj.Rear()
var param_5 = obj.Front()
console.log(param_1);
console.log(param_2);
console.log(param_3);
console.log(param_4);
console.log(param_5);
// var param_1 = obj.enQueue(1)
// var param_2 = obj.enQueue(2)
// var param_3 = obj.enQueue(3)
// var param_4 = obj.deQueue()
// var param_5 = obj.deQueue()
// var param_6 = obj.enQueue(3)
// var param_7 = obj.enQueue(5)
// var param_8 = obj.deQueue()
// var param_9 = obj.deQueue()
// var param_10 = obj.deQueue()
// var param_11 = obj.deQueue()


// for(let i=1;i<12;i++){
//     console.log(eval(`param_${i}`));
// }


