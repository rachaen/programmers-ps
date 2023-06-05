function getCount(n) {
    return[...n.toString(2)].reduce((acc, val) => acc + (val === '1' ? 1 : 0), 0)
}

function solution(n) {
    const targetCount = getCount(n);

    while (true) {
        n++;
        const bitCount = getCount(n);
        if (bitCount === targetCount) {
            return n;
        }
    }
}
