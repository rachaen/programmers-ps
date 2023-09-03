/*
    1. 큐에 들어가 있는 각 프로세스의 우선순위와 목표 프로세서인지 여부를 저장
    2. 반복문을 돌면서 
        2.1. 더 높은 우선순위가 있는지 확인
        2.2. 더 높은 우선순위가 있으면 current를 뒤로 보내고 
        2.3. 아니면 현재 프로세스가 실행되고 answer++, 목표 프로세스인 경우 루프를 종료
*/
function solution(priorities, location) {
    let answer = 0;
    let queue = priorities.map((priority, idx) => ({
        priority: priority,
        isTarget: idx === location,
    }));
    
    while(queue.length) {
        const current = queue.shift();
        const hasHigher = queue.some(e => e.priority > current.priority);
        
        if(hasHigher) queue.push(current);
        else {
            answer++;
            if(current.isTarget) break;
        }
    }
    return answer;
}
