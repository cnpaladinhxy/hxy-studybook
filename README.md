# hxy-studybook
## 题解

### 2021-12-31
215.数组中的第K个最大元素
> 题目：
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

>题解：这里取巧自己没有实现排序，而是借用了Array.sort做排序。
```js
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    var findKthLargest = function(nums, k) {
        nums.sort((a, b) => b - a)
        return nums[k-1]
    };
```


355.设计推特
[掘金](https://juejin.cn/post/7047866641115250719/)

面试题 17.20. 连续中值
295. 数据流的中位数
此二题题目完全一样，就采用同一套代码解决。
[掘金](https://juejin.cn/post/7047874611362398238/)

104.二叉树的最大深度
[掘金](https://juejin.cn/post/7049150659924328456/)

# todos:


## 20211227未完成题目:


>[692. 前K个高频单词](https://leetcode-cn.com/problems/top-k-frequent-words/)
给一非空的单词列表，返回前 k 个出现次数最多的单词。
返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。

>5. [查找和最小的K对数字](https://leetcode-cn.com/problems/find-k-pairs-with-smallest-sums)


## 20211231未完成题目:
[1801. 积压订单中的订单总数](https://leetcode-cn.com/problems/number-of-orders-in-the-backlog/)

[264. 丑数 II](https://leetcode-cn.com/problems/ugly-number-ii/)

[313. 超级丑数](https://leetcode-cn.com/problems/super-ugly-number/)

[1753. 移除石子的最大得分](https://leetcode-cn.com/problems/maximum-score-from-removing-stones/)



