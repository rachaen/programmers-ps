package AJDGS.src.level1;

public class P220407_2 {
    public double solution(int[] arr) {
        double answer = 0;
        double sum = 0;
        for(int i = 0; i < arr.length; i++)
            sum += arr[i];
        answer = sum/arr.length;

        return answer;
    }
}
