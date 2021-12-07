package level1;

import java.util.Arrays;

public class P211209_1 {
	 public int solution(int[] numbers) {
	        int answer = -1;
	        int[] nums = new int[10];
	        for (int i = 0 ; i < 10; i++) {
	            nums[i] = i;
	        }
	        
	        for (int n : numbers) {
	            for(int i = 0; i < 10; i++) {
	                if(n==nums[i]) {
	                    nums[i] = 0;
	                    break;
	                }
	            }
	        }
	        
	        answer = Arrays.stream(nums).sum();
	        
	        return answer;
	    }
}
