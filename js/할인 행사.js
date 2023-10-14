function solution(want, number, discount) {
    let answer = 0;
    let wantLen = want.length;
    let products = Array.from({length: wantLen}, () => 0);  // 할인 품목 기록
    
    // 첫번째 날에 할인받을 수 있는 품목 개수를 확인한다.
    for(let i = 0; i < 10; i++) {
        let index = want.indexOf(discount[i]);
        if(index >= 0) {
            products[index]++;
        }
    }
    
    if(check(products)) answer++;
    
    // 각 일마다 할인받을 수 있는 품목을 확인한다. (슬라이딩 윈도우)
    for(let i = 1; i < discount.length; i++) {
        let index = want.indexOf(discount[i-1]);
        if(index >= 0) products[index]--;
        index = want.indexOf(discount[10 + i - 1]);
        if(index >= 0) products[index]++;
        if(check(products)) answer++;
    }
    
    return answer;
    
    function check(list) {
        for(let i = 0; i < wantLen; i++) {
            if(list[i] !== number[i]) return false;
        }
        return true;
    }
}
