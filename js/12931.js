// 평균구하기
function solution(n) {
  return String(n)
    .split('')
    .reduce((prev, curr) => prev + Number(curr), 0);
}
solution(123);
