package level1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class P220106_1 {
	public  int[] solution(int N, int[] stages) {
        int[] answer = new int[N];
        double[][] nums = new double[N+1][2];	//[[스테이지 도달했지만 클리어x][스테이지 도달]]
        
        int roof = 0;
        
        for(int i = 0; i < stages.length; i++) {
        	roof = stages[i];
        	nums[stages[i] - 1][0] += 1;	// 스테이지 도달했지만 클리어x
        	for (int j = 0; j < roof; j++) {	// 스테이지 도달한 사람
        		nums[j][1] += 1;
        	}
        }
        
        // 확률 구하기 key = 레벨, value = 확률
        Map<Integer, Double> ratio = new HashMap<Integer,Double>();
        
        for(int i = 0; i < answer.length; i++) {
        	if(nums[i][1] == 0) {
        		ratio.put(i+1, (double) 0);
        	} else {
        		ratio.put(i+1, (nums[i][0]/nums[i][1]));
        	}
        }
        
        // 정렬하기
        List<Integer> keySetList = new ArrayList<>(ratio.keySet());
        Collections.sort(keySetList, (o1, o2) -> (ratio.get(o2).compareTo(ratio.get(o1))));
        for(int i = 0; i < keySetList.size(); i++) {
        	answer[i] = keySetList.get(i);
        }
        return answer;
    }
}
