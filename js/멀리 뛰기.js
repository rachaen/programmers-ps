// 시간 초과 
function solution(n) {
    let answer = 0;
    
    dfs(1); // one step
    dfs(2); // two step
    return answer % 1234567;
    
    function dfs(count) {
        if(n === count) {
            answer++;
            return;
        } else if(n < count) {
            return;
        }
        
        dfs(count + 1);
        dfs(count + 2);
    }
}

// dp
function solution(n) {
    let dp = new Array(n+1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567
    }
    return dp[n];
}
