// 效率最差的一次。
function CircularNode(val, next, pre, obj) {
    var _next = null;
    var _pre = null;
    // this.num = obj.num;
    Object.defineProperty(this, 'num', {
        get() {
            return obj.num
        },
        set(v) {
            obj.num = v;
            return true;
        }
    })
    Object.defineProperty(this, 'val', {
        get() {
            return val === undefined ? null : val;
        }, 
        set(v) {
            if(val===v) return false;
            if(v === null) {
                this.num--;
            } else{
                if(val === null) {
                    this.num++;
                }
            }
            val = v;
            return true;
        }
    })
    Object.defineProperty(this, 'next', {
        get() {
            if(CircularNode.target) {
                _next = CircularNode.target;
                CircularNode.target = null;
            }
            return _next || null;
        },
        set(v) {
            if(v && v.hasOwnProperty('pre')) {
                CircularNode.target = this;
                v.pre;
            }
            if(_next !== v){
                _next = v || null;
                return true;
            } else {
                return false;
            }
        }
    })
    Object.defineProperty(this, 'pre', {
        get() {
            if(CircularNode.target) {
                _pre = CircularNode.target;
                CircularNode.target = null;
            }
            return _pre || null;
        },
        set(v) {
            if(v && v.hasOwnProperty('next')) {
                CircularNode.target = this;
                v.next;
            }
            if(_pre !== v){
                _pre = v || null;
                return true;
            } else {
                return false;
            }
        }
    })
    this.next = next;
    this.pre = pre;
}

/**
 * @param {number} k
 */
 var MyCircularDeque = function(k) {
    this.num = 0;
    this.length = k;
    var head = new CircularNode(null, null, null, this);     // 头部
        var node = head;
        for(var i=1; i<k ;i++) {
            node = new CircularNode(null, null, node, this)
        }
    node.next = head
    this.tail = node // 尾巴
    
}


// 移动首尾
MyCircularDeque.prototype.moveHT = function(direction=true) {   // true-> ahead ; false->back
    direction ? this.tail = this.tail.next
    : this.tail = this.tail.pre;
}

/*前提：this.num !== this.length 换言之队列中必然存在空值
// 从node开始往dir的方向查找，直到遇到空值
    然后将空值前的值全部往dir方向推动，返回node应该有的最新值
*/
function push(node, dir) {
    if(node[dir].val!==null) {
        push(node[dir], dir)
    }    
    node[dir].val = node.val;
    return null;
}

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.num === this.length) return false
    var head = this.tail.next;
    if(head.val===null) {
        head.val = value;
    } else {
        push(head, 'next')
        head.val = value;
    }
    return true;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.num === this.length) return false
    var tail = this.tail;
    if(tail.val===null) {
        tail.val = value;
    } else {
        push(tail, 'pre')
        tail.val = value;
    }
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.num === 0) return false
    var head = this.tail.next;
    while(head.val === null) {
        head = head.next;
    }
    head.val = null;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.num === 0) return false
    var tail = this.tail;
    while(tail.val === null) {
        tail = tail.pre;
    }
    tail.val = null;
    return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(this.num === 0) return -1;
    var node = this.tail.next;
    while(node.val===null) {
        node = node.next;
    }
    return node.val
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.num === 0) return -1;
    var node = this.tail;
    while(node.val===null) {
        node = node.pre;
    }
    return node.val
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    if(this.num===0) return true;
    else return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    if(this.num === this.length) return true;
    else return false;
};
