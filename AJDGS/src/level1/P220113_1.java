package AJDGS.src.level1;

import java.util.Arrays;

public class P220113_1 {
    public int solution(int[] d, int budget) {
        int answer = 0; // 지원 가능 부서 수
        int sum = 0;    // 최종 지불액

        Arrays.sort(d); // 오름차순 정렬

        for(int i = 0; i < d.length; i++) {
            sum += d[i];
            if(sum > budget) break;
            answer++;
        }
        return answer;
    }
}
