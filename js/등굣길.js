function solution(m, n, puddles) {
    const dp = Array.from({length: n+1}, () => Array(m+1).fill(0));
    
    dp[1][1] = 1;
    
    for (const [x, y] of puddles) {
        dp[y][x] = -1;
    }
    
    for(let r = 1; r <= n; r++) {
        for(let c = 1; c <= m; c++) {   // 집
            if(r === 1 && c === 1) {
                continue;
            }
            else if(dp[r][c] === -1) {  // 웅덩이
                dp[r][c] = 0;
                continue;
            } else {
                dp[r][c] = (dp[r-1][c] + dp[r][c-1]) % 1000000007;
            }
        }
    }
    return dp[n][m];
}
