/*
    이중 for문
    1. 첫번째 원소부터 마지막 원소까지 순회하며 자신의 index 이후의 원소들과 비교하여 time++
*/
function solution(prices) {
    const answer = [];
    const n = prices.length;
    
    for (let i = 0; i < n; i++) {
        let time = 0;
        
        for (let j = i + 1; j < n; j++) {
            time++;
            
            if (prices[i] > prices[j]) {
                break;
            }
        }
        
        answer.push(time);
    }
    
    return answer;
}
/*
    스택
    1. 스택에 아직 가격이 떨어지지 않은 시점의 인덱스를 저장한다.
    2. 새로운 가격이 들어올 때마다 스택의 top과 비교하여 가격이 떨어지면 pop하고 해당 시점까지 걸린 시간을 계산한다.
*/
function solution(prices) {
    let answer = [];
    const stack = [];
    
    for(let i = 0; i < prices.length; i++) {
        while(stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            const last = stack.pop();
            answer[last] = i - last;
        }
        
        stack.push(i);
    }
    
    while(stack.length > 0) {
        const last = stack.pop();
        answer[last] = prices.length - 1 - last;
    }
    
    return answer;
}
