package AJDGS.src.level1;

import java.util.ArrayList;
import java.util.Collections;

public class P220120_1 {
    public int[] solution(int[] numbers) {
        int[] answer = {};
        ArrayList<Integer> list = new ArrayList<>();
        for(int i = 0 ; i < numbers.length - 1; i++) {
            for(int j = i; j < numbers.length; j++) {
                int sum = numbers[i] + numbers[j];
                if(!list.contains(sum))
                    list.add(sum);
            }
        }

        Collections.sort(list);
        answer = list.stream().mapToInt(i->i).toArray();
        return answer;
    }
}
