function solution(array, commands) {
    let answer = [];
    commands.forEach((i) => {
        answer.push(array.slice(i[0] - 1, i[1]).sort((a, b) => a - b)[i[2]-1]);
    });
    return answer;
}
