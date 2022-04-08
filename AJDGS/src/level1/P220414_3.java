package AJDGS.src.level1;

public class P220414_3 {
    public long[] solution(long x, int n) {
        long[] answer = new long[n];
        for(int i = 0; i < n; i++)
            answer[i] = x * (i+1);

        return answer;
    }
}
