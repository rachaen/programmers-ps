function solution(ingredient) {
    let answer = 0;
    const stack = [];
    
    for (let i of ingredient) {
        stack.push(i);
        
        const len = stack.length;
        if (len >= 4 && stack[len-4] === 1 && stack[len-3] === 2 && stack[len-2] === 3 && stack[len-1] === 1) {
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            answer++;
        }
    }
    
    return answer;
}
