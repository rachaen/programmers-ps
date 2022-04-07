package AJDGS.src.level1;

public class P220331_2 {
    public String solution(int num) {
        String answer = (num % 2 ==1 || num%2 == -1) ? "Odd" : "Even";
        return answer;
    }
}
