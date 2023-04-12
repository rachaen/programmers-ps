function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  A.forEach((a, i) => {
    answer += a * B[i];
  });
  return answer;
}
console.log(solution([1, 2], [3, 4]));
