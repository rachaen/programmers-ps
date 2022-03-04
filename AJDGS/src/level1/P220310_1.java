package AJDGS.src.level1;

public class P220310_1 {
    public String solution(int n) {
        String answer = "";
        answer = "수박".repeat(n/2);
        if(n%2==1)
            answer +="수";
        return answer;
    }
}
