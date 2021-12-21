/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n===0) return 0;
    else if(n === 1 || n === 2) return 1;
    else {
        let MOD = 1000000007
        let num = 2;
        let res = 2;
        let prev = 1;
        let newv = prev;
        while(num < n-1) {
            prev = res
            res += newv
            num++
            newv = prev;
            res = res % MOD
        }
        return res
        /**
         * fib(n-1) -> fib(n-2) + fib(n-3)
         * fib(n-2) -> fib(n-3) + fib(n-4)
         * 上面等于
         * fib(n)   ->
         * fib(n-2) * 2 + fib(n-3)      -> 
         * fib(n-3) * 3 + fib(n-4) *2   ->
         * fib(n-4) * 5 + fib(n-5) *3
         * fib(n-5) * 8 + fib(n-6) *5
         */
    }
};
