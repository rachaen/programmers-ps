function solution(t, p) {
    let answer = 0;
    for(let i = 0; i < t.length - p.length + 1; i++) {
        let sliced = t.substr(i, p.length);
        if(Number(sliced) <= Number(p)){
        	answer++;
        }
    }
    return answer;
}
