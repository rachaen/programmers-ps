package AJDGS.src.level1;

import java.util.Arrays;

public class P220324_2 {
    public long solution(long n) {
        String str = n + "";
        int[] arr = new int[str.length()];
        long answer = 0;

        // 배열에 넣어주기
        int i = 0;
        while(n > 0) {
            arr[i] = (int)(n % 10);
            n = n/10;
            i++;
        }

        // 오름차순 정렬
        Arrays.sort(arr);

        // 정수 리턴
        for(int j = 0; j < arr.length ; j++) {
            answer += (long)(arr[j] * (Math.pow(10, j)));
        }
        return answer;
    }
}
