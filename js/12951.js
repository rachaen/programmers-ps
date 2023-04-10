function solution(s) {
  let answer = s
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
  return answer;
}

console.log(solution('people  asdsad'));
