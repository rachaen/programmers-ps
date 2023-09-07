function solution(s) {
    let answer = 0;
    
    // 문자열을 회전시키며 해당 문자열을 검증한다.
    for (let i = 0; i < s.length; i++) {
        if (isValid(s)) {
            answer++;
        }
        s = s.slice(1) + s[0];
    }
    
    // 올바른 괄호인지 검증하는 함수
    function isValid(s) {
        const stack = [];
        const brackets = { ')': '(', '}': '{', ']': '[' };

        for (const char of s) {
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char);
            } else if (char === ')' || char === '}' || char === ']') {
                if (stack.length === 0 || stack[stack.length - 1] !== brackets[char]) {
                    return false;
                }
                stack.pop();
            }
        }

        return stack.length === 0;
    }
    
    return answer;
}
