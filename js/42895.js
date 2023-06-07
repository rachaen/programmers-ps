function solution(N, number) {
    if(N === number){
        return 1;
    }
    
    let answer = -1;
    
    // N의 개수별 만들 수 있는 수를 저장하는 set
    const setList = new Array();
    setList[1] = new Set([N]);
      
    // N의 개수를 1씩 증가하며 N의 개수별 만들 수 있는 수의 리스트를 Set에 저장한다
    for(let i = 2; i < 9; i++) {
        makeNumList(i);
        if(setList[i].has(number)){
            answer = i;
            break;
        }
    }
    
    function makeNumList(count) {
        setList[count] = new Set();
        
        setList[count].add(Number(N.toString().repeat(count)));
        
        for(let i = 1; i < count; i++) {
            for(let leftValue of setList[i]) {
                for(let rightValue of setList[count-i]) {
                    setList[count].add(leftValue + rightValue);
                    setList[count].add(leftValue - rightValue);
                    setList[count].add(leftValue * rightValue);
                    if(rightValue !== 0) {
                        setList[count].add(Math.floor(leftValue / rightValue));
                    }
                }
            }
        }
        
    }
    return answer;
    
}
