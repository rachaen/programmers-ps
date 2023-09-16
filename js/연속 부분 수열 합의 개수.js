// 슬라이딩 윈도우
// 최초 한 번의 창문에 대해서만 직접 합을 구하기
 // 이후 창문들에 대해서는 이전에 구한 합을 활용하기
const solution = (elements) => {
    const sumSet = new Set();
    
    const len = elements.length;
    for (let i=1; i<=len; i++) {
        let sum = 0;
        for (let j=0; j<len; j++) { 
            if (j === 0) { 
                for (let k=0; k<i; k++) {
                    sum += elements[k];
                }
            }
            else {
                sum -= elements[j-1];
                sum += elements[(j+i-1) % len];
            }
            sumSet.add(sum);
        }
    }
    
    return sumSet.size;
}
