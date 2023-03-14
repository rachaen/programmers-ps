// 약수의 합
function solution(n) {
  let answer = 0;
  let num = Math.floor(Math.sqrt(n));
  while (num > 0) {
    if (n % num == 0) {
      if (num == n) {
        answer += num;
        return answer;
      } else answer += num + n / num;
    }
    num--;
    return answer;
  }
}
console.log(solution(1));
