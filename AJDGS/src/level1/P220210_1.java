package AJDGS.src.level1;

public class P220210_1 {
    public long solution(int price, int money, int count) {
        long sum = 0;
        for(int i = count; i > 0; i--) {
            sum += price * i;
        }
        long answer = money < sum ? sum-money : 0;
        return answer;
    }
}
