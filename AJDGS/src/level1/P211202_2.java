package level1;

public class P211202_2 {
	public String solution(int[] numbers, String hand) {
        String answer = "";
        int left = 10;
        int right = 12;
        for(int i = 0; i < numbers.length; i++) {
        	int num = numbers[i];
        	if (num == 1 || num == 4 || num == 7) {
 
                answer += "L";
                left = num;
            } else if (num == 3 || num == 6 || num == 9) {

                answer += "R";
                right = num;
            } else {

                int leftF = cal(left, num);
                int rightF = cal(right, num);
                
                if (leftF > rightF) {

                    answer += "R";
                    right = num;
                } else if (leftF < rightF) {

                    answer += "L";
                    left = num;
                } else {
                    if (hand.equals("right")) {
                        answer += "R";
                        right = num;
                    } else {
                        answer += "L";
                        left = num;
                    }
                }
                
            }
        }
        
        return answer;
    }
	
	public int cal(int hand_location, int num) {
		if(hand_location == 0) {
			hand_location = 11;
		}
		
		if(num == 0) {
			num = 11;
		}
		
		int locationX = (hand_location -1) / 3;
		int locationY = (hand_location -1) % 3;
		
		int numX = (num - 1)/3;
		int numY = (num - 1)%3;
		
		int result = Math.abs(locationX - numX) + Math.abs(locationY - numY);
		
		return result;
	}
}
