function solution(number) {
    let answer = 0;
    let comArr = combination(number, 3);
    
    comArr.forEach((i) => {
        const sum = i.reduce((acc, cur, idx) => { return acc += cur; }, 0);
        if(sum === 0) answer++;
    })
    return answer;
    
    function combination(arr, selectNum) {
        const result = [];
        if(selectNum === 1) return arr.map((value) => [value]);
        
        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1);
            const combinations = combination(rest, selectNum - 1);
            const attached = combinations.map((combination) => [fixed, ...combination]);
            result.push(...attached);
        });
        
        return result;
    }
}
