function solution(today, terms, privacies) {
    let answer = [];
    
    let todayArr = today.split(".");
    let todayYear = Number(todayArr[0]);
    let todayMonth = Number(todayArr[1]);
    let todayDay = Number(todayArr[2]);
    
    let termMap = new Map();
    
    terms.forEach((i, n) => {
        const term = i.split(" ");
        termMap.set(term[0], Number(term[1]));
    });

    privacies.forEach((i, n) => {
        const privacy = i.split(" ");
        const privacyDate = privacy[0];
        const privacyCategory = privacy[1];
        
        const dateArr = privacyDate.split(".");
        let year = Number(dateArr[0]);
        let month = Number(dateArr[1]);
        const day = Number(dateArr[2]);
        
        let plusMonth = month + termMap.get(privacyCategory);
        
        while (plusMonth > 12) {
            year += 1;
            plusMonth -= 12;
        }
        month = plusMonth;
        
        if (
            year < todayYear || 
            (year === todayYear && month < todayMonth) ||
            (year === todayYear && month === todayMonth && day <= todayDay)
        ) {
            answer.push(n+1);
        }
    });
    
    return answer;
}

