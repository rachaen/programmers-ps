package AJDGS.src.level1;

import java.util.ArrayList;
import java.util.Collections;

public class P220217_3 {
    public int[] solution(int[] arr, int divisor) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        for(int num : arr) {
            if(num % divisor == 0)
                list.add(num);
        }
        Collections.sort(list);

        if(list.isEmpty()) {
            list.add(-1);
        }

        int[] answer = list.stream().mapToInt(i -> i).toArray();

        return answer;
    }
}
