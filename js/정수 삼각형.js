// 위에서 아래로 만드는 방법 / 효율성 테스트 6  (8.38ms, 43.5MB)
function solution(triangle) {
    let level = triangle.length;
    let dp = Array.from({length: level}, () => []);
    dp[0].push(triangle[0][0]);
    for(let r = 1; r < level; r++) {
        for(let c = 0; c < triangle[r].length; c++) {
            if(c === 0) dp[r][c] = dp[r - 1][c] + triangle[r][c];
            else if(c === triangle[r].length - 1) dp[r][c] = dp[r - 1][c - 1] + triangle[r][c];
            else dp[r][c] = Math.max(dp[r - 1][c], dp[r - 1][c - 1]) + triangle[r][c];
        }
    }
    
    return Math.max(...dp.pop());
}

// 아래서 위로 만드는 방법 / 효율성 테스트 6  (4.47ms, 42MB)
function solution(triangle) {
    let dp = triangle.slice();
    for(let i = dp.length - 2; i >= 0; i--) {
        for(let j = 0; j < dp[i].length; j++) {
            dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
        }
    }
    
    return dp[0][0];
}
