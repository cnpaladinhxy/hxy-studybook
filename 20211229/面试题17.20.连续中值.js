/**
 * initialize your data structure here.
 */
 var MedianFinder = function() {
    this.nums = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    for(let i=0; i<this.nums.length;i++) {
        if(num<this.nums[i]){
            this.nums.splice(i, 0, num)
            return;
        }
    }
    this.nums.push(num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.nums.length % 2 === 0 ){
        // 偶数个
        return (this.nums[this.nums.length>>1] + this.nums[(this.nums.length>>1) - 1]) / 2
    } else {
        return this.nums[this.nums.length>>1]
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */