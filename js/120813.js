function solution(n) {
  let array = new Array(Math.round(n / 2)).fill().map((element, index) => index * 2 + 1);
  console.log(array);
}
console.log(solution(15));
