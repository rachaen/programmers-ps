/*
    1. 무방향 그래프를 그린다.
    2. wires를 순회하여 각 간선을 하나씩 끊어으면서 두 트리의 노드 수 차이를 계산한다.
*/

function solution(n, wires) {
    let graph = Array.from(Array(n + 1), () => []);
    let answer = 100;
    
    for(let [a, b] of wires) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    wires.forEach(wire => {
        let [a, b] = wire;
        answer = Math.min(Math.abs(search(a, b) - search(b, a)), answer);
    })
    
    return answer;
    
    function search(root, exception) {
        let count = 0;
        let visited = Array.from({length: n + 1}, () => false);
        visited[root] = true;
        let queue = [root];
        
        while(queue.length) {
            let cur = queue.shift();
            visited[cur] = true;
            count++
            graph[cur].forEach(v => {
                if(!visited[v] && v !== exception) {
                    queue.push(v);
                }
            });
        }
        return count;
    }
}
