package AJDGS.src.level1;

public class P220217_2 {
    public long solution(int a, int b) {
        long answer = 0;

        if(a > b) {
            int temp = a;
            a = b;
            b = temp;
        } else if (a == b) {
            return a;
        }

        for(int i = a; i <= b; i++) {
            answer += i;
        }

        return answer;
    }
}
