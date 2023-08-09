// n을 높이면서 첫 번째 숫자에 곱한 값을 나머지 다른 값에 나눠 최소공배수를 찾는다.
function solution(arr) {
    let answer;
    
    let n = 1; flag = false;
    
    arr.sort((a, b) => a - b);
    
    while(!flag){
        n++;
        for(let i = 1; i < arr.length; i++) {
            if((arr[0] * n) % arr[i] === 0) {
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
    }
    
    answer = arr[0] * n;
    return answer;
}
