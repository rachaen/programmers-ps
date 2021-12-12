package level1;

public class P211216_1 {
    public int solution(int[] nums) {
        int answer = 0;
        int sum = 0;
        for(int i = 0; i < nums.length-2; i++){
            for(int j = i + 1; j < nums.length - 1; j++){
                for(int k = j + 1; k < nums.length; k++){
                    sum = nums[i] + nums[j] + nums[k];
                    if(sum % 2 != 0) 
                    	answer += prime(sum);
                }
            }
        }
        return answer;
    }
    
    public int prime(int sum){
        boolean isPrime = true;
        
        for(int i = 2; i <= Math.sqrt(sum); i++) {
    		if(sum % i == 0) {
    			isPrime = false;
    			break;
    		} 
    	}
        
        if(isPrime) 
        	return 1;
        else
        	return 0;
    }
    
}
