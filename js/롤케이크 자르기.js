
function solution(topping) {
    const map = new Map();
    const brother = new Set();
    
    let answer = 0;
    
    for(let i = 0; i < topping.length; i++) {
        if(map.has(topping[i])) {
            map.set(topping[i], map.get(topping[i]) + 1)
        } else {
            map.set(topping[i], 1);
        }
    }
    
    for(let i = 0; i < topping.length; i++) {
        let count = map.get(topping[i]) - 1;
        brother.add(topping[i]);
        
        count === 0 ? map.delete(topping[i]) : map.set(topping[i], count);
        
        if(brother.size === map.size) answer++;
    }
    return answer;
}
