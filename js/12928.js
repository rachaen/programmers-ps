// 약수의 합
function solution(n) {
  let answer = 0;
  let num = Math.floor(Math.sqrt(n));
  for (let i = 1; i <= num; i++) {
    if (n % i == 0) {
      if (i * i == n) {
        answer += i;
        return answer;
      }
      answer += i + n / i;
    }
  }
  return answer;
}
console.log(solution(12));
