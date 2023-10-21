function solution(n, works) {
    if(n >= works.reduce((acc, cur) => acc + cur)) return 0;
    let answer = 0;
    
    works.sort((a, b) => b - a);
    while(n > 0) {
        const max = works[0];
        
        for(let i = 0; i < works.length; i++) {
            if(works[i] >= max) {
                works[i]--;
                n--;
            } else break;
            
            if(n === 0) break;
        }
    }
    
    return works.reduce((acc, cur) => acc + cur**2, 0);
}
