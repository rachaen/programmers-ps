function solution(array) {
  let countList = new Array(1001).fill(0);
  let count = 0;
  let answer = -1;
  array.forEach((element) => {
    countList[element]++;
    if (countList[element] > count) {
      count = countList[element];
      answer = element;
    } else if (countList[element] == count) {
      answer = -1;
    }
  });
  return answer;
}

console.log(solution([0, 0, 1]));
