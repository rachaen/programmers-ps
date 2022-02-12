package AJDGS.src.level1;

import java.util.ArrayList;

public class P220217_1 {
    public int[] solution(int []arr) {
        ArrayList<Integer> arr_list = new ArrayList<Integer>();
        arr_list.add(arr[0]);
        for(int i = 1; i < arr.length; i++) {
            if(arr_list.get(arr_list.size()-1).intValue()==arr[i])
                continue;
            else
                arr_list.add(arr[i]);
        }
        int[] answer = arr_list.stream().mapToInt(i -> i).toArray();
        return answer;
    }
}
