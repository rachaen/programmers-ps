function solution(people, limit) {
    let answer = 0;
    people.sort((a,b) => b - a);    // 내림차순 정렬
    let left = 0;
    let right = people.length - 1;
    while(left < right) {
        let sum = people[left] + people[right]; // 가장 큰 수와 가장 작은 수를 더한다
        if(sum > limit) {   // 큰 수만 배에 태움
            left++;
        } else {    // 큰 수와 작은 수 배에 태움
            left++;
            right--;
        }
        answer++;
    }
    if(left == right) answer++; // 중간에 마지막 수가 남아있다면 더해주기
    return answer;
}
