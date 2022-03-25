package AJDGS.src.level1;

public class P220324_1 {
    public int[] solution(long n) {
        String str = "" + n;
        int[] answer = new int[str.length()];
        int i = 0;
        while(n > 0) {
            answer[i] = (int)(n % 10);
            n = n/10;
            i++;
        }
        return answer;
    }
}
