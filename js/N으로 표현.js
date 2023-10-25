function solution(N, number) {
    if(N === number) return 1;
    
    let setList = Array.from({length: 9}, () => new Set());
    
    setList[1].add(N);
    
    for(let i = 2; i < 9; i++) {
        makeList(i);
        if(setList[i].has(number)) return i;
    }
    
    return -1;
    
    // 가능한 숫자 조합을 Set에 추가하는 함수
    function makeList(num) {
        setList[num].add(Number(N.toString().repeat(num)));
        
        for(let i = 1; i < num; i++) {
            for(let left of setList[i]) {
                for(let right of setList[num - i]) {
                    setList[num].add(left + right);
                    setList[num].add(left - right);
                    setList[num].add(left * right);
                    if(right !== 0) setList[num].add(Math.floor(left / right));
                }
            }
        }
    }
}
