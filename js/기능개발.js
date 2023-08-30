/*
    1. 첫번째 값이 끝나는 날짜를 구한다.
    2. 해당 날짜가 지났을 때 프로그램 진행 진도를 구한다.
    3. 첫번째 순서부터 100%가 된 프로그램을 빼며 배포된 프로그램 개수(finishedNum)를 더한다.
    4. 100%가 아닌 숫자가 나왔을 경우 answer에 배포된 프로그램 개수를 추가한다.
*/
function solution(progresses, speeds) {
    let answer = [];
   
    while(progresses.length) {
        let days = Math.ceil(((100 - progresses[0]) / speeds[0]));
        for(let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i] * days;
        }
        
        let finishedNum = 0;
        while(progresses.length && progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            finishedNum++;
        }
        answer.push(finishedNum);
      
    }
    
    return answer;
}
