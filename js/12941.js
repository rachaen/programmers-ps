function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  answer = A.reduce((acc, cur, idx) => {
    return acc + A[idx] * B[idx];
  }, 0);
  return answer;
}
console.log(solution([1, 2], [3, 4]));
