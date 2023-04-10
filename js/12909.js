function solution(s) {
  let answer = true;
  let leftCnt = 0;
  let rightCnt = 0;
  [...s].forEach((element) => {
    if (element === '(') leftCnt++;
    else rightCnt++;
    if (leftCnt < rightCnt) answer = false;
  });
  if (leftCnt !== rightCnt) answer = false;
  return answer;
}

console.log(solution('()()'));
