/**
각 단계에서 얻을 수 있는 최대값을 저장한다.
    기존 저장된 값에 더한 값과 처음부터 시작하는 값 중 최대값을 고른다.
*/
function solution(sequence) {
    let answer = 0;
    let pSeq = [];  // 1부터
    let nSeq = [];  // -1부터
    
    for(let i = 0; i < sequence.length; i++) {
        if(i === 0) {
            pSeq.push(sequence[i]);
            nSeq.push(-sequence[i]);
        } else if (i % 2 === 1) {
            pSeq.push(Math.max(pSeq[i - 1] - sequence[i], -sequence[i]));
            nSeq.push(Math.max(nSeq[i - 1] + sequence[i], sequence[i]));
        } else {
            pSeq.push(Math.max(pSeq[i - 1] + sequence[i], sequence[i]));
            nSeq.push(Math.max(nSeq[i - 1] - sequence[i], -sequence[i]));
        }
        
        answer = Math.max(answer, pSeq[i], nSeq[i]);
    }
    
    return answer;
}
