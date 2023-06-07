function solution(numbers, target) {
    let answer = 0;
    
    dfs(0, 0);
    
    
    function dfs(count, result) {
        if(numbers.length === count) {
            if(result === target) answer++;
            return;
        }
        
        dfs(count + 1, result + numbers[count]);
        dfs(count + 1, result - numbers[count]);
    }
    
    return answer;
}
