// h-index: 피인용수와 논문수보다 작아지기 직전의 값
function solution(citations) {
    let answer = 0;
    citations.sort((a, b) => b - a);
    for(let i = 0; i < citations.length; i++) {
        if (citations[i] >= (i + 1)) answer = i + 1;
    }
    return answer;
}

// function solution(citations) {
//     let i = 0;
//     while(i + 1 <= citations.sort((a, b) => b - a)[i]) i++;
// }
