package level1;

import java.util.HashSet;
import java.util.Set;

public class P211230_1 {
	 public int solution(int[] nums) {
		int answer = 0;
		int choice_num = nums.length/2;
		HashSet<Integer> set = new HashSet<>();
		for(int num : nums) {
				 set.add(num);
		}
			 
		if(choice_num > set.size()) {
			return set.size();
		} else {
			return choice_num;
		}
	}
}
