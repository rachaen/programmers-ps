// 위아래로 얼마나 움직여야하는지
function getMoveCount(char) {
    return Math.min(char.charCodeAt() - 65, 90 + 1 - char.charCodeAt());
}

 // A가 연속적으로 있는 부분 찾기
function getContinuousACount(name, startIndex) {
    let AIndex = startIndex;
    while(AIndex < name.length && name[AIndex] === 'A') {
        AIndex++;
    }
    return AIndex;
}

function solution(name) {
    let RLMove = name.length - 1;
    let answer = 0;

    [...name].forEach((c, i) => {
        answer += getMoveCount(c);

        const continuousACount = getContinuousACount(name, i + 1);

        const move1 = i * 2 + name.length - continuousACount; // 위치로 왔다가 다시 가는거 -> <- <-
        const move2 = 2 * (name.length - continuousACount) + i;   // 뒤에서 부터 입력하고 오는 거 <- -> ->

        RLMove = Math.min(RLMove, move1, move2);
    });

    return RLMove + answer;
}
