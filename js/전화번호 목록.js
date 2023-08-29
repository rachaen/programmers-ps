/*
1. 모든 전화번호를 map에 추가
2. 각 전화번호에 대해 접두어 확인
    2.1 현재 전화번호를 잘라서 접두어 생성
    2.2 만약 해당 접두어가 map에 존재한다면 false 반환
3. 모든 전화번호의 접두어가 중복되지 않으면 true 반환
*/
function solution(phone_book) {
    let answer = true;
    let map = new Map();
    
    for(const phone of phone_book) {
        map[phone] = true;
    }
    
    for(const phone of phone_book) {
        for(let i = 1; i < phone.length; i++) {
            const prefix = phone.slice(0, i);
            if(map[prefix]) return false;
        }
    }
    
    return answer;
}
