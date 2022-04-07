package AJDGS.src.level1;

public class P220407_1 {
    public int solution(long n) {
        int answer = 0;
        while(answer <= 500) {
            if(n == 1)
                return answer;
            else if(n % 2 == 0)
                n /= 2;
            else
                n = n*3 + 1;
            answer += 1;
        }
        if(answer > 500)
            answer = -1;
        return answer;
    }
}
