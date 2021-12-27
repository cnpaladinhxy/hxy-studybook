/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    if(nums.length>0) nums.sort((a, b) => b - a)
    Object.defineProperty(this, 'nums', {
        get() {
            return nums;
        },
        set(v) {
            for(let i=0;i<nums.length;i++) {
                if(v>=nums[i]) {
                    nums.splice(i, 0, v)
                    return
                }
            }
            nums.push(v)
        }
    })
    this.k = k;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.nums = val;
    return this.nums[this.k-1]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */