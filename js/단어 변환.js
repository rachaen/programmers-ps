function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    let answer = 0;
    let used = [];
    for(let i = 0; i < words.length; i++) {
        if(isOneDiff(begin, words[i])){
            used.push(words[i]);
            dfs(words[i]);
            used.pop();
        } 
    }
    
    function dfs(curWord) {
        if(curWord === target) {
            if(answer === 0 || answer > used.length) {
                answer = used.length;
            }
        }
        for(let i = 0; i < words.length; i++) {
            if(!used.includes(words[i]) && isOneDiff(curWord, words[i])){
                used.push(words[i]);
                dfs(words[i]);
                used.pop();
            }
        }
    }
    
    function isOneDiff(word1, word2) {
        let diffCnt = 0;
        for(let i = 0; i< word1.length; i++) {
            if(word1[i] !== word2[i]) diffCnt++;
            if(diffCnt > 1) return false;
        }
        return true;
    }
    
    
    return answer;
}
