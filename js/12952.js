function solution(n) {
    let answer = 0;
    const dfs = (board, row) => {
        if(row === n) answer++;
        else {
            for(let i = 1; i <= n; i++) {
                board[row+1] = i;
                if(isValid(board, row+1)) dfs(board, row+1);
            }    
        }
    }
    
    const isValid = (board, row) => {
        for(let i = 1; i < row; i++) {
            // 같은 선 확인
            if(board[i] === board[row]) return false;
            // 대각선 확인
            if(Math.abs(i-row) === Math.abs(board[i] - board[row])) return false;
        }
        return true;
    }
    
    for(let i = 1; i <= n; i++) {
        const board = new Array(n+1).fill(0);
        board[1] = i;
        dfs(board, 1);
    }
    return answer;
}
