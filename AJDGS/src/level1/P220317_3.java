package AJDGS.src.level1;

public class P220317_3 {
    public int solution(int n) {
        String s = String.valueOf(n);
        int answer = 0;

        for(int i = 0; i < s.length(); i++) {
            answer += Integer.valueOf(s.substring(i, i+1));
        }
        return answer;
    }
}
