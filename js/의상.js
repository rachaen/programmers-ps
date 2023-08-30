/*
1. map에 key를 종류로 놓고 value를 배열로 하여 추가한다
2. (아무 의상을 선택하지 않는 경우 + 해당 종류의 옷 개수)를 곱한다.
3. 모든 의상을 선택하지 않은 경우를 빼준다.
*/
function solution(clothes) {
    let answer = 1;
    let map = new Map();
    for(let c of clothes) {
        if(map.has(c[1])) {
            map.set(c[1], [...map.get(c[1]), c[0]]);
        } else {
            map.set(c[1], [c[0]]);
        }
    }
    for(let m of map) {
        answer *= m[1].length + 1;
    }
    answer--;
    return answer;
}
