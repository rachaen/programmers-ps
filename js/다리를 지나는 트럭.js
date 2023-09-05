/*
    1. 현재 다리의 상태를 나타낼 bridge 배열과 현재 다리 위에 올라간 트럭의 하중을 나타낼 sum을 생성한다.
    2. 다리 위에 트럭이 올라가 있는 동안 반복한다
        2.1. 1초를 증가시칸다.
        2.2. 다리 맨 앞의 요소를 삭제하고 그 요소 만큼 sum에서 뺀다.
        2.3. 현재 다리의 하중에 다음 트럭의 무게를 더했을 때 다리가 견딜 수 있는 무게보다 작거나 같으면 트럭을 다리에 추가하고 sum에 더한다.
        2.4. 그렇지 않으면 트럭이 올라갈 수 없는 상태이기 때문에 bridge에 0을 push한다.
*/
function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let bridge = Array.from({length: bridge_length}, () => 0);
    let sum = 0;
    
    answer++;
    bridge.shift();
    sum += truck_weights[0];
    bridge.push(truck_weights.shift());
    
    while(sum > 0) {
        answer++;
        sum -= bridge.shift();
        if(truck_weights.length > 0 && sum + truck_weights[0] <= weight) {
            sum += truck_weights[0];
            bridge.push(truck_weights.shift());
        } else {
            bridge.push(0);
        }
    }
    return answer;
}
