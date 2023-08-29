/*
1. 이분 탐색 초기 최대값을 설정하기 위해 심사 시간을 오름차순으로 정렬
2. 이분 탐색 시작
3. mid 시간 동안 심사할 수 있는 최대 인원수 계산
4. max가 n이상이면 모든 사람을 심사할 수 있음. answer 변경 및 최대값을 mid - 1로 설정
5. 모든 사람을 심사할 수 없음. 최소값 mid + 1로 설정
*/
function solution(n, times) {
    let answer = -1;
    times.sort((a, b) => a - b);
    let lt = 0;
    let rt = times[times.length - 1] * n;
    
    while(lt <= rt) {
        let max = 0;
        let mid = Math.floor((lt + rt) / 2);
        
        for(const time of times) {
            max += Math.floor(mid / time);
        }
        
        if(max >= n) {
            answer = mid;
            rt = mid - 1
        } else lt = mid + 1;    
        
    }
    
    return answer;
}
