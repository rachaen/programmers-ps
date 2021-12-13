package level1;

import java.util.HashMap;
import java.util.Map.Entry;

public class P211216_2 {
	public String solution(String[] participant, String[] completion) {
		String answer = "";
		HashMap<String,Integer> map = new HashMap<>();
		for(String p : participant) {
			map.put(p, map.getOrDefault(p, 0)+1);
		}
		
		for(String c : completion) {
			map.put(c,map.get(c)-1);
		}
		
		for(Entry<String,Integer> entry:map.entrySet()) {
			if(entry.getValue()!=0) {
				answer = entry.getKey();
			}
		}
		
		return answer;
	}
}
