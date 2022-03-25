package AJDGS.src.level1;

public class P220324_3 {
    public long solution(long n) {
        long answer = 0;
        double s = Math.sqrt(n);
        if((long)s == s)
            answer = (long)(Math.pow(s+1,2));
        else
            answer = -1;

        return answer;
    }
}
