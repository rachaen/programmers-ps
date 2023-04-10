function solution(s) {
  let removedZero = 0;
  let loopCnt = 0;
  while (s.length > 1) {
    s = s
      .split('')
      .map((v) => {
        if (v === '0') {
          removedZero++;
          return '';
        } else return v;
      })
      .join('');
    s = parseInt(s.length).toString(2);
    loopCnt++;
  }
  return [loopCnt, removedZero];
}

console.log(solution('1111111'));
