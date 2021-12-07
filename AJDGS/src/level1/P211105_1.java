package	level1;

class P211105_1 {
	public int[] solution(int[] lottos, int[] win_nums) {
		int same_num = 0;
		int zero_num = 0;
		int max = 0;
		int min = 0;
		for (int i = 0 ; i < lottos.length ; i++) {
			if (lottos[i] == 0) {
				zero_num++;
				continue;
			}
			for (int j = 0 ; j < win_nums.length; j++) {
				if (win_nums[j] == lottos[i]) {
					same_num++;
					break;
				}
					
			}
		}
		
		max = Math.min(7-(same_num + zero_num),6);
		min = Math.min(7-(same_num),6);
		
		
		
		int[] answer = {max, min};
		return answer;
	}
	
	
 }


