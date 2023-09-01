/*
    1. 정수 배열 numbers를 문자열 배열로 변환한다.
    2. 변환된 문자열 배열을 정렬한다. 'b + a'와 'a + b'를 수치로 변환하여 비교한다.
    3. 정렬된 배열을 하나의 문자열로 합친다.
    4. 만약 최종 문자열이 '0'으로 시작한다면 모든 수가 0이므로 결과값은 '0'이 된다.
*/
function solution(numbers) {
    let answer = '';
    
    answer = numbers.map(num => String(num)).sort((a, b) => (b + a) - (a + b)).join('');

    if(answer[0] === '0') answer = '0';
    return answer;
}
