function solution(n) {
    let answer = 1; // 자기 자신
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        let num = i;
        let sum = 0;
        while(sum < n) sum += num++;
        if(sum === n) answer++;
    }
    return answer;
}

// function solution(n) {
//     let answer = 0;
//     for(let i = 0; i <= n; i++) {
//         if(n % i === 0 && i % 2 === 1) answer++;    // 약수이고 홀수
//     }
//     return answer;
// }
