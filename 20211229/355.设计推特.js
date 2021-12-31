class Date {
    static time = 0;
    static getTime() {
        return ++Date.time
    }
}

class User {
    constructor(id) {
        this.id = id
        this.tweets = []    // 用户自己的tweet
        this.follows = []   // 此用户关注的人
    }
    // 处理用户推文的API，全部都需要传入对象
    addTweet(tweet) {
        // 用户发布推文 param {tweet}: object Tweet
        this.tweets.push(tweet)
    }
    news() {
        const followTweets = this.follows.reduce((res, item) => res.concat(item.tweets), [])
        // 查询最新的用户自己的或用户关注人的推文10条
        const resArr = this.tweets.concat(followTweets)
        resArr.sort((a, b) => b.createdAt - a.createdAt)  // 从新到旧排序
        return resArr.slice(0, 10).map(tweet => tweet.id)
    }
    addFollow(user) {
        // 用户关注了一位用户 param {user}: object User
        if(this.follows.find(item => item===user)!==undefined) return 
        this.follows.push(user)
    }
    unFollow(user) {
        // 用户取消关注了一位用户 param {user}: object User
        // 把用户从follows中取消
        const index = this.follows.indexOf(user)
        if(index===-1) return
        this.follows.splice(index, 1)
    }
}

class Tweet {
    constructor(id, user) {
        this.id = id
        // this.createdAt = Date.getTime();
        this.user = user;
        this.createdAt = Date.getTime();
        // 把自己插入user的队列中
        user.addTweet(this)
    }

}

var Twitter = function() {
    this.tweets = [];
    this.users = [];
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    let user = this.users.find(user => user.id===userId);
    if(user===undefined) {
        user = new User(userId)
        this.users.push(user);
    }  
    // 创建新推文并传入user对象，tweet构造方法将把自己推入user.tweets中
    const tweet = new Tweet(tweetId, user)
    // 推入推文队列
    this.tweets.push(tweet)
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    // 找到用户
    const user = this.users.find(user => user.id===userId);
    if(user===undefined) return []
    // 返回新闻
    return user.news()
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    // 查找两个用户对象
    let follower = this.users.find(user => user.id===followerId)
    let followee = this.users.find(user => user.id===followeeId)
    // 如果它们不在用户队列里，把它们加入队列
    if(follower===undefined) {
        follower = new User(followerId)
        this.users.push(follower);
    }  
    if(followee===undefined) {
        followee = new User(followeeId)
        this.users.push(followee);
    }  
    follower.addFollow(followee)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    // 查找两个用户对象
    let follower = this.users.find(user => user.id===followerId)
    let followee = this.users.find(user => user.id===followeeId)
    // 如果它们不在用户队列里，把它们加入队列
    if(follower===undefined) {
        follower = new User(followerId)
        this.users.push(follower);
    }  
    if(followee===undefined) {
        followee = new User(followeeId)
        this.users.push(followee);
    }  
    follower.unFollow(followee)
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */