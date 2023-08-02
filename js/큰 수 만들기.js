function solution(number, k) {
    let stack = [];
    for(num of number) {
        // 마지막 값과 비교해서 num보다 작은 값이고 아직 제거해야 할 숫자가 남아있으면 pop하기.
        while(stack.length > 0 && stack[stack.length - 1] < num && k > 0) {
            k--;
            stack.pop();
        }
        stack.push(num);
    }
    
    return stack.slice(0, number.length - k).join("");
}
