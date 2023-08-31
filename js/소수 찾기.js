/*
    1. used(Map 객체)를 이용해 이미 검사한 소수를 저장한다.
    2. DFS를 이용하여 모든 숫자의 부분 순열을 생성한다.
    3. 생성된 숫자가 소수이고, 아직 사용되지 않았다면  answer를 증가시킨다.
    4. 검사한 숫자는 used에 저장하여 다음에 빠르게 접근한다.
*/

function solution(numbers) {
    let answer = 0;
    let len = numbers.length;
    let check = Array.from({length: len}, () => 0);
    let used = new Map();
    let numList = [...numbers];
    
    function DFS(L, num) {
        if(L > len) {
            return;
        } else {
            if(!used.has(Number(num))&& isPrime(Number(num))) {
                answer++;
            }
            used.set(Number(num), true);
            
            for(let i = 0; i < len; i++) {
                if(check[i] === 1) continue;
                else {
                    check[i] = 1;
                    DFS(L+1, num + numList[i]);
                    check[i] = 0;
                }
            }
        }
    }
    
    function isPrime(n) {
        if(n === 0 || n === 1) return false;
        for(let i = 2; i <= Math.sqrt(n); i++) {
            if(n % i === 0) return false;
        }
        return true;
    }
    DFS(0, '');
    return answer;
}
