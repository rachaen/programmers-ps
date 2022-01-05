package level1;

public class P220106_2 {
	public static void main(String[] args) {
		System.out.println(solution(1,2));
	}
    public static int solution(int left, int right) {
        int answer = 0;
        int num;
        for(int i = left; i <= right; i++) {
        	if(i == 1) {
        		num = 1;
        	} else {        		
        		num = 2; // 약수의 개수는 1을 제외하고 기본 적으로 2개 이기 때문에
        	}
        	
        	for(int j = 2; j <= (int) Math.sqrt(i); j++) {
        		if(i % j == 0) {        			
        			if(j*j == i)
        				num += 1;
        			else 
        				num += 2;
        		}
            	
            }
        	if(num % 2 == 0) {
        		answer += i;
        	} else {
        		answer -= i;
        	}
        	
        }
        return answer;
    }
}
