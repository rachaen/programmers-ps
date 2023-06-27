function solution(a, b, n) {
    let answer = 0;
    
    while(n >= a) {
        bottle = n % a;
        n = Math.floor(n / a) * b;
        answer += n;
        n += bottle;
    }
    return answer;
}
