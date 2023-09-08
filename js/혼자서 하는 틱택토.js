function solution(board) {
    let answer = 1;
    
    let oCount = 0;
    let xCount = 0;
    
    for(let r = 0; r < 3; r++) {
        for(let c = 0; c < 3; c++) {
            if(board[r][c] === 'O') oCount++;
            else if(board[r][c] === 'X') xCount++;
        }
    }
    
//     O와 X의 개수 차이가 0과 1이 아니면 실수
    if (![0,1].includes(oCount-xCount)) return 0;
    
    
    let oScore = 0;
    let xScore = 0;
//     가로와 세로 확인
    for(let i = 0; i < 3; i++) {
        if(board[i] === 'XXX') xScore++;
        else if(board[i] === 'OOO') oScore++;
        
        let col = board[0][i] + board[1][i] + board[2][i];
        if(col === 'XXX') xScore++;
        else if(col === 'OOO') oScore++;
    }
//     대각선 확인
    let diagonal = board[0][0] + board[1][1] + board[2][2];
    if(diagonal === 'XXX') xScore++;
    else if(diagonal === 'OOO') oScore++;
    
    diagonal = board[0][2] + board[1][1] + board[2][0];
    if(diagonal === 'XXX') xScore++;
    else if(diagonal === 'OOO') oScore++;
    
    console.log(xScore, oScore, xCount, oCount);
    
//     동시에 점수를 따는 경우 실수
    if(0 < xScore && 0 < oScore) return 0;
//     x가 이겼는데 o의 개수와 x의 개수가 다른 경우
    if(0 < xScore && xCount !== oCount) return 0;
//     o가 이겼는데 x의 개수 + 1과 o의 개수가 다른 경우
    if(0 < oScore && xCount + 1 !== oCount) return 0
    
    return answer;
}
