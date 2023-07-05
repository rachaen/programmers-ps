function solution(survey, choices) {
    let result = new Map([['R', 0], ['T', 0], ['C', 0], ['F', 0], ['J', 0], ['M', 0], ['A', 0], ['N', 0]]);
    
    survey.forEach((i, n) => {
        const num = choices[n] - 4;
        if(num !== 0) {
            if(num < 0) {    // 비동의
                result.set(i[0], result.get(i[0]) + Math.abs(num)); 
            } else {
                result.set(i[1], result.get(i[1]) + num);
            }
        } 
    });
    
    const first = result.get('R') >= result.get('T') ? 'R' : 'T';
    const second = result.get('C') >= result.get('F') ? 'C' : 'F';
    const third = result.get('J') >= result.get('M') ? 'J' : 'M';
    const fourth = result.get('A') >= result.get('N') ? 'A' : 'N';
    
    return first + second + third + fourth;
}
