package AJDGS.src.level1;

public class P220127_2 {
    public int solution(int n) {
        int answer = n-1;
        for(int i = 2; i <= Math.sqrt(n-1); i++) {
            if((n-1)%i ==0){
                answer = i;
                break;
            }
        }
        return answer;
    }
}
