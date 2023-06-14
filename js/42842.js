function solution(brown, yellow) {
    for(let r = 3; r < 5000; r++) {
        for (let c = 3; c <= r; c++) {
            if((2 * (r + c) - 4 === brown) && ((r - 2) * (c - 2) === yellow)) {
               return [r, c]; 
            }
        }
    }
}
